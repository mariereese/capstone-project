import Header from './components/Header/Header'
import AddPurchase from './pages/AddPurchase/AddPurchase'
import Navigation from './components/Navigation/Navigation'
import styled from 'styled-components/macro'

export default function App() {
  return (
    <>
      <Header title="Einkauf hinzufügen" />
      <AddPurchase />
      <AppNavigation>
        <Navigation />
      </AppNavigation>
    </>
  )
}

const AppNavigation = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`
