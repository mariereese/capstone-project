import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Dashboard } from '../../images/nav-dashboard-icon.svg'
import { ReactComponent as Profile } from '../../images/nav-profile-icon.svg'

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
      <NavLinkStyled to="/overview">
        <ProfileIcon />
        <PageName>Übersicht</PageName>
      </NavLinkStyled>
    </NavBar>
  )
}

const NavBar = styled.footer`
  height: 60px;
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

  &.hover {
    text-decoration: underline;
  }

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

const ProfileIcon = styled(Profile)`
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
`
