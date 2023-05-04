import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";
import Spinner from "./Spinner";
import { spinner8 } from "react-icons-kit/icomoon/spinner8";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth0();

  useEffect(() => {
    setLoading(true);
    if (user) {
      fetch(`/api/watchlist?userId=${user.email}`)
        .then((res) => res.json())
        .then((resData) => {
          setWatchlist(resData.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  const handleWatchedToggle = (movieId, watched) => {
    fetch("/api/update-movie", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.email,
        movieId: movieId,
        updatedMovie: { watched: !watched },
      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setWatchlist(
          watchlist.map((movie) =>
            movie.movie.id === movieId
              ? { ...movie, movie: { ...movie.movie, watched: !watched } }
              : movie
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (movieId) => {
    fetch(
      `/api/delete-from-watchlist?userId=${user.email}&movieId=${movieId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId }),
      }
    )
      .then((res) => res.json())
      .then((resData) => {
        // console.log(resData);
        //Without the line below we would be forced to refresh the page to see the movie removed.
        setWatchlist(watchlist.filter((movie) => movie.movie.id !== movieId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {loading ? (
        <SpinnerContainer>
          <Spinner icon={spinner8} size={70} />
        </SpinnerContainer>
      ) : (
        <>
          <Heading>Watchlist</Heading>
          <Div>
            <Container>
              {watchlist.map((movie) => {
                return (
                  <ItemsContainer key={movie.movie.id}>
                    <Card>
                      <Img
                        src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`}
                        alt={movie.movie.title}
                      />
                      <Title>{movie.movie.title}</Title>
                      <RatingContainer>
                        <Icon icon={star} style={{ color: "var(--mint)" }} />
                        <p> {movie.movie.vote_average}</p>
                      </RatingContainer>
                      <Button onClick={() => handleDeleteMovie(movie.movie.id)}>
                        X
                      </Button>
                      <WatchedButton
                        onClick={() =>
                          handleWatchedToggle(
                            movie.movie.id,
                            movie.movie.watched
                          )
                        }
                      >
                        {movie.movie.watched ? "Watched" : "Not Watched"}
                      </WatchedButton>
                    </Card>
                  </ItemsContainer>
                );
              })}
            </Container>
          </Div>
        </>
      )}
    </div>
  );
};

const WatchedButton = styled.button`
  position: absolute;
  background: var(--mint);
  border: none;
  color: var(--richblack-bg);
  padding: 5px;
  border-radius: 5px;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  &:hover {
    /* background: var(--light-mint); */
  }
`;

const Div = styled.div`
  display: flex;
`;
const Heading = styled.h2`
  padding: 15px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 30px;
  gap: 50px;
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

const ItemsContainer = styled.div``;

const Card = styled.div`
  flex-shrink: 0;
  margin-right: 10;
  height: 450px;
  background-color: var(--richblack-bg);
  border-radius: 10px;
  max-width: 252px;
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  background: none;
  border: none;
  color: red;
  top: -10px;
  right: -20px;
  cursor: pointer;
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Watchlist;
