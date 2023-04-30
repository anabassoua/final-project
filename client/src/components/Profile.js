import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Icon } from "react-icons-kit";
import { trashO } from "react-icons-kit/fa/trashO";
import { format } from "date-fns";
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

  const formattedDate = format(
    new Date(user.updated_at),
    "MMMM dd, yyyy, 'at' HH:mm:ss 'UTC'"
  );

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
          <Div>
            <Img src={user.picture} alt="user picture" />
            <P>Welcome, {user.nickname}</P>
            <Updated>Last updated at:{formattedDate}</Updated>
          </Div>
          <SecDiv>
            <Warning>
              If you click on the button below your account will disappear!
            </Warning>
            <Button onClick={handleDeleteUser}>
              <Icon icon={trashO} />
              <p>DELETE</p>
            </Button>
          </SecDiv>
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
  width: 800px;
  height: 520px;
  margin: auto;
  gap: 15px;
  padding: 15px;
`;

const Div = styled.div`
  /* border: 1px solid green; */
  height: 300px;
  width: 500px;
  border-radius: 10px;
  background-color: var(--richblack-bg);
  color: #fff;
  text-align: center;
`;

const SecDiv = styled.div`
  padding: 15px;
  height: 100px;
  width: 500px;
  background-color: var(--richblack-bg);
  color: #fff;
  text-align: center;
`;

const P = styled.p`
  font-size: 2rem;
  margin-top: 15px;
`;

const Warning = styled.p`
  font-style: italic;
  color: red;
`;

const Updated = styled.p`
  margin-top: 10px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  border: none;
  padding: 10px;
  background-color: blue;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: red;
    transition: ease-in-out 1.3s;
  }
`;
const Img = styled.img`
  border-radius: 50%;
  height: 60px;
  margin-top: 10px;
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Profile;
