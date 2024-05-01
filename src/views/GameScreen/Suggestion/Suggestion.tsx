import { FC } from "react";
import { getEliminatesMatrix } from "../../../utils/getEliminatesMatrix";
import "./Suggestion.css";
import LikenessButton from "../LikenessButton/LikenessButton";

type Props = {
  suggested: string;
  words: string[];
  onSuggest: (likeness: number) => void;
};

const Suggestion: FC<Props> = ({ suggested, words, onSuggest }) => {
  const eliminatesMatrix = getEliminatesMatrix(words);
  const likenessOptions = eliminatesMatrix[suggested] || [];
  return (
    <div className="gamesscreen__suggestionContainer">
      <p>BEST OPTION</p>
      <h2 className="gamescreen__suggestion">{suggested}</h2>
      {words.length > 1 && (
        <>
          <p className="gamescreen__likeness">Likeness:</p>
          <p>(eliminates)</p>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              marginBottom: "0.5rem",
              flexWrap: "wrap",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {likenessOptions
              .filter((l) => l)
              .map((eliminates, likeness) => (
                <LikenessButton
                  likeness={likeness}
                  eliminates={eliminates}
                  onClick={() => onSuggest(likeness)}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Suggestion;
