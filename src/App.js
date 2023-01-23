import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import './App.css';
//4181496f

const API_URL='http://www.omdbapi.com?apikey=4181496f';


const App = () => {
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    
    const searchMovies = async (tittle) => {
        const response = await fetch(`${API_URL}&s=${tittle}`);
        const data = await response.json();

        setMovies(data.Search);

        console.log(tittle);
    }
    useEffect(()=>{
        searchMovies('Spiderman');
    },[]);

    const movie1={
            "Title": "Spiderman in Cannes",
            "Year": "2016",
            "imdbID": "tt5978586",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
        }

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className = "search">
                <input 
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange = {(e)=>setSearchTerm(e.target.value)}
                />
               <button onClick={()=>searchMovies({searchTerm})}>
                Search
               </button>
            </div>

            {
                movies?.length>0
                ? (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                  </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
                
            }

         
        </div>
    );
}
    
export default App;