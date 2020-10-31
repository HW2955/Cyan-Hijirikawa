const path = require('path');
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile)

module.exports = {
	name: 'hug',
    description: 'hug someone!',
    aliases: ['rw'],
	execute(message)
	{

        var student = [{
            "name" : "john",
            "address" : "32 street, london",
            "contact" : 123456
       },{
            "name" : "jeyy",
            "address" : "51 street, new york",
            "contact" : 987654321,
            "gender" : "male"
       },{
            "name" : "robert",
            "address" : "14th street, birmingham",
            "contact" : 456123789,
            "gender" : "male"
       },{
            "name" : "carlos",
            "address" : "89th street, manchester",
            "contact" : 23456
       },{
            "name": "johnny",
            "address": "6th street, Washington",
            "contact": 23456
       },{
            "name": "jack",
            "address": "4th street, VA",
            "contact": 23456,
            "gender": "male"
       }
       ];

         
        fs.writeFileSync(path.resolve(__dirname, 'student.json'), JSON.stringify(student));        

	},
};


/* basic writing
        let rawdata = fs.readFileSync(path.resolve(__dirname, 'student.json'));
        let student = JSON.parse(rawdata);
        console.log(student);





        */