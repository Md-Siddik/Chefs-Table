import PropTypes from 'prop-types';
import { useEffect } from 'react';
import List from './list/List';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({card, handleSchedule}) => {
    const {recipe_name, short_description, recipe_image, ingredients, preparing_time, calories} = card;

    return (
        <div className="w-[350px] border-[1px] rounded-2xl">
            <div className="bg-gray-500 w-[300px] h-[180px] m-auto mt-[25px] rounded-2xl overflow-hidden">
                <img className='w-full h-full' src={recipe_image} alt="Testing" />
            </div>
            <div className="p-6">
                <div>
                    <h1 className="text-xl font-bold">{recipe_name}</h1>
                    <p className="py-3 text-[#878787]">{short_description}</p>
                </div>
                <hr />
                <div>
                    <h1 className="text-xl font-bold py-4">Ingredients: {ingredients.length}</h1>
                    <ul className="pl-8 pb-4 text-[#878787] list-disc">
                        {
                            ingredients.map(list => <List list={list}></List>)
                        }
                    </ul>
                </div>
                <hr />
                <div className="flex py-5 gap-5 text-[#878787]">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <p>{preparing_time} minutes</p>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>

                        <p>{calories} calories</p>
                    </div>
                </div>
                <div>
                    <button className="text-lg font-bold bg-[#0BE58A] px-5 py-2 rounded-full" onClick={() => {handleSchedule(card)}}>Want to Cook</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

Card.PropTypes = {
    card: PropTypes.object.isRequired
}

export default Card;