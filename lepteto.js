window.addEventListener("load", init, false);
var kepekObj = [
    {
        ut: "kepek/_DSC7025.jpg",
        leiras: "Bolond állatok",
        id: "kep1",
    },
    {
        ut: "kepek/_DSC7365.jpg",
        leiras: "virágzó út",
        id: "kep2",
    },
    {
        ut: "kepek/_DSC7371_1.jpg",
        leiras: "Nap lemente",
        id: "kep3",
    },
    {
        ut: "kepek/_DSC7444.jpg",
        leiras: "Tájkép",
        id: "kep4",
    },
    {
        ut: "kepek/_DSC7515.jpg",
        leiras: "Akác sor",
        id: "kep5",
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
    var kepId = event.target.id;
    var i = 0;
    while(!(kepId === kepekObj[i].id)){
        i++;
    }
    hely = i;
    leiras();
    kep();
}
