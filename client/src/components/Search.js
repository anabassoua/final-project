import styled from "styled-components";

const Search = () => {
  return <Input type="text" placeholder="Search"></Input>;
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
