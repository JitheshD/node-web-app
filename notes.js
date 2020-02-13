const fs = require("fs")
const chalk = require("chalk")

// const addNotes = function(title, body){
const addNotes = (title, body) =>{   
    const notes = loadNotes()

    duplicateNotes = notes.filter((note) => note.title === title)
    // {
    //     return note.title === title
    // })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log("New note added")
    }
    else{
        console.log("Title already taken")
    }
    
}

const removeNotes = (title) =>{
    const notes = loadNotes()
    const noteToSave = notes.filter((note) => note.title !== title)
    // {
    //     return note.title !== title
    // })

    if(notes.length === noteToSave.length){
        console.log(chalk.red.inverse("No title to remove"))
    }else{
        saveNotes(noteToSave)
        console.log(chalk.green('note removed'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach((note) =>{
        console.log(note.title + "-" + note.body)
    })
    
}

const readNotes = (title) => {
    const notes = loadNotes()

    const findNote = notes.find((note) => note.title === title)
    
    if(findNote){
        console.log(findNote.title + ' ' + findNote.body)
    }
    else{
        console.log(chalk.red("not found.."))
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJson)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}