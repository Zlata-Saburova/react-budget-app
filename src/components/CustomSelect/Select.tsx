import { useState } from "react";
import Select from "react-select";
import { Currency } from "../../config/Currency";
import { useCurrencyContex } from "../../context/CurrencyContext/CurrencyContext";
// import { IOption } from "../../types/types";

const options = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

export const CustomSelect = () => {
  const { setCurrency } = useCurrencyContex();

  const [curr, setValue] = useState();

  const handleSelect = (value: any) => {
    setValue(value);
    setCurrency(value.value);

    console.log(value);
  };

  return (
    <Select
      options={options}
      isMulti={false}
      defaultValue={options[0]}
      value={curr}
      onChange={handleSelect}
    />
  );
};
