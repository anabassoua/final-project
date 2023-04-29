import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Icon } from "react-icons-kit";
import Spinner from "./Spinner";
import { spinner8 } from "react-icons-kit/icomoon/spinner8";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner icon={spinner8} size={70} />
      </SpinnerContainer>
    );
  }

  //handle deleting user:
  const handleDeleteUser = () => {
    fetch(`/api/delete-user/${user.email}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        logout();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      {isAuthenticated ? (
        <>
          <Div>{user.nickname}</Div>
          <Div>2</Div>
          <Div>
            <button onClick={handleDeleteUser}>DELETE</button>
          </Div>
        </>
      ) : (
        <div>not connected</div>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  width: 800px;
  height: 520px;
  margin: auto;
  gap: 15px;
  padding: 15px;
`;

const Div = styled.div`
  /* border: 1px solid green; */
  height: 200px;
  width: 500px;
  border-radius: 10px;
  background-color: var(--richblack-bg);
  color: #fff;
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Profile;
