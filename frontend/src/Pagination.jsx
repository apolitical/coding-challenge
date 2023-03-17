import React from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Inner = styled.div`
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 40px 40px 0px 0px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px;
  text-align: center;
`;

const Number = styled.button`
  height: 40px;
  width: 40px;
  margin: 0px 10px;
  border-radius: 100%;
  background-color: black;
  color: yellow;
  font-size: 1.4rem;
  &:hover {
    box-shadow: 0 0 10px 10px #fff, 0 0 10px 10px rgb(255 5 63);
  }
  box-shadow: ${(props) =>
    props.isActive
      ? `0 0 10px 10px #fff, 0 0 10px 10px rgb(135 220 90)`
      : "none"};
`;

const Pagination = ({ currentPage }) => {
  const totalPages = 1;
  const Buttons = [];

  for (let i = 0; i < totalPages; i++) {
    Buttons.push(
      <Number isActive={currentPage === i + 1} key={uuid()}>
        {i + 1}
      </Number>
    );
  }

  return (
    <Wrapper>
      <Inner>{Buttons}</Inner>
    </Wrapper>
  );
};

export default Pagination;
