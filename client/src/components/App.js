import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import SideBar from "./SideBar";
import Homepage from "./Homepage";
import Header from "./Header";
import Profile from "./Profile";
import SignUp from "./SignUp";
import Actions from "./genres/Actions";
import Horror from "./genres/Horror";
import Adventure from "./genres/Adventure";
import Comedy from "./genres/Comedy";
import Drama from "./genres/Drama";
import Scifiction from "./genres/Scifiction";
import Thriller from "./genres/Thriller";

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
            <Route path="/genre/action" element={<Actions />} />
            <Route path="/genre/adventure" element={<Adventure />} />
            <Route path="/genre/comedy" element={<Comedy />} />
            <Route path="/genre/drama" element={<Drama />} />
            <Route path="/genre/horror" element={<Horror />} />
            <Route path="/genre/scifiction" element={<Scifiction />} />
            <Route path="/genre/thriller" element={<Thriller />} />
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
  width: calc(100% - 250px);
`;
export default App;
