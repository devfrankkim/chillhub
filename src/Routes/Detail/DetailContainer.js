import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);

    const {
      location: { pathname }
    } = props;

    this.state = {
      result: null,
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie/")
    };
  }
  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
      // location: { pathname }
    } = this.props;
    const { isMovie } = this.state;
    // console.log(this.props);
    const numberId = Number(id);
    if (isNaN(numberId)) {
      return push("/");
    }
    let result = null;
    try {
      // const request = await moviesApi.movieDetail(Number(id))
      // result = request.data;
      // const request = await tvApi.tvDetail(Number(id))
      // result = request.data;

      // const { data: result } = isMovie
      //   ? await moviesApi.movieDetail(Number(id))
      //   : await tvApi.tvDetail(Number(id));

      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(Number(id)));
      } else {
        ({ data: result } = await tvApi.tvDetail(Number(id)));
      }
      // console.log(result);
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    // console.log(this.props);
    const { result, loading, error } = this.state;
    // console.log(this.state);
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
