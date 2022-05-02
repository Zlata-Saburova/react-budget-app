import { ChangeEvent } from "react";
import { SearchInputStyle } from "./styles";

interface IProps {
  findValue: string;
  handlerSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ findValue, handlerSearch }: IProps) => {
  return (
    <SearchInputStyle
      placeholder="Search..."
      value={findValue}
      onChange={handlerSearch}
    />
  );
};
