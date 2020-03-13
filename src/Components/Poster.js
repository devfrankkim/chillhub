import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { moviesApi } from "../api";

const tmdbBaseUrl = "https://image.tmdb.org/t/p/w200";

const Container = styled.div`
  font-size: 12px;
`;

// const Rating = styled.span`
//   bottom: 5px;
//   right: 5px;
//   position: absolute;
//   opacity: 0;
//   transition: opacity 0.1s linear;
// `;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s linear;
  text-shadow: 0 0 5px #0fe8f1, 0 0 10px #14f10fba, 0 0 15px #14f10fba,
    0 0 20px #fff, 0 0 35px #fff, 0 0 40px #14f10f78, 0 0 50px #14f10fba,
    0 0 75px #14f10fb0;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 150px;
  background-size: cover;
  border-radius: 40px;
  background-position: center center;
  transition: opacity 0.3s linear;
`;
const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 4px;
  color: rgba(220, 220, 220);
  font-weight: bold;
`;

const Year = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-weight: 600;
`;

const Poster = ({ id, imageUrl, rating, title, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `${tmdbBaseUrl}${imageUrl}`
              : require("../assets/noposter.png")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 15 ? `${title.substring(0, 20)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  rating: PropTypes.number,
  isMovie: PropTypes.bool
};

export default Poster;
