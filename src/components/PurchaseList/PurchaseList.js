import styled from 'styled-components/macro'

export default function PurchaseList({ purchasedFood, onDelete }) {
  return (
    <PurchaseCard>
      <h2>Einkauf:</h2>
      <ul>
        {purchasedFood.map(({ food, id }) => (
          <PurchasedFood key={id}>
            <p onClick={() => onDelete(id)}>X</p>
            <p>{food}</p>
            <p>1000g</p>
          </PurchasedFood>
        ))}
      </ul>
    </PurchaseCard>
  )
}

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
