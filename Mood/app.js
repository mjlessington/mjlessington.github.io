$(() => {
// connect Giphy API 
$('.slider').bxSlider({
  autoControls: true,
  auto: false, //default is true
  pager: true,
  slideWidth: 1800, //default is 800
  adaptiveHeight: true, //default is false
  mode: 'fade',
  captions: false,
  speed: 1000,
  minSlide: 2
})

const baseURL = `https://api.giphy.com/v1/gifs/random?`
const apiKey = `api_key=BJn5Vg6VhNf0ItUMRyaY5REl5zGNzEs1`
let tag = ``
let rating = 'rating=PG-13'
let giphyURL = baseURL + apiKey + '&' + tag + '&' + rating



tag = 'tag=very_happy'
const happy = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
       const $img = $("<img id='happy-gif'>").attr('src', data.data.image_url)
      $('#item2').append($img)
      

      console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    })
    
}
$('#Happy').on('click', happy)


tag = 'tag=very_sad'
const sad = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
    const $img = $("<img id='sad-gif'>").attr('src', data.data.image_url)
      $('#item2').append($img)

        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    
    })
    
}
$('#Sad').on('click', sad); 
const SadFade_out = () => {
    $("#sad-gif").fadeOut().empty();
  }
  // setTimeout(SadFade_out, 5000);
 

 tag = 'tag=blah'
 const blah = () => {
     $.ajax({
         url: giphyURL
     }).then((data) => {
         const $img = $("<img id='blah-gif'>").attr('src', data.data.image_url)
       $('#item2').append($img)
         console.log(data.data.image_url) //pulls image from API
   }, (error) => {
     console.error(error)
     })
 }
 $('#Blah').on('click', blah); 
 
 const blahFade_out = () => {
    $("#blah-gif").fadeOut().empty();
  }
  // setTimeout(blahFade_out, 5000);


  tag = 'tag=anxiety'
const anxious = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
        const $img = $("<img id='anxious-gif'>").attr('src', data.data.image_url)
      $('#item2').append($img)
        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    })
}
$('#Anxious').on('click', anxious)
const anxiousFade_out = () => {
    $("#anxious-gif").fadeOut().empty();
  }
  // setTimeout(anxiousFade_out, 5000);

 tag = 'tag=angry'
 const angry = () => {
     $.ajax({
         url: giphyURL
     }).then((data) => {
         const $img = $("<img id='angry-gif'>").attr('src', data.data.image_url)
       $('#item2').append($img) 
         console.log(data.data.image_url) //pulls image from API
   }, (error) => {
     console.error(error)
     })

 }
 $('#Angry').on('click', angry);   

const angryFade_out = () => {
    $("#angry-gif").fadeOut().empty();
  }
  // setTimeout(angryFade_out, 5000);

 //////////////////////////////////////////////////////////////////////////////////////////////////
/////////////APP UPDATE!!!!! INSTEAD OF FADEOUT FUNCTION, CREATE SLIDER THAT RENDERS GIF, /////////////////////CORRESPONDING MESSAGE AND LINK TO A CORRESPONDING RESOURCE////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
  

})