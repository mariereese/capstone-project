import FoodList from './components/FoodList/FoodList'
import SearchFood from './components/SearchFood/SearchFood'
import styled from 'styled-components/macro'

export default function App() {
  return (
    <>
      <AddPurchase>
        <SearchFood />
        <FoodList />
      </AddPurchase>
    </>
  )
}

const AddPurchase = styled.div`
  display: grid;
  grid-template-columns: 380px;
`
