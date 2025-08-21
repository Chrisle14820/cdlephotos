// import type { ReactNode } from "react";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex flex-col bg-background rounded-md">
      <Header />
      {/* <main className="flex-1">{children}</main> */}
    </div>
  );
}
