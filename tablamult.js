const argv = require('yargs')
    .command('crear', 'Crea un archivo con la tabla multiplicar', {
        base: {
            demand: true,
            alias: 'b',
            description: 'la base'
        },
        limite: {
            alias: 'l',
            default: 10,
            description: 'El limite de la tabla de multiplicar'
        }
    })
    .command('listar', 'Crea una lista del archivo', {
        base: {
            demand: true,
            alias: 'b',
            description: 'la base'
        },
        limite: {
            alias: 'l',
            default: 10,
            description: 'El limite de la tabla de multiplicar'
        }
    }).argv
    //const argv = require(`yargs`).argv
const { crearArchivo } = require(`./multiplicacion/multiplicar`)

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`${archivo}`))
            .catch(err => console.log(e));
        break;
    case 'listar':
        listartabla(argv.base, argv.limite)
            .then(archivo => console.log(`${archivo}`))
            .catch(err => console.log(e));
        break;
    default:
        console.log('Comando no valido');
}

console.log(comando);

// let argv2 = process.argv

// console.log(argv);
// console.log(argv2);
//  const { crearArchivo } = require('./multiplicacion/multiplicar');
// var regex = /(\d+)/g;
// let base = process.argv[2].match(regex);
// crearArchivo(base).then(archivo => console.log(`${archivo}`))
// .catch(err => console.log("error de ingreso"));
// console.log(process.argv);