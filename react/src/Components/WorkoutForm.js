import './Workout.css';

import axios from 'axios';
import React, { useState } from 'react';
import WorkoutPlan from './WorkoutPlan';

function WorkoutForm() {

    const title = 'Workout Planner';
    const promptSport = 'Sport/Goal: ';
    const promptDays = 'Workouts per week: '; 

    
    
    
      
    const [stateSport, setStateSport] = useState({
        ddMenu:'top-links',
        open: false,
    });
    const [stateDay, setStateDay] = useState({
        ddMenu:'top-links',
        open: false,
    });

    const [sport, setSport] = useState("soccer");
    const [days, setDays] = useState(1);
    const [sportInfo, setSportInfo] = useState([]);
    const [upper, setUpper] = useState([]);
    const [lower, setLower] = useState([]);
    const [show, setShow] = useState(false);


    const handleDropSport = () => {
        if (stateSport.open === true){
          return 'top-links';
        } else {
          return 'top-links2';
        }
    }
    const handleDropDay = () => {
        if (stateDay.open === true){
          return 'top-links';
        } else {
          return 'top-links2';
        }
    }

    const onChangeSport = (sport) => {
        setShow(false);
        setSport(sport);
    }

    const onChangeDays = (day) => {
        setShow(false);
        setDays(day);
    }

    const onSubmit = () => {
        setShow(false);

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
        <div className='cont'>
            <div className='header'>
                <div className='title-text'>{title}</div>
            </div>
            <div className='form-cont'>
                <div className='form'>
                    <div className='drop-cont'>
                        <div className='top-dropdown' onClick={() => setStateSport({ddMenu: handleDropSport(), open: !stateSport.open})}>
                            <div className='top-dropdown-label'>
                                {promptSport}
                            </div>
                            <div className='current-info'>
                                {sport.charAt(0).toUpperCase() + sport.slice(1)}
                            </div>
                        </div>
                        <div className={stateSport.ddMenu} onClick={() => setStateSport({ddMenu: handleDropSport(), open: !stateSport.open})}>
                            <div className='top-link-container'>
                                <div onClick={() => onChangeSport("soccer")} className='top-link'>Soccer</div>
                            </div>
                            <div className='top-link-container'>
                                <div onClick={() => onChangeSport("volleyball")} className='top-link'>Volleyball</div>
                            </div>
                            <div className='top-link-container'>
                                <div onClick={() => onChangeSport("football")} className='top-link'>Football</div>
                            </div>
                            <div className='top-link-container'>
                                <div onClick={() => onChangeSport("basketball")} className='top-link'>Basketball</div>
                            </div>
                            <div className='top-link-container'>
                                <div onClick={() => onChangeSport("strength")} className='top-link'>Strength</div>
                            </div>
                        </div>
                    </div>
                    <div className='drop-cont'>
                        <div className='top-dropdown' onClick={() => setStateDay({ddMenu: handleDropDay(), open: !stateDay.open})}>
                            <div className='top-dropdown-label'>
                                {promptDays}
                            </div>
                            <div>
                                {days}
                            </div>
                        </div>
                        <div className={stateDay.ddMenu} onClick={() => setStateDay({ddMenu: handleDropDay(), open: !stateDay.open})}>
                            <div className='top-link-container'>
                                <div onClick={() => onChangeDays(1)} className='top-link'>1</div>
                            </div>
                            <div className='top-link-container'>
                                <div onClick={() => onChangeDays(2)} className='top-link'>2</div>
                            </div>
                            <div className='top-link-container'>
                                <div onClick={() => onChangeDays(3)} className='top-link'>3</div>
                            </div>
                            <div className='top-link-container'>
                                <div onClick={() => onChangeDays(4)} className='top-link'>4</div>
                            </div>
                            <div className='top-link-container'>
                                <div onClick={() => onChangeDays(5)} className='top-link'>5</div>
                            </div>
                            <div className='top-link-container'>
                                <div onClick={() => onChangeDays(6)} className='top-link'>6</div>
                            </div>
                            <div className='top-link-container'>
                                <div onClick={() => onChangeDays(7)} className='top-link'>7</div>
                            </div>
                        </div>
                    </div>
                    <div className='submit-cont'>
                        <div className='submit' onClick={onSubmit}>
                            Submit
                        </div>
                    </div>
                </div>
            </div>
            <WorkoutPlan show={show} sport={sport} sportInfo={sportInfo} upper={upper} lower={lower} days={days}/>
        </div>
    );
}

export default WorkoutForm;