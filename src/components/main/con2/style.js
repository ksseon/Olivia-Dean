import styled from "styled-components";

export const Content2 = styled.div`
  background-color: rgba(246, 241, 241, 1);
  padding: 100px 0;
  h2 {
    text-align: center;
    font-size: 60px;
    margin-top: 80px;
    padding: 20px;
    color: #333;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    color: #848484;
    text-align: center;
  }
  #app {
    height: 100%;
  }
  html,
  body {
    position: relative;
    height: 100%;
  }

  body {
    background: #000;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #fff;
    margin: 0;
    padding: 0;
  }

  .swiper {
    width: 100%;
    padding-top: 80px;
    padding-bottom: 50px;
    margin-bottom: 80px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;
