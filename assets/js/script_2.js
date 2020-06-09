const movieInp = document.getElementById("search-bar");
const searchButn = document.getElementById("searchBtn");
const searchInp = movieInp.value;

searchButn.addEventListener("click", function(){
    event.preventDefault();
    
    console.log(this)
    platform()
       
  });

  
function platform(){
var settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${movieInp.value}&country=uk`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
		"x-rapidapi-key": "f93ad3a3d7mshd6950dec518d715p16a532jsn2fe1c1a90753"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);


    $("#icon-div").html("<img src=" + response.results[0].locations[0].icon + ">");
    $("#icon-div2").html("<img src=" + response.results[0].locations[1].icon + ">");
    $("#icon-div3").html("<img src=" + response.results[0].locations[2].icon + ">");
    
});}