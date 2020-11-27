import FoodList from '../FoodList/FoodList'
import SearchFood from '../SearchFood/SearchFood'
import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import getFood from '../../services/getFood'

export default function AddPurchase() {
  // const [purchasedFood, setPurchasedFood] = useState([])

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
    <WrapperStyled>
      <SearchFood handleChange={handleChange} />
      <FoodList foodList={filteredFoodList} />
      <PurchaseCard>
        <h2>Einkauf:</h2>
        {/* <ul>
          purchasedFood.map(({(food, id)}) => (<li>{food}</li>
          ))
        </ul> */}
      </PurchaseCard>
    </WrapperStyled>
  )
}

const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 380px;
  row-gap: 12px;
  margin: 20px;
`

const PurchaseCard = styled.div`
  box-shadow: 0 0 10px var(--light-grey);
  border: none;
  border-radius: 21px;
  width: 100%;
  height: 370px;
`
