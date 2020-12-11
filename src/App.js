import { Switch, Route } from 'react-router-dom'
import AddPurchase from './pages/AddPurchase/AddPurchase'
import Profile from './pages/Profile/Profile'
//import Navigation from './components/Navigation/Navigation'
//import styled from 'styled-components/macro'

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/add-purchase">
          <AddPurchase />
        </Route>
        <Route path="/overview">
          <Profile />
        </Route>
      </Switch>
      {/* <AppNavigation>
        <Navigation />
      </AppNavigation> */}
    </>
  )
}

// const AppNavigation = styled.div`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
// `
