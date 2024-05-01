import { FC } from "react";
import "./LikenessButton.css";

type Props = {
  likeness: number;
  eliminates: number;
  onClick: () => void;
};

const LikenessButton: FC<Props> = ({ likeness, eliminates, onClick }) => {
  return (
    <div>
      <button className="gamescreen__likenessButton" onClick={onClick}>
        {likeness}
      </button>
      <p>({eliminates})</p>
    </div>
  );
};

export default LikenessButton;
