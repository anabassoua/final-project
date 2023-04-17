import styled from "styled-components";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";

const Actions = () => {
  const [actions, setActions] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 20;

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
              <ItemsContainer>
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
