import React, {ReactElement, useEffect, useState} from "react";

import "./styles.scss";

interface IProps {
    start: number;
}

export const Timer = (props: IProps): ReactElement => {
    const [timer, setTimer] = useState(props.start);

    useEffect(() => {
        let timerId: any;
        if (timer !== 0) {
            timerId = setTimeout(() => {
                setTimer(timer => --timer);
            },1000);

        }
        console.log("timer's rendering")
        return () => clearTimeout(timerId);
    }, [timer])

    return (
        <div id="timer-container" className="timer-container">{timer}</div>
    );
}