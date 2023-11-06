const container__card = document.getElementById('container-card')
var __modal__ = document.getElementById('modal-pokemon')

function cards(number, response) {
    var card = document.createElement("div");
    card.id = number;
    card.className = "card";
    type = response['types']['0']['type']['name'];
    image = response['sprites']['other']['dream_world']['front_default'];
    height = response['height'];
    weight = response['weight'];
    namePo = response['name'];
    var cardContent = '<div class="body-card"><div class="imagen"><img src='+image+' alt='+namePo+'></div><h2>Nombre: '+namePo+'</h2><p>Tipo de Pokemon: '+type+' </p><p>Altura: '+height+' m</p><p>Peso: '+weight+' kg</p><div class="body-buton"><button class="openModal">Ver mas</button></div></div>';
    card.innerHTML = cardContent;
    container__card.appendChild(card);
    var boton = card.querySelector('.openModal');
    boton.addEventListener('click', function() {
        __modal__.style.display = "flex"
    });
}

for (let number = 1; number <= 12; number++) {
    fetch('https://pokeapi.co/api/v2/pokemon/'+number)
        .then(res=>res.json())
        .then(response=>{
            cards(number, response);
        });
}
