import React, { useState } from 'react';
import axios from 'axios';
import WorkoutPlan from './WorkoutPlan';

function WorkoutForm() {

    const title = 'Workout Planner';
    const promptSport = 'Select your sport/goal: ';
    const promptDays = 'Select the number of weekly workouts: '; 

    const [sport, setSport] = useState("soccer");
    const [days, setDays] = useState(1);
    const [sportInfo, setSportInfo] = useState([]);
    const [upper, setUpper] = useState([]);
    const [lower, setLower] = useState([]);
    const [show, setShow] = useState(false);


    const onChangeSport = (e) => {
        setSport(e.target.value);
    }

    const onChangeDays = (e) => {
        setDays(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();


        // sportinfo
        axios.get('http://localhost:4200/sportinfo')
            .then(response => {
                if (response.data.length > 0) {
                    for (let i = 0; i < response.data.length; i++) {
                        if (response.data[i].name === sport) {
                            setSportInfo(response.data[i].muscleFocus);
                            break;
                        } else{
                            setSportInfo(['Sport/Goal selection not found.']);
                        }
                    }
                }
            });


        // group
        axios.get('http://localhost:4200/group')
            .then(response => {
                if (response.data.length > 0) {
                    for (let i = 0; i < response.data.length; i++) {
                        if (response.data[i].name === "upper") {
                            setUpper(response.data[i].exercises);
                        } else if ((response.data[i].name === "lower")){
                            setLower(response.data[i].exercises);
                        }
                    }
                }
            });

        setShow(true);
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
                        <option value='strength'>Strength</option>
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
            <WorkoutPlan show={show} sport={sport} sportInfo={sportInfo} upper={upper} lower={lower} days={days}/>
            
        </div>
    );
}

export default WorkoutForm;