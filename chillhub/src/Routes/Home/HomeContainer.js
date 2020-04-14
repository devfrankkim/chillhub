import React from "react";
import HomePresenter from "./HomePresenter.js";
import { moviesApi } from "api.js";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      // console.log(nowPlaying);
      const {
        data: { results: upComing }
      } = await moviesApi.upComing();
      const {
        data: { results: popular }
      } = await moviesApi.popular();
      this.setState({
        nowPlaying: nowPlaying,
        upComing: upComing,
        popular: popular
      });
    } catch {
      this.setState({
        error: `Your search did not have any matches`
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state;
    // console.log(this.setState);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

// state 3가지, go to api
