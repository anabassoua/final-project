import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value.trim();
      if (query) {
        navigate(`/results/${query}`);
        e.target.value = "";
      }
    }
  };

  return (
    <Input type="text" placeholder="Search" onKeyDown={handleSearch}></Input>
  );
};

const Input = styled.input`
  width: 400px;
  height: 25px;
  background-color: #393939;
  border-radius: 20px;
  border: none;
  color: #fff;
  padding-left: 15px;
  margin-left: 100px;
  outline: none;
`;

export default Search;
