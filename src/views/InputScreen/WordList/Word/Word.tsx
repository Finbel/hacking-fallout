import { FC } from "react";
import "./Word.css";

type Props = {
  word: string;
  onClick: () => void;
};

const Word: FC<Props> = ({ word, onClick }) => {
  return (
    <button onClick={onClick} className="inputscreen__addedWord">
      {word}
    </button>
  );
};

export default Word;
