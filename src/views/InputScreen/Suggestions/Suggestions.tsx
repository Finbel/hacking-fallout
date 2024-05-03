import { FC, useEffect } from "react";
import { allWords } from "../../../constants/allWords";
import Suggestion from "./Suggestion/Suggestion";

type Props = {
  inputValue: string;
  words: string[];
  addWord: (word: string) => void;
};

const Suggestions: FC<Props> = ({ words, inputValue, addWord }) => {
  const suggestions = allWords
    .filter((word) => {
      const startsWith = word.startsWith(inputValue);
      const equalSize = !words.length || words[0].length === word.length;
      return startsWith && equalSize;
    })
    .sort((a, b) => a.length - b.length);

  useEffect(() => {
    if (suggestions.length === 1) {
      addWord(suggestions[0]);
    }
  }, [addWord, suggestions]);

  return (
    <div>
      {!!inputValue.length &&
        suggestions
          .slice(0, 5)
          .map((word) => (
            <Suggestion key={word} word={word} onClick={() => addWord(word)} />
          ))}
    </div>
  );
};

export default Suggestions;
