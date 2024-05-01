import { FC, useState } from "react";
import "./GameScreen.css";
import WordList from "./WordList/WordList";
import { getExpectedEliminations } from "../../utils/getExpectedEliminations";
import Suggestion from "./Suggestion/Suggestion";
import { getLikeness } from "../../utils/getLikeness";

type Props = { words: string[]; endGame: () => void };

const GameScreen: FC<Props> = ({ words, endGame }) => {
  const [eliminated, setEliminated] = useState<string[]>([]);

  const wordsLeft = words.filter((word) => !eliminated.includes(word));
  const expectedEliminations = getExpectedEliminations(wordsLeft);
  const suggested = wordsLeft.sort((a, b) => {
    return expectedEliminations[b] - expectedEliminations[a];
  })[0];

  if (wordsLeft.length === 0) {
    endGame();
  }

  return (
    <div className="gamescreen">
      <WordList words={words} suggested={suggested} eliminated={eliminated} />
      <Suggestion
        suggested={suggested}
        words={wordsLeft}
        onSuggest={(likeness: number) => {
          const newEliminated = wordsLeft.filter((word) => {
            return getLikeness(suggested, word) !== likeness;
          });
          setEliminated([...eliminated, ...newEliminated]);
        }}
      />
    </div>
  );
};

export default GameScreen;
