console.log("Let's get this party started!");

const gifZone = document.querySelector('#gifZone');

// Access API to retrieve giphys:
async function giphySearch(searchTerm) {
	const res = await axios.get('http://api.giphy.com/v1/gifs/random', {
		params: { api_key: 'bIJecdKbXaePKZeJzpr2FTTWy1iiVNmT', tag: searchTerm }
	});
	let gifURL = res.data.data.images.preview_gif.url;

	//Select the image to update URL
	let newGif = document.createElement('IMG');
	newGif.src = gifURL;
	gifZone.appendChild(newGif);
}

// Form logic (prevent default, use search term from text input.value, Search button runs func)
const textBar = document.querySelector('#textBar');
const gifSearch = document.querySelector('#gifSearch');

gifSearch.addEventListener('submit', function(e) {
	e.preventDefault();
	giphySearch(textBar.value);
});

// Button logic to clear giphys from page using Remove Images button
const removeBtn = document.querySelector('#removeBtn');

removeBtn.addEventListener('click', function(e) {
	e.preventDefault();
	gifZone.innerHTML = '';
});
