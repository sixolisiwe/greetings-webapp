const assert = require("assert")
const Greet = require('../greetings')

describe("greetings", function (namesGreeted) {
    it("should greet the name that is set", function () {
        var greetInstance = Greet();
        greetInstance.setName("Siwe");

        assert.deepEqual({Siwe: 0}, greetInstance.getName())

    })

    it("should not greet characters and numbers", function () {
        var greetInstance = Greet();
        greetInstance.setName("1");

        assert.deepEqual({ 1: 0 }, greetInstance.getName())

    })

    it("should greet in English when the English radio button is selected", function () {
        // var greetInstance = greet();
        var names = Greet()
        var name = "Siwe";
        // var EnglishGreet = "Hello ,"
        names.setName("Siwe");

        assert.equal("Hello, Siwe", names.EnglishGreet(name))


    })
    it("should greet in Xhosa when the Xhosa radio button is selected", function () {
        // var greetInstance = greet();
        var names = Greet()
        var name = "Victoria";
        names.setName("Victoria");


        assert.equal("Mholo, Victoria", names.XhosaGreet(name))


    })
    it("should greet in Afrikaans when the Afrikaans radio button is selected", function () {
        // var greetInstance = greet();
        var names = Greet()

         var name = "Sir";
        names.setName("Sir");

        assert.equal("Hallo, Sir", names.AfrikaansGreet(name))


    })

    it("should return total number of names greeted", function () {
       
        var names = Greet()

        names.setName("Siwe");
        assert.equal(1, names.getCount())


    })
    it("should return total number of names greeted", function () {
       
        var names = Greet()

        names.setName("Siwe");
        names.setName ("dfjk");

        assert.equal(2, names.getCount())


    })
    it("should return total number of names greeted", function () {
       
        var names = Greet()

        names.setName("Siwe");
        names.setName ("dfjk");
        names.setName("Jason");

        assert.equal(3, names.getCount())


    })


    it("should only allow Siwe to be greeted once", function () {
      
        var names = Greet()

      
        names.setName("Siwe");
        names.setName("Siwe");
        names.setName("Siwe");
        
        
        assert.equal(1, names.getCount())

})

})