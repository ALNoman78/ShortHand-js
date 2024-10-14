const products = [
    {id : 1 , name : 'Laptop' , price : 399 , color : 'red'},
    {id : 1 , name : 'TV' , price : 399 , color : 'red'},
    {id : 1 , name : 'Remote' , price : 399 , color : 'red'},
    {id : 1 , name : 'Phone' , price : 399 , color : 'red'},
    {id : 1 , name : 'Love' , price : 399 , color : 'red'},
]

// console.log(products);
const newItems = {id : 22 , name : "maisa" , isLove : 'Noman'}
const newProducts = [...products , newItems]
// console.log(newProducts);

const remaining = products.filter(product => product.name !== 'Love')
console.log(remaining);