import FoodList from '../FoodList/FoodList'
import SearchFood from '../SearchFood/SearchFood'
import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import getFood from '../../services/getFood'
import SumFootprint from '../SumFootprint/SumFootprint'
import PurchaseList from '../PurchaseList/PurchaseList'

export default function AddPurchase() {
  const [foodList, setFoodList] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [purchasedFood, setPurchasedFood] = useState([])
  const [foodListModal, setFoodListModal] = useState(false)
  const [carbonFootprintSum, setCarbonFootprintSum] = useState(0)
  const [pointerPosition, setPointerPosition] = useState(0)

  useEffect(() => {
    getFood()
      .then((data) => setFoodList(data))
      .catch((error) => console.log(error))
  }, [])

  function handleChange(event) {
    setSearchInput(event.target.value)
  }

  function toggleFoodListModal() {
    setFoodListModal(!foodListModal)
  }

  const filteredFoodList = foodList.filter((foodListItem) =>
    foodListItem.food.toLowerCase().includes(searchInput.toLowerCase())
  )

  function addPurchasedFood(id) {
    const addedItem = foodList.find((foodItem) => foodItem.id === id)
    setPurchasedFood([...purchasedFood, addedItem])
    setCarbonFootprintSum(carbonFootprintSum + addedItem.co2)
    setFoodListModal(!foodListModal)
    setPointerPosition(carbonFootprintSum === 9 ? 10 : 80)
  }

  return (
    <WhiteBox>
      <WrapperStyled>
        <SumFootprint
          sum={carbonFootprintSum}
          pointerPosition={pointerPosition}
        />
        <SearchFood
          handleChange={handleChange}
          onSearchClick={toggleFoodListModal}
        />
        {foodListModal && (
          <FoodList foodList={filteredFoodList} onAddItem={addPurchasedFood} />
        )}
        <PurchaseList purchasedFood={purchasedFood}></PurchaseList>
      </WrapperStyled>
    </WhiteBox>
  )
}

const WhiteBox = styled.div`
  width: 100%;
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
