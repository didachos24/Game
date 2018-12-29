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

// Display HP from objects
function characters () {
    $("p#goku-HP").text("Goku HP: " + goku.HP);
    $("p#cell-HP").text("Cell HP: " + cell.HP);
    $("p#vegeta-HP").text("Vegeta HP: " + vegeta.HP);
    $("p#frezzer-HP").text("Frezzer HP: " + frezzer.HP);
    }

characters();

// Choose a character and move others to enemies zone
    switch(function selection1(onclick) {
        case #goku:
        attacker = goku;
        // For all different character, show in enemies zone changing visibility
        $("#character,#cell").css("visibility : hiden")
            
        }
    })

// Choose an enemie and move him to defender zone

// Set attack button
 