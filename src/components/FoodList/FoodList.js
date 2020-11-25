//import foodData from '../../../public/foodData.json'
import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import getFood from '../../services/getFood'

export default function FoodList() {
  const [foodList, setFoodList] = useState([])

  useEffect(() => {
    getFood()
      .then((data) => setFoodList(data))
      .catch((error) => console.log(error))
  }, [])

  //function searchFood() {}

  return (
    <FoodListStyled>
      {foodList.map((foodItem) => (
        <FoodListItem>{foodItem.food}</FoodListItem>
      ))}
    </FoodListStyled>
  )
}

const FoodListStyled = styled.ul`
  margin: 0 20px;
  box-shadow: 0 0 10px #767670;
  border-radius: 21px;
  width: 100%;
  height: 387px;
  background: white;
  padding: 0;
  overflow-y: auto;
  overflow-y: scroll;
`

const FoodListItem = styled.li`
  list-style-type: none;
  padding: 6px 10px;
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  font-size: 1.25rem;
  color: #3f3f3b;
`
