import { IoMdAdd, IoMdRemove } from "react-icons/io";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import{ addProduct} from "../redux/cartRedux";
import { mobile } from "../responsive"

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 85%;
  height: 85%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 500;
  font-size: 30px;

`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;


const Product = () => {
  
  const location = useLocation();
  console.log(location);
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

console.log(id);

  useEffect(() => {
    console.log(id);
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        console.log("API Response:", res.data);

        setProduct(res.data);
      } catch(error){
        console.error("API Error:", error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

   const handleClick = () => {
    dispatch(
      addProduct({...product, quantity})
    );
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aspernatur accusantium accusamus animi! Dicta aspernatur, rem accusantium quibusdam adipisci atque.
          </Desc>
          <Price>₹{product.price}</Price>
          <FilterContainer>
            
            <Filter>
              <FilterTitle>Quantity</FilterTitle>
              <FilterSize>
                <FilterSizeOption>1kg</FilterSizeOption>
                <FilterSizeOption>2kg</FilterSizeOption>
                <FilterSizeOption>3kg</FilterSizeOption>
                <FilterSizeOption>4kg</FilterSizeOption>
                <FilterSizeOption>5kg</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <IoMdRemove onClick={()=>handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <IoMdAdd onClick={()=>handleQuantity("aec")}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;