import styled from "styled-components";
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoTwitter, BiLogoYoutube, BiPhone, BiMailSend } from "react-icons/bi";
import { MdRoom } from "react-icons/md";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  background-color: rgb(219, 219, 219);
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-left: 80px;
  

`;

const Logo = styled.h1`
color: rgb(28, 135, 40);
font-family: "sans-serif";
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  padding-left: 250px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
 
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
 
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Veggie Bazaar</Logo>
        <Desc>
        Welcome to Veggie Bazaar, your one-stop destination 
        for farm-fresh goodness! At Veggie Bazaar, we believe 
        in the power of wholesome, nutritious produce that not 
        only benefits your well-being but also supports local 
        farming communities.
        </Desc>

        <SocialContainer>
          <SocialIcon color="3B5999">
            <BiLogoFacebookCircle />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <BiLogoInstagramAlt />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <BiLogoTwitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <BiLogoYoutube />
          </SocialIcon>
        </SocialContainer>
       
      </Left>
      <Center>
        <Title>Our Service</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Login</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MdRoom style={{marginRight:"10px"}}/> Bell Road, Society Area, Clement Town
        </ContactItem>
        <ContactItem>
          <BiPhone style={{marginRight:"10px"}}/> +91 2345657878
        </ContactItem>
        <ContactItem>
          <BiMailSend style={{marginRight:"10px"}} /> veggiebazaar@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;