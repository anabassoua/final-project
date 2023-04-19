import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Pagination from "../Pagination";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";

const Actions = () => {
  const { user } = useAuth0();
  const [actions, setActions] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 20;

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
      body: JSON.stringify({ userId: user.email, movie: addThis }),
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
    fetch(`/genre/action?page=${page}`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setActions(resData.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <>
      <Heading>Action Movies</Heading>
      <Div>
        <Container>
          {actions.map((action) => {
            return (
              <ItemsContainer key={action.id}>
                <Card key={action.id}>
                  <Img
                    src={`https://image.tmdb.org/t/p/w500${action.poster_path}`}
                    alt={action.title}
                  />
                  <Title>{action.title}</Title>
                  <RatingContainer>
                    <Icon icon={star} style={{ color: "var(--mint)" }} />
                    <p> {action.vote_average}</p>
                  </RatingContainer>
                  <button onClick={() => addToWatchlist(action)}>
                    AddToWatchlist
                  </button>
                </Card>
              </ItemsContainer>
            );
          })}
        </Container>
      </Div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
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
`;

export default Actions;
