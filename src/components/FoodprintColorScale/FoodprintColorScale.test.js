import FoodprintColorScale from './FoodprintColorScale'
import { render } from '@testing-library/react'

describe('FoodprintColorScale', () => {
  it('renders correctly', () => {
    const { container } = render(<FoodprintColorScale pointerPosition={0} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
