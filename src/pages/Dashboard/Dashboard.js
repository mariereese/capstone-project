import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import PageWrapper from '../../components/PageWrapper'
import Header from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'
import Card from '../../components/Card'
import { ReactComponent as Plus } from '../../images/plus-icon.svg'
import loadLocally from '../../lib/loadLocally'

export default function Dashboard() {
  const [annualFootprintSum, setAnnualFootprintSum] = useState(0)
  const [allPurchases, setAllPurchases] = useState([])

  useEffect(() => {
    setAllPurchases(loadLocally('savedPurchase') ?? [])
  }, [])

  useEffect(() => {
    const numbers = allPurchases.map(({ sum }) => sum)
    setAnnualFootprintSum(
      numbers.reduce((result, number) => {
        return result + number
      }, 0)
    )
  }, [allPurchases])

  return (
    <>
      <Header title="Dashboard" />
      <PageWrapper>
        <AnnualFootprintCard>
          <h2>Dein Jahres Foodprint:</h2>
          <p>
            {annualFootprintSum} kg CO<sub>2</sub>
          </p>
        </AnnualFootprintCard>
      </PageWrapper>
      <AppNavigation>
        <Navigation isDisabled icon={<PlusIcon />} />
      </AppNavigation>
    </>
  )
}

const AnnualFootprintCard = styled(Card)``

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
