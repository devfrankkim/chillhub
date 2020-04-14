import React from "react";
import styled from "styled-components";
import logo from "../assets/loading.gif";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin-top: 50px;
`;

const Gif = styled.div``;

export default () => (
  <Container>
    <Gif>
      <img src={logo} alt="loading..." />{" "}
    </Gif>
  </Container>
);
