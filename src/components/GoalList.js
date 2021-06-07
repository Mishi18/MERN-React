import React from 'react';

import './GoalList.css'

function GoalList(props) {
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhh", props)
    return (
        <div>
            <ul className="goal-list">
                {props.goals.map(goal=>{
                    return <li>{goal.text}</li>
                })}
            </ul>
        </div>
    );
}

export default GoalList;