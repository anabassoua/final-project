import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import SideBar from "./SideBar";
import Homepage from "./Homepage";
import Header from "./Header";
import Profile from "./Profile";
import SignUp from "./SignUp";

const App = () => {
  const excludedRoutes = ["/signup"];
  const location = useLocation();
  const renderHeaderAndSidebar = !excludedRoutes.includes(location.pathname);
  return (
    <>
      <GlobalStyles />
      <Main>
        {renderHeaderAndSidebar && <SideBar />}
        <RightContainer>
          {renderHeaderAndSidebar && <Header />}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </RightContainer>
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  width: 100%;
`;
export default App;
