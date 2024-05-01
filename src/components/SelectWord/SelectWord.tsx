import { FC, useState } from "react";

type Props = {
  word: string;
  select: (similarity: number) => void;
};

const SelectWord: FC<Props> = ({ word, select }) => {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState(0);
  return selected ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        select(value);
      }}
    >
      <label>What was the similarity?</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => select(value)}>Submit</button>
    </form>
  ) : (
    <button onClick={() => setSelected(true)}>
      Select {word.toUpperCase()}
    </button>
  );
};

export default SelectWord;
