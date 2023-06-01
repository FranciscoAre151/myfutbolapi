module.exports = {
    async up(db) {
       await db.createCollection('equipo');
       await db.collection('equipo').insertOne({Nombre: 'Liverfull'})
   },
   
    async down(db){
        await db.collection('equipo').drop();
    }
   };
