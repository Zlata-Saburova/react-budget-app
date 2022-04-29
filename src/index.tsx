import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ExpensesContextProvider } from "./context/ExpensesContext/ExpensesContext";
// import { ExpensesContextProvider } from "./context/ExpensesContext/ExpensesContext";
import GlobalStyles from "./GlobalStyles";

const container = document.getElementById("root");
if (!container) {
  throw Error("error");
}
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ExpensesContextProvider>
      <GlobalStyles />
      <App />
    </ExpensesContextProvider>
  </React.StrictMode>
);
