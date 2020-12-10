import { useState } from 'react'
import styled from 'styled-components/macro'
import Header from '../../components/Header/Header'
import PageWrapper from '../../components/PageWrapper'
import Navigation from '../../components/Navigation/Navigation'
import Card from '../../components/Card'
import { ReactComponent as Plus } from '../../images/plus-icon.svg'
import loadLocally from '../../lib/loadLocally'

export default function Profile() {
  const [savedPurchases, setSavedPurchases] = useState(
    loadLocally('savedPurchase') ?? []
  )
  return (
    <>
      <Header title="Profil" />
      <PageWrapper>
        <ContentGrid>
          <Card>
            <h2>Jahresziel:</h2>
            <p>
              2000 kg CO<sub>2</sub>
            </p>
          </Card>
          <Card>
            <h2>letze Einkäufe:</h2>
            <ul>
              {savedPurchases.map(({ sum }) => (
                <li>{sum}</li>
              ))}
            </ul>
          </Card>
        </ContentGrid>
      </PageWrapper>
      <AppNavigation>
        <Navigation isDisabled={true} icon={<PlusIcon />} />
      </AppNavigation>
    </>
  )
}

const ContentGrid = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 12px;

  p {
    margin: 0 0 13px;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    color: var(--dark-grey);
  }
`

const AppNavigation = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`

const PlusIcon = styled(Plus)`
  height: 60%;
  overflow: visible;
  position: absolute;
  transform: translate(-25px, -20px);
`
