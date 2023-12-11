import { AiOutlineSend } from "react-icons/ai";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 40vh;
  background-image: url(https://img.freepik.com/free-photo/gray-abstract-wireframe-technology-background_53876-101941.jpg?w=1060&t=st=1691337881~exp=1691338481~hmac=6c732ea6096ac84869f817649d75a17e67903dc1905c8b7f5021b4dbb9bae501);
  background-size: 1800px 900px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color:rgba(0,0,0,0.6);
  font-size: 35px;
  margin-bottom: 10px;
`;

const Desc = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 30px;
  ${mobile({ textAlign: "center" })}
  text-transform: uppercase;

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
 
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Sign Up For Latest Updates And Offers</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <AiOutlineSend />
        </Button>
      </InputContainer>

    </Container>
  );
};

export default Newsletter;