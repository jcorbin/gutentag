"use strict";

module.exports = Essay;
function Essay() {
    this.value = false;
}

Essay.prototype.add = function (child, id, scope) {
    if (id === "this") {
        scope.components.display.addEventListener("change", this);
    }
}

Essay.prototype.handleEvent = function () {
    this.value = !this.value;
    this.scope.components.greeting.value = this.value;
}
