import { useState } from "react";
import Select from "react-select";
import { Currency } from "../../config/Currency";
import { useCurrencyContex } from "../../context/CurrencyContext/CurrencyContext";

interface IOption {
  value: Currency;
  label: keyof typeof Currency;
}

const options: IOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

export const CustomSelect = () => {
  const { setCurrency } = useCurrencyContex();

  const [selectCurrency, setselectCurrency] = useState<IOption>();

  const handleSelect = (option: IOption | null) => {
    if (option) {
      setselectCurrency(option);
      setCurrency(option.value);
    }
  };

  return (
    <Select
      options={options}
      isMulti={false}
      defaultValue={options[0]}
      value={selectCurrency}
      onChange={handleSelect}
    />
  );
};
