import styled from "styled-components";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({});

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const ValidateForm = () => {
    if (formData.password !== formData.confirm) {
      setError("Password do not match!");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = ValidateForm();
    if (isValid) {
      console.log("ok");
    }
  };
  return (
    <Container>
      <Div>
        <Span>Create Your Account</Span>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Names>
              <Input
                required
                name="firstname"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
              />
              <Input
                required
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </Names>

            <Email
              required
              name="email"
              type="email"
              placeholder="example@email.com"
              onChange={handleChange}
            />

            <Passwords>
              <Input
                required
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <Input
                required
                name="confirm"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </Passwords>
            {error && <div>{error}</div>}
            <SubmitButton type="submit" value="Sign Up" />
          </InputContainer>
        </form>
      </Div>
    </Container>
  );
};

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  background-color: var(--richblack-bg);
  border: 1px solid green;
  width: 600px;
  height: 400px;
  margin: auto;
  margin-top: 100px;
  text-align: center;
  padding: 30px;
`;

const Div = styled.div`
  margin-top: 30px;
`;

const Span = styled.span`
  padding: 15px;
`;

const InputContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100px;
  gap: 20px;
  margin-left: 80px;
`;

const Input = styled.input`
  padding: 10px;
`;

const Email = styled.input`
  width: 319px;
  padding: 10px;
  height: 200px;
`;

const Names = styled.div`
  display: flex;
  gap: 15px;
`;

const Passwords = styled.div`
  display: flex;
  gap: 15px;
`;

const SubmitButton = styled.input`
  background-color: green;
  color: inherit;
  border: none;
  width: 342px;
  padding: 10px;
  height: 200px;
  cursor: pointer;
`;

export default SignUp;
