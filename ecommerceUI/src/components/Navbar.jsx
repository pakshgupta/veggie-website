import React from 'react'
import { styled } from 'styled-components'
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { mobile } from "../responsive";
import { Link, BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
const Container = styled.div`
    height:70px;
    padding-bottom:30px;
    box-shadow:0 .1rem 1rem rgb(100, 100, 100);
    ${mobile({ height: "50px" })} 
`

const Wrapper = styled.div`
  padding:0px 10px ;
  display:flex;
  justify-content:space-between;
  align-items:center;
  position: sticky;
  ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
flex:2;
display:flex;
align-items:center;
`
const Right = styled.div`
flex:2;
justify-content:flex-end;
display:flex;
align-items:center;
${mobile({ flex: 2, justifyContent: "center" })}

${mobile({ flex: 2, justifyContent: "center" })}
`
const Logo = styled.h1`
font-weight:bold; 
color: rgb(28, 135, 40);
font-family: "sans-serif";
${mobile({ fontSize: "10px" })}
`

const SearchContainer = styled.div`
margin:10px;
border:0.5px solid lightgrey; 
display:flex;
align-items:center;
padding:10px;
`

const Input = styled.input`
font-size:20px;
border:none;
${mobile({ width: "50px" })}
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const MenuItem = styled.div`
  font-size:20px;
  cursor:pointer;
  margin-left:25px;
  padding:10px;
  color:black; 
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  text-decoration:none;
  `
const Nav = styled.nav`
    .navbar-list{
        display:flex;
        gap:3rem;
        li{
            list-style:none;
            .navbar-link{
                &:link,
                &:visited{
                    display:inline-block;
                    text-decoration:none;
                    font-size: 1.2rem;
                    text-transform:uppercase;
                    color: rgb(0, 0, 0);
                    font-family: "sans-serif";
                    
                }
            }
        }
    }
    
    `;

    const NavHeading = styled.nav`
    .Heading-list{
        display:flex;
        li{
            list-style:none;
            .navbar-link-heading{
                &:link,
                &:visited{
                  font-weight:bold;
                    display:inline-block;
                    text-decoration:none;
                    font-size: 35px;
                    text-transform:uppercase;
                    color: rgb(28, 135, 40);
                    font-family: "sans-serif";
                }
            }
        }
    }
    
    `;
const Navbar = () => {
  const quantity =useSelector(state=>state.cart.quantity)
  
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <NavHeading>
            <div className='Headingicon'>
              <ul className='Heading-list'>
                <li>
                  
                  <Logo><NavLink className="navbar-link-heading" to="/">Veggie Bazaar</NavLink></Logo>
                
                </li>
              </ul>
            </div>
          </NavHeading>
        </Left>
        <SearchContainer>
          <Input placeholder="Search" />

          <AiOutlineSearch style={{ fontSize: '25px' }} />
        </SearchContainer>

        <Right>
          < Nav >
            <div className='menuicon'>
              <ul className='navbar-list'>
                <li>
                  <NavLink className="navbar-link" to="/login">Sign in</NavLink>
                </li>
                <li>
                  <NavLink className="navbar-link" to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink className="navbar-link" to="http://192.168.1.5:8501">Predict</NavLink>
                </li>
                <li>
                  <NavLink className="navbar-link" to="/Cart"><AiOutlineShoppingCart style={{ fontSize: '25px' }} /></NavLink>
                </li>
              </ul>
            </div>
          </Nav >
        </Right>
      </Wrapper>

    </Container>
  )
}

export default Navbar