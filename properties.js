
var shoppingCart = {
    books: 3,
    sunglass : 3,
    pen: 25,
    mouse: 1,
    keyboard: 1
}

// when u know the specific property name.. use dot notation to get the property value
var penCount = shoppingCart.pen;
// console.log(shoppingCart)

// alternative system 1/another systm
var penCount2 = shoppingCart['pen']

// alternative system 2
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue)


// shobgula properties/keys er name dibe
var properties = Object.keys(shoppingCart)
// console.log(properties);

// shobgula value ke dekhabe
var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);


