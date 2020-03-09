import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 30px 10px 10px 30px;
  padding-top: 20px;
  padding-bottom: 90px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now playing lol">
          {nowPlaying.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={
                movie.release_date
                  ? movie.release_date.substring(0, 4)
                  : movie.first_air_date
              }
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="upComing playing lol">
          {upComing.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={
                movie.release_date
                  ? movie.release_date.substring(0, 4)
                  : movie.first_air_date
              }
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="popular playing lol">
          {popular.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={
                movie.release_date
                  ? movie.release_date.substring(0, 4)
                  : movie.first_air_date
              }
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
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
