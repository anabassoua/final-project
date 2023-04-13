import styled from "styled-components";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";

const Drama = () => {
  const [drama, setDrama] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 20;

  useEffect(() => {
    fetch(`/genre/drama?page=${page}`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setDrama(resData.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <div>
      {drama.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Drama;
