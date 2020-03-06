import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 5px 10px 10px 30px;
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
  loading,
  error,
  handleSubmit,
  updateTerm
}) => (
  <Container>
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
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Results">
            {tvResults.map(tv => (
              <span key={tv.id}>{tv.name}</span>
            ))}
          </Section>
        )}
      </>
    )}
  </Container>
);
// handleSubmit은 searchTerm과 search들을 찾는다.
// input을 제어할 수 있어야 한다. => (value)

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
