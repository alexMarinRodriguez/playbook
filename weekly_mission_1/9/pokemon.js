class Pokemon {
    constructor(name) {
       
        this.name = name
    }

   
    sayHello() {
        console.log(`Hola yo soy un ${this.name}`)
    }

   
    sayMessage(message) {
        console.log(`${message}`)
    }
}


module.exports = Pokemon