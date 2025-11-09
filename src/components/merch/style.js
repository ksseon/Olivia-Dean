import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background-image: url("/merch2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30% auto;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ContentStyle = styled.section`
  .inner {
    padding: 120px 0;
  }
  h2 {
    mix-blend-mode: 50px;
  }
`;

export const MerchUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  li {
    margin-bottom: 40px;
    width: 400px;
    border: 1px solid #666;
    border-radius: 20px;
    padding: 15px;
    text-align: center;
    &:hover {
      border: 2px solid hotpink;
    }
    &:hover h3 {
      color: hotpink;
    }
    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 40px;
      color: #222222;
    }
    p {
      img {
        width: 70%;
        transition: 0.3s;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
`;
