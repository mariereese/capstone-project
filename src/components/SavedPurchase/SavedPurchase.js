import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as Hide } from '../../images/arrow-right.svg'
import { ReactComponent as Show } from '../../images/arrow-down.svg'

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
        <TogglePurchaseButton onClick={() => toggleShowPurchase(index)}>
          {showPurchase ? <ShowIcon /> : <HideIcon />}
        </TogglePurchaseButton>
        <p>{purchaseDate}</p>
        <p>
          {carbonFootprintSum} kg CO<sub>2</sub>
        </p>
      </div>
      {showPurchase && (
        <SavedPurchasedFood>
          {purchasedFood.map(({ food, co2 }, index) => (
            <FoodItem key={index}>
              <p>{food}</p>
              <p>
                {co2} kg CO<sub>2</sub>
              </p>
            </FoodItem>
          ))}
        </SavedPurchasedFood>
      )}
    </LastPurchaseListItem>
  )
}

SavedPurchase.propTypes = {
  carbonFootprintSum: PropTypes.number,
  purchaseDate: PropTypes.string,
  purchasedFood: PropTypes.array,
  index: PropTypes.number,
}

const LastPurchaseListItem = styled.li`
  div {
    margin: 0.2em 1em 0.5em;
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
const TogglePurchaseButton = styled.button`
  border: none;
  background-color: white;

  :active,
  :focus {
    outline: none;
  }
`

const SavedPurchasedFood = styled.ul`
  margin: 0 1.5em;
  padding: 0;
`

const FoodItem = styled.li`
  margin-bottom: 0.5em;
  display: grid;
  grid-template-columns: 2fr 1fr;

  p {
    font-size: 1.1rem;
    color: var(--dark-grey);
  }

  sub {
    font-size: 0.9rem;
  }
`

const HideIcon = styled(Hide)`
  height: 16px;
  width: auto;
  color: var(--green);

  :hover,
  :focus {
    height: 18px;
  }
`

const ShowIcon = styled(Show)`
  width: 16px;
  height: auto;
  color: var(--green);

  :hover,
  :focus {
    width: 18px;
  }
`
