import styled from 'styled-components/macro'
import Card from '../Card'
import PurchasedFood from '../PurchasedFood/PurchasedFood'

export default function PurchaseList({
  purchasedFood,
  onRemoveFood,
  carbonFootprintSum,
}) {
  return (
    <CardStyled>
      <h2>Einkauf:</h2>
      <ul>
        {purchasedFood.map(({ food, id, co2 }, index) => (
          <PurchasedFood
            key={id}
            food={food}
            index={index}
            onRemoveFood={onRemoveFood}
            co2={co2}
            carbonFootprintSum={carbonFootprintSum}
          />
        ))}
      </ul>
    </CardStyled>
  )
}

const CardStyled = styled(Card)`
  width: 100%;
  height: 47vh;
  border: none;
  overflow-y: scroll;

  ul {
    margin: 0;
    padding: 0;
  }
`
