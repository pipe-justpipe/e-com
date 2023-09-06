const reduce = document.querySelector('.negative');
const increase = document.querySelector('.positive');
const black = document.querySelector('.black'); 
let count = 0

increase.addEventListener('click',function increment(){
    count++;
    black.textContent = count
} );
console.log(count);

reduce.addEventListener('click',function reduce(){
    console.log(count);
    count--;
    black.textContent = count
} ); 

// function increment(){
//     // count = count +1

//     count+= 25
//     countEl.textContent = count
// }


// function save (){
// // 1. Grab the save-el paragrah and store it in a variable called saveEl
// // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// // 3. Render the variable in the saveEl using innerText/////
    
// let countStr = count + " - "
// // NB: Make sure to not delete the existing content of the paragraph
// saveEl.textContent += countStr

// countEl.textContent = 0
// count=0

// console.log(count)
// }


