import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
const HomePage = () => {
  const { user } = useAuth0();
  return <JSONPretty data={user} />;
};

export default HomePage;
