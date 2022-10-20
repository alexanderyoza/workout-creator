import './Workout.css';

function WorkoutPlan(props) {

    const showSport = () => {
        if (props.show === true){
            return (<div className='show-sport'>Sport: {props.sport.charAt(0).toUpperCase() + props.sport.slice(1)}</div>);
        }
        return (<div></div>);
    }
    

    //create the workout
    const workouts = () => {
        let workArr = [];
        if (props.show === true){
            if (props.days === 1){
                let workDay;
                let repRng = props.sportInfo[2];
                workDay = (
                    <div className='day-plan'>
                        <div className='day-muscle'>
                            Day 1: Full Body
                        </div>
                        <div className='exercises'>
                            {props.upper.map(element => {
                                return(
                                    <div className='exercise'>
                                        <div className='ex-name'>
                                            {element[0]}
                                        </div>
                                        <div className='sets'>
                                            Sets: 2
                                        </div>
                                        <div className='reps'>
                                            Reps: {repRng-2}-{repRng}
                                        </div>
                                    </div>
                                );
                                
                            })}
                            {props.lower.map(element => {
                                return(
                                    <div className='exercise'>
                                        <div className='ex-name'>
                                            {element[0]}
                                        </div>
                                        <div className='sets'>
                                            Sets: 2
                                        </div>
                                        <div className='reps'>
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
                let upperDays = Math.ceil(props.days*props.sportInfo[0]/100);
                let lowerDays = Math.floor(props.days*props.sportInfo[1]/100);
                console.log(upperDays);
                console.log(lowerDays);
                let upperCnt = 0;
                let lowerCnt = 0;
                let repRng = props.sportInfo[2];
                for (let i = 1; i <= props.days; i++){
                    let workDay;
                    if (upperDays >= lowerDays){
                        //create upper workout
                        workDay = (
                            <div className='day-plan'>
                                <div className='day-muscle'>
                                    Day {i}: Upper Body
                                </div>
                                <div className='exercises'>
                                    {// eslint-disable-next-line
                                    props.upper.map(element => {
                                        return(
                                            <div className='exercise'>
                                                <div className='ex-name'>
                                                    {element[upperCnt % element.length]}
                                                </div>
                                                <div className='sets'>
                                                    Sets: 3
                                                </div>
                                                <div className='reps'>
                                                    Reps: {repRng-2}-{repRng}
                                                </div>
                                            </div>
                                        );
                                        
                                    })}
                                </div>
                            </div>
                        );
                        upperCnt++;
                        upperDays--;
                    } else {
                        //create lower workout
                        workDay = (
                            <div className='day-plan'>
                                <div className='day-muscle'>
                                    Day {i}: Lower Body
                                </div>
                                <div className='exercises'>
                                    {// eslint-disable-next-line
                                    props.lower.map(element => {
                                        return(
                                            <div className='exercise'>
                                                <div className='ex-name'>
                                                    {element[lowerCnt % element.length]}
                                                </div>
                                                <div className='sets'>
                                                    Sets: 3
                                                </div>
                                                <div className='reps'>
                                                    Reps: {repRng-2}-{repRng}
                                                </div>
                                            </div>
                                        );
                                        
                                    })}
                                </div>
                            </div>
                        );
                        lowerCnt++;
                        lowerDays--;
                    }

                    workArr.push(workDay);
                }
            }
        } else {
            workArr = [];
        }
        return workArr;
    }

  return (
    <div className='plan-cont'>
        <div className='show-sport-cont'>
            {showSport()}
        </div>
        <div className='days'>
            {workouts().map(element => <div>{element}</div>)}
        </div>
    </div>
  );
}

export default WorkoutPlan;