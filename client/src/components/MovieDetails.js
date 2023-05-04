import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";
import Spinner from "./Spinner";
import { spinner8 } from "react-icons-kit/icomoon/spinner8";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`/movie/${movieId}`)
      .then((res) => res.json())
      .then((resData) => {
        setMovie(resData.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const time = movie.runtime;
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return (
    <Container>
      {loading ? (
        <SpinnerContainer>
          <Spinner icon={spinner8} size={70} />
        </SpinnerContainer>
      ) : (
        <>
          {movie.poster_path && (
            <Img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <MovieInfo>
            <Title>{movie.title}</Title>
            <Date>
              {movie.release_date} - {hours}h {minutes}min
            </Date>
            <Synopsis>
              <P>Synopsis:</P>
              {movie.overview}
            </Synopsis>
            {movie.homepage && (
              <MovieLink>
                <a
                  href={movie.homepage}
                  style={{ color: "var(--mint)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {movie.homepage}
                </a>
              </MovieLink>
            )}
            <Vote>
              <Icon icon={star} style={{ color: "var(--mint)" }} size={30} />
              {movie.vote_average}
            </Vote>
          </MovieInfo>
        </>
      )}
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

const Title = styled.p`
  font-size: 2rem;
  font-weight: bolder;
  color: var(--mint);
  padding-bottom: 10px;
`;

const P = styled.span`
  font-style: normal;
  margin-top: 40px;
  margin-bottom: 10px;
  color: var(--mint);
`;

const MovieLink = styled.div`
  margin-top: 70px;
`;

const Date = styled.p`
  font-style: italic;
  color: gray;
`;

const Synopsis = styled.p`
  display: flex;
  font-style: italic;
  flex-direction: column;
  font-size: 16px;
  margin-bottom: 10px;
  color: #fff;
`;

const Vote = styled.div`
  font-size: 1.3rem;
  margin-top: 70px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default MovieDetails;
