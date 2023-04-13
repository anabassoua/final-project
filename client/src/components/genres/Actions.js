import styled from "styled-components";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";

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
    <div>
      {actions.map((action) => {
        return <div key={action.id}>{action.title}</div>;
      })}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Actions;