
// //connect Giphy API 
// import { GiphyFetch } from '@giphy/js-fetch-api'

// // use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
// const gf = new GiphyFetch('BJn5Vg6VhNf0ItUMRyaY5REl5zGNzEs1')

// configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
// const { data: gif } = await gf.random({ tag: 'beer', type: 'stickers' })



const baseURL = `https://api.giphy.com/v1/gifs/random?`
const apiKey = `api_key=BJn5Vg6VhNf0ItUMRyaY5REl5zGNzEs1`
let tag = `tag=hello`
let rating = 'rating=PG-13'
let giphyURL = baseURL + apiKey + '&' + tag + '&' + rating



console.log(giphyURL)

$(() => {

    
})