//try to make a general movement script for elements in the screen

function Position (x,y){
    this.x = x;
    this.y = y;
    this.moveUp = function (n){
        this.y -= n;
    };
    this.moveDown = function (n){
        this.y += n;
    };
    this.moveLeft = function (n){
        this.x -= n;
    };
    this.moveRight = function (n){
        this.x += n;
    };
    this.getY = function (){return y};
    this.getX = function (){return x};
}


function playerMovableObject (event, element){
    var keys = {};
    keys[left]= 65; //a
    keys[right] = 68; //d
    keys[up]=87;//w
    keys[down]=83;//s
    var position = new Position(50, 50);
    var step = 1;
    var key = event.keyCode || event.which;
    switch (key){
        case keys[right]:
            position.moveRight(step);
            break;
        case keys[left]:
            position.moveLeft(step);
            break;
        case keys[up]:
            position.moveUp(step);
            break;
        case keys[down]:
            position.moveDown(step);
            break;
        this.style.top = y + '%';
        this.style.left = x + '%';
    }
}