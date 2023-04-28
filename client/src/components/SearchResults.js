import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";
// import Poster from "../public/poster_not_found";

const SearchResults = () => {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { query } = useParams();

  useEffect(() => {
    fetch(`/api/search?page=${page}&query=${query}`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setMovies(resData.data.results);
        //Sometimes we have more than 20 pages and i only want to display a max of 20, so i set a max of 20 and a min of the total pages available.
        setTotalPages(Math.min(resData.data.total_pages, 20));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query, page]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  return (
    <>
      <Heading>Results</Heading>
      <Div>
        <Container>
          {movies?.map((movie) => {
            return (
              <ItemsContainer key={movie.id}>
                <Card key={movie.id}>
                  {movie.poster_path ? (
                    <Img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                  ) : (
                    <Img src="/poster_not_found.png" alt="Poster Not Found" />
                  )}
                  <Title>{movie.title}</Title>
                  <RatingContainer>
                    <Icon icon={star} style={{ color: "var(--mint)" }} />
                    <p> {movie.vote_average}</p>
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
  width: 252px;
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

export default SearchResults;
