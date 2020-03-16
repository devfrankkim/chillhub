import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Season from "../Season";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import StarRatings from "react-star-ratings";
import Youtube from "react-youtube";
import imdb from "../../assets/imdb.png";
import { Link } from "react-router-dom";
import PreviousPage from "../../Components/PreviousPage";

const tmdbOriginalURL = "https://image.tmdb.org/t/p/original";

const Container = styled.div`
  height: calc(100vh - 80px);
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

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  font-size: 15px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const OverView = styled.p`
  margin-top: 30px;
  font-size: 17px;
  opacity: 0.7;
  line-height: 2;
  width: 70%;
`;

const Imdb = styled.div`
  display: inline-block;
  position: relative;
  top: 3px;
  width: 16px;
  background-size: cover;
`;

const YoutubeContainer = styled.div`
  margin-top: 30px;
  position: relative;
`;

const SeasonImg = styled.img`
  width: 70px;
  height: 110px;
  margin-right: 5px;
`;

const SeasonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SeasonTitle = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

// const title =
//   result.origianl_title && result.origianl_title.length > substrLength
//     ? `${result.original_title.substring(0, substrLength)}...`
//     : result.original_title;

// const name =
//   result.original_name && result.original_name.length > substrLength
//     ? `${result.original_name.substring(0, substrLength)}...`
//     : result.original_name;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Chillhub</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}
          | Chillhub
        </title>
      </Helmet>
      <Backdrop bgImage={`${tmdbOriginalURL}${result.backdrop_path}`} />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `${tmdbOriginalURL}${result.poster_path}`
              : require("../../assets/noposter.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>

          <ItemContainer>
            {result.release_date || result.first_air_date ? (
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
            ) : (
              "  Unknown dates"
            )}
            <Divider>∙</Divider>
            {result.runtime > 0 || result.episode_run_time > 0 ? (
              <>
                <Item>
                  {result.runtime ? result.runtime : result.episode_run_time[0]}
                  min
                </Item>
              </>
            ) : (
              "    Unknown minutes"
            )}
            <Divider>∙</Divider>
            {result.genres.length > 0 ? (
              <>
                <Item>
                  {result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
                </Item>
              </>
            ) : (
              " Unknown generes"
            )}
            <Divider>∙</Divider>
            <Imdb>
              <a
                href={
                  result.imdb_id
                    ? `https://www.imdb.com/title/${result.imdb_id}`
                    : "https://www.imdb.com"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://m.media-amazon.com/images/G/01/imdb/images/desktop-favicon-2165806970._CB484110913_.ico"
                  width="26px"
                  alt="imdb_icon"
                />
              </a>
            </Imdb>
            {result.original_title ? (
              <PreviousPage pathName="tv" />
            ) : (
              <PreviousPage pathName="movie" />
            )}
          </ItemContainer>
          <Item>
            <StarRatings
              rating={result.vote_average / 2}
              starRatedColor="rgb(255, 0, 0)"
              starDimension="25px"
              starSpacing="3px"
            ></StarRatings>
          </Item>
          <OverView>
            {result.overview.length > 300
              ? `${result.overview.substring(0, 200)}...`
              : result.overview}
          </OverView>
          {result.seasons && (
            <Router>
              <Link to="/show/:id/season"> Check other "Season"</Link>
            </Router>
          )}
          <YoutubeContainer>
            {result.videos.results.length > 0 ? (
              <iframe
                title={result.id}
                id="youtubePlayer"
                width="550"
                height="300"
                src={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
              />
            ) : (
              `"Youtube trailers not available"`
            )}
          </YoutubeContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
