import React, { useState } from "react";
import './App.css'



function App() {
    const [list, setList] = React.useState([]);
    const [available,setAvailable] = React.useState([]);
    const [lastPicked, setLastPicked] = useState(null);
    const [current, setCurrent] = useState(null);


    const handleList=(input)=>{
       const clean=input.trim()
        setList(clean.split(","));
        setAvailable(clean.split(","));
        setLastPicked(null);
        setCurrent(null);
    }

    const pick=()=>{

        if(available.length===0){
            setAvailable(list);
            return;
        }

        let choice;

        do {
            const randomIndex = Math.floor(Math.random() * available.length);
            choice = available[randomIndex];
        } while (choice === lastPicked && available.length > 1);

        setCurrent(choice);
        setLastPicked(choice);


        setAvailable(available.filter((item) => item !== choice));


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };


    return (

        <div className="app">


            <div className="app-header">

            <input
                type="text"
                onBlur={(e) => handleList(e.target.value)}
            />

            <button onClick={pick}> Random</button>
            </div>

            <div className="words">

                {current && <h2> {current}</h2>}

            </div>





        </div>
    );
}
export default App;