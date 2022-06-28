const { spy } = require("chai");

function receivesAFunction(spy) {
    spy();
}
    
function returnsANamedFunction() {
    return function spy(){};
}
