import './App.css'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
// import Recipes from './components/recipes/Recipes'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/recipes/cards/Card'
import Schedule from './components/recipes/cards/Schedule'

function App() {

  const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

  const [schedules, setSchedules] = useState([]);

  const handleSchedule = card => {
    const newSchedule = [...schedules, card];
    setSchedules(newSchedule);
    
    console.log(card.recipe_name)
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
            <Schedule schedules={schedules}></Schedule>
          </div>
        </div>
        {/* <Recipes handleSchedule={handleSchedule}></Recipes> */}
      </div>
    </>
  )
}

export default App
