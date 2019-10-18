module.exports = function names(greetingApp) {

    async function namesToCount(req, res) {

        let counter = await greetingApp.getCount();
        // console.log({
        //     counter
        // });


        res.render('index', {
            greeted: greetingApp.getGreeting(),
            count: counter,
            messages: req.flash('error'),

        })

    }

    async function theList(req, res) {

        var name = req.body.namesGreeted
        var lang = req.body.langType

    
        if (name && lang) {
            await greetingApp.setName(name);
            await greetingApp.langGreet(name, lang);
        }
        else if (name === '' && lang === undefined) {

            req.flash('error', 'please enter name and select language')

        } else if (name === '') {
            req.flash('error', 'please enter a name');

        } else if (lang === undefined) {
            req.flash('error', 'please select a language');

        }


        res.redirect("/")
    }

    async function greetedNames(req, res) {

        var name = await greetingApp.getName()

        res.render('names', {
            names: name
        })
    }

    async function resetsApp(req, res) {

        await greetingApp.toReset();



        res.redirect('/')
    }

    return {
        namesToCount,
        theList,
        greetedNames,
        resetsApp


    }

}