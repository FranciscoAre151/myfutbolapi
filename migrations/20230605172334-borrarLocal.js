module.exports = {
async up(db) {
   await db.collection('partidos').updateMany({},{$unset: {local: ''}})
   await db.collection('partidos').updateMany({},{$unset: {visitante: ''}})
},

async down(db) {

}
};
