window.addEventListener("load", init, false);
var kepekObj = [
    {
        ut: "kepek/kep_01.jpg",
        leiras: "Bolond állatok",

    },
    {
        ut: "kepek/kep_02.jpg",
        leiras: "virágzó út",

    },
    {
        ut: "kepek/kep_03.jpg",
        leiras: "Nap lemente",

    },
    {
        ut: "kepek/kep_04.jpg",
        leiras: "Tájkép",

    },
    {
        ut: "kepek/kep_05.jpg",
        leiras: "Akác sor",

    },
];
var hely = 0;
function init() {
    nagyKepValt();
}

function ID(elem) {
    return document.getElementById(elem);
}

function leiras() {
    ID("leiras").innerHTML = kepekObj[hely].leiras;
}
function kep() {
    ID("nagykep").src = kepekObj[hely].ut;
}

function nagyKepValt(){
    kep();
    leiras();
}

function bal() {
    if (hely === 0) {
        hely = kepekObj.length - 1;
    } else {
        hely -= 1;
    }
    nagyKepValt();
}
function jobb() {
    if (hely === kepekObj.length - 1) {
        hely = 0;
    } else {
        hely += 1;
    }
    nagyKepValt();
}

function kepreKatt() {
    var kepId = event.target.src;
//    console.log(kepId);
//    console.log( )
    var i = 0;
    while(!(kepId.includes(kepekObj[i].ut))){
        i++;
    }
    hely = i;
    nagyKepValt();
}
