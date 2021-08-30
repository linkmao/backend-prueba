# Backend-prueba
***
## Descripcion general
***
Esta es la codificacion de un pequeño backend con el único objetivo de poner en practica lo aprendido en el 
curso de react




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

3. Inicio la codificacion
* Se crea la carpeta api, donde estará todo el backend

4. subir backend a vercel
$ vercel


