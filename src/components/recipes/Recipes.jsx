import Cards from "./cards/Cards";
import Schedule from "./cards/Schedule";
const Recipes = () => {
    return (
        <div>
            <div className="w-[65%] m-auto p-20 text-center">
                <h1 className="text-3xl font-bold">Our Recipes</h1>
                <p className="py-8">We have a large amount of recipes for you. There are many different type of recipes. You will like our different type of recipes. Try our recipes and get new tests.</p>
            </div>

            <div className="cards flex justify-between">
                <Cards></Cards>
                <Cards></Cards>
                <Schedule></Schedule>
            </div>
        </div>
    );
};

export default Recipes;