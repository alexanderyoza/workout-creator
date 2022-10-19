//import React, { useEffect, useState } from 'react';

function WorkoutPlan(props) {

    

    //create the workout
    const workouts = () => {
        let workArr = [];
        if (props.show === true){
            if (props.days === 1){
                let workDay;
                let repRng = props.sportInfo[2];
                workDay = (
                    <div>
                        <div>
                            Day 1
                        </div>
                        <div>
                            {props.upper.map(element => {
                                return(
                                    <div>
                                        <div>
                                            {element[0]}
                                        </div>
                                        <div>
                                            Sets: 3
                                        </div>
                                        <div>
                                            Reps: {repRng-2}-{repRng}
                                        </div>
                                    </div>
                                );
                                
                            })}
                            {props.lower.map(element => {
                                return(
                                    <div>
                                        <div>
                                            {element[0]}
                                        </div>
                                        <div>
                                            Sets: 3
                                        </div>
                                        <div>
                                            Reps: {repRng-2}-{repRng}
                                        </div>
                                    </div>
                                );
                            })}
                        
                        </div>
                    </div>
                );
                workArr.push(workDay);
            } else {
                let upperDays = Math.floor(props.days*props.sportInfo[0]/100);
                let lowerDays = Math.ceil(props.days*props.sportInfo[1]/100);

                for (let i = 1; i <= props.days; i++){
                    let workDay;
                    let repRng = props.sportInfo[2];
                    if (upperDays >= lowerDays){
                        
                        upperDays--;
                    } else {

                        lowerDays--;
                    }

                    workArr.push(workDay);
                }
            }
        }
        return workArr;
    }

  return (
    <div>
        <div>
            Sport: {props.sport.charAt(0).toUpperCase() + props.sport.slice(1)}
        </div>
        <div>
            {workouts().map(element => <div>{element}</div>)}
        </div>
    </div>
  )
}

export default WorkoutPlan;