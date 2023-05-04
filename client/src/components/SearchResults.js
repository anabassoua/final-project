import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";
import { ic_bookmark_border } from "react-icons-kit/md/ic_bookmark_border";
import { spinner8 } from "react-icons-kit/icomoon/spinner8";

const SearchResults = () => {
  const [movies, setMovies] = useState();
  const { user, isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { query } = useParams();

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
    fetch(`/api/search?page=${page}&query=${query}`)
      .then((res) => res.json())
      .then((resData) => {
        setMovies(resData.data.results);
        //Sometimes we have more than 20 pages and i only want to display a max of 20, so i set a max of 20 and a min of the total pages available.
        setTotalPages(Math.min(resData.data.total_pages, 20));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query, page]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  return (
    <div>
      {loading ? (
        <SpinnerContainer>
          <Spinner icon={spinner8} size={70} />
        </SpinnerContainer>
      ) : (
        <>
          <Heading>Results</Heading>
          <Div>
            <Container>
              {movies?.map((movie) => {
                return (
                  <ItemsContainer key={movie.id}>
                    <Card>
                      <Link to={`/movie/${movie.id}`}>
                        {movie.poster_path ? (
                          <Img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                          />
                        ) : (
                          <Img
                            src="/poster_not_found.png"
                            alt="Poster Not Found"
                          />
                        )}
                      </Link>
                      <Title>{movie.title}</Title>
                      <RatingContainer>
                        <Icon icon={star} style={{ color: "var(--mint)" }} />
                        <p> {movie.vote_average}</p>
                      </RatingContainer>
                      {isAuthenticated ? (
                        <Button onClick={() => addToWatchlist(movie)}>
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
  position: relative;
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

export default SearchResults;
