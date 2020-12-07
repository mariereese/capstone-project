import styled from 'styled-components/macro'

export default function PurchaseList({ purchasedFood, onRemoveFood }) {
  return (
    <PurchaseCard>
      <h2>Einkauf:</h2>
      <ul>
        {purchasedFood.map(({ food, id }, index) => (
          <PurchasedFood key={index}>
            <p onClick={() => onRemoveFood(index)}>X</p>
            <p>{food}</p>
            <p>1000g</p>
          </PurchasedFood>
        ))}
      </ul>
    </PurchaseCard>
  )
}

const PurchaseCard = styled.div`
  width: 100%;
  height: 370px;
  box-shadow: 0 0 10px var(--light-grey);
  border: none;
  border-radius: 21px;

  ul {
    margin: 0;
    padding: 0;
  }
`

const PurchasedFood = styled.li`
  margin: 0 13px 0.4em;
  display: flex;
  justify-content: space-between;
  color: var(--light-grey);
  list-style-type: none;
  font-weight: 300;

  p {
    margin: 0;
    font-size: 1.25rem;
  }
`
