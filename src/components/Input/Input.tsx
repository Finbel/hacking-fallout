import { FC, useRef, useState } from "react";
// import { allWords } from "../../constants/allWords";

type Props = {
  addWord: (word: string) => void;
};

const Input: FC<Props> = ({ addWord }) => {
  const [input, setInput] = useState("");
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label htmlFor="word">Enter a word:</label>
      <input
        style={{ zIndex: 0 }}
        ref={ref}
        onFocus={() => {
          console.log("focus");
          setInputIsFocused(true);
        }}
        onBlur={() => {
          console.log("blur");
          setTimeout(() => {
            setInputIsFocused(false);
          }, 0);
        }}
        type="text"
        // list="words"

        value={input.toUpperCase()}
        onChange={(e) => {
          console.log("does this trigger");
          setInput(e.target.value);
        }}
      />
      {/* <datalist id="words">
        {allWords.map((word) => (
          <option key={word} value={word}>
            {word}
          </option>
        ))}
      </datalist> */}
      <button
        style={
          !inputIsFocused
            ? {}
            : {
                zIndex: 10,
                position: "absolute",
                // centered
                top: 230,
                left: "50%",
                transform: "translateX(-50%)",
                width: 100,
                height: 50,
                fontSize: 30,
              }
        }
        onClick={() => {
          console.log(input);
          if (input.length) {
            addWord(input);
          }
          setInput("");
          setTimeout(() => {
            ref.current?.focus();
          }, 10);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
