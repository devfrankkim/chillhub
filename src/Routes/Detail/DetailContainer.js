import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;

    this.overviewContent = React.createRef();
    this.state = {
      result: null,
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie/"),
      isClick: true
    };
  }

  // result.overview (DATA)
  // {isClick ? "To read more..." : "FOLD"}
  handleClick = resultOverview => {
    // isClick true, [To read more]
    // isClick false, [FOLD]
    if (this.state.isClick) {
      this.overviewContent.current.innerText = resultOverview; // all the contents
      this.setState({
        isClick: false // true value will always be [To read more].
      });
    } else {
      // Click [FOLD] => [To read more]
      this.overviewContent.current.innerText = `${resultOverview.substring(
        0,
        200
      )}....`;
      this.setState({
        isClick: true // false value will always be [Fold].
      });
    }
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const { isMovie } = this.state;
    // console.log(this.props);
    const numberId = Number(id);
    if (isNaN(numberId)) {
      return push("/");
    }
    let result = null;
    try {
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
    const { result, loading, error, isMovie, isClick } = this.state;
    // console.log(this.state);
    return (
      <DetailPresenter
        result={result}
        loading={loading}
        error={error}
        isMovie={isMovie}
        isClick={isClick}
        handleClick={this.handleClick}
        OverviewTextRef={this.overviewContent}
      />
    );
  }
}
