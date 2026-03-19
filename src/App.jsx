
import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import FoodSection from './Components/FoodSection/FoodSection'

const foodDataPromise = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then((res) => res.json())

function App() {
  return (
    <> 
      <Navbar></Navbar>

      <Suspense fallback='Loading for data.............'>
        <FoodSection foodDataPromise={foodDataPromise}></FoodSection>
      </Suspense>
    </>
  )
}

export default App
