import styled from "styled-components";
import SigninButton from "./SigninButton";
import SignoutButton from "./SignoutButton";
import { Link } from "react-router-dom";

const DropDownProfile = () => {
  return (
    <Div>
      <div>{<SigninButton />}</div>
      <div>Sign up</div>
      <div>{<SignoutButton />}</div>
      <Li to="/profile">Profile</Li>
    </Div>
  );
};

const Div = styled.div`
  position: absolute;
  top: 5rem;
  right: 0.5rem;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid gray;
  width: 100px;
  height: 100px;
  color: gray;
  padding: 15px;
  line-height: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    top: -0.4rem;
    right: 2rem;
    width: 14px;
    height: 17px;
    transform: rotate(60deg);
    background-color: #fff;
  }
`;

const Li = styled(Link)``;
export default DropDownProfile;
