import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Header from '../../components/Header/Header'
import PageWrapper from '../../components/PageWrapper'
import Navigation from '../../components/Navigation/Navigation'
import Card from '../../components/Card'
import SavedPurchase from '../../components/SavedPurchase/SavedPurchase'
import { ReactComponent as Plus } from '../../images/plus-icon.svg'

import loadLocally from '../../lib/loadLocally'

export default function Profile() {
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
              {savedPurchases.map(({ sum, date, purchasedFood }) => (
                <SavedPurchase
                  carbonFootprintSum={sum}
                  purchaseDate={date}
                  purchasedFood={purchasedFood}
                />
              ))}
            </LastPurchasesList>
          </LastPurchasesCard>
        </ContentGrid>
      </PageWrapper>
      <AppNavigation>
        <Navigation isDisabled icon={<PlusIcon />} />
      </AppNavigation>
    </>
  )
}

const ContentGrid = styled.div`
  margin: 20px;
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
`

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
