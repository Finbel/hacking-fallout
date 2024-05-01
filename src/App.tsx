import { useState } from "react";
import "./App.css";
import StartScreen from "./views/StartScreen/StartScreen";
import InputScreen from "./views/InputScreen/InputScreen";
import GameScreen from "./views/GameScreen/GameScreen";

function App() {
  const [currentState, setCurrentState] = useState<"start" | "input" | "game">(
    "start"
  );
  const [words, setWords] = useState<string[]>([]);

  switch (currentState) {
    case "start":
      return <StartScreen startHacking={() => setCurrentState("input")} />;
    case "input":
      return (
        <InputScreen
          startGame={({ words }) => {
            setWords(words);
            setCurrentState("game");
          }}
        />
      );
    case "game":
      return (
        <GameScreen words={words} endGame={() => setCurrentState("start")} />
      );
  }
}

export default App;
