import { StyledClose } from "./styles";
import close from "../../assets/icons/close.svg";

interface IProps {
  onClick: () => void;
}

export const Close = ({ onClick }: IProps) => {
  return <StyledClose src={close} alt="close" onClick={onClick} />;
};
