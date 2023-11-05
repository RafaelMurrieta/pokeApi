const container__card = document.getElementById('container-card')


function cards(number,response) {
    var card = document.createElement("div");
    card.id = number;
    card.className = "card";
    type = response['types']['0']['type']['name'];
    Image = response['sprites']['other']['dream_world']['front_default']
    height = response['height']
    weight = response['weight']
    //obtene el color
    fetch(response.species.url)
        .then(res => res.json())
        .then(speciesData => {
            const colorCard = speciesData.color.name;
        });
    card.innerHTML = '<div class="body-card"><img src='+Image+' alt='+response['name']+'> <h2>Nombre: '+response['name']+'</h2><p>Tipo de Pokemon: '+type+' </p><p>Altura: '+height+' m</p><p>Peso: '+weight+' kg</p><button type="submit">Ver mais</button></div>'
    container__card.appendChild(card);
    var stylesCard = document.getElementById(number)
    console.log(stylesCard);
    stylesCard.style.background = colorCard;
}

for (let number = 1; number <= 6; number++) {
    fetch('https://pokeapi.co/api/v2/pokemon/'+number)
        .then(res=>res.json())
         .then(response=>{
            cards(number, response)
        })

}

