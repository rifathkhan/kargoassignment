let inputs = [3, 40 ,500]
let output = [];
let phonetic = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

inputs.forEach((input) => {

    
    digits = input.toString().split("");
    text = "";

    digits.forEach((digit) => {
        text += phonetic[parseInt(digit)];
    })

    output.push(text);

})

result = output.join(" ,");
console.log(result)