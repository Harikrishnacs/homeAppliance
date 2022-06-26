

// const url = 'https://course-api.com/javascript-store-products';
const url = 'https://course-api.com/react-store-products';
// desination for the products in the store
const createproducts = document.querySelector('.product_row');
// get the product in json 
const fetchProduct = async () => {
    const product = await fetch(url);
    const response = await product.json();
    return response;
}


//display the product innerHTML
const displayProduct = (list) => {
 
    if(list.length < 1) {   
        createproducts.innerHTML = '<h1>Sorry, no products matched your search</h1>';
        return;
    }
    else{
        console.log('displayProduct', list.length);
    const productList = list.map(function (product) {
        const { id } = product;
        const { name: title, price } = product;
        const { image } = product;

        const formatPrice = price / 100;
        //id,image,price,title
        return `<div class="product_card">
    <img src="${image}" alt="no product-img">
    <p class="Product_name">${title}</p>
    <P>${formatPrice}</P>
    <a>add Cart</a>
</div>`}).join("");

    createproducts.innerHTML = productList;
    console.log(createproducts);

    }
    
}
const start = async () => {
    const data = await fetchProduct();
    displayProduct(data);

}
start();




//search for products 
const form = document.querySelector('.input_form');
const searchproduct = document.querySelector('.search_product');

form.addEventListener('keyup',async()=>{
const searchvalue = searchproduct.value;
const filteredProducts = await fetchProduct();

   let filter= filteredProducts.filter(function(product) { 
   
    return product.name.includes(searchvalue); 
    console.log(filter);
// filteredProducts 
});
displayProduct(filter);
});