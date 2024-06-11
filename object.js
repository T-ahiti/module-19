var student = { 
    id:115, 
    name:'solayman khan', 
    class:9, 
    marks:90
}

var mobile = {
    brand: 'samsung',
    price: 10000,
    storage: '64g',
    camera: '7MP'
}

var computer = {
    brand: 'lenovo',
    color: 'silver',
    processor: 'i7',
    price: 39000
}


console.log(computer);
// . diye jei property likhbo just otar value show korbe tokhon
console.log(computer.price);
// value r man change kora jay .property diye
computer.processor = 'i79';
console.log(computer);

