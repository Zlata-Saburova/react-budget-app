import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { FormButton } from "../FormButton/FormButton";
import { StyledForm } from "./styles";
import { v4 as uuidv4 } from "uuid";

type FormValues = {
  name: string;
  cost: string;
};

export const Form = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { expenses, setExpenses } = useExpensesContext();

  const onSubmit: SubmitHandler<FormValues> = (buy) => {
    setExpenses([
      ...expenses,
      { id: uuidv4(), name: buy.name, cost: +buy.cost },
    ]);

    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        placeholder="enter name..."
        {...register("name", { required: true, maxLength: 15 })}
      />
      <StyledInput
        placeholder="enter cost ..."
        {...register("cost", {
          required: true,
          maxLength: 5,
          pattern: { value: /^[0-9]+$/, message: "Please enter a number" },
        })}
      />
      <FormButton>Done</FormButton>
    </StyledForm>
  );
};

const StyledInput = styled.input`
  width: 100%;
  padding: 16px 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgb(0, 0, 0);

  background: rgb(255, 255, 255);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #999999;
  }
`;
