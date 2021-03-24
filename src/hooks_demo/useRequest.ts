import React, {FC, useEffect, useState} from "react";


export const useRequest = (request: Promise<any>): any => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect( () => {
        setLoading(true);
        request.then( (res: any) => {setData(res)})
            .catch( (err: any) => {setError(err)})
            .finally(() => {setLoading(false)});
    }, [])
    return [data, isLoading, error];
}