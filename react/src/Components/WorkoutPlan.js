import React, { useEffect, useState } from 'react';

function WorkoutPlan(props) {


    const [plan, setPlan] = useState([]);

    useEffect(() => {
        workouts();
    })

    //called to create a single day to return to workouts
    const workday = (dayNum) => {
        return <div>Day {dayNum}</div>;
    }

    //loops through the amount of days to create a workout
    const workouts = () => {
        for (let i = 0; i < props.days; i++){
            plan.push(workday(i+1));
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