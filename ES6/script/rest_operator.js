"use strict";
var displayColor = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "List of Color : ";
displayColor(message, 'Red');
displayColor(message, 'Red', "blue");
displayColor(message, 'Red', "blue", "Green");
//# sourceMappingURL=rest_operator.js.map