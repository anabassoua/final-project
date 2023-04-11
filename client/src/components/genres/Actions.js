import styled from "styled-components";
import { useState, useEffect } from "react";

const Actions = () => {
  const [actions, setActions] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`/genre/actions?page=${page}`)
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
    </div>
  );
};

export default Actions;
