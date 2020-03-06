import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 5px 10px 10px 30px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now playing lol">
          {nowPlaying.map(movie => (
            <span key={movie.id}> {movie.title} </span>
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="upComing playing lol">
          {upComing.map(movie => (
            <span key={movie.id}> {movie.title} </span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="popular playing lol">
          {popular.map(movie => (
            <span key={movie.id}> {movie.title} </span>
          ))}
        </Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
