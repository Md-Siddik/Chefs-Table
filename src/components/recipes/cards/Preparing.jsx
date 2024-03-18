const Preparing = ({preparing, handleCooking}) => {

    const {recipe_name, preparing_time, calories} = preparing;

    return (
        <tr className="bg-gray-100 border-[1px]">
            <td>{}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
            <td><button className="btn bg-[#0BE58A] border-none rounded-full" onClick={()=>{handleCooking(preparing)}}>Preparing</button></td>
        </tr>
    );
};

export default Preparing;