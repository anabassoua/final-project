import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { user } = useAuth0();
  return <div>{JSON.stringify(user, null, 2)}</div>;
};

export default HomePage;
