function drawCards()
{
    data.forEach(pokemon => {
    let pictureValue = 0;
    let gameValue = 0;
    let pictures = [pokemon.sprites.other["official-artwork"].front_default, pokemon.sprites.back_default, pokemon.sprites.front_shiny, pokemon.sprites.back_shiny];

    const cards = document.querySelector(".cards");

    let el = document.createElement("li");
    el.className = "card";


    let title = document.createElement("h2");
    title.className = "card--title";
    title.innerHTML = String(pokemon.name).charAt(0).toUpperCase()+ pokemon.name.slice(1);
    el.appendChild(title);


    let img = document.createElement("img");
    img.width = "256";
    img.className = "card--img";
    img.src =  pictures[0];
    el.appendChild(img);

    let list = document.createElement("ul");
    list.className = "card--text";

    pokemon.stats.forEach( stat=> {
        let item = document.createElement("li");
        item.innerHTML = stat.stat.name.toUpperCase() + ": " + stat.base_stat;
        list.appendChild(item);
    });
    el.appendChild(list);

    let game = document.createElement("h2");
    game.innerHTML = "Game Apperances";
    el.appendChild(game);

    let gameList = document.createElement("ul");
    gameList.className = "card--text";

    pokemon.game_indices

    let gameItem = document.createElement("li");
    gameItem.innerHTML = pokemon.game_indices[gameValue].version.name;
    gameList.appendChild(gameItem);
    el.appendChild(gameList);

    let previousGame = document.createElement("button");
    previousGame.className = "previousGame";
    previousGame.innerHTML = "<";
    el.appendChild(previousGame);

    let nextGame = document.createElement("button");
    nextGame.className = "nextGame";
    nextGame.innerHTML = ">";
    el.appendChild(nextGame);

    previousGame.addEventListener("click", function(){
        gameValue = gameValue - 1;
        if(gameValue < 0)
            gameValue = 19;
        gameItem.innerHTML = pokemon.game_indices[gameValue].version.name;
    });
    nextGame.addEventListener("click", function(){
        gameValue = gameValue + 1;
        if(gameValue > 19)
            gameValue = 0;
        gameItem.innerHTML = pokemon.game_indices[gameValue].version.name;
    });
    img.addEventListener("click", function(){
        pictureValue = pictureValue + 1;
        if(pictureValue > 3)
            pictureValue = 0;
        img.src = pictures[pictureValue]
    });
    cards.appendChild(el);
});
}

drawCards();


