module.exports = function Greet(pool) {

    var greeting = " "
    var upperCase;
    var name;
    


    async function setName(namez) {
    
        upperCase = namez.charAt(0).toUpperCase()+ namez.slice(1).toLowerCase(); 
    //    name = await pool.query("SELECT distinct people, count FROM namestoGreet;");
       name = await pool.query("SELECT * FROM namestoGreet");
    if(upperCase === ''){ 
        return;
    }else{ 
        let names = await pool.query("SELECT * FROM namestoGreet WHERE people = $1", [upperCase]); 
     if(names.rowCount === 1){
       await pool.query('UPDATE namestoGreet SET count = count + 1 WHERE people = $1', [upperCase] );   
     }else{ 
        await pool.query("INSERT INTO namestoGreet (people,count) VALUES ($1,$2);", [upperCase, 1]);

    }
}
    }

    async function getName() {

       name = await pool.query("SELECT * FROM namestoGreet");
  
        return name.rows;
    }


    function langGreet(names, language) {
        
           upperCase = names.charAt(0).toUpperCase()+ names.slice(1).toLowerCase();
        
        if (upperCase === '' ){
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
        // console.log(upperCase);
        
        
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