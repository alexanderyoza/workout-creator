import React, { useState } from 'react';

function WorkoutPlan(props) {


    const [plan, setPlan] = useState([<div>hello</div>]);

    //called to create a single day to return to workouts
    const workday = () => {
        return <div>Day</div>;
    }

    //loops through the amount of days to create a workout
    const workouts = () => {
        for (let i = 0; i < props.day; i++){
            plan.push(workday());
        }
    }

  return (
    <div>
        <div>
            Sport: {props.sport}
        </div>
        <div>
            {plan}
        </div>
    </div>
  )
}

export default WorkoutPlan;