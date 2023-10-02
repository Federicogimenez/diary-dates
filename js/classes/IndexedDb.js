export default class IndexedDb {
    constructor(){
        this.crearDb();
        // this.DB = 0;
    }

    crearDb(){

        const crearDb = window.indexedDB.open('dates', 1);

        crearDb.onerror = function(){
            console.log('hubo un errorrrrrr')
        }

        crearDb.onsuccess = function(){
            // this.DB = crearDb.result;
            console.log('todo sigue iguaaaaaal')
        }

        crearDb.onupgradeneeded = function(e){
            const db = e.target.result;

            // const objStore = db.createObjectStore('citas', {keyPath: id, autoIncrement: true});

            // objStore.createIndex('mascota', 'mascota', {unique: false} );
            // objStore.createIndex('propietario', 'propietario', {unique: false} );
            // objStore.createIndex('telefono', 'telefono', {unique: false} );
            // objStore.createIndex('fecha', 'fecha', {unique: false} );
            // objStore.createIndex('hora', 'hora', {unique: false} );
            // objStore.createIndex('sintomas', 'sintomas', {unique: false} );
            // objStore.createIndex('id', 'id', {unique: true} );

            console.log('db created');
        }
    } 
}