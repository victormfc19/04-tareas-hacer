const {v4: uuidv4 } = require('uuid')

class Tarea {

    id = '';
    desc = '';
    completada;

    constructor( desc ){
        this.id = uuidv4();
        this.desc = desc;
        this.completada = null;
    }

}

module.exports = Tarea;