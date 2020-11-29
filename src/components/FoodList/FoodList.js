import styled from 'styled-components/macro'

export default function FoodList({ foodList, onAddItem }) {
  return (
    <>
      <FoodListStyled>
        {foodList.map(({ id, food }) => (
          <FoodListItem onClick={onAddItem} key={id}>
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
  width: 287px;
  max-height: 387px;
  background: white;
  padding: 0;
  overflow-y: auto;
  overflow-y: scroll;
  position: absolute;
  top: 70px;
`

const FoodListItem = styled.li`
  list-style-type: none;
  padding: 6px 10px;
  font-weight: 300;
  font-size: 1.25rem;
  color: var(--dark-grey);
`
