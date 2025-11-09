import { useState } from "react";
import GalleryInput from "../components/gallery/GalleryInput";
import GalleryList from "../components/gallery/GalleryList";
import GalleryVisual from "../components/gallery/GalleryVisual";
import { Container } from "./style";
import useAxios from "../hooks/useAxios";

const Gallery = () => {
  const [text, setText] = useState("singer");
  const API_URL = `51124290-90a01fb78622293230e58c21e`;
  const url = `https://pixabay.com/api/?key=${API_URL}&q=${text}&image_type=photo
`;
  const { state, loading, error } = useAxios(url);
  const onSearch = (txt) => {
    setText(txt);
  };

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  if (!state) {
    return null;
  }

  return (
    <Container>
      <GalleryVisual />
      <div className="inner">
        <GalleryInput onSearch={onSearch} />
        <GalleryList data={state.hits} />
      </div>
    </Container>
  );
};

export default Gallery;
