import { useState, useEffect} from 'react';
import { POPULAR_BASE_URL } from '../../config'

// Simplest example of a Hook
// export const useMockFetch = () => {
//     const [state, setState] = useState({movies: ["After Earth"]})
//     useEffect(() => {
//         setState({ movies: ["Mock Movies"]})
//     }, [])

//     return {state} ;
// }

export const useHomeFetch = () => {

    const [state, setState] = useState({ movies: [] })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
  
    const fetchMovies = async endpoint => {
        setError(false)
        setLoading(true)
  
        const isLoadMore = endpoint.search('page');

        try{
            const result = await (await fetch(endpoint)).json();
            
            setState(prev => ({
                ...prev,
                movies: 
                    isLoadMore !== -1 
                    ?  [...prev.movies, ...result.results]
                    : [...result.results],
                heroImage: prev.heroImage || result.results[0],
                currentPage: result.page,
                totalPages: result.total_pages
            }))
  
        } catch(error) {
          setError(true)
          console.log("Error", error)
        }
        setLoading(false)
    }
    
    useEffect(() => {
        // if 401, display message
        fetchMovies(POPULAR_BASE_URL);
    }, [])

    return [{ state, loading, error}, fetchMovies]
}