import "./Word.css";
import { FC } from "react";

type Props = {
  word: string;
  expectedEliminations: number;
  removeWord: (word: string) => void;
};

const Word: FC<Props> = ({ word, expectedEliminations, removeWord }) => {
  return (
    <div className="word" style={{ width: "100%", display: "flex" }}>
      <div style={{ minWidth: 100 }}>
        <p>{word.toUpperCase()}</p>
      </div>
      <div style={{ flexGrow: 1 }}>
        <p>{expectedEliminations.toFixed(3)}</p>
      </div>
      <button style={{ marginLeft: "auto" }} onClick={() => removeWord(word)}>
        Remove
      </button>
    </div>
  );
};

export default Word;
