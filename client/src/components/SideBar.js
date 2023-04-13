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
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <BarContainer>
      <Div to="/">Movie Finder</Div>
      <Categories>
        <Genres>Genres</Genres>
        <MenuLink to="/genre/action">
          <FontAwesomeIcon icon={faFistRaised} />
          <p>Action</p>
        </MenuLink>
        <MenuLink to="/genre/adventure">
          <FontAwesomeIcon icon={faCompass} />
          <p>Adventure</p>
        </MenuLink>
        <MenuLink to="/genre/comedy">
          <FontAwesomeIcon icon={faGrinSquintTears} />
          <p>Comedy</p>
        </MenuLink>
        <MenuLink to="/genre/drama">
          <FontAwesomeIcon icon={faTheaterMasks} />
          <p>Drama</p>
        </MenuLink>
        <MenuLink to="/genre/horror">
          <FontAwesomeIcon icon={faGhost} />
          <p>Horror</p>
        </MenuLink>
        <MenuLink to="/genre/scifiction">
          <FontAwesomeIcon icon={faRocket} />
          <p>Science Fiction</p>
        </MenuLink>
        <MenuLink to="/genre/thriller">
          <FontAwesomeIcon icon={faMask} />
          <p>Thriller</p>
        </MenuLink>
        <div>
          <TopRated>Top Rated</TopRated>
        </div>
        <div>
          <Popular to="/popular">Popular</Popular>
        </div>
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
  font-size: 1.4rem;
  padding-left: 15px;
  color: var(--mint);
`;

const TopRated = styled.div`
  font-style: italic;
  font-size: 1.4rem;
  padding-left: 15px;
  padding-top: 20px;
`;
const Popular = styled(Link)`
  font-style: italic;
  font-size: 1.4rem;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 20px;
`;

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
