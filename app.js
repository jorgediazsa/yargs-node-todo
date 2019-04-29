const argv = require('./config/yargs').argv
const colors = require('colors')

const todo = require('./todo/todo')

const command = argv._[0]

switch( command ) {
    case 'create':
        const task = todo.create( argv.description )
        console.log(task)
        break
    case 'list':
        const todoList = todo.getList()

        for ( let task of todoList ) {
            console.log('=======TODO LIST======'.green)
            console.log(task.description)
            console.log(`Status: ${task.complete}`)
            console.log('======================'.green)
        }
        break
    case 'update':
        const updated = todo.update(argv.description, argv.complete)
        console.log(updated)
        break
    case 'delete':
        const deleted = todo.deleteTask(argv.description)
        console.log(deleted)
        break
    default:
        console.log('command not found')
}