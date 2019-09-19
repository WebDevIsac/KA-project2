import React from "react";
import styled from "styled-components";
import Menu from "../Menu";
import { Route, Switch, Link } from "react-router-dom";

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  ul{
    list-style: none;
    padding: 0%;
  }
`;

const Layout = (props) => {
  return (
    <Wrapper>
      {props.children}
      <Menu />
    </Wrapper>
  );
}

export default Layout;
