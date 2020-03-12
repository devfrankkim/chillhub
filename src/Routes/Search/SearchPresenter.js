import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Error from "Components/Error";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 30px 10px 10px 30px;
  padding-top: 20px;
  padding-bottom: 90px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

// form에서는 submit 이벤트를 차단한다.

const Input = styled.input`
  all: unset;
  font-size: 20px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  pastTerm,
  loading,
  error,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Helmet>
      <title>Search | Chillhub</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV shows..."
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
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
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Results">
            {tvResults.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={
                  show.first_air_date
                    ? show.first_air_date.substring(0, 4)
                    : show.first_air_date
                }
              />
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Error color="#e74c3c" text={error} />}
    {tvResults &&
      movieResults &&
      tvResults.length === 0 &&
      movieResults.length === 0 && (
        <Message
          text={`Your search for "${pastTerm}" did not have any matches`}
          Found
          color="#95a5a6"
        />
      )}
  </Container>
);
// handleSubmit은 searchTerm과 search들을 찾는다.
// input을 제어할 수 있어야 한다. => (value)

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  pastTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
