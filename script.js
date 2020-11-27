let images = new Array();
$.ajax({
    url: "https://sky-frontend.herokuapp.com/movies",
    success: function(apiresp){ 
        let filmescard = Object.entries(apiresp);
        let content = "";
        filmescard[0][1].items.forEach(elemento => {
            images.push(elemento.images[0].url)
        });
        filmescard[2][1].movies.forEach(element => {
            $('#images-body-container').append(`<img class='images-body' src=${element.images[0].url}>`);
        });  
      

        let flag = true;
        let counter = 0;
        images.forEach(element => {
            let elementToAdd = `<div class="carousel-item">
            <img class="d-block w-100" src="${element}" alt="Second slide">
          </div>`;
          let indicatorElement = `<li data-target="#carouselWithIndicators" data-slide-to="${counter}"></li>`
            if (flag){
                elementToAdd = `<div class="carousel-item active">
                <img class="d-block w-100" src="${element}" alt="Second slide">
              </div>`;
              indicatorElement = `<li data-target="#carouselWithIndicators" data-slide-to="${counter}" class="active"></li>`
                flag=false;
            }
            
          $('#container-caroussel').append(elementToAdd);
          $('#carouselIndicators').append(indicatorElement);
          counter++;
        });
    },
    error: function(){
        alert("There was an error.");
    }
});
