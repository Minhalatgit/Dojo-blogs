import {useState, useEffect} from 'react'

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then(res=>{
                    if(!res.ok){
                        throw Error('Could not fetch data');
                    }
                    return res.json();
                })
                .then(data=>{
                    setData(data);
                    setIsPending(false);
                    setError(null)
                })
                .catch( e =>{
                    if(e.name === 'AbortError'){
                        console.log('Fetch aborted');
                    }else{
                        console.log(e.message);
                        setError(e.message);
                        setIsPending(false);
                    }
                })
        }, 500);

        return ()=> abortCont.abort();
    }, []);

    return {data, isPending, error}
}

export default useFetch;