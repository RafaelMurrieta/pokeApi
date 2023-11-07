const container__card = document.getElementById('container-card');
const container__pokemon = document.getElementById('container-pokemon');
const __modal__ = document.getElementById('modal-pokemon');
const __button__search = document.getElementById('boton-search');

__button__search.addEventListener('click',function(){
const __search__pokemon = document.getElementById('search').value;
    // fetch('http://pokeapi.co/api/v2/pokemon'+__search__pokemon);
    // .then(res=> res.json())
    // .then(response=>{
        
    // })
})

function cards(number, response) {
    const card = document.createElement("div");
    card.id = number;
    card.className = "card";
    const type = response['types']['0']['type']['name'];
    const image = response['sprites']['other']['dream_world']['front_default'];
    const height = response['height'];
    const weight = response['weight'];
    const namePo = response['name'];
    const cardContent = '<div class="body-card"><div class="imagen"><img src=' + image + ' alt=' + namePo + '></div><h2>Nombre: ' + namePo + '</h2><p>Tipo de Pokemon: ' + type + ' </p><p>Altura: ' + height + ' m</p><p>Peso: ' + weight + ' kg</p><div class="body-buton"><button class="openModal">Ver mas</button></div></div>';
    card.innerHTML = cardContent;
    container__card.appendChild(card);
    const boton = card.querySelector('.openModal');
    boton.addEventListener('click', function () {
        __modal__.style.display = "flex";
        infoModal(response, image,namePo);
    });
}

for (let number = 1; number <= 12; number++) {
    getRandomIntInclusive(0, 898);
    fetch('https://pokeapi.co/api/v2/pokemon/' + numero)
        .then(res => res.json())
        .then(response => {
            var imagee = response['sprites']['other']['dream_world']['front_default'];
            if (imagee != null) {
            cards(number, response);
            console.log("hay imagen");
            }else{
                numero+=1;
                fetch('https://pokeapi.co/api/v2/pokemon/' + numero)
                .then(res => res.json())
                .then(response => {
                    cards(number, response);
                });
            }
        });
}

function infoModal(info, image) {
    const pokemon = document.createElement("div");
    pokemon.className = 'info-pokemon';
    pokemon.id = "info-pokemon";
    const pokemonContent = '<div class="body-info"><div class="image-info"><img src="' + image + '"></div></div> <div class="information" id="information"><h1>Nombre: ' + info["name"] + '</h1><p>ID: ' + info["id"] + '</p><p>Tipo: ' + info["types"][0]["type"]["name"] + '</p><p>Habilidades: ' + info["abilities"].map(ability => ability.ability.name).join(", ") + '</p><p>HP: ' + info["stats"][0]["base_stat"] + '</p><p>Ataque: ' + info["stats"][1]["base_stat"] + '</p><p>Defensa: ' + info["stats"][2]["base_stat"] + '</p><button class="closeModal" id ="closeModal">Cerrar</button></div>';
    pokemon.innerHTML = pokemonContent;
    container__pokemon.appendChild(pokemon);
    const closeBoton = pokemon.querySelector(".closeModal");
    console.log(info);
    closeBoton.addEventListener('click', function () {
        __modal__.style.display = "none";
        container__pokemon.removeChild(document.getElementById("info-pokemon"));
    });
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    numero = Math.floor(Math.random() * (max - min + 1) + min);
    return numero;
  }
  
