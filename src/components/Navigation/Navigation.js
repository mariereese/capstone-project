import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ReactComponent as Dashboard } from '../../images/nav-dashboard-icon.svg'
import { ReactComponent as ShoppingBag } from '../../images/shopping-bag.svg'

export default function Navigation({ icon, savePurchase, isDisabled }) {
  return (
    <NavBar>
      <NavLinkStyled exact to="/">
        <DashboardIcon />
        <PageName>Dashboard</PageName>
      </NavLinkStyled>
      <NavLinkStyled to="add-purchase">
        <PlusButton onClick={() => !isDisabled && savePurchase()}>
          {icon}
        </PlusButton>
      </NavLinkStyled>
      <NavLinkStyled to="/last-purchases">
        <ShoppingBagIcon />
        <PageName>Einkäufe</PageName>
      </NavLinkStyled>
    </NavBar>
  )
}

Navigation.propTypes = {
  icon: PropTypes.element,
  savePurchase: PropTypes.func,
  isDisabled: PropTypes.bool,
}

const NavBar = styled.footer`
  height: 60px;
  width: 400px;
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

const PlusButton = styled.button`
  width: 72px;
  height: 72px;
  box-shadow: 0 0 6px #e9aa7c;
  border: none;
  border-radius: 100%;
  padding: 1em;
  background: radial-gradient(circle, var(--orange) 51%, #e9aa7c 100%);
  position: absolute;
  bottom: 40%;

  :hover {
    transform: translateY(-15px);
    transition: transform 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  }
`
