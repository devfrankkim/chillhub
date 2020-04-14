import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import StarRatings from "react-star-ratings";
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

const OverviewContainer = styled("div")`
  margin-bottom: 20px;
`;

const OverView = styled.p`
  padding: 10px;
  width: 75%;
  font-size: 17px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
`;

const OverViewButton = styled("button")`
  background-color: transparent;
  cursor: pointer;
  text-shadow: 0 0 5px #228dff, 0 0 20px #fff, 0 0 35px #fff, 0 0 40px #228dff;
  font-size: 20px;
  margin-left: 10px;
  text-decoration: none;
  box-shadow: 5px 5px;
  &:hover {
    box-shadow: 0 1px 11px 1px rgba(0, 0, 0, 0.25);
  }
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

const DetailPresenter = ({
  result,
  loading,
  error,
  handleClick,
  isClick,
  OverviewTextRef
}) =>
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
              <PreviousPage pathName="movie" />
            ) : (
              <PreviousPage pathName="tv" />
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
          <OverviewContainer>
            <OverView ref={OverviewTextRef}>
              {result.overview && result.overview.length > 200
                ? `${result.overview.substring(0, 200)}....`
                : result.overview}
            </OverView>

            {result.overview.length > 200 ? (
              <OverViewButton onClick={() => handleClick(result.overview)}>
                {isClick ? "To read more..." : "FOLD"}
              </OverViewButton>
            ) : null}
          </OverviewContainer>
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
