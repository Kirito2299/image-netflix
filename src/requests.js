/* eslint-disable no-template-curly-in-string */
const API_KEY = "0de2abbaef25185b0c3c3529e2aeef17";
const base_url = 'https://api.themoviedb.org/3';

const data = {
    NetflixOriginals: base_url + '/discover/tv?api_key=' + API_KEY + '&with_networks=213',
    trending: base_url+'/trending/all/week?api_key=' + API_KEY + '&language=en-US',
    topRated: base_url+'/movie/top_rated?api_key=' + API_KEY + '&language=en-US',
    Action: base_url+'/discover/movie?api_key=' + API_KEY + '&with_genres=28',
    Comedy: base_url+'/discover/movie?api_key=' + API_KEY + '&with_genres=35',
    Horror: base_url+'/discover/movie?api_key=' + API_KEY + '&with_genres=27',
    Romantic: base_url+'/discover/movie?api_key=' + API_KEY + '&with_genres=10749',
    Documentary: base_url+'/discover/movie?api_key=' + API_KEY + '&with_genres=99'
}

export default data;