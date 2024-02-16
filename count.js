var counter = function(arr){
    return  'There are '+arr.length + ' Elements in array'
}

var adder = function(a,b){
    return `sum is ${a+b}` 
}

const pi =3.142;

//single export
// module.exports = counter;


//multiple export method 1
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//multiple export method2

module.exports={
    counter:counter,
    adder:adder,
    pi:pi
}