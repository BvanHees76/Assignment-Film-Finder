const selectUL = document.getElementById('list-movies');

let addMoviesToDom = function addMovies(movies) {
  movies.forEach(movie =>{
    let makeLi = document.createElement('li');
    makeLi.className = 'list-items-of-movies';
    makeLi.id = movie.imdbID;
    makeLi.style.width = '175px'
    makeLi.style.height = '260px';

    let makeLinkToIMDB = document.createElement('a');
    makeLinkToIMDB.href = 'https://www.imdb.com/title/' + movie.imdbID;

    let makeImage = document.createElement('img');
    makeImage.src = movie.poster;
    makeImage.style.width = '175px';
    makeImage.style.maxHeight = '245px';
   

    makeLinkToIMDB.appendChild(makeImage);
    makeLi.appendChild(makeLinkToIMDB);
    selectUL.appendChild(makeLi); 
});  
};

addMoviesToDom(movies);

//Remove movies
function removeMoviesFromDom() {
  const movieList = document.querySelectorAll("li");
  movieList.forEach((element) => element.remove());
};

//Make filters

let filterNew = movies.filter((movies)=>movies.year>=2014);
let filterAvengers = movies.filter((movies)=>movies.title.includes('Avengers'));
let filterXmen = movies.filter((movies)=>movies.title.includes('X-Men'));
let filterPrincess = movies.filter((movies)=>movies.title.includes('Princess'));
let filterBatman = movies.filter((movies)=>movies.title.includes('Batman'));

// choose filter when button is checked
const handleOnChangeEvent = function(event){
   switch(event.target.value){
    case 'new':
    console.log("new is checked");
    removeMoviesFromDom();
    addMoviesToDom(filterNew);
    break;
    case 'avengers':
    console.log("avengers is checked");
    removeMoviesFromDom();
    addMoviesToDom(filterAvengers);
    break;
    case 'xmen':
    console.log(" xmen is checked");
    removeMoviesFromDom();
    addMoviesToDom(filterXmen);
    break;
    case 'princess':
    console.log("princess is checked");
    removeMoviesFromDom();
    addMoviesToDom(filterPrincess);
    break;
    case 'batman':
    console.log("batman is checked");
    removeMoviesFromDom();
    addMoviesToDom(filterBatman);
    break;
    default:
    addMoviesToDom(movies);
   }
};

//Add eventlistener to radiobutton
const allbuttons = document.querySelectorAll('[name = "movie-filter"]');
allbuttons.forEach((button) => {
  button.addEventListener("change", handleOnChangeEvent);
});