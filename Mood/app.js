$(() => {
// connect Giphy API 


const baseURL = `https://api.giphy.com/v1/gifs/random?`
const apiKey = `api_key=BJn5Vg6VhNf0ItUMRyaY5REl5zGNzEs1`
let tag = ``
let rating = 'rating=PG-13'
let giphyURL = baseURL + apiKey + '&' + tag + '&' + rating

// console.log(giphyURL)

tag = 'tag=happy'
const happy = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
       const $img = $('<img>').attr('src', data.data.image_url).hide()
      $('#Happy').append($img)
        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    })
}
 happy()


tag = 'tag=sad'
const sad = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
    const $img = $("<img id='sad-gif'>").attr('src', data.data.image_url).hide()
      $('#Sad').append($img)

        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    
    })
    
}
sad()

 

 tag = 'tag=blah'
 const blah = () => {
     $.ajax({
         url: giphyURL
     }).then((data) => {
         const $img = $('<img>').attr('src', data.data.image_url).hide()
       $('#Ok').append($img)
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
        const $img = $('<img>').attr('src', data.data.image_url).hide()
      $('#Anxious').append($img)
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
         const $img = $('<img>').attr('src', data.data.image_url).hide()
       $('#Angry').append($img) 
         console.log(data.data.image_url) //pulls image from API
   }, (error) => {
     console.error(error)
     })
 }
  angry()
    
})