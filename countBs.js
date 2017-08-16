// chapter 3 functions
//string -> number
//interp.
//      countBs consumes a string and gives the count of B (s) in it.


var countBs = function(input_string) {
    var b_count = 0
    console.log (input_string,length);
    for (count = 0; count < input_string.length ; count++) {
        if (input_string.charAt(count) === "B")
            b_count += 1; };
        return b_count;
    };
