import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import getFood from '../../services/getFood'

export default function FoodList() {
  const [foodList, setFoodList] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    getFood()
      .then((data) => setFoodList(data))
      .catch((error) => console.log(error))
  }, [])

  function handleChange(event) {
    setSearchInput(event.target.value)
  }

  const filteredFoodList = foodList.filter((foodListItem) =>
    foodListItem.food.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <>
      <form>
        <SearchBar
          type="text"
          placeholder="suchen..."
          onChange={handleChange}
        />
      </form>
      <FoodListStyled>
        {filteredFoodList.map(({ id, food }) => (
          <FoodListItem key={id}>{food}</FoodListItem>
        ))}
      </FoodListStyled>
    </>
  )
}

const FoodListStyled = styled.ul`
  margin: 0 20px;
  box-shadow: 0 0 10px var(--light-grey);
  border-radius: 21px;
  width: 100%;
  max-height: 387px;
  background: white;
  padding: 0;
  overflow-y: auto;
  overflow-y: scroll;
`

const FoodListItem = styled.li`
  list-style-type: none;
  padding: 6px 10px;
  font-weight: 300;
  font-size: 1.25rem;
  color: var(--dark-grey);
`

const SearchBar = styled.input`
  display: block;
  margin: 10px 20px;
  box-shadow: 0 0 10px var(--light-grey);
  border: none;
  border-radius: 21px;
  width: 100%;
  height: 40px;
  padding-left: 15px;
  font-size: 1.125rem;
`
