import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { mobile } from "../responsive";
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  
  const location=useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters,setFilters]=useState({});
  const [sort,setSort]=useState("newest");

  const handleFilters=(e) => {
    const value=e.target.value;
    setFilters({
      ...filters,
     [e.target.name]: value,
    });
  };
 
 
  return (
    <Container>
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          {/* 1st Filter */}
          <Select name="categories" onChange={handleFilters}> 
            <Option disabled >
              Category
            </Option>
            <Option>fruits</Option>
            <Option>vegetables</Option>
          </Select>
          {/* 2nd filter */}
          <Select name="rating" onChange={handleFilters}>
            <Option disabled >
              rating
            </Option>
            <Option>5</Option>
            <Option>4</Option>
            <Option>3.5</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value="newest">newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;