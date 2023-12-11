import React from 'react'
import { styled } from 'styled-components'
import { useState } from 'react';
import { FiChevronLeft,FiChevronRight} from "react-icons/fi";
import { sliderItems } from '../data';
import { mobile } from "../responsive";


const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    padding-bottom:0px;
    ${mobile({ display: "none" })}
`
const Arrow = styled.div`
width:50px;
height:50px;
border-radius:50%;
display:flex;
align-item:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=> props.direction === 'left' && '10px'};
right:${props=> props.direction === 'right' && '10px'};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`

const Wrapper=styled.div`
height:100%;
display:flex;
transition: all 0.5s ease;
transform:translateX(${props=>props.slideIndex*-100}vw);
`
const Slide=styled.div`
width:100vw;
height:100vh;
  display:flex;
  align-items:center;
`

const ImgContainer=styled.div`
height:100%;
flex=1;
`

const Image=styled.img`
height:80%;
`

const InfoContainer=styled.div`
flex=1;
padding:40px;
`

const Title=styled.h1`
  font-size:70px;
`
const Desc=styled.p`
  margin:50px 0px;
  font-size:20px;
  letter-spacing:2px;
`
const Button=styled.button`
  padding:10px;
  font-size:20px;
  background-color:transparent;
  cursor:pointer;
`

const Space=styled.div`
padding:20px;`

const Slider = () => {
  const [slideIndex,setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Space>
      <Arrow direction="left" onClick={()=>handleClick('left')}>
      <FiChevronLeft/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
        <Slide>
        <ImgContainer><Image src={item.img}/></ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>Shop Now</Button>
        </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick('right')}>
      <FiChevronRight/>
      </Arrow>
      </Space>
    </Container>
  )
}

export default Slider