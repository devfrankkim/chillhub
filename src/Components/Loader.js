import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin-top: 50px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loding">
      ⏰
    </span>
  </Container>
);

// screen reader for blind people.
// hey aria-label => Loading! ⏰
