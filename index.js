// Code your solutions in this file

const letters = ['Guadalupe', 'Ollie', 'Aki'];
function writeCards(letters) {
    let sentence = []
    for (let i = 0; i < letters.length; i++) {
    sentence.push(`Thank you, ${letters[i]}, for the wonderful surprise gift!`);
    }
    return sentence;
}


let decrement = 100;

function countDown(decrement){
    while (decrement >= 0) {
        console.log(decrement); 
        decrement -=1;
    }
}
countDown(decrement);