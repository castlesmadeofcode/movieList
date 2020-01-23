const movieFactory = (movie) => {
    return `
    <section class = "movie">
    <div>Title: ${movie.title}<div>
    <div>Date: ${movie.yearReleased}<div>
    </section>
    `
};

const renderMovies = (movies) => {
    const movieContainer = document.querySelector("#movieContainer");
    movies.forEach(movie => {
        movieContainer.innerHTML += movieFactory(movie);

    })
};