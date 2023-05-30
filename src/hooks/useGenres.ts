
// import useData from "./useData"; old code
import genres from "../data/genres";

export interface Genre {  //this is results https://api.rawg.io/docs/#operation/genres_list this website, and see the results
  id: number;
  name: string;
  image_background:string;
}
//Genre id,name and image_background will goes to data of the useData.ts


// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

const useGenres = () => ({data:genres,isLoading:false,error:null});  //useData<Genre>('/genres') old code
//   const [genres, setGenres] = useState<Genre[]>([]); // so set the Game[]
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     // before call API
//     setLoading(true);
//     apiClient
//       .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         // when it back set the loading to false
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     // cleanup function
//     return () => controller.abort(); // this is important, know what is cleanup function? when the component unmounted, it means when user go to other tab, mean navigate away from the page
//   }, []);

//   return { genres, error, isLoading };
// };

export default useGenres;
