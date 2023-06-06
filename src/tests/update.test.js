import mongoose from "mongoose";
import supertest from 'supertest';
import {app , server} from '../index';
const api = supertest(app)



test('Actualizar partido correctamente', async () => {
    const act = {
        "resultado": "1-1"
    }

    const usuario = {
         "email": "user221@prueba.com",
         "password": "123123"
     }
    const useradmin =await api.post('/api/user/login').send(usuario).expect(200)
    const token = useradmin.body.token
    
    const partido = await api.get('/api/partidos/')
    const id = partido.body[0]._id
    const res = await api.put(`/api/partidos/update/${id}`).set('auth-token',token).send(act)
    expect(res.body.resultado).toBe('1-1')
},10000)


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
    const partido = await api.get('/api/partidos/')
    const id = partido.body[1]._id
    const res = await api.put(`/api/partidos/update/${id}`).set('auth-token',token).send(act)
    expect(res.body.message).toBe('no se pudo actualizar')
})


test('Token no valido', async () => {
    
    const act = {
        "resultado": "2-0"
    }
    const partido = await api.get('/api/partidos/')
    const id = partido.body[0]._id
    const res = await api.put(`/api/partidos/update/${id}`).set('auth-token','tokennn').send(act)
    expect(res.statusCode).toBe(500)
})


afterAll(()=> {
    mongoose.connection.close()
    server.close()
})
