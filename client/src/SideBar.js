import styled from "styled-components";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <BarContainer>
      <div>
        <Img src={Logo} alt="logo"></Img>
      </div>
    </BarContainer>
  );
};

const BarContainer = styled.div`
  color: #fff;
  background-color: var(--richblack-bg);
  width: 300px;
  height: 100vh;
`;

const Img = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 50%;
`;

export default SideBar;
