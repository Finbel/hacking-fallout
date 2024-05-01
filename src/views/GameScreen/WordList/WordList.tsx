import { FC } from "react";
import "./WordList.css";
import Word from "./Word/Word";
type Props = {
  words: string[];
  eliminated: string[];
  suggested: string;
};

const WordList: FC<Props> = ({ words, eliminated, suggested }) => {
  return (
    <div className="gamescreen__wordlist">
      {words.map((word) => {
        const isEliminated = eliminated.includes(word);
        const isSuggested = suggested === word;
        return (
          <Word
            key={word}
            word={word}
            isEliminated={isEliminated}
            isSuggested={isSuggested}
          />
        );
      })}
    </div>
  );
};

export default WordList;
