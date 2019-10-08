module.exports = function names(greetingApp) {

    function namesToCount(req, res) {
        res.render('index', {
            
            greeted: greetingApp.langGreet(req.body.namesGreeted, req.body.langType),
            count: greetingApp.getCount(),
            messages: req.flash('error')
        })
    }

    function theList(req, res) {

        var name = req.body.namesGreeted
        var counter = 0
        var lang = req.body.langType
        if (name === '' || lang === undefined) {
            req.flash('error', 'please enter name and select language')
        } else {
            var msg = greetingApp.langGreet(req.body.namesGreeted, req.body.langType);
            greetingApp.setName({
                name,
                counter 
            })
        }


        console.log(greetingApp.getName());

        res.render('index', {
            greeted: msg,
            count: greetingApp.getCount(),
            messages: req.flash('error')

        })


    }

    function greetedNames(req, res) {

        var name = greetingApp.getName()

        res.render('names', {
            names: name
        })
    }
    return {
        namesToCount,
        theList,
        greetedNames


    }

}