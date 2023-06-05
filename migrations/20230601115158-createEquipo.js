module.exports = {
    async up(db) {
       
       await db.collection('equipo').insertOne({Nombre: 'Liverfull'})
   },
   
    async down(db){
    }
   };
