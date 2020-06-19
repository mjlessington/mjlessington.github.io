$(() => {
// connect Giphy API 


const baseURL = `https://api.giphy.com/v1/gifs/random?`
const apiKey = `api_key=BJn5Vg6VhNf0ItUMRyaY5REl5zGNzEs1`
let tag = ``
let rating = 'rating=PG-13'
let giphyURL = baseURL + apiKey + '&' + tag + '&' + rating

// console.log(giphyURL)

tag = 'tag=very_happy'
const happy = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
       const $img = $("<img id='happy-gif'>").attr('src', data.data.image_url)
      $('#Happy').append($img)
            
        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    })
    // $('#happy-gif').fadeOut();
}
$('#Happy').on('click', happy)







// const showHappy = () => {
//     $("<img id='happy-gif'>").attr('src', data.data.image_url).show();
// }
// $('#Happy').on('click', showHappy);
 

tag = 'tag=very_sad'
const sad = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
    const $img = $("<img id='sad-gif'>").attr('src', data.data.image_url)
      $('#Sad').append($img)

        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    
    })
    
}
$('#Sad').on('click', sad); 

 

 tag = 'tag=blah'
 const blah = () => {
     $.ajax({
         url: giphyURL
     }).then((data) => {
         const $img = $('<img>').attr('src', data.data.image_url)
       $('#Blah').append($img)
         console.log(data.data.image_url) //pulls image from API
   }, (error) => {
     console.error(error)
     })
 }
 $('#Blah').on('click', blah); 

  tag = 'tag=anxiety'
const anxious = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
        const $img = $('<img>').attr('src', data.data.image_url)
      $('#Anxious').append($img)
        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    })
}
$('#Anxious').on('click', anxious)


 tag = 'tag=angry'
 const angry = () => {
     $.ajax({
         url: giphyURL
     }).then((data) => {
         const $img = $('<img>').attr('src', data.data.image_url)
       $('#Angry').append($img) 
         console.log(data.data.image_url) //pulls image from API
   }, (error) => {
     console.error(error)
     })

 }
 $('#Angry').on('click', angry);     
})