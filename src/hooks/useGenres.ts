import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]); // so set the Game[]
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    // before call API
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
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

  return { genres, error, isLoading };
};

export default useGenres;
