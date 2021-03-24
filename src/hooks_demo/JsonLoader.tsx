import React, {FC, ReactElement, useEffect, useRef, useState} from "react";

interface IProps {
};

/**
 *  it's a demo with useEffect hook and didMount effect
 */
export const JsonLoader: FC<IProps> = (props: IProps ): ReactElement => {
    const url = "https://jsonplaceholder.typicode.com/posts/";
    const [userId, setUserId] = useState<number>(1);
    const [data, setData] = useState<any | null>(null);
    const mounted = useRef<boolean>(true);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(0);
    // const [data, isLoading, error] = useRequest(fetchJson()); //todo does't work good (duplicate request)

    useEffect(() => {
        if (mounted.current) {
            console.log("Was mounted");
            mounted.current = false;
        }
        fetchJson();
    }, [userId])

    useEffect(() => {

    }, [])

    async function fetchJson() {
        setLoading(true);
        try {
            let response: Response = await fetch(url + userId);
            let data: any = await response.json();
            console.log("Got user data: " + JSON.stringify(data));
            setData(data);
        } catch (e) {
            console.error(e.stack);
        }
        setLoading(false);
    };

    function nextClickHandler() {
        console.log("next button was clicked")
        return setUserId(userId => userId === 5 ? 1 : ++userId);
    }

    function prevClickHandler() {
        console.log("prev button was clicked")
        return setUserId(userId => userId === 1 ? 1 : --userId);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div id="json-loader__container">
            { mounted ? <p>Component was mounted</p> : null }
            <h4>Got new post for user with id: {userId}</h4>
            <h5>data</h5>
            {data ? JSON.stringify(data) : null}
            <br/>
            <button id="prev-btn" onClick={prevClickHandler}>prev</button>
            <button id="next-btn" onClick={nextClickHandler}>next</button>
        </div>
    );
}


