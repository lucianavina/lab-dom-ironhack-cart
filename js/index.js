/// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  //step 1
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  //Step 4
  const subTotal = product.querySelector('.subtotal span')

  //step 2 & 3
  const prodSubtotal = price.innerHTML * quantity.value
  
  //Step 5
  subTotal.innerHTML = prodSubtotal
  return prodSubtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 & 3
  //... your code goes here

  const products = document.querySelectorAll('.product')

  let total = 0 

  products.forEach(elm => {

    total += updateSubtotal(elm)
  })


  // ITERATION 3
  //... your code goes here

  const totalprice = document.querySelector('#total-value span')

  totalprice.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const wholeProd = target.parentNode.parentNode

  console.log(wholeProd.parentNode)

  wholeProd.parentNode.removeChild(wholeProd)

  calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const newProd = document.querySelector('.product').cloneNode(true)

  newProd.querySelector('.name span').innerText = document.querySelector('.newProd input').value
  newProd.querySelector('.price span').innerText = document.querySelector('.newPrice input').value
  newProd.querySelector('.subtotal span').innerText = 0
  newProd.querySelector('.action .btn').addEventListener('click', removeProduct)

  const fullTbody = document.querySelector('tbody')
  fullTbody.appendChild(newProd)

 

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach(elm => elm.addEventListener('click', removeProduct))

  const addProd = document.querySelector('#create')
  addProd.addEventListener('click', createProduct)

});
