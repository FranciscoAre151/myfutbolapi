const mongoose = require("mongoose");
const supertest = require('supertest');
const {app , server} = require('../index');
const api = supertest(app)



test('Actualizar partido correctamente', async () => {
    const act = {
        "resultado": "1-0"
    }

    const usuario = {
         "email": "user221@prueba.com",
         "password": "123123"
     }
    const useradmin =await api.post('/api/user/login').send(usuario).expect(200)
    const token = useradmin.body.token
    
    const res = await api.put('/api/update/645cd8f0c97a1a8a54d429c5').set('auth-token',token).send(act)
    expect(res.statusCode).toBe(200)
})


test('No Actualizar partido terminado', async () => {
    
    const act = {
        "resultado": "2-0"
    }

    const usuario = {
         "email": "user221@prueba.com",
         "password": "123123"
     }
    const useradmin =await api.post('/api/user/login').send(usuario).expect(200)
    const token = useradmin.body.token
    
    const res = await api.put('/api/update/645cd8f0c97a1a8a54d429c7').set('auth-token',token).send(act)
    expect(res.body.message).toBe('no se pudo actualizar')
})


test('Token no valido', async () => {
    
    const act = {
        "resultado": "2-0"
    }

    const res = await api.put('/api/update/645a7570d2b9ab9aef1877f5').set('auth-token','tokennn').send(act)
    expect(res.statusCode).toBe(500)
})


afterAll(()=> {
    mongoose.connection.close()
    server.close()
})
