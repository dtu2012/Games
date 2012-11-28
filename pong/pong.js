var metaChar = false;
var esquerreAvall = 65; //a
var esquerreAmunt = 90; //z
var dretAvall = 75; //k
var dretAmunt = 77; //m

var alt = 20;
var iniciEsquerre = 50-(alt/2);
var iniciDret = 50-(alt/2);

var posDret = iniciDret;
var posEsquerre = iniciEsquerre;
var pas = 5;

var velX = 0;
var velY = 0;
var velBase = 0.1;
var X = 50;
var Y = 50;

var mov;
function inicialitzar(esquerre, dret, pilota){
    esquerre.style.top = posEsquerre + '%';
    dret.style.top = posDret + '%';
    pilota.style.top = X + '%';
    pilota.style.left= Y + '%';
    velX = velBase;
    velY = 0;
    mov = window.setInterval(moviment, 5, pilota);
}

function keyEvent(event, esquerre, dret) {
    var key = event.keyCode || event.which;

    switch (key){
        case esquerreAmunt:
            if(posEsquerre < 80){
                posEsquerre += pas;
            }
            break;
        case esquerreAvall:
            if(posEsquerre > 0){
                posEsquerre -= pas;
            }
            break;
        case dretAmunt:
            if(posDret<80){
                posDret += pas;
            }
            break;
        case dretAvall:
            if(posDret>0){
                posDret -= pas;
            }
            break;
    }

    esquerre.style.top = posEsquerre + '%';
    dret.style.top = posDret + '%';
}

function moviment(pilota){
    Y += velY;
    X += velX;
    pilota.style.top = Y + "%";
    pilota.style.left = X + "%";

    if(X > 100){
        alert("punt per l'esquerre!");
        clearInterval(mov);
    }
    else if (X < 0){
        alert("punt per al dret!");
        clearInterval(mov);
    }

    if ((X < 100 && X > 95 && Y < posDret+alt && Y > posDret) ||
        (X > 0 && X < 5 && Y < posEsquerre+alt && Y > posEsquerre)){
        velX = -velX;
        velX *= 1 + Math.random()-0.4;
        velY += (Math.random()*6-3)*velBase;
    }

    if ( Y < 0 || Y > 100){
        velY = -velY;
    }
}