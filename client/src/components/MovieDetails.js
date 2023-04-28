import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    console.log(movieId);
    fetch(`/movie/${movieId}`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData.data);
        setMovie(resData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieInfo>
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
        <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
          {movie.homepage}
        </a>
        <Synopsis>{movie.overview}</Synopsis>
        {/* Add other movie information elements here */}
      </MovieInfo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
`;

const MovieInfo = styled.div`
  width: 100%;
  padding: 20px;
`;

const Synopsis = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export default MovieDetails;
