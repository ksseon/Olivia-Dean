import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  .inner {
    padding: 120px 0;
  }
  h2 {
    font-size: 50px;
    font-weight: 900;
  }
`;

export const AboutStyle = styled.div``;

export const DetailStyle = styled.article`
  .inner {
    padding: 120px 0;
    h2 {
      text-align: center;
      margin-bottom: 50px;
      font-size: 50px;
      color: #222222;
    }
    .con-box {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      div {
        width: 43%;
      }
      .left {
        text-align: center;
        h3 {
          margin: 20px 0;
          font-size: 30px;
          color: hotpink;
          font-weight: 500;
        }
        strong {
          font-size: 20px;
          color: #222222;
        }
        p {
          margin-top: 40px;
        }
        p {
          margin-bottom: 60px;
          button {
            font-weight: 500;
            font-size: 16px;
            width: 140px;
            height: 40px;
            border-radius: 20px;
            border: none;
            cursor: pointer;
            &:nth-child(1) {
              margin-right: 20px;
              background: rgb(151, 151, 151);
              color: rgb(255, 255, 255);
            }
            &:nth-child(2) {
              background: hotpink;
              margin-right: 20px;
              color: rgb(255, 255, 255);
            }
            &:nth-child(1):hover {
              background: rgb(185, 185, 185);
            }
            &:nth-child(2):hover {
              background: pink;
            }
          }
        }
      }

      .right {
        background: rgba(249, 249, 249, 1);
        border-radius: 20px;
        text-align: center;
        padding: 24px 60px;
        width: 540px;
        h3 {
          font-size: 28px;
          color: #222222;
          font-weight: 500;
          line-height: 1.8;
        }
        h4 {
          margin-top: 30px;
          font-size: 16px;
          color: #a8a8a8;
          line-height: 2;
        }
        strong {
          font-size: 20px;
          color: #222222;
        }
        p {
          margin-top: 40px;
        }
        p {
          margin-top: 90px;
          button {
            font-weight: 500;
            font-size: 16px;
            width: 140px;
            height: 40px;
            border-radius: 20px;
            border: none;
            cursor: pointer;
            &:nth-child(1) {
              margin-right: 20px;
              background: rgb(151, 151, 151);
              color: rgb(255, 255, 255);
            }
            &:nth-child(2) {
              background: hotpink;
              margin-right: 20px;
              color: rgb(255, 255, 255);
            }
            &:nth-child(1):hover {
              background: rgb(185, 185, 185);
            }
            &:nth-child(2):hover {
              background: pink;
            }
          }
        }
      }
    }
  }
`;
