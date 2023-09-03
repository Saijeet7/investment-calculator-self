import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Wrap>
      <Title>{props.title}</Title>
    </Wrap>
  );
};

export default Header;

const Title = styled.h1`
  width: min(100%, 420px);
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #fff;
  font-size: 48px;
  text-align: center;
`;

const Wrap = styled.header`
  margin-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
