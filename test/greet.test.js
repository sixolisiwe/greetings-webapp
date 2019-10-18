const assert = require("assert")
const Greet = require('../greetings')
const pg = require("pg");
const Pool = pg.Pool;

// we are using a special test database for the tests
const connectionString = process.env.DATABASE_URL || 'postgres://thsbnfgjjqqfbo:3f6718d79d0935d7304ce3a4c0fc2cc2980856bcf3dd1336445049281aa74b78@ec2-23-21-148-223.compute-1.amazonaws.com:5432/d6i3sd32rjjbeh';
const pool = new Pool({
    connectionString,
});

describe('The basic database web app', function () {

    // beforeEach(async function () {
    //     // clean the tables before each test run
    //     await pool.query("delete from namestoGreet;");

    // });

    it('should pass the db test', async function () {

        // the Factory Function is called CategoryService
        let GreetInstance = Greet(pool);
        await GreetInstance.setName("sino")

        let greet = await GreetInstance.getName();
        assert.equal(1, greet.length);

    });
    it('should show the count of the names in the database', async function () {

        // the Factory Function is called CategoryService
        let GreetInstance = Greet(pool);
        await GreetInstance.setName("sino")
        await GreetInstance.setName("sbu")

        let greet = await GreetInstance.getCount();
        assert.equal(2, greet);

    });

    it('should not count duplicate names in the database', async function () {

        // the Factory Function is called CategoryService
        let GreetInstance = Greet(pool);
        await GreetInstance.setName("sino")
        await GreetInstance.setName("sino")

        let greet = await GreetInstance.getCount();
        assert.equal(1, greet);

    });
    it('should greet in the language selected', async function () {

        // the Factory Function is called CategoryService
        let GreetInstance = Greet(pool);
    
        await GreetInstance.langGreet("Sino", "English")

        let greet = await GreetInstance.getGreeting();
        assert.equal("Hello, Sino", greet);
    });

 it('should greet in the language selected', async function () {

        // the Factory Function is called CategoryService
        let GreetInstance = Greet(pool);
    
        await GreetInstance.langGreet("Siwe", "Xhosa")

        let greet = await GreetInstance.getGreeting();
        assert.equal("Mholo, Siwe", greet);
    });
    it('should greet in the language selected', async function () {

        // the Factory Function is called CategoryService
        let GreetInstance = Greet(pool);
    
        await GreetInstance.langGreet("Lona", "Afrikaans")

        let greet = await GreetInstance.getGreeting();
        assert.equal("Hallo, Lona", greet);
    });
    
    

    after(function () {
        pool.end();
    })
});