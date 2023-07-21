import React, {useState, useEffect} from 'react';

function Clock() {
    const [time, setTime] = useState(new Date().toString());

    function showDate() {
        console.log(new Date().toString());
        setTime(new Date().toString());
    }

    setInterval(showDate(), 5000);

    return( <div>{time}</div>) ;
}
export default Clock;