import React, {useState, useEffect} from 'react';

function Clock() {
    const [time, setTime] = useState(new Date().toString());
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        console.log("Clock Component is mounted or updated.");
    }, [flag]); 
    //useEffect will run when the dependency array with state variable (flag) 
    //changes its value.

    useEffect(() => {
        const interval = setInterval(showDate(), 5000);
        console.log("Time variable is updated.");

        return () => {
            console.log("Cleanup of interval.");
            clearInterval(interval);
        };

    }, [time]);
    //useEffect will run when the dependency array with state variable (time) 
    //changes its value.


    function showDate() {
        console.log(new Date().toString());
        setTime(new Date().toString());
    }

    return( <div>{time}</div>) ;
}
export default Clock;