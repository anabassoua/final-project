import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import { useState, useEffect } from "react";
// import { Icon } from "react-icons-kit";
// import { angleLeft } from "react-icons-kit/fa/angleLeft";
// import { angleRight } from "react-icons-kit/fa/angleRight";

const HomePage = () => {
  // const { user } = useAuth0();
  // return <JSONPretty data={user} />;
  const [trending, setTrending] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleSlideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trending.length - 1 : prevIndex - 1
    );
  };

  const handleSlideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === trending.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <h2>Trending Movies</h2>
      <CarouselContainer>
        {trending.map((movie, index) => (
          <CarouselItem key={movie.id}>
            <Img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </CarouselItem>
        ))}
      </CarouselContainer>
    </div>
  );
};

const CarouselContainer = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scroll-behavior: smooth;
  transition: transform 0.5s ease-in-out;
`;

const CarouselItem = styled.div`
  flex-shrink: 0;
  margin-right: 10;
`;

const Img = styled.img`
  width: 250px;
  height: 400px;
  border-radius: 10px;
`;

export default HomePage;
