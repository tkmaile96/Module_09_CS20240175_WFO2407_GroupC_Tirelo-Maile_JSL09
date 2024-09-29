// https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature

// Fetch a random picture from unsplash and make it as background image
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(response => response.json()) // converts response into Json format
.then(data => {
    document.body.style.backgroundImage = `By: ${data.user.name}`; // set the background image with the name of the author
})