const Cooking = (cooking) => {
    const {recipe_name, preparing_time, calories} = cooking.cooking;
    const indexNum = cooking.index;
    return (
        <tr className="bg-gray-100 border-[1px]">
            <td>{indexNum+1}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
        </tr>
    );
};

export default Cooking;