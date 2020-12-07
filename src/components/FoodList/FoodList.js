import styled from 'styled-components/macro'

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

const FoodListStyled = styled.ul`
  margin: 0;
  box-shadow: 0 0 10px var(--light-grey);
  border-radius: 21px;
  width: 335px;
  max-height: 387px;
  background: white;
  padding: 0;
  overflow-y: auto;
  overflow-y: scroll;
`

const FoodListItem = styled.li`
  padding: 6px 10px;
  list-style-type: none;
  font-weight: 300;
  font-size: 1.25rem;
  color: var(--dark-grey);
`
