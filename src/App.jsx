import './App.css'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
// import Recipes from './components/recipes/Recipes'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/recipes/cards/Card'
import Schedule from './components/recipes/cards/Schedule'
import Cooking from './components/recipes/cards/Cooking'

function App() {

  const [cards, setCards] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  const handleSchedule = (schedule) => {
    const search = schedules.find(food => food.recipe_id == schedule.recipe_id);
    if (!search) {
      setSchedules([...schedules, schedule]);
    }
    else {
      alert("Already exist")
    }
  };


  const handleCooking = (cook) => {
    setCooking([...cooking, cook]);
  // console.log(cook);
  }

  return (
    <>
      <div>
        <Header></Header>
        <Banner></Banner>
        <div>
          <div className="w-[65%] m-auto p-20 text-center">
            <h1 className="text-3xl font-bold">Our Recipes</h1>
            <p className="py-8">We have a large amount of recipes for you. There are many different type of recipes. You will like our different type of recipes. Try our recipes and get new tests.</p>
          </div>

          <div className="cards flex justify-between">
            <div className="cardGrid">
              {
                cards.map(card => <Card card={card} handleSchedule={handleSchedule}></Card>)
              }
            </div>
            <Schedule schedules={schedules} handleCooking={handleCooking}></Schedule>
          </div>
        </div>
        {/* <Recipes handleSchedule={handleSchedule}></Recipes> */}
      </div>
    </>
  )
}

export default App
