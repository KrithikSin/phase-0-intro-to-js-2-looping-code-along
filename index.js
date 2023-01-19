// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(arr, name) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`);
        debugger;
    }
    return newArr;
}

let theBoys = writeCards(["Charlie", "Samip", "Ali"], "birthday");

console.log(theBoys);

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--
    }
    return num;
}