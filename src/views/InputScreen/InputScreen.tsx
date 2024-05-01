import { FC, useEffect, useRef, useState } from "react";
import "./InputScreen.css";
import Input from "./Input/Input";
import Suggestions from "./Suggestions/Suggestions";
import StartGameButton from "./StartGameButton/StartGameButton";
import WordList from "./WordList/WordList";

type Props = {
  startGame: ({ words }: { words: string[] }) => void;
};

const InputScreen: FC<Props> = ({ startGame }) => {
  const [words, setWords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [words]);

  return (
    <div className="inputscreen">
      <WordList
        words={words}
        removeWord={(word) => setWords(words.filter((w) => w !== word))}
      />
      <Input
        inputRef={inputRef}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div style={{ display: "flex", marginTop: 38 }}>
        <div style={{ width: "50vw" }}>
          <Suggestions
            words={words}
            inputValue={inputValue}
            addWord={(word) => {
              setWords([...words, word]);
              setInputValue("");
            }}
          />
        </div>
        <div style={{ width: "50vw" }}>
          <StartGameButton
            startGame={() => {
              startGame({ words });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InputScreen;
