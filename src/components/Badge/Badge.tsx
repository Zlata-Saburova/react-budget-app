import { useCurrencyContex } from "../../context/CurrencyContext/CurrencyContext";
import { StyledBadge } from "./styles";

interface IProps {
  cost: number;
}

export const Badge = ({ cost }: IProps) => {
  const { currency } = useCurrencyContex();
  return <StyledBadge>{`${currency}${cost}`}</StyledBadge>;
};
