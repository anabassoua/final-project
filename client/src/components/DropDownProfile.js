import styled from "styled-components";
import SigninButton from "./SigninButton";
import SignoutButton from "./SignoutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Icon } from "react-icons-kit";
import { person } from "react-icons-kit/oct/person";
import { userAdd } from "react-icons-kit/typicons/userAdd";

const DropDownProfile = () => {
  const { user, loginWithRedirect } = useAuth0();
  return (
    <Container>
      <SigninButton />
      {!user ? (
        <Button onClick={() => loginWithRedirect()}>
          <Icon icon={userAdd} />
          <p>Sign up</p>
        </Button>
      ) : null}

      <SignoutButton />
      <Button>
        <Icon icon={person} />
        <Li to="/profile">Profile</Li>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 6.2rem;
  right: 0.5rem;
  /* border-radius: 10px; */
  background-color: var(--richblack-bg);
  border: 1px solid var(--oxfordblue-bg);
  width: 100px;
  height: auto;
  color: gray;
  padding: 5px;
  line-height: 1.5rem;
  z-index: 1000;

  &::before {
    /* content: ""; */
    position: absolute;
    top: -0.4rem;
    right: 2rem;
    width: 14px;
    height: 17px;
    transform: rotate(60deg);
    background-color: #fff;
  }
`;
const Button = styled.button`
  display: flex;
  gap: 5px;
  background: none;
  border: none;
  color: #fff;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: var(--oxfordblue-bg);
    transition: ease-in-out 0.2s;
  }
`;

const Li = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  &:hover {
    /* background-color: #fff; */
    color: var(--oxfordblue-bg);
  }
`;

export default DropDownProfile;
