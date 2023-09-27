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
    count == 0? 0 : count --;
    black.textContent = count
} ); 
console.log(count);


const cartImage = document.querySelector('.cart-image');
const bigButton = document.querySelector('.bigbutton');
const superScript = document.querySelector('.sup');
const emptyCart = document.querySelector('.empty-cart-p');

function createNewCart(){
    const newElement = document.createElement('div');
    const flexDiv = document.createElement('div');
    const gridDiv = document.createElement('div');
    const imgElement = document.createElement('img');
    const firstParagraph = document.createElement('p');
    const secondParagraph = document.createElement('p');
    const btnElement = document.createElement('button');
    const deleteButton = document.createElement('img');
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

/*Adding elements*/
    newElement.appendChild(flexDiv);
    
    /////////////////////////////////////////////////
    flexDiv.appendChild(imgElement);
    imgElement.insertAdjacentElement("afterend",gridDiv);
    gridDiv.insertAdjacentElement("afterend",deleteButton);
    /////////////////////////////////////////////////
    gridDiv.appendChild(firstParagraph);
    firstParagraph.insertAdjacentElement("afterend",secondParagraph);
    firstParagraph.textContent = "Fall Limited Edition Sneakers"
    secondParagraph.textContent = "$125.00 x 3"
    /////////////////////////////////////////////////
    flexDiv.insertAdjacentElement("afterend",btnElement);
    console.log(newElement);
    
    return newElement
    
}

console.log(typeof createNewCart(), createNewCart());

bigButton.addEventListener( 'click', function addToCart(){
    superScript.innerHTML = count;
    if(count == 0){

        emptyCart.innerHTML = "Your cart is empty" ;

    }

    else if(count >= 1){
        emptyCart.appendChild(createNewCart())? false : emptyCart.appendChild(createNewCart());
    }
})