#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readline = require('readline');

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

// Set up readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Configuration
const COMPONENTS_DIR = path.join(process.cwd(), 'src', 'components');
const DEFAULT_STYLE_EXTENSION = 'css'; // or 'scss'

async function main() {
  try {
    // Get component name from command line argument
    let componentName = process.argv[2];
    
    if (!componentName) {
      componentName = await askQuestion('Enter component name: ');
    }

    // Validate component name
    if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
      throw new Error('Component name must be PascalCase and start with a capital letter');
    }

    // Ask about style file
    const withStyles = await askQuestion('Add style file? (y/n): ') === 'y';
    const styleExtension = withStyles 
      ? await askQuestion('Style extension (css/scss): ', DEFAULT_STYLE_EXTENSION) 
      : null;

    // Ask about test file
    const withTest = await askQuestion('Add test file? (y/n): ') === 'y';

    // Create the component
    await createComponent(componentName, {
      withStyles,
      styleExtension,
      withTest
    });

    console.log(`✅ Successfully created ${componentName} component!`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

function askQuestion(question, defaultValue = '') {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim() || defaultValue);
    });
  });
}

async function createComponent(name, options) {
  const componentDir = path.join(COMPONENTS_DIR, name);
  
  // Create component directory
  await mkdir(componentDir, { recursive: true });

  // Create component files
  const files = [
    {
      path: path.join(componentDir, `${name}.jsx`),
      content: generateComponentContent(name, options)
    }
  ];

  // Add style file if requested
  if (options.withStyles && options.styleExtension) {
    files.push({
      path: path.join(componentDir, `${name}.${options.styleExtension}`),
      content: `/* ${name} component styles */\n.${name.toLowerCase()} {\n  /* styles here */\n}`
    });
  }

  // Add test file if requested
  if (options.withTest) {
    files.push({
      path: path.join(componentDir, `${name}.test.jsx`),
      content: generateTestContent(name)
    });
  }

  // Write all files
  await Promise.all(files.map(file => writeFile(file.path, file.content)));
}

function generateComponentContent(name, options) {
  const hasStyles = options.withStyles && options.styleExtension;
  const styleImport = hasStyles 
    ? `import './${name}.${options.styleExtension}';\n`
    : '';

  return `
function ${name}() {
  return (
    <>
      <p>${name} component works!</p>
    </>
  )
}

export default ${name};
`;
}

function generateTestContent(name) {
  return `import React from 'react';
import { render, screen } from '@testing-library/react';
import ${name} from './${name}';

describe('${name}', () => {
  it('renders correctly', () => {
    render(<${name} />);
    expect(screen.getByText('${name} component content')).toBeInTheDocument();
  });
});
`;
}

// Run the script
main();