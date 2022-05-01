import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
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
    <BudgetContextProvider>
      <ExpensesContextProvider>
        <CurrencyContextProvider>
          <GlobalStyles />
          <App />
        </CurrencyContextProvider>
      </ExpensesContextProvider>
    </BudgetContextProvider>
  </React.StrictMode>
);
