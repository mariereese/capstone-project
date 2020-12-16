import styled from 'styled-components/macro'
import PageWrapper from '../../components/PageWrapper'
import Header from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'
import { ReactComponent as Plus } from '../../images/plus-icon.svg'

export default function Dashboard() {
  return (
    <>
      <Header title="Dashboard" />
      <PageWrapper></PageWrapper>
      <AppNavigation>
        <Navigation isDisabled icon={<PlusIcon />} />
      </AppNavigation>
    </>
  )
}

const AppNavigation = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`
const PlusIcon = styled(Plus)`
  height: 60%;
  position: absolute;
  transform: translate(-25px, -20px);
  overflow: visible;
`
