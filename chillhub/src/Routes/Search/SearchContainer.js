import React from "react";
import SearchPresenter from "./SearchPresenter.js";
import { moviesApi, tvApi } from "../../api.js";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    pastTerm: "",
    loading: false,
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.setState({ pastTerm: searchTerm });
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  updateTerm = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    const { pastTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.searchMovie(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.searchTV(searchTerm);
      this.setState({ movieResults, tvResults });
    } catch {
      // console.log(searchTerm);
      this.setState({
        error: `Your search for ${pastTerm} did not have any matches. `
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      movieResults,
      tvResults,
      searchTerm,
      pastTerm,
      loading,
      error
    } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        pastTerm={pastTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
