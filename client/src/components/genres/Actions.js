import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Pagination from "../Pagination";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";
import { ic_bookmark_border } from "react-icons-kit/md/ic_bookmark_border";
import Spinner from "../Spinner";
import { spinner8 } from "react-icons-kit/icomoon/spinner8";

const Actions = () => {
  const { user, isAuthenticated } = useAuth0();
  const [actions, setActions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = 20;

  // we need to toggle the button. if i add to watchlist its filled in yellow and if i click again its
  // going back normal which means the movie is also removed from the watchlist

  const addToWatchlist = (movie) => {
    //We dont want to return all the informations from the API but just the following:
    const addThis = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
    };
    fetch("/api/add-to-watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user?.email, movie: addThis }),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(`/genre/action?page=${page}`)
      .then((res) => res.json())
      .then((resData) => {
        setActions(resData.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <div>
      {loading ? (
        <SpinnerContainer>
          <Spinner icon={spinner8} size={70} />
        </SpinnerContainer>
      ) : (
        <>
          <Heading>Action Movies</Heading>
          <Div>
            <Container>
              {actions.map((action) => {
                return (
                  <ItemsContainer key={action.id}>
                    <Card>
                      <Link to={`/movie/${action.id}`}>
                        <Img
                          src={`https://image.tmdb.org/t/p/w500${action.poster_path}`}
                          alt={action.title}
                        />
                      </Link>
                      <Title>{action.title}</Title>
                      <RatingContainer>
                        <Icon icon={star} style={{ color: "var(--mint)" }} />
                        <p> {action.vote_average}</p>
                      </RatingContainer>
                      {isAuthenticated ? (
                        <Button onClick={() => addToWatchlist(action)}>
                          <Icon icon={ic_bookmark_border} size={30} />
                        </Button>
                      ) : null}
                    </Card>
                  </ItemsContainer>
                );
              })}
            </Container>
          </Div>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </div>
  );
};

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
  left: 40%;
  bottom: 2%;
  background: none;
  border: none;
  color: yellow;
  cursor: pointer;
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Actions;
