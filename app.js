//const multiplicar = require('./multiplicar/multiplicar')

const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('comando no reconocido');
        break;

}



/* let argv = process.argv;
let parameters = argv[2];
let base = parameters.split("=")[1]; */


/* console.log(argv.base);
console.log(argv.limite);
 */