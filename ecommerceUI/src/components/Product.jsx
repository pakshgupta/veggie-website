import { BiCart } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:hover ${Info} {
    opacity: .6;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 60%;
  width: 70%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductName = styled.h2`
  margin: 10px 0;
  font-size: 18px;
  color: #333;
  text-align: center;
`;

const ProductPrice = styled.p`
  font-weight: 600;
  color: #666;
`;

const Product = ({ item }) => {
  const handleClick = () => {
    window.scrollTo(0, 0); 
  };
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <BiCart />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`} onClick={handleClick}>
          <AiOutlineSearch />
          </Link>
        </Icon>
        <Icon>
          <AiOutlineHeart />
        </Icon>
      </Info>
      <ProductName>{item.name}</ProductName>
      <ProductPrice>₹{item.price.toFixed(2)}</ProductPrice>
    </Container>
  );
};

export default Product;