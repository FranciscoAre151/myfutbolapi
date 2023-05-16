# myFutbolAPI
API sobre agregar, actualizar y consultar partidos de futbol.

# Requerimientos
Se necesita instalar NodeJs (18.16.0)  y NPM (9.5.1).  
Ademas, se requieren instalar las siguientes dependencias:

* express
* mongoose
* mongodb
* dotenv
* body-parser
* bcrypt
* cookie-session
* jsonwebtoken
* winston
* jest
* supertest
* joi
* cross-env

Se instalan con el siguiente comando en la consola:
```
npm install dependencia
```

# Primer paso
Ejecutar el siguiente comando desde la consola:
```
node index.js
```
Esta API corre localmente en el puerto 9000.

# Uso

* Existen distintas rutas para la creacion , actualizacion y consultas de partidos.
* Existen rutas para el registro y el login de usuarios. 
* Los usuarios cuentan con roles y el rol que tiene privilegios es el rol 'admin' que permite actualizar los partidos.
* Algunas rutas:
  - Ruta para consultar los partidos `/api/partidos/`
  - Ruta para insertar partido `/api/partidos/insertar`
  - Ruta para consultar partidos de un determinado equipo `/api/partidos/equipo/{nombre del equipo}`
  - Ruta para registrar usuario `/api/user/register`
  - Ruta para login del usuario `/api/user/login`
  - Ruta para actualizar partido `/api/update/{id del partido}`

# Test
Existen 3 test para testear el correcto funcionamiento de la API.
Pueden ejecutar los test con el siguiente comando:
```
npm run test
```
Se puede modificar que test utilizar modificando el package.json
