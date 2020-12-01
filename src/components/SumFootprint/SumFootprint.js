import styled from 'styled-components/macro'
import FoodPrintOMeter from '../FoodprintOMeter/FoodprintOMeter'

export default function SumFootprint({ sum, pointerPosition }) {
  return (
    <FootprintSumCard>
      <h2>Foodprint:</h2>
      <p>
        {sum + ' '}kg CO<sub>2</sub>
      </p>
      <FoodPrintOMeter pointerPosition={pointerPosition} />
    </FootprintSumCard>
  )
}

const FootprintSumCard = styled.div`
  margin: 0;
  box-shadow: 0 0 10px var(--light-grey);
  border-radius: 21px;

  h2 {
    margin-bottom: 0;
  }

  p {
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
