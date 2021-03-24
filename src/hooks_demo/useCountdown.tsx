import React, {useEffect, useState} from "react";


export const useCountdown = (timer: number) => {
    const [counter, setCounter] = useState(timer);
    const [isActive, activateCounter] = useState(false);

    function startCounter() {
        activateCounter(true);
    }

    useEffect(() => {
        let timerId: any;
        if (isActive) {
            if (counter !== 0) {
                timerId = setTimeout(() => {
                    setCounter( counter => --counter);
                }, 1000)
            }
            if (counter === 0) {
                activateCounter(false);
            }
        }
        return () => clearTimeout(timerId);
    }, [counter, isActive])

    useEffect(() => {
        if (!isActive && counter === 0) {
            setCounter(timer);
        }
    })

    return [counter, startCounter, isActive, setCounter];
}