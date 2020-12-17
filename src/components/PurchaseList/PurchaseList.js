import styled from 'styled-components/macro'
import Card from '../Card'
import { ReactComponent as DeleteIcon } from '../../images/delete-icon.svg'

export default function PurchaseList({
  purchasedFood,
  onRemoveFood,
  handleChange,
  weightInput,
}) {
  return (
    <CardStyled>
      <h2>Einkauf:</h2>
      <ul>
        {purchasedFood.map(({ food, id }, index) => (
          <PurchasedFood key={index}>
            <WeightInput
              type="number"
              placeholder="1000"
              onChange={handleChange}
              value={weightInput}
              name={index}
            />
            <p>g</p>
            <p>{food}</p>
            <p onClick={() => onRemoveFood(index)}>
              <DeleteIcon />
            </p>
          </PurchasedFood>
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

const PurchasedFood = styled.li`
  margin: 0 13px 0.4em;
  display: grid;
  grid-template-columns: 16% 5% 73% 6%;
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
const WeightInput = styled.input`
  display: block;
  height: 25px;
`
