import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";


const AboutContainer = styled.div`
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const Main = styled.h1`
font-size: 50px;
  display: flex;
  padding: 20px;
  align-items: Left;
  justify-content: Left;

`;

const TextContainer = styled.div`
  flex: 1;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SubHeading = styled.h3`
  font-size: 20px;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 10px 0;
`;

const Image = styled.img`
    height: 40%;  
    width: 40%;
`;

const AboutSection = () => {
  return (
    <div>
    <Navbar />
     
    <AboutContainer>
      <TextContainer>
      <Main>About Us</Main>  
      <Heading> Veggie Bazaar: Fresh and Honest Harvest</Heading>
      <Paragraph>
        Welcome to Veggie Bazaar, your one-stop destination for farm-fresh goodness! At Veggie Bazaar, we believe in the power of wholesome, nutritious produce that not only benefits your well-being but also supports local farming communities. Our mission is simple yet profound: to bridge the gap between discerning consumers and hardworking farmers, all while offering the finest fruits and vegetables at genuine costs.
      </Paragraph>
      <SubHeading>Our Commitment to Quality</SubHeading>
      <Paragraph>
        At Veggie Bazaar, we take pride in curating a delectable assortment of fruits and vegetables that are carefully handpicked from local farms across the state. Our dedication to quality ensures that every bite is a burst of flavor and vitality, straight from the heart of nature. Each produce item is rigorously inspected to meet our stringent standards, guaranteeing that you receive nothing but the best Mother Earth has to offer.
      </Paragraph>
      <SubHeading>Empowering Farmers</SubHeading>
      <Paragraph>
        We are more than just an online marketplace; we are a platform that stands firmly with our farming partners. Our initiative is rooted in uplifting local farmers, providing them with a fair platform to showcase their hard work and dedication. By purchasing from Veggie Bazaar, you contribute directly to the livelihoods of these farmers, enabling them to continue their sustainable agricultural practices and fostering a stronger, more vibrant community.
      </Paragraph>
      {/* Additional sections can be added here */}
      <SubHeading>Join Our Green Movement</SubHeading>
      <Paragraph>
        When you choose Veggie Bazaar, you're not just making a purchase; you're joining a movement that champions ethical, eco-friendly choices. We are dedicated to reducing food waste and minimizing our carbon footprint, all while promoting healthy eating habits that nurture both you and the environment.
      </Paragraph>
      <SubHeading>Contact Us</SubHeading>
      <Paragraph>
        Have a question or need assistance? Our dedicated customer support team is always here to help. Feel free to reach out to us via email, phone, or our online chat, and we'll be delighted to assist you.
      </Paragraph>
      <Paragraph>
        At Veggie Bazaar, we're not just selling fruits and vegetables – we're cultivating a community built on transparency, integrity, and a shared love for nature's bounty. Join us on this journey towards a healthier, happier tomorrow, one fresh harvest at a time.
      </Paragraph>
      </TextContainer>
      <Image src="https://img.freepik.com/free-vector/organic-farming-with-man-field_23-2148426805.jpg?w=740&t=st=1691473946~exp=1691474546~hmac=d78c871743cb111a4fd908f1b38c61910332fd104f97427ae8d236f656cb4773" alt="Veggie Bazaar Logo" />
      
    </AboutContainer>
    <Footer />
    </div>
  );
};

export default AboutSection;
