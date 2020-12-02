import FoodList from '../../components/FoodList/FoodList'
import SearchFood from '../../components/SearchFood/SearchFood'
import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import getFood from '../../services/getFood'
import SumFootprint from '../../components/SumFootprint/SumFootprint'
import PurchaseList from '../../components/PurchaseList/PurchaseList'

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
    setCarbonFootprintSum(
      (carbonFootprintSum * 100 + addedItem.co2 * 100) / 100
    )
    setFoodListModal(!foodListModal)
  }

  useEffect(() => {
    setPointerPosition(
      carbonFootprintSum <= 2000 / 365
        ? Math.round((100 / (2000 / 365)) * carbonFootprintSum)
        : 98
    )
  }, [carbonFootprintSum])

  function deleteFood(id) {
    const deletedItem = purchasedFood.find((foodItem) => foodItem.id === id)
    setPurchasedFood(purchasedFood.filter((food) => id !== food.id))
    setCarbonFootprintSum(
      (carbonFootprintSum * 100 - deletedItem.co2 * 100) / 100
    )
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
          <FoodListModal>
            <FoodList
              foodList={filteredFoodList}
              onAddItem={addPurchasedFood}
            />
          </FoodListModal>
        )}
        <PurchaseList
          purchasedFood={purchasedFood}
          onDelete={deleteFood}
        ></PurchaseList>
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
const FoodListModal = styled.div`
  position: absolute;
  top: 205px;
`
