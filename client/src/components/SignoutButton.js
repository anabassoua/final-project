import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { signOut } from "react-icons-kit/oct/signOut";

const SignoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Button onClick={() => logout()}>
        <Icon icon={signOut} />
        <p>Sign out</p>
      </Button>
    )
  );
};

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
  }
`;

export default SignoutButton;
