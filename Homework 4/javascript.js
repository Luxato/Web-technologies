var globID;
function zobraz(id) {
    globID = id;
    turnLayer(1);
    document.getElementById("vrstva").style.backgroundImage = "url(" + a.photos[id].src + ")";
    document.getElementById("vrstva").style.visibility = "visible";
    document.getElementById("text").innerHTML = a.photos[id].title;
    document.getElementById("desc").innerHTML = a.photos[id].desc;
}
var x = true;
function left() {
    if (globID == 0) {
        globID = 4;
        zobraz(globID);
    }
    else {
        globID--;
        zobraz(globID);
    }
}
function right() {
    if (globID == 4) {
        globID = 0;
        zobraz(globID);
    }
    else {
        globID++;
        zobraz(globID);
    }
}
function pohyb() {
    if (x == true) {
        if (globID == 4) {
            zobraz(globID);
            globID = 0;
        }
        else {
            zobraz(globID);
            globID++;
        }
    }
}
function exit() {
    document.getElementById("vrstva").style.visibility = "hidden";
    turnLayer(0);
    x = false;
}
function play() {
    x = true;
    setInterval(pohyb, 2000);
}
function turnLayer(on) {
    var d = document.getElementById("layer");
    if (on) {
        d.className = 'layer';
    } else {
        d.className = 'layer hidden';
    }
}
