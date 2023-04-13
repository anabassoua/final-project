import styled from "styled-components";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";

const Thriller = () => {
  const [thriller, setThriller] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 20;

  useEffect(() => {
    fetch(`/genre/thriller?page=${page}`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setThriller(resData.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <div>
      {thriller.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Thriller;
