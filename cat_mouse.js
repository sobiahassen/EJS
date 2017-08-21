process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        var diff_x_z = Math.abs(z - x) ;
        var diff_y_z = Math.abs(z - y) ;
        if (diff_y_z === diff_x_z)
            console.log("Mouse C");
        else if (diff_y_z < diff_x_z)
            console.log("Cat B");
        else if (diff_x_z < diff_y_z)
            (console.log("Cat A"));
                
        
    }

}
