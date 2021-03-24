import React, {ReactElement, useEffect, useLayoutEffect, useRef, useState} from "react";
import axios from "axios";

interface IProps {
}

export const RequestButton = (props: IProps): ReactElement => {
    const url = "https://jsonplaceholder.typicode.com/posts/";
    const [userId, setUserId] = useState<number>(1);
    const [post, setPost] = useState<any>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    const token = useRef<any>();

    useEffect(() => {
        console.log(`was updated. userId: ${userId} postId: ${post?.id}`);
        // setUserId( userId => ++userId);
    }, [post?.id])

    function blockBtnAndLoadUserPost() {
        setUserId( userId => userId + 1);
        setLoading(true);
        setTimeout(() => {
            fetch(url + userId)
                .then(res => res.json())
                .then(data => {
                    setPost(data);
                })
                .catch(err => {console.error(err.stack)});
            setLoading(false);
        }, 2000);
    }

    function stopPrevQueryAndLoadPost() {
        if (token.current) {
            token.current()
        }
        const CancelToken: any = axios.CancelToken;
        setLoading(true);
        // setTimeout(() => {
            axios.get(url + userId, {
                cancelToken: new CancelToken(function (c: any) {
                    token.current = c;
                })
            })
            .then(response => {
                setPost(response.data);
                setUserId( userId => ++userId);
            })
            .catch(err => {console.error(err.stack)});
            setLoading(false);
        // }, 2000);
    }

    const gahHeight = {height: "100px"}
    return (
        <div id="container">
            <div><b>UserId: {userId === 1 ? 1 : userId - 1}</b></div>
            <br/>
            <div> {post ? "User's post: " + JSON.stringify(post) : null}</div>
            <button
                disabled={isLoading}
                id="request-btn"
                onClick={blockBtnAndLoadUserPost}
                onDoubleClick={undefined}
            >BlockingButton</button>
            <div style={gahHeight}/>
            <button
                // disabled={isLoading}
                id="stop-request-btn"
                onClick={stopPrevQueryAndLoadPost}
                onDoubleClick={undefined}
            >BlockingButton</button>
        </div>
    );
}
