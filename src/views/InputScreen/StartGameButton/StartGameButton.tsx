import { FC } from "react";
import "./StartGameButton.css";

type Props = {
  startGame: () => void;
};

const StartGameButton: FC<Props> = ({ startGame }) => {
  return (
    <button className="inputscreen__startGameButton" onClick={startGame}>
      START GAME
    </button>
  );
};

export default StartGameButton;
