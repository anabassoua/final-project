import { useState, useEffect } from "react";
import styled from "styled-components";
import avatar from "../assets/avatar_icon.png";
import DropDownProfile from "./DropDownProfile";
import { useAuth0 } from "@auth0/auth0-react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { bookmark } from "react-icons-kit/oct/bookmark";
import Spinner from "./Spinner";
import { spinner8 } from "react-icons-kit/icomoon/spinner8";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner icon={spinner8} size={70} />
      </SpinnerContainer>
    );
  }

  return (
    <Container>
      <Search />
      <ProfileDiv>
        {openProfile && <DropDownProfile />}
        {isAuthenticated ? (
          <Div>
            <Watchlist to="/watchlist">
              <Icon icon={bookmark} size={20} />
              <p>Watchlist</p>
            </Watchlist>
            <Img
              src={user.picture}
              alt="picture"
              onClick={() => setOpenProfile((openProfile) => !openProfile)}
            />
          </Div>
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

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
`;

const Watchlist = styled(Link)`
  display: flex;
  gap: 15px;
  align-items: center;
  text-decoration: none;
  color: yellow;
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Header;
