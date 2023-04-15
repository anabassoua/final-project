import { useState, useEffect } from "react";
import styled from "styled-components";
import avatar from "../assets/avatar_icon.png";
import DropDownProfile from "./DropDownProfile";
import { useAuth0 } from "@auth0/auth0-react";
import Search from "./Search";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  // useEffect(() => {
  //   setOpenProfile(false);
  // }, []);

  if (isLoading) {
    return <div>is loading..</div>;
  }
  return (
    <Container>
      <Search />
      <ProfileDiv>
        {openProfile && <DropDownProfile />}
        {isAuthenticated ? (
          <Img
            src={user.picture}
            alt="picture"
            onClick={() => setOpenProfile((openProfile) => !openProfile)}
          />
        ) : (
          <Img
            src={avatar}
            alt="avatar"
            onClick={() => setOpenProfile((openProfile) => !openProfile)}
          />
        )}
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
  background-color: var(--richblack-bg);
  /* border: 1px solid red; */
`;

const Img = styled.img`
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
`;

const ProfileDiv = styled.div`
  display: flex;
`;
export default Header;
