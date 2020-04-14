import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PreviousLink = styled(Link)`
  position: fixed;
  top: 60px;
  right: 50px;
  font-size: 40px;
  opacity: 0.3;
`;

const PreviousPage = ({ pathName }) => (
  <PreviousLink to={`/${pathName}`}>{"< Go back "}</PreviousLink>
);

export default PreviousPage;
