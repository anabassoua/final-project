import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Input type="text" placeholder="Search"></Input>
    </Container>
  );
};

const Container = styled.div`
  padding: 15px;
  height: 70px;
  width: auto;
  border: 1px solid red;
`;

const Input = styled.input`
  width: 400px;
  height: 25px;
  background-color: #393939;
  border-radius: 20px;
  border: none;
  color: #fff;
  padding-left: 15px;
`;
export default Header;
