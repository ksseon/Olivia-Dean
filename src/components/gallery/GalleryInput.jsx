import { useState } from "react";
import { GalleryInputStyle } from "./style";

const GalleryInput = ({ onSearch }) => {
  const [text, setText] = useState("");
  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const onSubmit = () => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <GalleryInputStyle onSubmit={onSubmit}>
      <p>
        <input
          type="text"
          onChange={changeInput}
          name=""
          id=""
          placeholder="Search for your favorite singer"
        />
        <button type="submit">search</button>
      </p>
      <p>
        <i></i>
        <span></span>
        <span></span>
        <span></span>
      </p>
    </GalleryInputStyle>
  );
};

export default GalleryInput;
