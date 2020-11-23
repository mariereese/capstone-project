import foodData from './data/foodData.json'

export default function FoodList() {
  return (
    <ul>
      {foodData.map((food) => (
        <li>{food.food}</li>
      ))}
    </ul>
  )
}

// return foodData.map((food) => <p>{food.food}</p>)
