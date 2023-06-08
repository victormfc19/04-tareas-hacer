const { resolve } = require('path');

require('colors');


const mostrarMenu = () => {

    return new Promise( resolve => {
        
        console.log('======================='.green);
        console.log('Selecciona una opcion'.green);
        console.log('======================='.green);
    
        console.log(`${ '1'.green }. Crear tarea`);
        console.log(`${ '2'.green }. Listar tareas`);
        console.log(`${ '3'.green }. Listar tareas completadas`);
        console.log(`${ '4'.green }. Listar tareas pendientes`);
        console.log(`${ '5'.green }. Completar tarea(s)`);
        console.log(`${ '6'.green }. Borrar tarea`);
        console.log(`${ '0'.green }. Salir`);
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question('Seleccione una opcion: ', (opt) => {
            readLine.close();
            resolve(opt);
        })
      
    })
}

const pausa = () => {

    return new Promise( resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\n Presione ${'Enter'.green} para continuar \n`, (opt) => {
            readLine.close();
        })
    })

}

module.exports = {
    mostrarMenu,
    pausa
}