

var shoppingCart = {
    books: 3,
    sunglass : 3,
    pen: 25,
    mouse: 1,
    keyboard: 1,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
// const values = Object.values(shoppingCart);
// console.log(keys);

for(var i =0; i < keys.length; i++){
    // console.log(keys[i]);
}


// hard version
for(var i =0; i < keys.length; i++){
    var propertyName = keys[i]
    var propertyValue = shoppingCart[propertyName]
    // console.log(propertyName, propertyValue)
}


// easy version, for in 
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName]
    console.log(propertyName, value)
}
