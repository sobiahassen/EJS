// chapter 3 functions
// number -> boolean
// interp. returns true if the number is even
// chapter 3 fuctions.
var my_even = function (number) {
    if (number < 0)
        return undefined;
    else if (number - 2 === 0)
        return true;
    else if
        (number -2 === 1)
        return false;
    else
        return my_even(number - 2);
};
