const mongoose = require("mongoose");
const User = require('../models/user');
const supertest = require('supertest');
const {app , server} = require('../index');

const api = supertest(app)

const inicialUsers = [
    {
        "nombre": "user1",
        "apellido": "ap1",
        "email": "user1@prueba.com",
        "role": "admin",
        "password": "1231231"
    },
    {
        "nombre": "user2",
        "apellido": "ap2",
        "email": "user2@prueba.com",
        "role": "nn",
        "password": "123123"
    }
]


beforeAll(async () => {
    await User.deleteMany({}) 
    const user1 = new User(inicialUsers[0])
    await user1.save()
    const user2 = new User(inicialUsers[1])
    await user2.save()
})

test('usuarios son json', async () => {
    await api
        .get('/api/user/all')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('hay 2 ususarios', async () => {
    const res = await api.get('/api/user/all')
    expect(res.body).toHaveLength(inicialUsers.length)

})

test('Registro correcto de usuario', async () => {
    const nuevoUsuario = {
        "nombre": "user22",
        "apellido": "ap22",
        "email": "user221@prueba.com",
        "role": "admin",
        "password": "123123"
    }

    const res = await api.post('/api/user/register').send(nuevoUsuario).expect(200)
    expect(res.body.message).toBe('registrado con exito')
})



test('login exitoso', async () => {
    const usuario = {
        "email": "user221@prueba.com",
        "password": "123123"
    }
    const res =await api.post('/api/user/login').send(usuario).expect(200)
    expect(res.body.data).toBe('exito bienvenido')
})



afterAll(()=> {
    mongoose.connection.close()
    server.close()
})