
const requisicao = fetch("https://sky-frontend.herokuapp.com/movies").then(response => {
    return response.json();
}).then(json => {
    console.log(json);
    carrosel(json);

});

function carrosel(lista) {
    const movies = lista.find(carrosel => carrosel.type === 'highlights')
    movies.items.forEach(ll => {
        $('.item').append(`<img src='${ll.images[0].url}' alt='${ll.title}' class='filme'/> `)
    })
}

/*function skyFilmes(lista) {
    const filmes = lista.find(categoria => categoria.type === 'carousel-portrait');
    filmes.movies.forEach(movie => {
        $('#movie').append(`<img src='${movie.images[0].url}' alt='${movie.title}' class="skylist" />`)
    })
}*/

/*fetch ('https://sky-frontend.herokuapp.com/movies')
.then(response => response.json())
.then(jsonBody => {
   
    console.log(jsonBody)

    movie(jsonBody)
});

function movie(filmes) {
 const resp = filmes.find(cards =>cards.type === "highlights")
console.log(resp)

 resp.items.forEach(xrh => {
    $('.card').append(`<img src="${xrh.images[0].url}" 
    alt='${xrh.title}" class="fotos">`)

 });
} */



















/*async function getMovie(){
    const response = await fetch('https://sky-frontend.herokuapp.com/movies')
    
    return response.json()
} 

getMovie().then(data => console.log(data))

getMovie().then(data => {
    const movie = data.items.filter()
    const infor = []

    for (let m of movie){
       infor.push({
           'title':`$(m.title.first)`,
           'movies': m.movies.first,
           
       }) 
    }
   console.log(movie)
})*/