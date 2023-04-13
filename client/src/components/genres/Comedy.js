import styled from "styled-components";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";

const Comedy = () => {
  const [comedy, setComedy] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 20;

  useEffect(() => {
    fetch(`/genre/comedy?page=${page}`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setComedy(resData.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <div>
      {comedy.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Comedy;