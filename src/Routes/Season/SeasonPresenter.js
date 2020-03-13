import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import StarRatings from "react-star-ratings";
import Youtube from "react-youtube";
import imdb from "../../assets/imdb.png";
import { Link } from "react-router-dom";

// {
//   result.seasons && (
//     <>
//       <SeasonTitle>Season</SeasonTitle>
//       <SeasonContainer>
//         {result.seasons.map(
//           season =>
//             season.poster_path && (
//               <SeasonImg
//                 src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
//               />
//             )
//         )}
//       </SeasonContainer>
//     </>
//   );
// }
