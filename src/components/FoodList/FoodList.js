import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function FoodList({ foodList, onAddFood }) {
  return (
    <>
      <FoodListStyled>
        {foodList.map(({ id, food }) => (
          <FoodListItem onClick={() => onAddFood(id)} key={id}>
            {food}
          </FoodListItem>
        ))}
      </FoodListStyled>
    </>
  )
}

FoodList.propTypes = {
  foodList: PropTypes.array,
  onAddFood: PropTypes.func,
}

const FoodListStyled = styled.ul`
  margin: 0;
  box-shadow: 0 0 6px var(--light-grey);
  border-radius: 21px;
  max-height: 50vh;
  background: white;
  padding: 0;
  overflow-y: scroll;
`

const FoodListItem = styled.li`
  padding: 6px 10px;
  list-style-type: none;
  font-weight: 300;
  font-size: 1.25rem;
  color: var(--dark-grey);
`
