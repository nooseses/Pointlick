document.getElementById("mainTitle").innerText = "Point and Click pls";

//game window reference
const gameWindow = document.getElementById("gameWindow");

//main character reference
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    console.log(e.target.id);
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";


    switch (e.target.id) {
        case "doorOne":
            mainCharacter.style.backgroundColor = "#FFF00"
            e.target.style.opacity = 0.4;
            break;

        default:
            //explode
            mainCharacter.style.backgroundColor = "#rgb(162, 207, 0);"
            doorOne.style.opacity = 0.8;
            break;

    }
    switch (e.target.id) {
        case "sign":
            mainCharacter.style.backgroundColor = "#FFF00"
            e.target.style.opacity = 0.4;
            break;

        default:
            //explode
            mainCharacter.style.backgroundColor = "#rgb(162, 207, 0);"
            sign.style.opacity = 0.8;
            break;

    }
}