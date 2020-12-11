import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Header from '../../components/Header/Header'
import PageWrapper from '../../components/PageWrapper'
import Navigation from '../../components/Navigation/Navigation'
import Card from '../../components/Card'
import { ReactComponent as Plus } from '../../images/plus-icon.svg'
import { ReactComponent as Edit } from '../../images/edit-icon.svg'
import { ReactComponent as ShoppingBag } from '../../images/shopping-bag.svg'
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
          <AnnualGoalCard>
            <h2>Jahresziel:</h2>
            <p>
              2.000 kg CO<sub>2</sub>
            </p>
            <EditIcon />
          </AnnualGoalCard>
          <LastPurchasesCard>
            <h2>letzte Einkäufe:</h2>
            <LastPurchasesList>
              {savedPurchases.map(({ sum, date }) => (
                <li>
                  <PurchaseIcon />
                  <p>{date}</p>
                  <p>
                    {sum} kg CO<sub>2</sub>
                  </p>
                </li>
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
const AnnualGoalCard = styled(Card)`
  p {
    margin: 0 0 13px;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    color: var(--dark-grey);
  }
`
const LastPurchasesCard = styled(Card)`
  height: 40vh;
  overflow-y: scroll;
`

const LastPurchasesList = styled.ul`
  margin: 0;
  padding: 0;

  li {
    margin: 0 30px 10px 10px;
    color: var(--light-grey);
    list-style-type: none;
    display: grid;
    grid-template-columns: 20px 1fr 1fr;
    grid-column-gap: 10px;
  }

  p:last-child {
    justify-self: end;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 1.25rem;
    font-weight: 300;
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
const EditIcon = styled(Edit)`
  overflow: visible;
`

const PurchaseIcon = styled(ShoppingBag)`
  width: 18px;
  height: auto;
  overflow: visible;
  color: var(--green);
  align-self: start;
`
