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
      $('.img-here').append($img)
      setTimeout($('#happy-gif').fadeOut(5000));   
        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    })
    
}
$('#Happy').on('click', happy)

//make gif disappear after a period of time
//ref code from ====>>> https://stackoverflow.com/questions/1911290/make-div-text-disappear-after-5-seconds-using-jquery#:~:text=call%20the%20div%20set%20the,hide()%20as%20well.&text=You%20may%20need%20to%20display%20div%20text%20again%20after%20it%20has%20disappeared. 

// const happyFade_out = () => {
//   $("#happy-gif").fadeOut().empty();
//   $(".img-here").load(".img-here > *");
// }

// setTimeout(happyFade_out, 5000);


tag = 'tag=very_sad'
const sad = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
    const $img = $("<img id='sad-gif'>").attr('src', data.data.image_url)
      $('.img-here').append($img)

        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    
    })
    
}
$('#Sad').on('click', sad); 
const SadFade_out = () => {
    $("#sad-gif").fadeOut().empty();
  }
  setTimeout(SadFade_out, 5000);
 

 tag = 'tag=blah'
 const blah = () => {
     $.ajax({
         url: giphyURL
     }).then((data) => {
         const $img = $("<img id='blah-gif'>").attr('src', data.data.image_url)
       $('#Blah').append($img)
         console.log(data.data.image_url) //pulls image from API
   }, (error) => {
     console.error(error)
     })
 }
 $('#Blah').on('click', blah); 
 
 const blahFade_out = () => {
    $("#blah-gif").fadeOut().empty();
  }
  setTimeout(blahFade_out, 5000);


  tag = 'tag=anxiety'
const anxious = () => {
    $.ajax({
        url: giphyURL
    }).then((data) => {
        const $img = $("<img id='anxious-gif'>").attr('src', data.data.image_url)
      $('#Anxious').append($img)
        console.log(data.data.image_url) //pulls image from API
  }, (error) => {
    console.error(error)
    })
}
$('#Anxious').on('click', anxious)
const anxiousFade_out = () => {
    $("#anxious-gif").fadeOut().empty();
  }
  setTimeout(anxiousFade_out, 5000);

 tag = 'tag=angry'
 const angry = () => {
     $.ajax({
         url: giphyURL
     }).then((data) => {
         const $img = $("<img id='angry-gif'>").attr('src', data.data.image_url)
       $('#Angry').append($img) 
         console.log(data.data.image_url) //pulls image from API
   }, (error) => {
     console.error(error)
     })

 }
 $('#Angry').on('click', angry);   

const angryFade_out = () => {
    $("#angry-gif").fadeOut().empty();
  }
  setTimeout(angryFade_out, 5000);

 



})