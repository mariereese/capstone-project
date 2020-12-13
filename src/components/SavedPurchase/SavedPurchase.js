import { useState } from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as ShoppingBag } from '../../images/shopping-bag.svg'

export default function SavedPurchase({
  carbonFootprintSum,
  purchaseDate,
  purchasedFood,
  index,
}) {
  const [showPurchase, setShowPurchase] = useState(false)

  function toggleShowPurchase(index) {
    setShowPurchase(!showPurchase)
  }

  return (
    <LastPurchaseListItem>
      <PurchaseIcon onClick={() => toggleShowPurchase(index)} />
      <p>{purchaseDate}</p>
      <p>
        {carbonFootprintSum} kg CO<sub>2</sub>
      </p>
      {showPurchase && (
        <SavedPurchasedFood>
          {purchasedFood.map(({ food, co2 }) => (
            <FoodItem>
              <p>{food}</p>
              <p>{co2}</p>
            </FoodItem>
          ))}
        </SavedPurchasedFood>
      )}
    </LastPurchaseListItem>
  )
}

const LastPurchaseListItem = styled.li`
  margin: 0 30px 10px 10px;
  color: var(--light-grey);
  list-style-type: none;
  display: grid;
  grid-template-columns: 20px 1fr 1fr;
  grid-column-gap: 10px;
`
const FoodItem = styled.li`
  p {
    font-size: 1.025rem;
  }
`

const PurchaseIcon = styled(ShoppingBag)`
  width: 18px;
  height: auto;
  overflow: visible;
  color: var(--green);
  align-self: start;
`

const SavedPurchasedFood = styled.ul``
