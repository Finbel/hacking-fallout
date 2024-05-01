import { FC } from "react";
import "./WordList.css";
import Word from "./Word/Word";
type Props = {
  words: string[];
  removeWord: (word: string) => void;
};

const WordList: FC<Props> = ({ words, removeWord }) => {
  return (
    <div className="gamescreen__wordlist">
      {words.map((word) => (
        <Word key={word} word={word} onClick={() => removeWord(word)} />
      ))}
    </div>
  );
};

export default WordList;
