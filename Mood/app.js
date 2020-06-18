$(() => {
// //connect Giphy API 
// import { GiphyFetch } from '@giphy/js-fetch-api'

// // use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
// const gf = new GiphyFetch('BJn5Vg6VhNf0ItUMRyaY5REl5zGNzEs1')

// configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
// const { data: gif } = await gf.random({ tag: 'beer', type: 'stickers' })



const baseURL = `https://api.giphy.com/v1/gifs/random?`
const apiKey = `api_key=BJn5Vg6VhNf0ItUMRyaY5REl5zGNzEs1`
let tag = ``
let rating = 'rating=PG-13'
let giphyURL = baseURL + apiKey + '&' + tag + '&' + rating

// console.log(giphyURL)

tag = 'tag=sad'
const sad = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
        // $('.container').html 

        const $img = $('<img>').attr('src', data.data.image_url)
      $('.container').append($img)
        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    })
}
 sad()

 tag = 'tag=happy'
const happy = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
        // $('.container').html 

        const $img = $('<img>').attr('src', data.data.image_url)
      $('.container').append($img)
        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    })
}
 happy()

 tag = 'tag=blah'
 const blah = () => {
     $.ajax({
         url: giphyURL
     }).then((data) => {
         // $('.container').html 
 
         const $img = $('<img>').attr('src', data.data.image_url)
       $('.container').append($img)
         console.log(data.data.image_url) //pulls image from API
   }, (error) => {
     console.error(error)
     })
 }
  blah()

  tag = 'tag=anxious'
const anxious = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
        // $('.container').html 

        const $img = $('<img>').attr('src', data.data.image_url)
      $('.container').append($img)
        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    })
}
 anxious()


 tag = 'tag=angry'
 const angry = () => {
     $.ajax({
         url: giphyURL
     }).then((data) => {
         // $('.container').html 
 
         const $img = $('<img>').attr('src', data.data.image_url)
       $('.container').append($img)
         console.log(data.data.image_url) //pulls image from API
   }, (error) => {
     console.error(error)
     })
 }
  angry()
    
})