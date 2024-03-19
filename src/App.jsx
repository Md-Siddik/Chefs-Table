import './App.css'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
// import Recipes from './components/recipes/Recipes'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/recipes/cards/Card'
import Schedule from './components/recipes/cards/Schedule'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cards, setCards] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [total, setTotal] = useState([]);
  const [calorie, setCalorie] = useState([]);

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
      toast("Already Included");
    }
  };

  const handleDelete = (id, preparing, time) => {
    setCooking([...cooking, preparing]);
    const newCooking = schedules.filter(item => item.recipe_id != id);
    setSchedules(newCooking);

    const currentTime = schedules.find(times => times.preparing_time == preparing.preparing_time);
    setTotal([...total, currentTime]);

    const currentCalorie = schedules.find(calorie => calorie.calories == preparing.calories);
    setCalorie([...calorie, currentCalorie]);
  }

  let preTime = 0;
  let preCalories = 0;
  const showTime = () => {
    const allTime = total.map((all) => all.preparing_time);
    for(let times of allTime){
      preTime = preTime + times;
    }
    
    const allCalorie = calorie.map(cal => cal.calories);
    for(let currentCalories of allCalorie){
      preCalories = preCalories + currentCalories;
    }

  }
  showTime();


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
            <Schedule schedules={schedules} handleDelete={handleDelete} cooking={cooking} totalTime={preTime} totalCalorie={preCalories}></Schedule>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
