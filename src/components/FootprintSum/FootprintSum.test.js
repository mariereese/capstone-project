import FootprintSum from './FootprintSum'
import { render } from '@testing-library/react'

describe('FoodprintSum', () => {
  it('renders correctly', () => {
    const { container } = render(<FootprintSum sum={0} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
