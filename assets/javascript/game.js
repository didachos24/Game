$(document).ready();
// Variables
attacker = "";
defender = "";


// Define each character as an object where is allocated 
// general info 
 var goku = {
    name : "Goku",
    HP : 150,
    attack : 20,
    defend : 15,
    src : "assets/images/goku.jpg",
}

var cell = {
    name : "Cell",
    HP : 120,
    attack : 18,
    defend : 20,
    src : "assets/images/cell.jpg",
}

var frezzer = {
    name : "Frezzer",
    HP : 100,
    attack : 15,
    defend : 15,
    src : "assets/images/frezzer.jpg",
}

var vegeta = {
    name : "Vegeta",
    HP : 110,
    attack : 16,
    defend : 14,
    src : "assets/images/vegeta.jpg",
}

// Display pictures and HP from objects
function characters () {
    $("#gokuimg").attr("src", goku.src); $("#goku-HP").text("Goku HP: " + goku.HP);
    $("#cellimg").attr("src", cell.src); $("#cell-HP").text("Cell HP: " + cell.HP);
    $("#vegetaimg").attr("src", vegeta.src); $("#vegeta-HP").text("Vegeta HP: " + vegeta.HP);
    $("#frezzerimg").attr("src", frezzer.src); $("#frezzer-HP").text("Frezzer HP: " + frezzer.HP);
}

characters();

// Choose a character and move others
attacker = $("img").on("click", function() {
    console.log(attacker);
})