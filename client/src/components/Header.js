import { useState } from "react";
import styled from "styled-components";
import avatar from "../assets/avatar_icon.png";
import DropDownProfile from "./DropDownProfile";
const Header = () => {
  // const [openProfile, setOpenProfile] = useState(false);
  return (
    <Container>
      <Input type="text" placeholder="Search"></Input>
      <ProfileDiv>
        <button>Sign in</button>
        <button>Sign up</button>
        <Img src={avatar} alt="avatar" />
        {/* {openProfile && <DropDownProfile />} */}
      </ProfileDiv>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  height: 100px;
  width: auto;
  border: 1px solid red;
`;

const Input = styled.input`
  width: 400px;
  height: 25px;
  background-color: #393939;
  border-radius: 20px;
  border: none;
  color: #fff;
  padding-left: 15px;
  margin-left: 100px;
  outline: none;
`;

const Img = styled.img`
  height: 40px;
  cursor: pointer;
`;

const ProfileDiv = styled.div`
  display: flex;
`;
export default Header;
