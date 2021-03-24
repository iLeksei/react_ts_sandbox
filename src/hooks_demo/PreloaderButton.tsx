import React, {ReactElement, useState} from "react";
import {Button} from "react-bootstrap";
import axios from "axios";
import {useCountdown} from "./useCountdown";


interface IProps {
}

export const PreloaderButton = (props: IProps): ReactElement => {
    const url = "https://jsonplaceholder.typicode.com/posts/";
    const [userId, setUserId] = useState<number>(1);
    const [post, setPost] = useState<any>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [counter, startCounter, isActive, setCounter] = useCountdown(10);

    function activateCounter() {
        startCounter();
    }

    function fetchUserPost() {
        activateCounter();
        setLoading(true);
        axios.get(url + userId)
            .then(response => setPost(response.data))
            .catch( err => {console.error(err.stack)})
        setLoading(false);
    }

    return (
        <div>
            <Button
                id="request-btn"
                onClick={fetchUserPost}
                onDoubleClick={undefined}
                disabled={!!isActive}
            >{isActive ? counter : "ClickMe"}</Button>
        </div>
    );
}