import {config} from './config';
const fetch = require('node-fetch');


// clef api
const API_key = 'fe7aee14ddcfaddd60f447c438c996bd';
// base url image
const url_image = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
async function getPosts(){
    const myPosts = await fetch(config.movie_api_url+'/search/movie?api_key='+config.movie_api_key+'&query='+tintin)
    console.log(response)
}
