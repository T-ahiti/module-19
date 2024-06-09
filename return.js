
function add(num1, num2){
    // console.log(num1, num2);
    var sum = num1 + num2;
    // console.log(sum);
    return sum;
}

add(45, 15);
var total = add(80, 20);
    // console.log('total', total);


function bringShingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

bringShingara(200);
var singaras = bringShingara(200);
console.log(singaras);
