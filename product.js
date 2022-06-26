// const url = 'https://course-api.com/javascript-store-products';
const url = 'https://course-api.com/react-store-products';
// desination for the products in the store
const createproducts = document.querySelector('.product_row');
// get the product in json 
const fetchProduct =  async () => {
    const product = await fetch(url);
    const response = await product.json();
    return response;
}



const displayProduct =  (list) => {
    console.log('displayProduct', list);
  const productList = list.map(function (product){
     const {id}= product;
     const{name:title,price}=product;     
     const{image}= product;  

     const formatPrice = price/100;
     //id,image,price,title
    return `<div class="product_card">
    <img src="${image}"
        alt="no product-img">
    <p class="Product_name">${title}</p>
    <P>${formatPrice}</P>
    <a>add Cart</a>
</div>`

   }).join("");
   
   createproducts.innerHTML=productList;
   console.log(createproducts);
}
const getProduct=async ()=>  {
    const data = await fetchProduct();
    displayProduct(data);
    
}
getProduct();
