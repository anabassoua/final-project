import styled from "styled-components";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";

const Adventure = () => {
  const [adventure, setAdventure] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 20;

  useEffect(() => {
    fetch(`/genre/adventure?page=${page}`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setAdventure(resData.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <div>
      {adventure.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Adventure;
