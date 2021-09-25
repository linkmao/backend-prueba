# Backend-prueba
***
## Descripcion general
***
Esta es la codificacion de un pequeño backend con el único objetivo de poner en practica lo aprendido en el 
curso de react. Basado del proyecto Serveless

## Descripcion puntual
Este backend tiene toda la lógica necesaria para el proceso de regristro de datos de usuario con la encriptacion de la contraseña, y el logueo del usuario con la generacion del token que permite la autarizacion para el uso de las rutas

La ruta rigurosamnete codificada es routes/auth pues es el que permite el registro con la encriptacion y el  login con la entrega del token.

Las rutas codificadas en routes/users son a modo de prueba pues se puede acceder a ellas sin la validacion de un token, solo la ruta /me dentro de users tiene la implementacion adecuada pues permite ver los datos
de usuario den token guardado

## Implementaciones y mejoras futuras
- Hacer una implementacion de los roles, por ejemplo el de admin, previamente logueado peritiendo así una gestión de la información desde el frontend



## Mis detalles técnicos
A continuación detallo el paso a paso necesario para crear un proyecto como este

0. Preliminares
    Se debe tener cuenta en vercel y mongodb

1. Se incia el proyecto
```
$ npm i -g vercel  (esta es una instalacion global)
$ vercel init   (parado en el directorio de proyectos , elegir custom build, luego cambiar nombre de directorio)
$ vercel  (es intuitivo, solo en override settings respondemos N)
```

2. instalacion de dependencias necesarias
```
$ npm i -S express
$ npm i -S mongoose
$ npm i -S body-parser
$ npm i -S cors
$ npm i -S crypto
$ npm i -S jsonwebtoken
```

2. Cluster de base de datos
a) Se opta por usar [mongoDB] (https://www.mongodb.com), se debe crear un cluster (en mi caso ya existe y solo parece ser que puede haber uno solo en la version gratuita).
b) Se debe crear un usuario que acceda a la bd (en mi caso ya existe, y puede ser ese mismo). Del usuario 
debe tenerse la contraseña para acceder a la bd. Si se va a crear un usuario nuevo la  ruta en mongo es
SECURITY-->Database Access. ADD NEW DATABASE USER, y se elige la opcion Password, alli escribe el nombre
de usuario y la contraseña asignada, y en la parte inferior se le activan los permisos del usuario.
c) Conectar la base de datos--> Connect your aplicacion. Se copia el codigo dispuesto para la conexion, en 
mi caso es 
```
mongodb+srv://maolink:<password>@pedidosdb.h360t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
En esta linea de codigo se debe poner el pass del usuario y myFirstDatabase, por la base de datos a usar, 
si la idea es usar una nueva se coloca alli el nombre y mongo la crea cuando la app accesa la primerra vez
Esta url es la que se llava a la variable de entorno que se crea en vercel

3. Inicio la codificacion
* Se crea la carpeta api, donde estará todo el backend, y con el toda la codificacion necesaria, para este tipo de proyectos he encontrado que el orden de desarrollo es
    a) Codificacion de los modelos   api/models/modelo.js
    b) Codificacion de los controladores de las rutas   api/routes/rutas.js
    c) Codificacion del index.js    api/index     (se establecen las rutas)
        En la codificacion del index es donde se hace la conexión de al app con la bd en mongo, con el código
        mongoose.connect(process.env.VARIABLE_ENTORNO,{useNewUrl:true, useUnifiedTopology:true});
        la VARIABLE_ENTORNO se crea en vercel en El espacio proyecto-->Settings-->Environment Variables
        alli se copia 
```
mongodb+srv://maolink:<password>@pedidosdb.h360t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
por supuesto ponendo el pass y el nombre de la bd a usar o crear

4. subir backend a vercel
$ vercel

o
Ejecutar el local (siempre es mas recomendable y corregir y depurar en local par luego subir a vercel): Para ello previamente se requiere que la variable de entorno esté en nuestra carpeta de
trabajo, si ya la tenemos en vercel la podemos decargar con
$ vercel env pull

Luego para correr en local se usa
$ vercel dev

Nota, para este ultimo comando el shell que me sirve es el de git

5. Uso de Postman para las peticiones get, post, put, delete
con el get no hay nada de especial
con el post y put se debe priemro garantizar que en Headers , el params Contet-type= application/json
y luego para subir los datos se hace en body, usando la opcion raw. Un ejemplo del json usado es

{
    "firstname": "Mauricio", 
    "lastname": "Rua Florez",
    "age": 42,
    "phone": "3113523313",
    "grade": "NA",
    "matricula": true,
    "desc": "Programador principal"
}

6. Desarrollo del backend para la autenticacion
El desarrollo para la autenticación se hace usando el modelo Users, y el router auth.js, sin embargo en este proyecto se dejará el router users.js que permite el acceso a toda la información de User, sin embargo el uso de post y put deberia ser cauteloso pues no tiene los requisitos necesarios para la encriptación de la contraseña, proceso que si lo tiene el router auth

***
## Maolink Softare
Septiembre 2021 