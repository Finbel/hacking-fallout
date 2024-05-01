import { FC } from "react";
import "./Word.css";

type Props = {
  word: string;
  isEliminated: boolean;
  isSuggested: boolean;
};

const Word: FC<Props> = ({ word, isEliminated, isSuggested }) => {
  const className = `gamescreen__word ${isEliminated ? "eliminated" : ""} ${
    isSuggested ? "suggested" : ""
  }`;
  return <p className={className}>{word}</p>;
};

export default Word;
