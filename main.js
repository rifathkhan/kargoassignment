//Takes in values from standard input and stores in array called inputs
let inputs = process.argv.slice(2)
let output = []; //array of strings for holding the output
let phonetic = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]; 
//phonetic equivalent for the digits indexed by digit

inputs.forEach((input) => { //for each item in the inputs array turns each item into a string and splits by character

    
    digits = input.toString().split("");
    text = "";

    digits.forEach((digit) => {
        text += phonetic[parseInt(digit)];  
        //for each character turns string into int and concatenates the phonetic equivalent from the phonetic array into a string
    })

    output.push(text); //appends the strings into the output array 

})

result = output.join(","); //joins the array items and returns the output to stdout
console.log(result)