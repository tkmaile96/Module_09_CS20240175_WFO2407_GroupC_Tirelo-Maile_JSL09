// https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature

// Fetch a random picture from unsplash and make it as background image
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(response => response.json()) // converts response into Json format
.then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`; // set the background image with the name of the author
    document.getElementById("author").textContent = `By: ${data.user.name}`;
})
.catch(_err => {
    // Should the API request fail, use a default image as the background
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1&q=85)`
    document.getElementById("author").textContent = `By:  Unsplash` // set the author text to Unsplash

});

// Fetch Dogecoin data from CoinGecko
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
// lets check if the response from the API is OK, if not throw an error
.then(res => {
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    // if the response is OK, convert it to JSON format
    return res.json();
})
.then(data => {
    document.getElementById('crypto-top').innerHTML =
    `<img src=${data.image.small} />
    <span>${data.name}</span>`;  // display the Dogecoin logo and name


//  insert coingecko prices
document.getElementById("crypto").innerHTML = 
`<p>🎯 Current price: $${data.market_data.current_price.usd}</p>
<p>🚨 24h high:  $${data.market_data.high_24h.usd}</p>
<p>🚨 24h Low: $${data.market_data.low_24h.usd} </p>`;

})
// Catch any errors and  display them in the console
.catch(error => console.error('Error:', error));

// function to display real time clock
function displayClock() {
    const  date = new Date();  // get the current date and time
    document.getElementById('time').textContent = date.toLocaleTimeString('en-us', {timeStyle: 'short'});  // display the time in the time element

}
setInterval(displayClock, 1000);  // call the function every second to update the time

// Fetch current weather based on Geolocation
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    // check if the response from the API is OK, if not throw an error
    .then(res => {
        if(!res.ok) {
            throw Error("Weather data is not available");
        }
        // if the response is OK, convert it to JSON format
        return res.json();
    })
    .then(data => {
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById('weather').innerHTML = 
        `<img src="${iconUrl}" alt="${data.weather[0].description} icon"/> 
        <p class="weather-temperature">${Math.round(data.main.temp)}º</p> 
        <p class="weather-city">${data.name}</p>`;   // display the city name

    })
    // catch any  errors and display them in the console
    .catch(error => console.error('Error:', error));

})






/**
 * {
	id: "KMn4VEeEPR8",
	created_at: "2017-10-09T01:04:47-04:00",
	updated_at: "2021-06-02T09:02:25-04:00",
	promoted_at: "2017-10-09T09:31:35-04:00",
	width: 4621,
	height: 3072,
	color: "#c0c0c0",
	blur_hash: "LXL|_q}qn$IoPAn%Rjj?ogNboLs:",
	description: "The last night of a two week stay on the North Shore of Oahu, Hawaii.",
	alt_description: "seashore during golden hour",
	urls: {
		raw: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1",
		full: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1&q=85",
		regular: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1&q=80&w=1080",
		small: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1&q=80&w=400",
		thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1&q=80&w=200"
	},
	links: {
		self: "https://api.unsplash.com/photos/KMn4VEeEPR8",
		html: "https://unsplash.com/photos/KMn4VEeEPR8",
		download: "https://unsplash.com/photos/KMn4VEeEPR8/download",
		download_location: "https://api.unsplash.com/photos/KMn4VEeEPR8/download?ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg"
	},
	categories: [],
	likes: 8437,
	liked_by_user: false,
	current_user_collections: [],
	sponsorship: null,
	user: {
		id: "qlQ_KKvUq7k",
		updated_at: "2021-06-02T15:34:44-04:00",
		username: "seantookthese",
		name: "Sean O.",
		first_name: "Sean",
		last_name: "O.",
		twitter_username: "notseano",
		portfolio_url: "http://www.seanoulashin.com",
		bio: "22-year-old magician and lifestyle photographer living in Portland, Oregon.",
		location: "Portland, OR",
		links: {
			self: "https://api.unsplash.com/users/seantookthese",
			html: "https://unsplash.com/@seantookthese",
			photos: "https://api.unsplash.com/users/seantookthese/photos",
			likes: "https://api.unsplash.com/users/seantookthese/likes",
			portfolio: "https://api.unsplash.com/users/seantookthese/portfolio",
			following: "https://api.unsplash.com/users/seantookthese/following",
			followers: "https://api.unsplash.com/users/seantookthese/followers"
		},
		profile_image: {
			small: "https://images.unsplash.com/profile-1581798079888-298c246545d3image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
			medium: "https://images.unsplash.com/profile-1581798079888-298c246545d3image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
			large: "https://images.unsplash.com/profile-1581798079888-298c246545d3image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
		},
		instagram_username: "notseano",
		total_collections: 0,
		total_likes: 6,
		total_photos: 8,
		accepted_tos: true,
		for_hire: false
	},
	exif: {
		make: "Canon",
		model: "Canon EOS REBEL T3i",
		exposure_time: "1/250",
		aperture: "4.5",
		focal_length: "10.0",
		iso: 200
	},
	location: {
		title: "North Shore, Waialua, United States",
		name: "North Shore, Waialua, United States",
		city: "Waialua",
		country: "United States",
		position: {
			latitude: 21.5616575,
			longitude: -158.0715983
		}
	},
	views: 116340693,
	downloads: 1237140
}
/index.html
 */