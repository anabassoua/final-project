import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";
import Spinner from "./Spinner";
import { spinner8 } from "react-icons-kit/icomoon/spinner8";

const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/trending")
      .then((res) => res.json())
      .then((resData) => {
        setTrending(resData.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Heading>Trending Movies</Heading>
      <CarouselContainer>
        {loading ? (
          <SpinnerContainer>
            <Spinner icon={spinner8} size={70} />
          </SpinnerContainer>
        ) : (
          <>
            {trending.map((movie) => (
              <CarouselItem key={movie.id}>
                <Link to={`movie/${movie.id}`}>
                  <Img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
                <Title>{movie.title}</Title>
                <RatingContainer>
                  <Icon icon={star} style={{ color: "var(--mint)" }} />
                  <p> {movie.vote_average}</p>
                </RatingContainer>
              </CarouselItem>
            ))}
          </>
        )}
      </CarouselContainer>
    </div>
  );
};
const Heading = styled.h2`
  padding: 15px;
`;
const CarouselContainer = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scroll-behavior: smooth;
  transition: transform 0.5s ease-in-out;

  // Let's hide the scrollbar for Chrome, Safari & Opera users
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; // Edge
  scrollbar-width: none; // Firefox
`;

const CarouselItem = styled.div`
  flex-shrink: 0;
  margin-right: 10;
  height: 450px;
  background-color: var(--richblack-bg);
  border-radius: 10px;
  max-width: 252px;
`;

const Img = styled.img`
  width: 250px;
  height: 320px;
  border-radius: 10px;
`;

const Title = styled.p`
  padding-left: 15px;
  padding-top: 15px;
`;
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 15px;
  padding-top: 5px;
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default HomePage;
