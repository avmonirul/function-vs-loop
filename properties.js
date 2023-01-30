var soppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

//when yoy know the specific property name, use dot notation to get the property value
var penCount = soppingCart.pen;
//alternative system
//when yoy know the specific property name, use dot notation to get the property value
var penCount2 = soppingCart['pen']

var propertyName = 'mouse';

var propertyValue = soppingCart[propertyName]
console.log(propertyName, propertyValue);

var properties = Object.keys(soppingCart);
var propertyValue = Object.values(soppingCart)
// console.log(properties)
// console.log(propertyValue)
// console.log(soppingCart);

