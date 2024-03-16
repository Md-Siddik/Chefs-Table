import Cooking from "./Cooking";
import Preparing from "./Preparing";

const Schedule = () => {
    return (
        <div className="border-[1px] rounded-xl">
            <div>
                <div>
                    <h1 className="text-xl font-bold text-center py-6">Want to cook: 01</h1>
                    <hr />
                </div>
                <div>
                    <table className="wantTable w-[450px] text-left">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                        <Preparing></Preparing>
                        <Preparing></Preparing>
                    </table>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-xl font-bold text-center py-5">Currently cooking: 02</h1>
                    <hr />
                </div>
                <div>
                    <table className="cookingTable w-[450px] text-left">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                        <Cooking></Cooking>
                        <Cooking></Cooking>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total Time=</td>
                            <td>Total Calories=</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>45 minutes</td>
                            <td>1050 calories</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Schedule;