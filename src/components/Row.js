/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const poster_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, Url, isNetflix }){
    const [movies, movieList] = useState([]);
    const [trailer, settrailer] = useState("");

    useEffect(() => {
        async function fetchMovies() {
            const fetch = await axios.get(Url);
            movieList(fetch.data.results)
            return fetch;
        }
        fetchMovies();
    }, [Url]);

    const handleClick = (movie) => {
        if(trailer){
            settrailer("");
        }else {
            movieTrailer(movie?.name || "").then((url) => {
                const id = new URLSearchParams(new URL(url).search);
                settrailer(id.get("v"));
            }).catch(error => console.log(error)); 
        }
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
             // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return(
        <div className = "row">
            <h3>{ title }</h3>

            <div className = "movieposters">
                {movies.map(movie => {
                    return(
                        <img
                        className={isNetflix ? 'netposter':'movieposter'}
                        onClick={() => handleClick(movie)}
                        key={movie.id} 
                        src={poster_url+ (isNetflix?movie.poster_path:movie.backdrop_path)} 
                        alt= {movie.name} />)
                })}
            </div>

            {trailer && <YouTube className="yt" videoId = {trailer} opts={opts} />}
        </div>
    )
}

export default Row;