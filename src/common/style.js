import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  /* background-image: url('/bg.jpg');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover; */
  height: 200px;
  border-bottom: 1px solid #e2e2e2;
  .inner {
    position: relative;
    margin: auto;
    width: 1400px;
    height: 120px;

    h1 {
      text-align: center;
      padding-top: 50px;

      img {
        width: 300px;
      }
    }
  }
`;
export const FooterStyle = styled.footer`
  background: gray;
  position: relative;
  .inner {
    height: 140px;
    p {
      font-size: 16px;
      color: white;
      font-weight: 20;
      text-align: center;
      position: absolute;
      left: 50%;
      bottom: 50%;
      transform: translateX(-50%);
    }
  }
`;
export const NavStyle = styled.nav``;
export const InnerStyle = styled.div`
  height: 120px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 100px;
    li {
      padding-top: 40px;
      a {
        position: relative;
        font-size: 18px;
        color: #333;
        font-weight: 400;
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          top: -10px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: hotpink;
          transform: translate(-50%);
          transition: transform 0.3s ease;
          opacity: 0;
        }
        &:hover::after {
          transform: translateX(-50%) translateY(-4px);
          opacity: 1;
        }
        &:hover {
          font-weight: 500;
          color: hotpink;
          transform: translate(1);
        }
      }
    }
  }
`;
