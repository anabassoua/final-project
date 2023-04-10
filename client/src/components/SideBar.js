import styled from "styled-components";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <BarContainer>
      <Div to="/">Movie Finder</Div>
    </BarContainer>
  );
};

const BarContainer = styled.div`
  color: #fff;
  background-color: var(--richblack-bg);
  width: 250px;
  height: 100vh;
  flex-shrink: 0;
`;

const Div = styled(Link)`
  font-family: var(--font-logo);
  color: var(--mint);
  padding: 15px;
  font-size: 2rem;
  text-decoration: inherit;
`;

export default SideBar;
