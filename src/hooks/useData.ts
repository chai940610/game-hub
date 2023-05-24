import { useState, useEffect } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client";



interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[]) => { //three argument, endpoint,requestConfig and deps, deps is an optional array of dependencies that will used to determine when to re-fetch the data
  const [data, setData] = useState<T[]>([]); // so set the Game[]
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => { //the useEffect hook runs whenever the endpoint, requestConfig and deps values change
    const controller = new AbortController(); //cancel the API request if needed
    // before call API
    setLoading(true); //before call API, set the loading to true indicating the data will be transferring
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal,...requestConfig })  //apiClient sends a GET request to the specified endpoint using the provided requestConfig and controller.signal to enable cancellation
        //do you understand how signal:controller.signal works? this is used for request cancellation, it sets the signal property to the controller.signal, which also mean AbortSignal instance create by the AbortController, it allows cancelling the request by using controller.abort()
        //then the signal properties error also same as the CanceledError as what I mentioned below
        .then((res) => {  //for my understanding, this then is callback function
        setData(res.data.results);
        // when it back set the loading to false
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; //what is CanceledError, which mean the request was canceled intentionally, example User-initialted cancellation, 1)user sendiri want to cancel certain request 2)Navigation based cancellation, when the user move to the new tab of Google Chrome 3) Timeout-based cancellation, the requests can be canceled if they take too long to complete
        setError(err.message);
        setLoading(false);
      });

    // cleanup function
    return () => controller.abort(); // this is important, know what is cleanup function? when the component unmounted, it means when user go to other tab, mean navigate away from the page
  }, deps?[...deps]:[]);

  return { data, error, isLoading };  //data,error and isLoading are known as properties
};

export default useData;
