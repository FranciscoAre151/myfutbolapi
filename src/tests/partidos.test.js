import mongoose from "mongoose";
import partido from '../models/partido';
import supertest from 'supertest';
import {app , server} from '../index';

const api = supertest(app)

const inicialPart = [ 
    {
        "local": "Boca",
        "visitante": "River",
        "resultado": "0-0",
        "estado": "Jugando"
    },
    {
        "local": "Racing",
        "visitante": "Independiente",
        "resultado": "0-0",
        "estado": "Terminado"
    }
]

beforeEach(async ()=> {
    await partido.deleteMany({})
    const part1 = new partido(inicialPart[0])
    await part1.save()
    const part2 = new partido(inicialPart[1])
    await part2.save()
})

test('partidos son json', async () => {
    await api 
        .get('/api/partidos/')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('hay 2 partidos', async () => {
    const res = await api.get('/api/partidos/')
    expect(res.body).toHaveLength(inicialPart.length)
        
})

test('un partido jugando', async () => {
    const res = await api.get('/api/partidos/Jugando')
    expect(res.body[0].estado).toBe('Jugando')
})

test('ningun partido proximamente', async () => {
    const res = await api.get('/api/partidos/Proximamente')
    expect(res.body).toHaveLength(0)
})

test('un partido terminado', async () => {
    const res = await api.get('/api/partidos/Terminado')
    expect(res.body).toHaveLength(1)
})

test('boca local', async () => {
    const res = await api.get('/api/partidos/local/Boca')
    expect(res.body).toHaveLength(1)
})

test('river no es local', async () => {
    const res = await api.get('/api/partidos/local/River')
    expect(res.body).toHaveLength(0)
})

test('Independiente visitante', async () => {
    const res = await api.get('/api/partidos/visitante/Independiente')
    expect(res.body).toHaveLength(1)
})

test('Velez no jugo ningun partido', async () => {
    const res = await api.get('/api/partidos/equipo/Velez')
    expect(res.body).toHaveLength(0)
})


test('Inserta partido correctamente', async () => {
    const nuevoPartido = {
        "local": "Olimpo",
        "visitante": "Villa Mitre",
        "estado": "Proximamente"
    }

    await api 
        .post('/api/partidos/insertar')
        .send(nuevoPartido)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const res = await api.get('/api/partidos/equipo/Olimpo')
    expect(res.body).toHaveLength(1)
})

test('No Insertar partido estado invalido', async () => {
    const nuevoPartido = {
        "local": "ManCity",
        "visitante": "RealMadrid",
        "estado": "mañana"
    }

    await api 
        .post('/api/partidos/insertar')
        .send(nuevoPartido)
        .expect(401)
},10000)


afterAll(()=> {
    mongoose.connection.close()
    server.close()
})