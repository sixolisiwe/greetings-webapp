module.exports = function Greet() {

    // var namesGreeted = {};
    var nameList = [];

    function setName(obj) {
        var names = obj
        nameList.push({
            name: names.name,
            counter: 1
        });

    }


    function getName() {

        // console.log(Object.keys(namesGreeted));

        return nameList;

    }


    function langGreet(names, language) {

        if (language === "English") {
            return "Hello, " + names;
        }
        if (language === "Xhosa") {
            return "Mholo, " + names;
        }
        if (language === "Afrikaans") {
            return "Hallo, " + names;
        }

    }


    function getCount() {

        var count = Object.keys(nameList);
        console.log(nameList);

        return count.length;

    }

    return {
        setName,
        getName,
        getCount,
        langGreet,
        // newList,
        // namesForList



    }

}