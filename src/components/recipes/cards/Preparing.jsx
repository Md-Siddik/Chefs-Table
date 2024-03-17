const Preparing = ({schedules}) => {
    const {recipe_name, preparing_time, calories} = schedules;
    // const {recipe_name} = preparing;
    console.log(schedules);
    return (
        <tr className="bg-gray-100 border-[1px]">
            <td>1</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
            <td><button className="btn bg-[#0BE58A] border-none rounded-full">Preparing</button></td>
        </tr>
    );
};

export default Preparing;