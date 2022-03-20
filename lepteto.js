window.addEventListener("load", init, false);
var kepekObj = [
    {
        ut: "kepek/_DSC7025.jpg",
        leiras: "Bolond állatok",

    },
    {
        ut: "kepek/_DSC7365.jpg",
        leiras: "virágzó út",

    },
    {
        ut: "kepek/_DSC7371_1.jpg",
        leiras: "Nap lemente",

    },
    {
        ut: "kepek/_DSC7444.jpg",
        leiras: "Tájkép",

    },
    {
        ut: "kepek/_DSC7515.jpg",
        leiras: "Akác sor",

    },
];
var hely = 0;
function init() {
    leiras();
    kep();
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
function bal() {
    if (hely === 0) {
        hely = kepekObj.length - 1;
    } else {
        hely -= 1;
    }
    leiras();
    kep();
}
function jobb() {
    if (hely === kepekObj.length - 1) {
        hely = 0;
    } else {
        hely += 1;
    }
    leiras();
    kep();
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
    leiras();
    kep();
}
