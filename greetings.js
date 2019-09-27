module.exports = function Greet() {
  
  var namesGreeted = {};

    // var greetCount = 0;

    function setName(nameVal) {
        var name = nameVal.charAt(0).toUpperCase() + nameVal.slice(1);

        if (namesGreeted[name] === undefined && name !== "") {
            namesGreeted[name] = 0;
        }
        return namesGreeted
    }

    function langGreet(names, language) {
        if (language === "English") {
            return "Hello, " + names;
        }
    
    else if (language === "Xhosa") {
        return "Mholo, " + names;
    }
    else if (language === "Afrikaans") {
        return "Hallo, " + names;
    }
}



    function getCount() {
        var count = Object.keys(namesGreeted);
        return count.length;
    }

    function getName() {
        console.log(namesGreeted);
        
        return namesGreeted;
    }

    return {
        setName,
        getName,
        getCount,
        langGreet,


    }

}