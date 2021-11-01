let uuid = Date.now().toString();

let arrMovies = [
    { img : "./img/22-100x100.jpg", title: "Haus des Geldes" , id: uuid},
    { img : "./img/66-100x100.jpg", title: "Vikings", id: uuid },
    { img : "./img/88-100x100.jpg", title: "Mindhunter", id: uuid }
];


// Funktion um Array im DOM einzufügen
const printMovieArrayToDOM = () => {
    // ul selektieren
    const ulMovies = document.querySelector('ul');

    // für jeden Film ein LI generieren
    const arrMoviesLi = arrMovies.map((movie) => {
        return `<li>
        <img src=${movie.img} alt="">
        <span>${movie.title}</span>
        <div>
            <button>X</button>
        </div>
    </li>`
    });

    const strLis = arrMoviesLi.join("");

    ulMovies.innerHTML = strLis;
}

printMovieArrayToDOM();


// Add Movies
const addMovie = () => {
    // User gibt neuen Movie über Popup(promp) ein
    // Frage Movie vom User ab
    const movieTitleNew = prompt("Gib einen Film ein: ");

    // ohne Movietitle geht es nicht weiter
    if(!movieTitleNew){
        return
    }

    // neues MovieObject erstellen
    // { title: "Haus des Geldes" }
    const movieNew = {
        title: movieTitleNew,
        id: DataCue.now().toString
    }

    console.log(movieNew);
}