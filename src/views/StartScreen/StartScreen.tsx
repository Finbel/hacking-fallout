import { FC } from "react";
import "./StartScreen.css";

type Props = {
  startHacking: () => void;
};

const StartScreen: FC<Props> = ({ startHacking }) => {
  return (
    <div className="startscreen">
      <h1 className="startscreen__title">FALLOUT HACKING</h1>
      <button onClick={startHacking} className="startscreen__button">
        Start Hacking
      </button>
    </div>
  );
};

export default StartScreen;
