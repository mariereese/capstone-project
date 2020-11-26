import FoodList from './components/FoodList/FoodList'
import styled from 'styled-components/macro'

export default function App() {
  return (
    <>
      <AddPurchase>
        <FoodList />
      </AddPurchase>
    </>
  )
}

const AddPurchase = styled.div`
  display: grid;
  grid-template-columns: 380px;
`
