import React from 'react'
import { styled } from 'styled-components'
import {categories} from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from "../responsive";


const Container=styled.div`
display:flex;
padding: 20px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection:"column" })}
`
const Main=styled.h1`
  font-size:90px;
  padding:20px 0px;
  text-align:center;
`

const Categories = () => {
  return (
    <div>
      <Main>Categories</Main>
      <Container>

        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
      </Container>
    </div>
  )
}

export default Categories