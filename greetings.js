module.exports = function Greet(pool) {

    var greeting = " "


    async function setName(name) {
    
    if(name === ''){ 
        return;
    }else{ 
        let names = await pool.query("SELECT * FROM namestoGreet WHERE people = $1", [name]); 
     if(names.rowCount === 1){
       await pool.query('UPDATE namestoGreet SET count = count + 1 WHERE people = $1', [name] );   
     }else{ 
        await pool.query("INSERT INTO namestoGreet (people,count) VALUES ($1,$2);", [name, 1]);

    }
}
    }

    async function getName() {

        let name = await pool.query("SELECT * FROM namestoGreet;");
        let people = name.rows
        return people;
    }


    function langGreet(names, language) {
        var upperCase = names.charAt(0).toUpperCase()+ names.slice(1);    
        
        console.log('------------');
        console.log({names, language})
        console.log('------------');
        
        if (upperCase === ''){
            greeting = ""
            return;
        }

        if (!language){
            greeting = ""
            return;
        }

        if (language === "English") {
            greeting = "Hello, " + upperCase;
        } else if (language === "Xhosa") {
            greeting = "Mholo, "  + upperCase;
        } else if (language === "Afrikaans") {
            greeting = "Hallo, " + upperCase;
        } else {
            greeting = ""
        }
        console.log();
        
        
    }


    function getGreeting() {
        return greeting;
    }
    

    async function getCount() {
        let count = await pool.query("SELECT COUNT(*) FROM namestoGreet;");
        let newCount = count.rows[0].count
        return newCount;

    }

   async function toReset(){
       var query = " DELETE FROM namestoGreet";
       return pool.query(query);


    //  let clear =   await pool.query("DELETE * FROM namestoGreet;");
    //     return clear;
    }

    return {
        setName,
        getName,
        getCount,
        langGreet,
        getGreeting,
        toReset





    }

}