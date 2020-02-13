const validator = require("validator")
const yargs = require("yargs")

const chalk = require("chalk")
const notes = require('./notes.js')

// console.log(chalk.green.inverse(validator.isURL("gmail.com")))
// console.log(chalk.green.bgGrey("success"))
// name()

// const inst = process.argv[2];

// if(inst === "add"){
//     console.log("adding note..")
// }

yargs.command({
    command: "add",
    describe: "add a new notes",
    builder:{
        title:{
            describe: "note title",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'body note',
            demandOption: true,
            type: 'string'
        }
    },
    //handler: function(argv){
    handler(argv){    
        notes.addNotes(argv.title, argv.body)    
    }
})

yargs.command({
    command: "remove",
    describe: "remove a notes",
    builder:{
        title:{
            describe: "title to remove",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
        console.log("Removing a note...")
    }
})

yargs.command({
    command: "list",
    describe: "list a notes",
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: "read",
    describe: "read a notes",
    builder:{
        title:{
            describe: "Read note by title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
//console.log(process.argv[0])
//console.log(yargs.argv)