module.exports = function names(greetingApp) {

    async function namesToCount(req, res) {

        let counter = await greetingApp.getCount();

        res.render('index', {
            greeted: greetingApp.getGreeting(),
            count: counter,
            messages: req.flash('error'),

        })
      
    }

    function theList(req, res) {

        var name = req.body.namesGreeted
        var lang = req.body.langType

        //console.log(greetingApp.langGreet(name, lang));
        if (name === '' && lang === undefined) {
            req.flash('error', 'please enter name and select language')
         
        } 
        if (name === '' && lang !== undefined) {
            req.flash('error', 'please enter a name');

        }
        if (name !== '' && lang === undefined) {
            req.flash('error', 'please select lang');

        } else {
         greetingApp.setName(name);
            greetingApp.langGreet(name, lang);
            
        }
      

        res.redirect("/")
    }

   async function greetedNames(req, res) {

        var name = await greetingApp.getName()

        res.render('names', {
            names: name
        })
    }

    async function resetsApp(req, res){
        
    await greetingApp.toReset();
  
    

    res.redirect ('/')
    }

    return {
        namesToCount,
        theList,
        greetedNames,
        resetsApp


    }

}