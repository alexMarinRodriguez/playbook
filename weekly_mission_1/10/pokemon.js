export default class MyPokemon {
    constructor(name) {
        this.name = name
    }

    sayHello(message) {
        console.log(`Hola yo soy un ${this.name}, ${message}`)
    }
}