import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WorkoutForm() {

    const title = 'Workout Planner';
    const promptSport = 'Select your sport/goal: ';
    const promptDays = 'Select the number of weekly workouts: '; 

    const [sport, setSport] = useState('');
    const [days, setDays] = useState(0);
    const [sportInfo, setSortInfo] = ({});
    const [exercises, setExercises] = useState(0);

    useEffect(() => {
        setSport('soccer');
        setDays(1);
    })

    const onChangeSport = (e) => {
        setSport(e.target.value);
    }
    const onChangeDays = (e) => {
        setDays(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            sport: sport,
            days: days
        }

        axios.get('http://localhost:4200/')
            .then(response => {
                if (response.data.length > 0) {

                }
            })

        console.log(exercise);
        //window.location = '/';
    }
    
    return (
        <div>
            <div className='header'>
                <div className='title-text'>{title}</div>
            </div>
            <div className='form-cont'>
                <form onSubmit={onSubmit}>
                    <label htmlFor='sport'>{promptSport}</label>
                    <select name='sport' id='sport' value={sport} onChange={onChangeSport}>
                        <option value='soccer'>Soccer</option>
                        <option value='volleyball'>Volleyball</option>
                        <option value='football'>Football</option>
                        <option value='basketball'>Basketball</option>
                    </select>
                    <br />
                    <label htmlFor='days'>{promptDays}</label>
                    <select name='days' id='days' value={days} onChange={onChangeDays}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                    </select>
                    <br />
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        </div>
    );
}

export default WorkoutForm;