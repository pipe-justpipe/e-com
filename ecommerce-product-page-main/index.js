const reduce = document.querySelector('.negative');
const increase = document.querySelector('.positive');
const counter = document.querySelector('.counter'); 

const emptyCartContainer = document.querySelector('.empty-cart');
const cartImage = document.querySelector('.cart-image');
const bigButton = document.querySelector('.bigbutton');
const superScript = document.querySelector('.sup');
const emptyCart = document.querySelector('.empty-cart-p');

const newElement = document.createElement('div');
const flexDiv = document.createElement('div');
const gridDiv = document.createElement('div');
const imgElement = document.createElement('img');
const firstParagraph = document.createElement('p');
const secondParagraph = document.createElement('p');
const btnElement = document.createElement('button');
const deleteButton = document.createElement('img');
const calculationSpan = document.createElement('span');
    // calculation.style.fontWeight = 'bold';
    ///////////////////////////////////////////////////
/*SETTING THE ATTRIBUTES OF TE ELEMENTS*/
    newElement.setAttribute('class', "new-element");
    flexDiv.setAttribute('class', "flex-div");
    gridDiv.setAttribute('class', "grid-div");
    imgElement.setAttribute('src', 'images/image-product-1-thumbnail.jpg')
    imgElement.setAttribute('class', 'img-element');
    imgElement.setAttribute('alt', 'imageTHUMBnail');
    deleteButton.setAttribute('src', 'images/icon-delete.svg')
    deleteButton.setAttribute('alt', 'deleteButton');
    deleteButton.style.width = '10%';
    deleteButton.style.height = '5%';
    // calculation.style.backgroundColor = 'black'
  
/*Adding elements*/
    newElement.appendChild(flexDiv);
    
    /////////////////////////////////////////////////
    flexDiv.appendChild(imgElement);
    imgElement.insertAdjacentElement("afterend",gridDiv);
    gridDiv.insertAdjacentElement("afterend",deleteButton);
    /////////////////////////////////////////////////
    gridDiv.appendChild(firstParagraph);
    firstParagraph.insertAdjacentElement("afterend",secondParagraph);
    firstParagraph.textContent = "Fall Limited Edition Sneakers";

    let count = 0
    
    
    /////////////////////////////////////////////////
    flexDiv.insertAdjacentElement("afterend",btnElement);

    btnElement.textContent = "Check out";
    btnElement.style.cssText = "background-color: hsl(26, 100%, 55%); color:white; padding: 20px; margin-top:20px; border-radius:10px; border: none; width: 100%;";
console.log(newElement);

console.log(emptyCart);


increase.addEventListener('click',function increment(){
    count++;
    counter.textContent = count;
} );
console.log(count);

reduce.addEventListener('click',function reduce(){
    count == 0? 0 : count--;
    counter.textContent = count
} ); 

console.log(count);
bigButton.addEventListener( 'click', function addToCart(){
    superScript.innerHTML = count;
    console.log(count);

    if(count == 0){
        emptyCartContainer.style.display = "block"; 
        emptyCart.innerHTML = "Your cart is empty";
    }else{
        emptyCart.innerHTML = ''
        emptyCart.appendChild(newElement)
        secondParagraph.textContent =`$125.00 x ${count} $`
    
        //style for calculated value
        const calculation = 125 * count + ".00";
        calculationSpan.textContent = calculation;
        calculationSpan.style.fontWeight = 'bold';
        secondParagraph.appendChild(calculationSpan);
    }
    emptyCart.style.display = 'block';
    superScript.style.display ="block";
    emptyCartContainer.style.display ="block";

    if(counter.textContent == 0){
        superScript.textContent = 0
    } 
})

deleteButton.addEventListener('click', function (){
    emptyCart.innerHTML = 'Your cart is empty';

    count = 0;
    counter.innerText = count;
    superScript.style.display = 'none';
    
});
/////////

///////////
/////////////














































// emptyCartContainer.addEventListener('mouseleave', function (event){
//     if (event.target == emptyCartContainer) {
//         console.log('mouseaway')
//     }

//     return event
// })


// let addToCartExecuted = false;
// const positive = document.querySelector('.positive')
//  // Initialize a flag to track if the action has been executed

// bigButton.addEventListener('click', function executeAddToCartAction() {
//   if (!addToCartExecuted) {
//     superScript.innerHTML = count;
    
//     if (count === 0) {
//       emptyCartContainer.style.display = "block";
//       emptyCart.innerHTML = "Your cart is empty";
//     } else if (count >= 1) {
//     //   emptyCart.appendChild(createNewCart());
//     }

//     hiddenDiv.style.display = 'none';
//     emptyCart.style.display = 'block';
//     superScript.style.display = "block";
//     emptyCartContainer.style.display = "block";

//     if (black.textContent === 0) {
//       superScript.textContent = 0;
//     }
    
//   }

//     // addToCartExecuted = true; // Set the flag to true to indicate that the action has been executed
    
// });

    // if(count = count+1){
    //     superScript.textContent = count - 1;
    //     secondParagraph.textContent ="$125 x " + count +" " + "$" 
    //     calculationSpan.textContent = calculation;
    //     calculationSpan.style.fontWeight = 'bold';
    //     secondParagraph.appendChild(calculationSpan);
    // }

//  const negative = document.querySelector('.negative')
//  if(!addToCartExecuted ){
//      negative.addEventListener('click', executeAddToCartAction)
//  }

// const negative = document.querySelector('.negative')
// const positive = document.querySelector('.positive')
// negative.addEventListener('click', function (){
//     if (addToCartExecuted = true) {
//         superScript.innerHTML = count;
        
//         if (count === 0) {
//           emptyCartContainer.style.display = "block";
//           emptyCart.innerHTML = "Your cart is empty";
//         } else if (count >= 1) {
//           emptyCart.appendChild(createNewCart());
//         }
    
//         hiddenDiv.style.display = 'none';
//         emptyCart.style.display = 'block';
//         superScript.style.display = "block";
//         emptyCartContainer.style.display = "block";
    
//         if (black.textContent === 0) {
//           superScript.textContent = 0;
//         }
//       }
// })
// if(addToCartExecuted = true) {}



// Add event listener to hide the cart on mouse leave
// emptyCartContainer.addEventListener('mouseleave', function () {
//     emptyCartContainer.style.display = "none";
//   });

//   superScript.addEventListener('click', function () {
//     emptyCartContainer.style.display ='block';
//     if (emptyCartContainer.classList.contains('show')) {
//         emptyCartContainer.style.display = 'none';
//     }
//   });
