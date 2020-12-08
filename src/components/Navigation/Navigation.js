import styled from 'styled-components/macro'
import { ReactComponent as Dashboard } from '../../images/nav-dashboard-icon.svg'
import { ReactComponent as Profile } from '../../images/nav-profile-icon.svg'
import { ReactComponent as Plus } from '../../images/plus-icon.svg'

export default function Navigation() {
  return (
    <NavBar>
      <div>
        <DashboardIcon />
        <PageName>Dashboard</PageName>
      </div>
      <PlusButton>
        <PlusIcon />
      </PlusButton>
      <div>
        <ProfileIcon />
        <PageName>Profil</PageName>
      </div>
    </NavBar>
  )
}

const NavBar = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: var(--green);
  border-radius: 21px 21px 0 0;
  box-shadow: 0 0 6px var(--light-grey);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const PageName = styled.p`
  font-size: 0.7em;
  color: white;
  margin: 0 0 2px;
`

const DashboardIcon = styled(Dashboard)`
  width: 31px;
  overflow: visible;
`

const ProfileIcon = styled(Profile)`
  width: 31px;
  overflow: visible;
`

const PlusButton = styled.button`
  border-radius: 100%;
  border: none;
  background: radial-gradient(circle, var(--orange) 51%, #e9aa7c 100%);
  padding: 1em;
  width: 72px;
  height: 72px;
  position: relative;
  bottom: 50%;
  box-shadow: 0 0 6px #e9aa7c;
`

const PlusIcon = styled(Plus)`
  position: absolute;
  height: 60%;
  transform: translate(-25px, -20px);
  overflow: visible;
`
