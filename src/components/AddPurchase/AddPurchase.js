import FoodList from '../FoodList/FoodList'
import SearchFood from '../SearchFood/SearchFood'
import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import getFood from '../../services/getFood'

export default function AddPurchase() {
  const [foodList, setFoodList] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [purchasedFood, setPurchasedFood] = useState([])

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

  function addPurchasedFood(id) {
    setPurchasedFood([
      ...purchasedFood,
      foodList.filter((foodItem) => id === foodItem.id),
    ])
  }

  return (
    <WhiteBox>
      <WrapperStyled>
        <SearchFood handleChange={handleChange} />
        <FoodList
          onAddItem={() => addPurchasedFood(foodList.id)}
          foodList={filteredFoodList}
        />
        <PurchaseCard>
          <h2>Einkauf:</h2>
          <ul>
            {purchasedFood.map(({ food, id }) => (
              <li key={id}>{food}</li>
            ))}
          </ul>
        </PurchaseCard>
      </WrapperStyled>
    </WhiteBox>
  )
}

const WhiteBox = styled.div`
  position: absolute;
  box-shadow: 0 0 10px var(--light-grey);
  border-top-left-radius: 21px;
  border-top-right-radius: 21px;
  background-color: white;
`

const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 20px;
  row-gap: 12px;
`

const PurchaseCard = styled.div`
  box-shadow: 0 0 10px var(--light-grey);
  border: none;
  border-radius: 21px;
  width: 100%;
  height: 370px;
`
