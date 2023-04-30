import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { signIn } from "react-icons-kit/oct/signIn";

const SigninButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()}>
        <Icon icon={signIn} />
        <p>Sign in</p>
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
    transition: ease-in-out 0.2s;
  }
`;
export default SigninButton;
