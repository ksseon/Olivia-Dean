import styled from "styled-components";

export const Container = styled.div`
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
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #444;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 1920px;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    width: 60px;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background-color: hotpink;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 20px;
    font-weight: bold;
  }

  .swiper-button-prev {
    left: 40px;
  }

  .swiper-button-next {
    right: 40px;
  }
`;
