import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const tmdbOriginalURL = "https://image.tmdb.org/t/p/original";

const Container = styled.div`
  height: calc(100vh - 130px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(2px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: felx;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 80px;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop bgImage={`${tmdbOriginalURL}${result.backdrop_path}`} />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `${tmdbOriginalURL}${result.poster_path}`
              : require("../../assets/noposter.png")
          }
        />
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
