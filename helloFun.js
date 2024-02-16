// function sayHello(name){
//     console.log(`HELLO ${name}`)
// }
// module.exports=sayHello

function myFunction1(name){
    console.log(`HELLO from Function:1 ${name}`)
}

function myFunction2(name){
    console.log(`HELLO from Function:2 ${name}`)
}

// module.exports=myFunction1

// module.exports=myFunction2

module.exports ={
    foo : 'Bar',
    myFunction1 : myFunction1,
    myFunction2 : myFunction2
}
