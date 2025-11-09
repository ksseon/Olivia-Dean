import styled from "styled-components";

export const Content1 = styled.div`
  margin: 100px auto;
  .inner {
    height: 800px;
    display: flex;
    .box {
      margin: 80px 0 0 45px;
      strong {
        font-size: 26px;
        color: #333333;
        span {
          font-size: 50px;
          font-weight: 600;
          color: hotpink;
        }
      }
      p {
        font-size: 25px;
        margin-top: 10px;
        color: #767676ff;
      }
      .btn {
        margin-top: 25px;
        button {
          width: 400px;
          height: 64px;
          margin-top: 25px;
          border-radius: 40px;
          border: 1px solid hotpink;
          background-color: white;
          font-size: 16px;
          color: hotpink;
          cursor: pointer;
          &:hover {
            background-color: hotpink;
            color: white;
          }
        }
      }
    }
  }
`;
