import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>is loading..</div>;
  }

  //handle deleting user:
  const handleDeleteUser = () => {};

  return (
    <Container>
      {isAuthenticated ? (
        <>
          <Div>{user.nickname}</Div>
          <Div>2</Div>
          <Div>
            <button>DELETE</button>
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
export default Profile;
