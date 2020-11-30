import FoodList from '../FoodList/FoodList'
import SearchFood from '../SearchFood/SearchFood'
import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import getFood from '../../services/getFood'
import SumFootprint from '../SumFootprint/SumFootprint'

export default function AddPurchase() {
  const [foodList, setFoodList] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [purchasedFood, setPurchasedFood] = useState([])
  const [foodListModal, setFoodListModal] = useState(false)
  const [carbonFootprintSum, setCarbonFootprintSum] = useState(0)

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
    console.log(carbonFootprintSum)
    const addedItem = foodList.find((foodItem) => foodItem.id === id)
    setPurchasedFood([...purchasedFood, addedItem])
    setCarbonFootprintSum(carbonFootprintSum + addedItem.co2)
    setFoodListModal(!foodListModal)
  }

  return (
    <WhiteBox>
      <WrapperStyled>
        <SumFootprint sum={carbonFootprintSum} />
        <SearchFood
          handleChange={handleChange}
          onSearchClick={toggleFoodListModal}
        />
        {foodListModal && (
          <FoodList foodList={filteredFoodList} onAddItem={addPurchasedFood} />
        )}
        <PurchaseCard>
          <h2>Einkauf:</h2>
          <ul>
            {purchasedFood?.map(({ food, id, co2 }) => (
              <PurchasedFood key={id}>
                <p>{food}</p>
                <p>1000g</p>
              </PurchasedFood>
            ))}
          </ul>
        </PurchaseCard>
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

const PurchaseCard = styled.div`
  box-shadow: 0 0 10px var(--light-grey);
  border: none;
  border-radius: 21px;
  width: 100%;
  height: 370px;

  ul {
    margin: 0;
    padding: 0;
  }
`

const PurchasedFood = styled.li`
  display: flex;
  justify-content: space-between;
  color: var(--light-grey);
  list-style-type: none;
  font-weight: 300;
  margin: 0 13px 0.4em;

  p {
    margin: 0;
    font-size: 1.25rem;
  }
`
