import React from "react";
import App from "./App";
import { AuthProvider } from "./provider/AuthProvider";
import { ThemeProvider } from "./provider/ThemeProvider";
function Wrapper() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default Wrapper;
