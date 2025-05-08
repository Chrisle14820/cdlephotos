import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: blue,
    secondary: {
      main: "#64b5f6",
    },
  },
});

export default theme;
