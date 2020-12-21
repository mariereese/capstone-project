import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Header from '../../components/Header/Header'
import PageWrapper from '../../components/PageWrapper'
import FootprintSum from '../../components/FootprintSum/FootprintSum'
import SearchFood from '../../components/SearchFood/SearchFood'
import FoodList from '../../components/FoodList/FoodList'
import PurchaseList from '../../components/PurchaseList/PurchaseList'
import Navigation from '../../components/Navigation/Navigation'
import { ReactComponent as Save } from '../../images/save-icon.svg'
import getFood from '../../services/getFood'
import loadLocally from '../../lib/loadLocally'
import saveLocally from '../../lib/savelocally'

export default function AddPurchase() {
  const history = useHistory()
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
  const [savedPurchase, setSavedPurchase] = useState(
    loadLocally('savedPurchase') || []
  )

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
    setPurchasedFood([])
    setCarbonFootprintSum(0)
  }, [])

  useEffect(() => {
    saveLocally('purchasedFood', purchasedFood)
  }, [purchasedFood])

  useEffect(() => {
    saveLocally('carbonFootprintSum', carbonFootprintSum)
  }, [carbonFootprintSum])

  useEffect(() => {
    saveLocally('savedPurchase', savedPurchase)
  }, [savedPurchase])

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

  let today = new Date()
  const dd = today.getDate()
  const mm = today.getMonth() + 1
  const yyyy = today.getFullYear()
  today = dd + '.' + mm + '.' + yyyy

  async function savePurchase() {
    await setSavedPurchase([
      ...savedPurchase,
      carbonFootprintSum !== 0
        ? {
            date: today,
            purchasedFood: purchasedFood,
            sum: carbonFootprintSum,
          }
        : {},
    ])
    history.push('/last-purchases')
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
      </PageWrapper>
      <AppNavigation>
        <PlusButton onClick={(history) => savePurchase(history)}>
          <SaveIcon />
        </PlusButton>
        <Navigation />
      </AppNavigation>
    </>
  )
}

const ContentGrid = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 12px;
`
const FoodListModal = styled.div`
  max-width: 360px;
`
const AppNavigation = styled.div`
  max-width: 400px;
  width: 100%;
  position: fixed;
  bottom: 0;
`
const PlusButton = styled.button`
  width: 72px;
  height: 72px;
  box-shadow: 0 0 6px #e9aa7c;
  border: none;
  border-radius: 100%;
  padding: 1em;
  background: radial-gradient(circle, var(--orange) 51%, #e9aa7c 100%);
  position: absolute;
  bottom: 40%;
  left: calc(50% - 36px);

  :hover {
    transform: translateY(-15px);
    transition: transform 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  }
`
const SaveIcon = styled(Save)`
  width: 40px;
  height: auto;
  overflow: visible;
  color: white;
`
