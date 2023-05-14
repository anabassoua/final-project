import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import SideBar from "./SideBar";
import Homepage from "./Homepage";
import Header from "./Header";
import Profile from "./Profile";
import SignUp from "./SignUp";
import Popular from "./Popular";
import SearchResults from "./SearchResults";
import Watchlist from "./Watchlist";
import MovieDetails from "./MovieDetails";
import MovieByGenre from "./MovieByGenre";

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
            <Route path="/movie/:movieId" element={<MovieDetails />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/results/:query" element={<SearchResults />} />
            <Route path="/genre/:genre" element={<MovieByGenre />} />
            <Route path="/popular" element={<Popular />} />
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
