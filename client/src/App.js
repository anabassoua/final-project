import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import SideBar from "./SideBar";
import Homepage from "./Homepage";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Main>
        <SideBar />
        <Div>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Div>
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  display: flex;
`;

const Div = styled.div`
  width: 100%;
`;
export default App;
