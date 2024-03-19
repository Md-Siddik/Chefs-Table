import { useEffect, useState } from "react";
import Cooking from "./Cooking";
import Preparing from "./Preparing";
import List from "./list/List";

const Schedule = ({ schedules, handleDelete, cooking, totalTime, totalCalorie }) => {

    return (
        <div className="border-[1px] rounded-xl">
            <div>
                <div>
                    <h1 className="text-xl font-bold text-center py-6">Want to cook: {schedules.length}</h1>
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
                        {
                            schedules.map((preparing, index) => <Preparing index={index} handleDelete={handleDelete} schedules={schedules} preparing={preparing}></Preparing>)
                        }
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

                        {
                            cooking.map((cooking, index) => <Cooking index={index} cooking={cooking}></Cooking>)
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total Time=</td>
                            <td>Total Calories=</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>{totalTime} minutes</td>
                            <td>{totalCalorie} calories</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Schedule;