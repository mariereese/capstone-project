import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PageWrapper from '../../components/PageWrapper'
import Header from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'
import Card from '../../components/Card'
import { ReactComponent as Plus } from '../../images/plus-icon.svg'
import { ReactComponent as Tree } from '../../images/tree-icon.svg'
import { ReactComponent as Car } from '../../images/car-icon.svg'
import loadLocally from '../../lib/loadLocally'

export default function Dashboard() {
  const history = useHistory()
  const [annualFootprintSum, setAnnualFootprintSum] = useState(0)
  const [allPurchases, setAllPurchases] = useState([])
  const [numberOfCarKilometres, setNumberOfCarKilometres] = useState(0)
  const [numberOfTrees, setNumberOfTrees] = useState(0)

  useEffect(() => {
    setAllPurchases(loadLocally('savedPurchase') ?? [])
  }, [])

  // calculate annual sum
  useEffect(() => {
    const numbers = allPurchases
      .filter((value) => JSON.stringify(value) !== '{}')
      .map(({ sum }) => sum)
    setAnnualFootprintSum(
      numbers.reduce((result, number) => {
        return result + number
      }, 0)
    )
  }, [allPurchases])

  // calculate number of kilometres
  useEffect(() => {
    setNumberOfCarKilometres((annualFootprintSum / 3) * 10)
  }, [annualFootprintSum])

  // calculate number of trees
  useEffect(() => {
    setNumberOfTrees(annualFootprintSum / 10)
  }, [annualFootprintSum])

  function roundNumber(number) {
    return parseFloat(number.toFixed(0))
  }

  return (
    <>
      <Header title="Dashboard" />
      <PageWrapper>
        <ContentGrid>
          <AnnualFootprintCard>
            <h2>Dein Jahres-Foodprint:</h2>
            <h3>
              {roundNumber(annualFootprintSum)} kg CO<sub>2</sub>
            </h3>
            <CompareFootprint>
              <ComparisonNumber>
                <p>{roundNumber(numberOfCarKilometres)} km</p>
                <CarIcon />
              </ComparisonNumber>
              <p>
                Das entspricht in etwa {roundNumber(numberOfCarKilometres)}{' '}
                gefahrenen Kilometern mit dem Auto
              </p>
              <ComparisonNumber>
                <p>{roundNumber(numberOfTrees)}</p>
                <TreeIcon />
              </ComparisonNumber>
              <p>
                Und du müsstest {roundNumber(numberOfTrees)} Bäume pflanzen um
                das in einem Jahr wieder auszugleichen
              </p>
            </CompareFootprint>
          </AnnualFootprintCard>
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
  row-gap: 22px;
`

const AnnualFootprintCard = styled(Card)`
  h3 {
    margin: 0;
    text-align: center;
    font-size: 2.25rem;
    font-weight: 400;
    color: var(--dark-grey);
  }

  sub {
    font-weight: 500;
  }
`
const CompareFootprint = styled.div`
  margin: 30px 13px;

  p {
    margin: 10px 0;
    font-size: 1.175rem;
    font-weight: 300;
    color: var(--dark-grey);
    text-align: center;
  }
`

const ComparisonNumber = styled.div`
  margin: 20px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px dotted var(--light-grey);
  padding-top: 13px;

  p {
    color: var(--green);
    font-size: 1.85rem;
  }
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

const TreeIcon = styled(Tree)`
  height: 45px;
  width: auto;
  color: var(--green);
  margin-left: 5px;
`

const CarIcon = styled(Car)`
  height: auto;
  width: 45px;
  color: var(--green);
  margin-left: 5px;
`
