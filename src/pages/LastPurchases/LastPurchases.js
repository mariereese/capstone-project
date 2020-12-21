import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Header from '../../components/Header/Header'
import PageWrapper from '../../components/PageWrapper'
import Navigation from '../../components/Navigation/Navigation'
import Card from '../../components/Card'
import SavedPurchase from '../../components/SavedPurchase/SavedPurchase'
import { ReactComponent as Plus } from '../../images/plus-icon.svg'

import loadLocally from '../../lib/loadLocally'

export default function LastPurchases() {
  const history = useHistory()
  const [savedPurchases, setSavedPurchases] = useState([])
  useEffect(() => {
    setSavedPurchases(loadLocally('savedPurchase') ?? [])
  }, [])

  return (
    <>
      <Header title="Übersicht" />
      <PageWrapper>
        <ContentGrid>
          <LastPurchasesCard>
            <h2>letzte Einkäufe:</h2>
            <LastPurchasesList>
              {savedPurchases
                .filter((value) => JSON.stringify(value) !== '{}')
                .map(({ sum, date, purchasedFood }, index) => (
                  <SavedPurchase
                    carbonFootprintSum={sum}
                    purchaseDate={date}
                    purchasedFood={purchasedFood}
                    key={index}
                  />
                ))}
            </LastPurchasesList>
          </LastPurchasesCard>
        </ContentGrid>
      </PageWrapper>
      <AppNavigation>
        <PlusButton onClick={() => history.push('/add-purchase')}>
          <PlusIcon />
        </PlusButton>
        <Navigation />
      </AppNavigation>
    </>
  )
}

const ContentGrid = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 12px;
`
const LastPurchasesCard = styled(Card)`
  height: 75vh;
  overflow-y: scroll;
`

const LastPurchasesList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column-reverse;
`

const AppNavigation = styled.div`
  max-width: 400px;
  width: 100%;
  position: fixed;
  bottom: 0;
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
  left: calc(50% - 36px);

  :hover {
    transform: translateY(-15px);
    transition: transform 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  }
`

const PlusIcon = styled(Plus)`
  height: 60%;
  position: absolute;
  transform: translate(-25px, -20px);
  overflow: visible;
`
