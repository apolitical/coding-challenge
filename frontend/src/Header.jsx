import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Inner = styled.div`
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 0px 0px 40px 40px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 30px;
  text-align: center;
`;

const LinkWrapper = styled.div`
  font-size: 1.9rem;
  color: white;
  float: right;
  margin-top: -20px;
  display: inline-flex;
`;
const LinkOuter = styled.div`
  position: relative;
`;
const Link = styled.a`
  margin: 20px;
  text-decoration: none;
  color: white;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -20%;
    left: 0;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
    background: rgba(0, 0, 0, 0);
    box-shadow: 0 0 1px 1px #fff, 0 0 5px 5px rgb(135 220 90);
  }
  &:focus:before,
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <LinkWrapper>
          <LinkOuter>
            <Link href="/frontend/src/Home">View all</Link>
          </LinkOuter>
          |
          <LinkOuter>
            <Link href="/favourites">My favourites</Link>
          </LinkOuter>
        </LinkWrapper>
      </Inner>
    </Wrapper>
  );
};

export default Header;
