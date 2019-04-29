const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const description = {
    demand: true,
    alias: 'd',
    desc: 'Describe the task'
}

const complete = {
    demand: true,
    alias: 'c',
    desc: 'Mark task as done or pending'
}

const argv = require('yargs')
                .command('create', 'create a todo element', {
                    description
                })
                .command('update', 'update a todo element', {
                    description,
                    complete
                })
                .command('delete', 'delete a todo element', {
                    description
                })
                .help()
                .argv

module.exports = {
    argv
}