import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import { useState, useEffect } from "react";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";

const HomePage = () => {
  // const { user } = useAuth0();
  // return <JSONPretty data={user} />;
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch("/trending")
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData.data.results);
        setTrending(resData.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Heading>Trending Movies</Heading>
      <CarouselContainer>
        {trending.map((movie) => (
          <CarouselItem key={movie.id}>
            <Img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <Title>{movie.title}</Title>
            <RatingContainer>
              <Icon icon={star} style={{ color: "var(--mint)" }} />
              <p> {movie.vote_average}</p>
            </RatingContainer>
          </CarouselItem>
        ))}
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

export default HomePage;
