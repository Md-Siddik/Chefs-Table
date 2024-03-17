import { useEffect } from "react";
import { useState } from "react";
import Card from "./cards/Card";
import Schedule from "./cards/Schedule";
const Recipes = ({handleSchedule}) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
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
                <Schedule></Schedule>
            </div>
        </div>
    );
};

export default Recipes;