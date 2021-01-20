$(document).ready(async function () {
  const res = await fetch(`/api/users/getTeam`);
  const data = await res.json();
  const favStorage = data;
  // const favStorage = []

  const teamList = $(`<ul>`);
  teamList.attr("id", "teamList");
  favStorage.forEach((pokemon) => {
    const teamSprite = $(
      `<img width="100" height="100" src=${pokemon.sprite} alt=${pokemon.name}>`
    );
    teamSprite.attr("id", "teamSprite");
    const teamBuilder = $(`<li>`);
    teamBuilder.append(teamSprite);
    teamBuilder.append(
      pokemon.name.charAt(0).toUpperCase() +
        pokemon.name.substr(1).toLowerCase()
    );
    teamBuilder.attr("id", "teamBuilder");

    teamList.append(teamBuilder);
  });

  $(`#team`).append(teamList);

  console.log(favStorage);

  $(`#team`).innerHTML = localStorage.getItem("#team");

  $("#searchSubmit").on("click", async function (e) {
    e.preventDefault();
    console.log("Searching");
    $("#gameContainer").empty();

    const pokemonName = $("#textarea_field").val().trim().toLowerCase();
    console.log(pokemonName);

    const res = await fetch(`/api/pokemon/${pokemonName}`);
    const info = await res.json();
    console.log(info);

    // Building pokemon info
    const pokemonCard = $(`<div class="nes-container member-card" style="width: max-content;
        border: none;">`);
    pokemonCard.attr("id", "pokemonCard");

    const avatarDiv = $(`<div class="avatar">`);
    avatarDiv.attr("id", "avatarDiv");

    const spriteImage = $(
      `<img width="200" height="200" src=${info.sprites} alt=${pokemonName}>`
    );
    spriteImage.attr("id", "spriteImage");

    const firstType = $(`<h2>`);
    firstType.text(
      `${info.type}`.charAt(0).toUpperCase() +
        `${info.type}`.substr(1).toLowerCase()
    );
    firstType.attr("id", "firstType");

    const profileDiv = $(`<div class="profile">`);
    profileDiv.attr("id", "profileDiv");

    const favDiv = $("<div>");
    favDiv.attr("id", "favDiv");

    const favBtn = $(`<i>`);
    favBtn.addClass("nes-icon is-large heart");
    favBtn.attr("id", "favBtn");

    const effectiveDiv = $("<div>");
    effectiveDiv.attr("id", "effectiveDiv");

    // profileDiv.append($("<p> Strong Against: </p>"))
    const strongUl = $("<ul>");
    strongUl.attr("id", "strongUl");
    strongUl.append($("<p> Strong Against: </p>"));

    info.typeAdvantage.strong.forEach(function (val) {
      const liTag = $("<li>");
      liTag.text(val.charAt(0).toUpperCase() + val.substr(1).toLowerCase());
      // profileDiv.append(strongDiv)
      effectiveDiv.append(strongUl);
      strongUl.append(liTag);
    });

    // profileDiv.append($("<p> Weak Against: </p>"))
    const weakUl = $("<ul>");
    weakUl.attr("id", "weakUl");
    weakUl.append($("<p> Weak Against: </p>"));

    info.typeAdvantage.weak.forEach(function (val) {
      const liTag = $("<li>");
      liTag.text(val.charAt(0).toUpperCase() + val.substr(1).toLowerCase());
      // profileDiv.append(weakDiv)
      effectiveDiv.append(weakUl);
      weakUl.append(liTag);
    });

    // avatarDiv.append(spriteImage, firstType)
    if (info.type2) {
      const secondType = $(`<h2>`);
      secondType.text(
        `${info.type2}`.charAt(0).toUpperCase() +
          `${info.type2}`.substr(1).toLowerCase()
      );
      secondType.attr("id", "secondType");
      // avatarDiv.append(secondType)
      pokemonCard.append(secondType);
    }
    // favDiv.append(favBtn)
    // pokemonCard.append(avatarDiv, profileDiv, favDiv)
    pokemonCard.append(
      avatarDiv,
      profileDiv,
      favDiv,
      spriteImage,
      favBtn,
      firstType,
      effectiveDiv
    );
    $("#gameContainer").append(pokemonCard);

    // Building pokemon info

    $(favBtn).on("click", async function () {
      favStorage.push({
        name: pokemonName,
        sprite: info.sprites,
      });

      const teamSprite = $(
        `<img width="100" height="100" src=${info.sprites} alt=${pokemonName}>`
      );
      teamSprite.attr("id", "teamSprite");
      const teamBuilder = $(`<li>`);
      teamBuilder.text(
        pokemonName.charAt(0).toUpperCase() +
          pokemonName.substr(1).toLowerCase()
      );
      teamBuilder.attr("id", "teamBuilder");

      teamList.append(teamSprite, teamBuilder);

      // localStorage.setItem('team', JSON.stringify(favStorage));

      const response = await fetch("/api/users/updateTeam", {
        method: "PUT",
        body: JSON.stringify({ team: JSON.stringify(favStorage) }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        console.log("Saved to database!");
      } else {
        alert(response.statusText);
      }

      console.log(favStorage);
    });
  });
});
