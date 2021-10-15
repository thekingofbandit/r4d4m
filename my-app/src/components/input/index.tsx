import React, { useState } from "react";

interface IProps {
  onSubmit: (color: string) => void;
}

const Input: React.FunctionComponent<IProps> = (props) => {
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="tw-input-box">
        <label>Add new color:</label>
        <input
          type="text"
          name="color"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Example #333333"
          required
        ></input>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Input;
