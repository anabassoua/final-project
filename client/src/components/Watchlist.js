import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const { user, isLoading } = useAuth0();

  useEffect(() => {
    if (user) {
      fetch(`/api/watchlist?userId=${user.email}`)
        .then((res) => res.json())
        .then((resData) => {
          console.log(resData.data);
          setWatchlist(resData.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
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
                </Card>
              </ItemsContainer>
            );
          })}
        </Container>
      </Div>
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

export default Watchlist;
