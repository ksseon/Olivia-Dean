import styled from "styled-components";

export const GalleyVisualStyle = styled.div`
  width: 100%;
  height: 400px;
  background-image: url("/bg.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    color: white;
    font-weight: 500;
    font-size: 40px;
    margin-top: 40px;
  }
`;

export const GalleryInputStyle = styled.form`
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    input[type="text"] {
      width: 600px;
      height: 60px;
      border-radius: 40px;
      border: 1px solid #999;
      outline: none;
      color: #333;
      padding: 20px;
      box-sizing: border-box;
    }
    button {
      width: 120px;
      height: 60px;
      border-radius: 40px;
      border: none;
      background: hotpink;
      margin-left: 20px;
      color: white;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        background: pink;
      }
    }
  }
`;
export const GalleryListStyle = styled.div`
  margin-top: 80px;
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`;
export const GalleryItemStyle = styled.article`
  margin: 50px 0;
  img {
    width: 420px;
    height: 280px;
  }
  h3 {
  }
  ul {
    li {
    }
  }
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
