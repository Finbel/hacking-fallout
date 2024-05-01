import { FC, RefObject } from "react";
import "./Input.css";

type Props = {
  inputRef: RefObject<HTMLInputElement>;
  inputValue: string;
  setInputValue: (value: string) => void;
};

const Input: FC<Props> = ({ inputRef, inputValue, setInputValue }) => {
  return (
    <input
      ref={inputRef}
      className="inputscreen__input"
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value.toUpperCase())}
    />
  );
};

export default Input;
