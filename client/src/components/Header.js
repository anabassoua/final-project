import { useState, useEffect } from "react";
import styled from "styled-components";
import avatar from "../assets/avatar_icon.png";
import DropDownProfile from "./DropDownProfile";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  // useEffect(() => {
  //   setOpenProfile(false);
  // }, []);

  // add the new user :
  // useEffect(() => {
  //   if (user) {
  //     fetch("/api/add-user", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({ user }),
  //     })
  //       .then((res) => res.json())
  //       .then((resData) => {
  //         console.log(resData);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [user]);

  if (isLoading) {
    return <div>is loading..</div>;
  }
  return (
    <Container>
      <Input type="text" placeholder="Search"></Input>
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
  border-radius: 50%;
`;

const ProfileDiv = styled.div`
  display: flex;
`;
export default Header;
