import styled from "styled-components";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFistRaised,
  faCompass,
  faGrinSquintTears,
  faTheaterMasks,
  faGhost,
  faRocket,
  faMask,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <BarContainer>
      <Div to="/">Movie Finder</Div>
      <Categories>
        <Genres>Genres</Genres>
        <MenuLink to="/genre/action">
          <FontAwesomeIcon
            icon={faFistRaised}
            style={{ color: "var(--mint)" }}
          />
          <p>Action</p>
        </MenuLink>
        <MenuLink to="/genre/adventure">
          <FontAwesomeIcon icon={faCompass} style={{ color: "var(--mint)" }} />
          <p>Adventure</p>
        </MenuLink>
        <MenuLink to="/genre/comedy">
          <FontAwesomeIcon
            icon={faGrinSquintTears}
            style={{ color: "var(--mint)" }}
          />
          <p>Comedy</p>
        </MenuLink>
        <MenuLink to="/genre/drama">
          <FontAwesomeIcon
            icon={faTheaterMasks}
            style={{ color: "var(--mint)" }}
          />
          <p>Drama</p>
        </MenuLink>
        <MenuLink to="/genre/horror">
          <FontAwesomeIcon icon={faGhost} style={{ color: "var(--mint)" }} />
          <p>Horror</p>
        </MenuLink>
        <MenuLink to="/genre/scifiction">
          <FontAwesomeIcon icon={faRocket} style={{ color: "var(--mint)" }} />
          <p>Science Fiction</p>
        </MenuLink>
        <MenuLink to="/genre/thriller">
          <FontAwesomeIcon icon={faMask} style={{ color: "var(--mint)" }} />
          <p>Thriller</p>
        </MenuLink>
        {/* <div>
          <TopRated>Top Rated</TopRated>
        </div> */}
        <PopDiv to="/popular">
          <FontAwesomeIcon icon={faStar} style={{ color: "var(--mint)" }} />
          <p>Popular</p>
        </PopDiv>
      </Categories>
    </BarContainer>
  );
};

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: var(--richblack-bg);
  width: 250px;
  height: 100vh;
  flex-shrink: 0;
  gap: 10px;
`;

const Genres = styled.div`
  font-style: italic;
  font-size: 1.2rem;
  padding-left: 15px;
  /* color: var(--mint); */
  color: #fff;
`;

const PopDiv = styled(Link)`
  display: flex;
  gap: 15px;
  font-size: 1.4rem;
  padding-left: 15px;
  padding-top: 30px;
  text-decoration: none;
  color: inherit;
  margin-top: 38px;
`;
// const Popular = styled(Link)`
//   font-style: italic;
//   font-size: 1.4rem;
//   padding-left: 15px;
//   padding-bottom: 20px;
//   text-decoration: none;
//   color: gray;
// `;

const Div = styled(Link)`
  font-family: var(--font-logo);
  color: var(--mint);
  padding-top: 35px;
  padding-left: 10px;
  /* border: 1px solid green; */
  font-size: 2rem;
  text-decoration: inherit;
`;

const Categories = styled.div`
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuLink = styled(Link)`
  display: flex;
  gap: 15px;
  text-decoration: none;
  color: #fff;
  padding: 12px 35px;
  &:hover {
    background-color: #fff;
    color: var(--richblack-bg);
    transition: ease-in-out 0.5s;
  }
`;
export default SideBar;
