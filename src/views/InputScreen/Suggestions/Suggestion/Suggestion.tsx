import { FC } from "react";
import "./Suggestion.css";

type Props = {
  word: string;
  onClick: () => void;
};

const Suggestion: FC<Props> = ({ word, onClick }) => {
  return (
    <button className="inputscreen__suggestion" onClick={onClick}>
      {word}
    </button>
  );
};

export default Suggestion;
