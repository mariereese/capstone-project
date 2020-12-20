import FoodList from './FoodList'
import { render } from '@testing-library/react'

describe('FoodList', () => {
  const testFunction = jest.fn()
  it('renders correctly', () => {
    const { container } = render(
      <FoodList
        foodList={[
          {
            id: 'f1',
            food: 'Ananas, frisch',
          },
          {
            id: 'f2',
            food: 'Ananas, per Schiff',
          },
        ]}
        onAddFood={testFunction}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
