import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Header from '../../components/Header/Header'
import PageWrapper from '../../components/PageWrapper'
import FootprintSum from '../../components/FootprintSum/FootprintSum'
import SearchFood from '../../components/SearchFood/SearchFood'
import FoodList from '../../components/FoodList/FoodList'
import PurchaseList from '../../components/PurchaseList/PurchaseList'
import getFood from '../../services/getFood'
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

  function handleSearchInput(event) {
    setSearchInput(event.target.value)
  }

  function toggleFoodListModal() {
    setFoodListModal(!foodListModal)
  }

  const filteredFoodList = foodList.filter((foodListItem) =>
    foodListItem.food.toLowerCase().includes(searchInput.toLowerCase())
  )

  function addFoodAndUpdateFootprintSum(id) {
    const addedItem = foodList.find((foodItem) => foodItem.id === id)
    setPurchasedFood([...purchasedFood, addedItem])
    setCarbonFootprintSum(
      (roundNumber(carbonFootprintSum * 100) +
        roundNumber(addedItem.co2 * 100)) /
        100
    )
    setFoodListModal(!foodListModal)
  }

  function removeFoodAndUpdateFootprintSum(index) {
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

  function roundNumber(number) {
    return parseFloat(number.toFixed(1))
  }

  return (
    <>
      <Header title="Einkauf hinzufügen" />
      <PageWrapper>
        <ContentGrid>
          <FootprintSum
            sum={carbonFootprintSum}
            pointerPosition={pointerPosition}
          />
          <SearchFood
            handleChange={handleSearchInput}
            onSearchClick={toggleFoodListModal}
          />
          {foodListModal && (
            <FoodListModal>
              <FoodList
                foodList={filteredFoodList}
                onAddFood={addFoodAndUpdateFootprintSum}
              />
            </FoodListModal>
          )}
          <PurchaseList
            purchasedFood={purchasedFood}
            onRemoveFood={removeFoodAndUpdateFootprintSum}
          ></PurchaseList>
        </ContentGrid>
        <SaveButton></SaveButton>
      </PageWrapper>
    </>
  )
}

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 20px;
  row-gap: 12px;
`
const FoodListModal = styled.div`
  position: absolute;
  top: 205px;
`

const SaveButton = styled.button`
  width: 72px;
  height: 72px;
  box-shadow: 0 0 6px #e9aa7c;
  border: none;
  border-radius: 100%;
  padding: 1em;
  background: radial-gradient(circle, var(--orange) 51%, #e9aa7c 100%);
  position: fixed;
  bottom: 90px;
  right: 30px;
  z-index: 100;
`
