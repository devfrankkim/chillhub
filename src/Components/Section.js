import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 55px;
  }
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #1dd1a1;
`;

const Grid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 30px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;

// children is react prop (reserved react prop)
// children
