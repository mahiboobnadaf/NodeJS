const eventEmmiter = require('events')  //import events module

const myEvent = new eventEmmiter() //creating instance from eventEmmitet class

const sayHello = () =>{
    console.log("Hello.! Welcome ")
}

const sayHi = (name,age) => {
    console.log(`Hi.. User : ${name} Age : ${age}`)
}

const sayBye = () =>{
    console.log("Bye user")
}

myEvent.on('userJoined',sayHello)
                                    //There can be multiple (on) for a single (emit)
myEvent.on('userJoined',sayHi)


myEvent.emit('userJoined','Mahiboob','23')  //.emit(event,para1,para2,...)

myEvent.on('userJoined',sayBye)    //the listener wil not execute because , a listener should be before event emit

