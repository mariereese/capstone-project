import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Dashboard } from '../../images/nav-dashboard-icon.svg'
import { ReactComponent as ShoppingBag } from '../../images/shopping-bag.svg'

export default function Navigation() {
  return (
    <NavBar>
      <NavLinkStyled exact to="/">
        <DashboardIcon />
        <PageName>Dashboard</PageName>
      </NavLinkStyled>
      <NavLinkStyled to="/last-purchases">
        <ShoppingBagIcon />
        <PageName>Einkäufe</PageName>
      </NavLinkStyled>
    </NavBar>
  )
}

const NavBar = styled.footer`
  height: 60px;
  max-width: 400px;
  box-shadow: 0 0 6px var(--light-grey);
  border-radius: 21px 21px 0 0;
  background-color: var(--green);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const NavLinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--green);

  &.active {
    color: #fff;
    fill: #fff;
  }
`

const PageName = styled.p`
  margin: 0 0 2px;
  color: white;
  font-size: 0.7em;
`

const DashboardIcon = styled(Dashboard)`
  width: 31px;
  overflow: visible;
  fill: var(--green);
`

const ShoppingBagIcon = styled(ShoppingBag)`
  width: 33px;
  overflow: visible;
  fill: var(--green);
`
