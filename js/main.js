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


    if (e.target.id == "doorOne") {
        mainCharacter.style.backgroundColor = "00FF42";
        console.log("Open Door");
    }
}