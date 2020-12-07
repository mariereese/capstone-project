import styled from 'styled-components/macro'
import { ReactComponent as DeleteIcon } from '../../images/delete-icon.svg'

export default function PurchaseList({ purchasedFood, onRemoveFood }) {
  return (
    <PurchaseCard>
      <h2>Einkauf:</h2>
      <ul>
        {purchasedFood.map(({ food, id }, index) => (
          <PurchasedFood key={index}>
            <p>{food}</p>
            <p>1000g</p>
            <p onClick={() => onRemoveFood(index)}>
              <DeleteIcon />
            </p>
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
  display: grid;
  grid-template-columns: 73% 20% 7%;
  column-gap: 4px;
  color: var(--light-grey);
  list-style-type: none;
  font-weight: 300;

  p:last-child {
    place-self: center;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
  }
`
