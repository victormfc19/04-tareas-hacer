const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer.js')
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js')
require('colors');


const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    do {

        opt = await inquirerMenu();
        
        switch(opt){

            case '1': 
                const desc = await leerInput(' Descripcion: ');
                tareas.crearTarea( desc );
                break;
            
            case '2':
                console.log( tareas.listadoArr );
                break;

        }
      
        await pausa();
      
    } while (opt != 0);
  
}

main();