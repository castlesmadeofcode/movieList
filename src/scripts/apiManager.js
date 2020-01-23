const getMovies = () => {
    fetch("http://localhost:8088/movies")
        .then(movies => movies.json())
        .then(parsedMovies => {
            renderMovies(parsedMovies);
            console.log(parsedMovies)
        })
};