const fs = require('fs')

let todoList = []

const saveDB = () => {
    const data = JSON.stringify(todoList)

    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error(err)
    })
}

const loadDB = () => {
    try {
        todoList = require('../db/data.json')
    } catch (err) {
        todoList = []
    }
}

const create = description => {
    loadDB()

    const todo = {
        description,
        complete: false
    }

    todoList.push(todo)

    saveDB()
    
    return todo
}

const getList = () => {
    loadDB()
    return todoList
}

const update = (description, complete = true) => {
    loadDB()

    const index = todoList.findIndex( task => task.description === description )
    if ( index >= 0 ) {
        todoList[index].complete = complete
        saveDB()
        return true
    } else {
        return false
    }
}

const deleteTask = description => {
    loadDB()
    const newList = todoList.filter( task => task.description !== description )

    if ( todoList.length === newList.length ) {
        return false
    } else {
        todoList = newList
        saveDB()
        return true
    }
}

module.exports = {
    create,
    getList,
    update,
    deleteTask
}