$(document).ready();
// Variables
attacker = {};
defender = {};


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

// Display HP
function characters () {
    $("#goku-HP, #goku2-HP, #goku3-HP").html("Goku HP: " + goku.HP);
    $("#cell-HP, #cell2-HP, #cell3-HP").html("Cell HP: " + cell.HP);
    $("#vegeta-HP, #vegeta2-HP, #vegeta3-HP").html("Vegeta HP: " + vegeta.HP);
    $("#frezzer-HP, #frezzer2-HP, #frezzer3-HP").html("Frezzer HP: " + frezzer.HP);
    }

characters();

// Choose a character and move others to enemies zone

    $("#goku").click(function() {
        attacker = goku;
        $("#character").css("visibility", "hidden"); 
        $("#goku").css("visibility", "visible");
        $("#enemies").css("visibility","visible");
        $("#goku2").css("visibility", "hidden");
    })

    $("#cell").click(function() {
        attacker = cell;
        $("#character").css("visibility", "hidden"); 
        $("#cell").css("visibility", "visible");
        $("#enemies").css("visibility","visible");
        $("#cell2").css("visibility", "hidden");
    })

    $("#vegeta").click(function() {
        attacker = vegeta;
        $("#character").css("visibility", "hidden"); 
        $("#vegeta").css("visibility", "visible");
        $("#enemies").css("visibility","visible");
        $("#vegeta2").css("visibility", "hidden");
    })

    $("#frezzer").click(function() {
        attacker = frezzer;
        $("#character").css("visibility", "hidden"); 
        $("#frezzer").css("visibility", "visible");
        $("#enemies").css("visibility","visible");
        $("#frezzer2").css("visibility", "hidden");
    })
    console.log(attacker);
// Choose an enemy and move him to defender zone

    function enemy () {
        $("#defender").html("<div><img src =" + defender.src + "><p>" + defender.name +" HP: " + defender.HP + "</p></div>");
        console.log(defender);

    }

    $("#goku2").click( function() {
        defender = goku;
        $("#goku2").css("visibility", "hidden");
        enemy();
    })

    $("#cell2").click( function() {
        if(defener = {}) {
        defender = cell;
        $("#cell2").css("visibility", "hidden")
        }
    })

    $("#vegeta2").click( function() {
        defender = vegeta;
        $("#vegeta2").css("visibility", "hidden")
    })

    $("#frezzer2").click( function() {
        defender = frezzer;
        $("#frezzer2").css("visibility", "hidden")
    })

// Set attack button
 
    $("button").click(function() {
        attacker.HP -= defender.defend;
        defender.HP -= attacker.attack;
        characters();
        if (defender.HP = 0) {
            defender = {};

        }
    })