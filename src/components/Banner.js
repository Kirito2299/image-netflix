import React, {useState, useEffect} from "react";
import axios from 'axios';
import data from '../requests';
import './Banner.css';

function Banner (){
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        async function fetchBanner() {
            const ban = await axios.get(data.NetflixOriginals);
            setBanner(ban.data.results[
                Math.floor(Math.random() * ban.data.results.length - 1)
            ]);
            return ban;
        }
        fetchBanner();
    }, []);

    console.log(banner);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    
    return(
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
            backgroundPosition: "center center"
            }}>
            <div className= "bannerContent">
                <h1 className="bantit">{banner?.title || banner?.name || banner.original_name}</h1>
                <div className="banbuttons">
                    <button className="banbut">Play</button>
                    <button className = "banbut"> Next </button>
                </div>
                <h1 className="bandes"> {truncate(banner?.overview, 150)} </h1>
            </div>

            <div className="gradient--fadeBottom" />

        </header>
    );
}

export default Banner;