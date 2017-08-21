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

function ceaser (s, k) {
     var str = [];
     for (count = 0; count < s.length; count++) {
        var ascii = s.charCodeAt(count);
        if (ascii >= 65 && ascii <=  90) 
            str.push(String.fromCharCode(65 + ((ascii - 65 + k) % 26)));
        if (ascii >= 97 && ascii <= 122) 
            str.push(String.fromCharCode(97 + ((ascii - 97 + k) % 26)));
        if (ascii >= 0 && ascii < 65) 
            str.push(String.fromCharCode(ascii));
        if (ascii > 122) 
            str.push(String.fromCharCode(ascii));
        if (ascii > 90 && ascii < 97) 
            str.push(String.fromCharCode(ascii));
        
        
    }
   
    return str.join('');
}    

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var k = parseInt(readLine());
    console.log(ceaser(s,k));
    

}
