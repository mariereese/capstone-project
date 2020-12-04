import FoodList from '../../components/FoodList/FoodList'
import SearchFood from '../../components/SearchFood/SearchFood'
import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import getFood from '../../services/getFood'
import SumFootprint from '../../components/SumFootprint/SumFootprint'
import PurchaseList from '../../components/PurchaseList/PurchaseList'
import loadLocally from '../../lib/loadLocally'
import saveLocally from '../../lib/savelocally'

export default function AddPurchase() {
  const [foodList, setFoodList] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [purchasedFood, setPurchasedFood] = useState(
    loadLocally('purchasedFood') ?? []
  )
  const [foodListModal, setFoodListModal] = useState(false)
  const [carbonFootprintSum, setCarbonFootprintSum] = useState(
    loadLocally('carbonFootprintSum') ?? 0
  )
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

  function handleAddFood(id) {
    const addedItem = foodList.find((foodItem) => foodItem.id === id)
    setPurchasedFood([...purchasedFood, addedItem])
    setCarbonFootprintSum(
      (roundNumber(carbonFootprintSum * 100) +
        roundNumber(addedItem.co2 * 100)) /
        100
    )
    setFoodListModal(!foodListModal)
  }

  function handleRemoveFood(index) {
    const deletedItem = purchasedFood.find(
      (_, itemPosition) => itemPosition === index
    )
    setPurchasedFood(
      purchasedFood.filter((_, itemPosition) => itemPosition !== index)
    )
    setCarbonFootprintSum(
      (roundNumber(carbonFootprintSum * 100) -
        roundNumber(deletedItem.co2 * 100)) /
        100
    )
  }

  console.log(carbonFootprintSum)

  function roundNumber(number) {
    return parseFloat(number.toFixed(1))
  }

  useEffect(() => {
    setPointerPosition(
      carbonFootprintSum <= 2000 / 365
        ? Math.round((100 / (2000 / 365)) * carbonFootprintSum)
        : 98
    )
  }, [carbonFootprintSum])

  useEffect(() => {
    saveLocally('purchasedFood', purchasedFood)
  }, [purchasedFood])

  useEffect(() => {
    saveLocally('carbonFootprintSum', carbonFootprintSum)
  }, [carbonFootprintSum])

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
              onAddFood={handleAddFood}
              //disabled={isDisabled}
            />
          </FoodListModal>
        )}
        <PurchaseList
          purchasedFood={purchasedFood}
          onRemoveFood={handleRemoveFood}
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
