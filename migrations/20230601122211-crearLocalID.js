module.exports = {
    async up(db) {
        const bocaId = await db.collection('equipo').findOne({nombre: "Boca Jrs"})
        const JuventusID = await db.collection('equipo').findOne({nombre: "Juventus"})
        const RomaID = await db.collection('equipo').findOne({nombre: "Roma"})
        const ArsenalID = await db.collection('equipo').findOne({nombre: "Arsenal FC"})
        const MadridID = await db.collection('equipo').findOne({nombre: "Real Madrid"})
        const SouthID = await db.collection('equipo').findOne({nombre: "Southampton"})

        const bID = bocaId._id
        const jID = JuventusID._id
        const rID = RomaID._id
        const sID = SouthID._id
        const mID = MadridID._id
        const aID = ArsenalID._id

        db.collection('partidos').findOneAndUpdate({local: "Boca Jrs"},{$set: {localId: bID}})
        db.collection('partidos').findOneAndUpdate({local: "Juventus"},{$set: {localId: jID}})       
        db.collection('partidos').findOneAndUpdate({local: "Shouthampton"},{$set: {localId: sID}})
        db.collection('partidos').findOneAndUpdate({visitante: "Roma"},{$set: {visId: rID}})
        db.collection('partidos').findOneAndUpdate({visitante: "Real Madrid"},{$set: {visId: mID}})
        db.collection('partidos').findOneAndUpdate({visitante: "Arsenal Fc"},{$set: {visId: aID}})
   },
   
    async down(db){
        db.collection('partidos').findOneAndUpdate({local: "Boca Jrs"},{$unset: {localId: ' '}})
        db.collection('partidos').findOneAndUpdate({local: "Juventus"},{$unset: {localId: ' '}})       
        db.collection('partidos').findOneAndUpdate({local: "Shouthampton"},{$unset: {localId: ' '}})
        db.collection('partidos').findOneAndUpdate({visitante: "Roma"},{$unset: {visId: ' '}})
        db.collection('partidos').findOneAndUpdate({visitante: "Real Madrid"},{$unset: {visId: ' '}})
        db.collection('partidos').findOneAndUpdate({visitante: "Arsenal Fc"},{$unset: {visId: ' '}})
    }
   };
