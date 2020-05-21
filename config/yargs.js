const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    },
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de mutiplicar', opts)
    .command('Crear', 'Genera un archivo de la tabla de mutiplicar', opts)
    .help()
    .argv;



module.exports = {
    argv
}