import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";



interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint:string) => {
  const [data, setData] = useState<T[]>([]); // so set the Game[]
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    // before call API
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        // when it back set the loading to false
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    // cleanup function
    return () => controller.abort(); // this is important, know what is cleanup function? when the component unmounted, it means when user go to other tab, mean navigate away from the page
  }, []);

  return { data, error, isLoading };
};

export default useData;
