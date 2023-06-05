module.exports = {
    async up(db) {
       await db.collection('partidos').updateMany( {}, { $rename: { "localId": "local" } } )
       await db.collection('partidos').updateMany( {}, { $rename: { "visId": "visitante" } } )
    },
    
    async down(db) {
    
    }
    };
    
