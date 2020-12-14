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
      <div>
        <PurchaseIcon onClick={() => toggleShowPurchase(index)} />
        <p>{purchaseDate}</p>
        <p>
          {carbonFootprintSum} kg CO<sub>2</sub>
        </p>
      </div>
      {showPurchase && (
        <SavedPurchasedFood>
          {purchasedFood.map(({ food, co2 }) => (
            <FoodItem>
              <p className="food-item__name">{food}</p>
              <p className="food-item__co2">
                {co2} kg CO<sub>2</sub>
              </p>
            </FoodItem>
          ))}
        </SavedPurchasedFood>
      )}
    </LastPurchaseListItem>
  )
}

const LastPurchaseListItem = styled.li`
  div {
    margin: 0.75em 1em 0;
    display: grid;
    grid-template-columns: 20px 1fr 1fr;
    grid-column-gap: 10px;
    color: var(--light-grey);
    list-style-type: none;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 1.25rem;
    font-weight: 300;
  }

  p:last-child {
    justify-self: end;
  }
`
const SavedPurchasedFood = styled.ul`
  margin: 0 1.5em;
  padding: 0;
`

const FoodItem = styled.li`
  margin-bottom: 0.3em;
  display: grid;
  grid-template-columns: 2fr 1fr;

  .food-item__co2 {
    align-self: center;
  }

  p {
    font-size: 1rem;
    color: var(--dark-grey);
  }

  sub {
    font-size: 0.9rem;
  }
`

const PurchaseIcon = styled(ShoppingBag)`
  width: 18px;
  height: auto;
  overflow: visible;
  color: var(--green);
  align-self: start;
`
