"use strict";
// Enum example in TypeScript.
// Enums are a way to define a set of named constants. They can be numeric or string-based.
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
