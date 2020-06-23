# Mood App
Inspiration:
Mood is a simple emotional wellness check-in that is intended to help you navigate your way to inspiration or wellness resources

Technologies Used: 
HTML, Javascript, Jquery, CSS languages were all used. In addition, webkits were used to supplement styling elements (flash, slider, and others that you can find in the CSS),
and the additional CSS resources (licensed and sited) were downloaded. The app is connected to the Giphy API.

Approach: 
Initially, the approach was to have the user click on a emotion button and a random gif that corresponds to that emotion populates. That was successful but it was decided later in the project to have that GIF populate in a slide of a slideshow pairs the GIF with a message.

Unsolved Problems:
#1: Slider is not centered on larger screens. I believe that this is because there is a slideWidth property assigned to it that will not allow it to expand to the contents of the div
#2: Initially tried appending the generated gif to the id 'item1' and in the console it populates, however, it doesn't not auto-populate to the first slide of the slider.  I could not see it until I clicked back to slide one from slide 2.
#3: The emotions id inside of the container class will not take the media query rule of the container, even when matched inside the media query styling. No clue why. 
#4: Could not get the page or div to auto refresh/reload after several attempts. The idea was that the user would have the ability to click multiple buttons without having to refresh the page each time. 


# Link to Page
https://mjlessington.github.io/Mood/

# Link to GitHub Repo
https://github.com/mjlessington/mjlessington.github.io/tree/master/Mood
