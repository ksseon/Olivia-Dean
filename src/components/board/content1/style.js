import styled from "styled-components";

export const TodosVisualStyle = styled.div`
  width: 100%;
  height: 400px;
  background-image: url("/tour.jpg");
  background-position: 0 40%;
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

export const ContentStyle = styled.section`
  .inner {
    h2 {
      margin-bottom: 60px;
    }
  }
`;

export const TodosStyle = styled.div`
  table {
    caption {
      display: block;
    }
    .id {
      width: 5%;
    }
    .title {
      width: 80%;
    }
    .data {
      width: 5%;
    }
    .ticket {
      width: 5%;
    }
    th,
    td {
      border: 1px solid #000;
      vertical-align: middle;
      padding: 10px;
    }
    td {
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      &:nth-child(1) {
        text-align: center;
      }
    }
  }
`;

export const PagingStyle = styled.p`
  margin: 40px 0;
  text-align: center;
  a {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #888888;
    margin-left: 6px;
    border-radius: 4px;
    text-align: center;
    line-height: 30px;
    color: #888888;
    cursor: pointer;
    &.on {
      color: white;
      border: 1px solid hotpink;
      background: hotpink;
    }
  }
`;
