import styled from "styled-components";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <BarContainer>
      <Div to="/">Movie Finder</Div>
      <div>list</div>
    </BarContainer>
  );
};

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: var(--richblack-bg);
  width: 250px;
  height: 100vh;
  flex-shrink: 0;
  gap: 10px;
`;

const Div = styled(Link)`
  font-family: var(--font-logo);
  color: var(--mint);
  padding-top: 35px;
  border: 1px solid green;
  font-size: 2rem;
  text-decoration: inherit;
`;

export default SideBar;
