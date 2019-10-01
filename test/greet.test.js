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
        var greetInstance = Greet()
        var name = "Siwe"
        var lang = "English"
       greetInstance.setName("Siwe")
        // var EnglishGreet = "Hello ,"
        // greetInstance.langGreet("English")
        

        assert.equal("Hello, Siwe", greetInstance.langGreet(name, lang))


    })
    it("should greet in Xhosa when the Xhosa radio button is selected", function () {
        // var greetInstance = greet();
        var greetInstance = Greet()
        var name = "Victoria";
        var lang = "Xhosa"
        greetInstance.setName("Victoria");


        assert.equal("Mholo, Victoria", greetInstance.langGreet(name, lang))


    })
    it("should greet in Afrikaans when the Afrikaans radio button is selected", function () {
        // var greetInstance = greet();
        var greetInstance = Greet()

         var name = "Sir";
         var lang = "Afrikaans"
        greetInstance.setName("Sir");

        assert.equal("Hallo, Sir", greetInstance.langGreet(name, lang))


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