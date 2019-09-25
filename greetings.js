module.exports = function Greet(nameList) {
    // var name = ""; // global variable

    // var Language = []; // global variable

    var namesGreeted = [];
    let english = ""

    // var allNames = []
    // var greetCount = 0;

    function setName(userName) {
        namesGreeted = {
            name: userName,
            counter: 0,
            // langType: langGreet()
        }

        // var name = user.charAt(0).toUpperCase() + user.slice(1);

        // if (namesGreete && name !== "") {
        //     namesGreeted[name] = 0;
        // }
        //return user
    }


    function langGreet(name, langType) {

        // console.log(name, langType);
        if (langType === "English") {
            namesGreeted.push({
                language: "Hello, ",
                names: name,
                count: 1
            })
            // return("Hello, " + name)
            // english = "Hello"
        }
        if (langType === "Afrikaans") {
            namesGreeted.push({
                language: "Hallo, ",
                names: name,
                count: 1
            })
        }
        if (langType === "Xhosa") {
            namesGreeted.push({
                language: "Mholo, ",
                names: name,
                count: 1
            })
        }
    }




    function getCount() {
        var count = Object.keys(namesGreeted);
        return count.length;
    }

    function getName() {
        var string = ""
        for (let x = 0; x < namesGreeted.length; x++) {
          string = namesGreeted[x].language + namesGreeted[x].names
        }
        return string
    }

    return {
        setName,
        getName,
        getCount,
        langGreet,


    }

}