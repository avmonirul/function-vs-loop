//array vs object
var soppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge ={
        rahim: 12,
        samad: 45,
        karim: 78,
        jamal: 12,
        robi: 32,
        kazi: 14
}

var soppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes:2,
    bottle:1
}

const key = Object.keys(soppingCart);
console.log(key);

const values = Object.values(soppingCart);
console.log(values);