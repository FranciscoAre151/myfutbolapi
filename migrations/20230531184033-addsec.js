
module.exports = {
 async up(db) {
    await db.collection('cambios').updateMany({}, {$set: {segundos: 0}});
},

 async down(db){
    await db.collection('cambios').updateMany({}, {$unset: {segundos: ''}});
},
};