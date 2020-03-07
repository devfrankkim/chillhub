import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  font-size: 20px;
`;

const Text = styled.span`
  color: whitesmoke;
  font-weight: 500;
  display: block;
  padding: 0px 150px;
`;

const Text1 = styled.span`
  color: whitesmoke;
  font-weight: 500;
  display: block;
  padding: 30px 150px;
`;

const Text2 = styled.p`
  font-size: 16px;
  padding: 0px 200px;
`;

const Message = ({ text }) => (
  <Container>
    <Text>{text}</Text>
    <Text1>Suggestions:</Text1>
    <Text2> ∙ Try different keywords</Text2>
    <Text2> ∙ Try usinga movie, TV show title</Text2>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string.isRequired
};

export default Message;
