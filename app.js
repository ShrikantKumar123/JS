
// Checkpoint 2 | Creating the queen object

Object: queen = {
    direction: "S",
    position: {

        x: 0,
        y: 4

    }
}
queen.direction = "N"
queen.position.x =
    [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4][0, 5], [0, 6], [0, 7]
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4][1, 5], [1, 6], [1, 7]
    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4][2, 5], [2, 6], [2, 7]
    [3, 0], [3, 1], [3, 2], [3, 3], [3, 4][3, 5], [3, 6], [3, 7]
    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4][4, 5], [4, 6], [4, 7]
    [5, 0], [5, 1], [5, 2], [5, 3], [5, 4][5, 5], [5, 6], [5, 7]
    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4][6, 5], [6, 6], [6, 7]
    [7, 0], [7, 1], [7, 2], [7, 3], [7, 4][7, 5], [7, 6], [7, 7]]

//Checkpoint 2 | Turning the queen

function changedirection(steps, direction) {
    switch (direction) {
        case 'S':
            queen.position.x = queen.position.x + steps;
            break;
        case 'N':
            temp = queen.position.x - steps;
            if (boundarycheck(temp)) {
                queen.position.x = temp;
            }
            else {
                console.log("crossing the boundary");
            }

            break;
        case 'E':
            temp = queen.position.x - steps;
            if (boundarycheck(temp)) {
                queen.position.x = temp;
            }
            else {
                console.log("crossing the boundary");
            }
            break;
        case 'W':
            temp = queen.position.x + steps;
            if (boundarycheck(temp)) {
                queen.position.x = temp;
            }
            else {
                console.log("crossing the boundary");
            }
            break;
        case 'SE':
            temp = queen.position.x - steps;
            if (boundarycheck(temp)) {
                queen.position.x = temp;
            }
            else {
                console.log("crossing the boundary");
            }
            break;
        case 'SW':
            temp = queen.position.x + steps;
            if (boundarycheck(temp)) {
                queen.position.x = temp;
            }
            else {
                console.log("crossing the boundary");
            }
            break;
        case 'NW':
            temp = queen.position.x - steps;
            if (boundarycheck(temp)) {
                queen.position.x = temp;
            }
            else {
                console.log("crossing the boundary");
            }
            break;
        case 'NE':
            temp = queen.position.x - steps;
            if (boundarycheck(temp)) {
                queen.position.x = temp;
            }
            else {
                console.log("crossing the boundary");
            }
            break;

    }
}

//Checkpoint 3 | Moving the queen

function moveForward(selectedpiece) {

    let position = { x: '', y: '' };
    position.x = main.variables.pieces[selectedpiece].position.split('_')[0];
    position.y = main.variables.pieces[selectedpiece].position.split('_')[1];

    // these options need to be var instead of let
    var options = [];
    var coordinates = [];
    var startpoint = main.variables.pieces[selectedpiece].position;
    var c1, c2, c3, c4, c5, c6, c7, c8;

    if (main.variables.highlighted.length != 0) {
        main.methods.togglehighlight(main.variables.highlighted);
    }

    switch (main.variables.pieces[selectedpiece].type) {

        case 'w_queen':

            c1 = main.methods.w_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
            c2 = main.methods.w_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
            c3 = main.methods.w_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
            c4 = main.methods.w_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);
            c5 = main.methods.w_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
            c6 = main.methods.w_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
            c7 = main.methods.w_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
            c8 = main.methods.w_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);

            coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);

            options = coordinates.slice(0);
            main.variables.highlighted = options.slice(0);
            main.methods.togglehighlight(options);

            break;
        case 'b_queen':

            c1 = main.methods.b_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
            c2 = main.methods.b_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
            c3 = main.methods.b_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
            c4 = main.methods.b_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);
            c5 = main.methods.b_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
            c6 = main.methods.b_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
            c7 = main.methods.b_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
            c8 = main.methods.b_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);

            coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);

            options = coordinates.slice(0);
            main.variables.highlighted = options.slice(0);
            main.methods.togglehighlight(options);
            break;
    }
}

//Checkpoint 4 | Jump move the queen

function jumpMoveForward(target) {

    let selectedpiece = $('#' + main.variables.selectedpiece).attr('chess');
    // new cell
    $('#' + target.id).html(main.variables.pieces[selectedpiece].img);
    $('#' + target.id).attr('chess', selectedpiece);
    // old cell
    $('#' + main.variables.selectedpiece).html('');
    $('#' + main.variables.selectedpiece).attr('chess', 'null');
    main.variables.pieces[selectedpiece].position = target.id;
    main.variables.pieces[selectedpiece].moved = true;
}

function boundarycheck(startpoint, coordinates, piecetype) { // first check if any of the possible coordinates is out of bounds;
    coordinates = coordinates.filter(val => {
        let pos = { x: 0, y: 0 };
        pos.x = parseInt(val.split('_')[0]);
        pos.y = parseInt(val.split('_')[1]);

        if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
            return val;
        }
    });

    switch (piecetype) {

        case 'queen':

            coordinates = coordinates.filter(val => {
                return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'b');
            });

            break;

    }
    return coordinates;
}

//Checkpoint 5 |  Tracking the position

function updatePosition() {
    var whereabouts = function (options) {
        options = options || { white: [0, 3], black: [7, 3] };
        if (options.white.join('') === options.black.join('')) { throw ('Queens cannot share the same space'); }
        this.white = options.white;
        this.black = options.black;
    };

    whereabouts.prototype.toString = function () {
        var board = '';
        for (var x = 0; x < 8; x++) {
            for (var y = 0; y < 8; y++) {
                if (this.white[0] === x && this.white[1] === y) {
                    board += 'W';
                } else if (this.black[0] === x && this.black[1] === y) {
                    board += 'B';
                } else {
                    board += '_';
                }
                board += ' ';
            }
            board = board.trim() + '\n';
        }
        return board;
    };

    whereabouts.prototype.canAttack = function () {
        var dx = Math.abs(this.white[0] - this.black[0]);
        var dy = Math.abs(this.white[1] - this.black[1]);

        var min = Math.min(dx, dy);
        var max = Math.max(dx, dy);

        var diagonalSteps = min;
        var straightSteps = max - min;

        if ((diagonalSteps === 0 && straightSteps !== 0) || (diagonalSteps !== 0 && straightSteps === 0)) { return true; }
        return false;
    }
}

