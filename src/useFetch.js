import { useEffect, useState } from "react";

const useFetch = (url)=>{

  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      const abortConst = new AbortController();
        setTimeout(() => {
          fetch(url, {signal:abortConst.signal})
            .then((res) => {
              if (!res.ok) {
                throw Error("Could not fetch the data from resource!");
              }
              return res.json();
            })
            .then((data) => {
              setData(data);
              setError(null);
              setisLoading(false);
            })
            .catch((err) => {
              if(err.name === "AbortError"){
                console.log("Abort Error!");
              }else{
              setisLoading(false);
              setError(err.message);
              }
            });
        }, 1000);

        return ()=> abortConst.abort();
      }, [url]);

      return {data, isLoading, error};
}

export default useFetch;

// npx json-server --watch data/db.json --port 8000