function curriedAdd(total = 0) {
     // If no arguments are passed, return the total immediately
     if (arguments.length === 0) {
        return total;
    }
    return function (num) {
        if (num === undefined) {
            return total;  // If no argument is passed, return the accumulated total
        }
        return curriedAdd(total + num);  // Accumulate the total and return a new function
    };
}

module.exports = { curriedAdd };
