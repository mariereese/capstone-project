import foodData from '../../data/foodData.json'
import styled from 'styled-components/macro'

export default function FoodList() {
  return (
    <FoodListStyled>
      {foodData.map((food) => (
        <FoodListItem>{food.food}</FoodListItem>
      ))}
    </FoodListStyled>
  )
}

const FoodListStyled = styled.ul`
  margin: 0 20px;
  box-shadow: 0 0 10px #767670;
  border-radius: 21px;
  width: auto;
  max-width: 350px;
  min-width: 270px;
  height: 387px;
  background: white;
  padding: 1px 2px;
  padding: 0;
  overflow: auto;
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
