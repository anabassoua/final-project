import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";

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
    <div>
      {movies &&
        movies.map((movie) => {
          return <div key={movie.id}>{movie.title}</div>;
        })}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default SearchResults;
