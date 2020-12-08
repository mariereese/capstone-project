import styled from 'styled-components/macro'
import FoodprintColorScale from '../FoodprintColorScale/FoodprintColorScale'

export default function FootprintSum({ sum, pointerPosition }) {
  return (
    <Card>
      <h2>Foodprint:</h2>
      <p>
        {sum + ' '}kg CO<sub>2</sub>
      </p>
      <FoodprintColorScale pointerPosition={pointerPosition} />
    </Card>
  )
}

const Card = styled.div`
  margin: 0;
  box-shadow: 0 0 6px var(--light-grey);
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