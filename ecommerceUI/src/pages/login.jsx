import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
//import {mobile} from "../responsive";
import { createGlobalStyle } from 'styled-components';
import "./logincontainer.css"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";




const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    
    transition: transform 0.6s ease-in-out;
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    height: 100vh;
    margin: -20px 0 50px;
  }
  h1 {
    font-weight: bold;
    margin: 0;
    text-align: center;
  }
  
  h2 {
    text-align: center;
  }
  
  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }
  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }
  form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    
  }
  
  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    border-radius: 5px;
  }
`;

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  display: flex;
  
  ${props =>
    props.isSignup &&
    `
    transform: translateX(-100%);
  `}
`;

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  ${props =>
    props.isSignup &&
    `
    transform: translateX(100%);
  `}
`;



const SignInContainer = styled(FormContainer)`
  left: 0;
  width: 50%;
  z-index: 2;
`;

const SignUpContainer = styled(FormContainer)`
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props =>
    props.isSignup &&
    `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: ${show} 0.6s;
  `}
`;

const show = keyframes`
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
`;



const Button = styled.button`
border-radius: 24px;
border: 1px solid #67AD5B;
background-color: #67AD5B;
color: #ffffff;
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in;
&:active {
    transform: scale(0.95);
  }

&:focus {
    outline: none;
  }

&.ghost {
    background-color: transparent;
    border-color: #ffffff;
    }
  &:disabled{
    color:#ffffff;
    cursor: not-allowed;
  }
`;



const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
border-radius: 5px;
  
`;

const ERROR=styled.span`
color:red;
`



const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [Email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (

    <>
      <GlobalStyles />
    
    <Container className={`container ${isSignup ? "right-panel-active" : ""}`}>
      <SignUpContainer className="form-container sign-up-container">
        <form action="">
            <h1>Create Account</h1>
            <br />
            
            <Input type="text" name="name" placeholder="name"  />
            <Input type="email" name="email" placeholder="Email"  />
            <Input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <Input type="password" name="confirm-password" placeholder="Confirm-Password" />
            <br />
            <Button>Sign Up</Button>
          </form>
      </SignUpContainer>
      <SignInContainer isSignup={isSignup} className="form-container sign-in-container">
      <form action="#">
            <h1>Sign In</h1>
           
            <br />
           
            <Input placeholder="username"  onChange={(e) => setUsername(e.target.value)}/>
            <Input placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
            
            
            <Button onClick={handleClick} disabled={isFetching}>Sign In</Button>
            {error && <ERROR>Something went wrong</ERROR>}
            <a href="#">Forgot Your Password</a>
          </form>
      </SignInContainer>
      <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
              Fuel Your Day with Veggies!
              </p>
              <Button className="ghost" onClick={toggleForm}>
                Sign In
              </Button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Sign Up for a Healthy Harvest <br /> – Let's Get Started!</p>
              <Button className="ghost" onClick={toggleForm}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
    </Container>
    </>
  );
};

export default Login;
