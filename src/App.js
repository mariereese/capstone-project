import Header from './components/Header/Header'
import AddPurchase from './pages/AddPurchase/AddPurchase'
import Navigation from './components/Navigation/Navigation'

export default function App() {
  return (
    <>
      <Header title="Einkauf hinzufügen" />
      <AddPurchase />
      <Navigation />
    </>
  )
}
