const products = [
    {name : 'Noman' , age : 21 , roll : 580165},
    {name : 'Noman' , age : 2 , roll : 580165},
    {name : 'Noman' , age : 1 , roll : 580165},
    {name : 'Noman' , age : 121 , roll : 580165},
]

const reducer = products.reduce((accumulator , currentValue) => accumulator + currentValue.age , 0)
console.log(reducer);