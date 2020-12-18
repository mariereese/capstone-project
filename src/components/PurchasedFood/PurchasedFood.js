import styled from 'styled-components/macro'
import { ReactComponent as DeleteIcon } from '../../images/delete-icon.svg'

export default function PurchasedFood({ onRemoveFood, food, index }) {
  return (
    <PurchasedFoodItem>
      <p>{food}</p>
      <p onClick={() => onRemoveFood(index)}>
        <DeleteIcon />
      </p>
    </PurchasedFoodItem>
  )
}

const PurchasedFoodItem = styled.li`
  margin: 0 13px 0.4em;
  display: grid;
  grid-template-columns: 90% 10%;
  column-gap: 3px;
  color: var(--light-grey);
  list-style-type: none;
  font-weight: 300;

  p:last-child {
    justify-self: center;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
  }
`
