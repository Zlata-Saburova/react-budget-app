import { ChangeEvent, useEffect, useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContex } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Card } from "../Card/Card";
import { CardInput } from "../CardInput/CardInput";
import { EditButton } from "../EditButton/EditButton";
import { SaveButton } from "../SaveButton/SaveButton";

export const CardContainer = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEditButton = () => {
    setIsEdit(!isEdit);
  };

  const [inputValue, setInputValue] = useState<number>(0);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(+e.target.value);
  };

  const { budget, setBudget } = useBudgetContext();

  const handleSaveButton = () => {
    setIsEdit(!isEdit);
    setBudget(inputValue);
  };

  const { expenses } = useExpensesContext();

  const [spent, setSpent] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);

  const [overspent, setOverspent] = useState<number>(0);

  useEffect(() => {
    const sum = expenses.reduce((acc, buy) => acc + buy.cost, 0);
    setSpent(sum);
    setRemaining(budget - sum);

    if (sum > budget) {
      setOverspent(sum - budget);
    }
  }, [budget, expenses]);

  const [type, setType] = useState<string>("remaining");

  useEffect(() => {
    if (spent > budget) {
      setType("overspending");
    } else {
      setType("remaining");
    }
  }, [spent, budget]);

  const { currency } = useCurrencyContex();

  return (
    <>
      <Card isEdit type="budget">
        {isEdit ? (
          <CardInput handleInput={handleInput} />
        ) : (
          `Budget: ${currency}${budget}`
        )}
        {isEdit ? (
          <SaveButton handleSaveButton={handleSaveButton}>Save</SaveButton>
        ) : (
          <EditButton handleEditButton={handleEditButton}>Edit</EditButton>
        )}
      </Card>
      <Card type={type}>
        {type === "remaining"
          ? `Remaining: ${currency}${remaining}`
          : `Overspending by ${currency}${overspent}`}
      </Card>
      <Card type="spent">
        Spent so far: {currency}
        {spent}
      </Card>
    </>
  );
};
