$(document).ready(function(){

    $(".btn").on("click", async function(e){
        e.preventDefault();
        console.log("Searching")

        const pokemonName = $("#pokeSearch").val().trim().toLowerCase();
        console.log(pokemonName);

        const res = await fetch(`/api/pokemon/${pokemonName}`);
        const info = await res.json();
        console.log(info);
        
        // <section class="nes-container is-dark member-card"><div class="avatar"><img data-src="https://github.com/BcRikko.png?size=80" alt="Core Member B.C.Rikko" class="" src="https://github.com/BcRikko.png?size=80"></div> <div class="profile"><h4 class="name">B.C.Rikko</h4> <p>Creator of NES.css</p> <div></div></div></section>
        const pokemonCard = $(`<div class="nes-container member-card" style="width: max-content;
        border: none;">`)
        const avatarDiv = $(`<div class="avatar">`)
        const spriteImage = $(`<img width="200" height="200" src=${info.sprites} alt=${pokemonName}>`)
        const profileDiv = $(`<div class="profile">`)

        profileDiv.append($("<p> Strong Against: </p>"))

        info.typeAdvantage.strong.forEach(function(val){
            const pTag = $("<p>")
            pTag.text(val)
            profileDiv.append(pTag)
        });

        profileDiv.append($("<p> Weak Against: </p>"))
        info.typeAdvantage.weak.forEach(function(val){
            const pTag = $("<p>")
            pTag.text(val)
            profileDiv.append(pTag)
        });
    
        avatarDiv.append(spriteImage)
        pokemonCard.append(avatarDiv, profileDiv)
        $('#gameContainer').append(pokemonCard)

        

    })
})