import styled from 'styled-components/macro'
import Card from '../Card'
import FoodprintColorScale from '../FoodprintColorScale/FoodprintColorScale'

export default function FootprintSum({ sum, pointerPosition }) {
  return (
    <CardStyled>
      <h2>Foodprint:</h2>
      <p>
        {sum + ' '}kg CO<sub>2</sub>
      </p>
      <FoodprintColorScale pointerPosition={pointerPosition} />
    </CardStyled>
  )
}

const CardStyled = styled(Card)`
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
