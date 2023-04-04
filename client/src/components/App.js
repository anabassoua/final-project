import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import SideBar from "./SideBar";
import Homepage from "./Homepage";
import Header from "./Header";
import Profile from "./Profile";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Main>
        <SideBar />
        <RightContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </RightContainer>
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  width: 100%;
`;
export default App;
