import React from "react";
import TVpresenter from "./TVpresenter.js";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      <TVpresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
