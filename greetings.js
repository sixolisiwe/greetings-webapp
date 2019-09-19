module.exports = function Greet(nameList) {
    // var name = ""; // global variable

    // var Language = []; // global variable

    var namesGreeted =  nameList || {};

    // var greetCount = 0;

    function setName(nameVal) {
        var name = nameVal.charAt(0).toUpperCase() + nameVal.slice(1);  
    
        if (namesGreeted[name] === undefined && name !== "") {
            namesGreeted[name] = 0; 
        }
      return namesGreeted
    }

    function EnglishGreet(name) {
        return "Hello, " + name;
    }
    function XhosaGreet(name) {
        
        return "Mholo, " + name;
    }
    function AfrikaansGreet(name) {
        return "Hallo, " + name;
    }

    function getCount() {
        var count = Object.keys(namesGreeted);
        return count.length;
    }

    function getName() {
        return namesGreeted;
    }
  
    return {
        setName,
        getName,
        getCount,
        EnglishGreet,
        XhosaGreet,
        AfrikaansGreet,
      
    }

}