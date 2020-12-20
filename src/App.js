import { Switch, Route } from 'react-router-dom'
import AddPurchase from './pages/AddPurchase/AddPurchase'
import Dashboard from './pages/Dashboard/Dashboard'
import LastPurchases from './pages/LastPurchases/LastPurchases'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/add-purchase">
          <AddPurchase />
        </Route>
        <Route path="/last-purchases">
          <LastPurchases />
        </Route>
      </Switch>
    </>
  )
}
