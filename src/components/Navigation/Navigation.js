import styled from 'styled-components/macro'
import { ReactComponent as Dashboard } from '../../images/nav-dashboard-icon.svg'
import { ReactComponent as Profile } from '../../images/nav-profile-icon.svg'
import { ReactComponent as Plus } from '../../images/plus-icon.svg'

export default function Navigation() {
  return (
    <NavBar>
      <DashboardIcon />
      <PlusButton>
        <PlusIcon />
      </PlusButton>
      <ProfileIcon />
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
  height: 58px;
  background-color: var(--green);
  border-radius: 21px 21px 0 0;
  box-shadow: 0 0 6px var(--light-grey);
`
const DashboardIcon = styled(Dashboard)`
  width: 31px;
`

const ProfileIcon = styled(Profile)`
  width: 31px;
`

const PlusButton = styled.button`
  border-radius: 100%;
  border: none;
  background-color: var(--orange);
  padding: 1em;
  width: 72px;
  height: 72px;
  position: relative;
  bottom: 50%;
`

const PlusIcon = styled(Plus)`
  position: absolute;
  height: 60%;
  transform: translate(-25px, -20px);
  overflow: visible;
`
