# ViveroWebPage
Pagina web para el servicio comunitario Intervenciones Urbanas de la Universidad Simón Bolívar.

## Requisitos para ejecutar en Windows o Linux
**-** Sistema operativo Windows x64 o alguna distribución de Linux.

**-** Tener instalado Visual Studio Code (https://code.visualstudio.com/download)

**-** Tener instalado Git (https://git-scm.com/downloads)

**-** Tener instalado NodeJS (https://kinsta.com/es/blog/como-instalar-node-js/)

## Clonación del Repositorio en Windows

**1.** Crear una carpeta en Documentos con el nombre que usted quiera.

**2.** Dentro de la carpeta abrir la terminal con click derecho, le saldrá la opción *```Abrir en Terminal```*

**3.** Escribir:

```
git clone https://github.com/usbserviciocomunitario/ViveroWebPage.git
```
   
Y luego dar enter. Debe esperar hasta que termine la clonación del repositorio.
   
**4.** Luego, abrir la carpeta ViveroWebPage que se encuentra en la carpeta que creó anteriormente.

**5.** Dentro de ViveroWebPage dar click derecho y seleccionar *```Abrir con Code```*, se le abrirá Visual Studio Code con las carpetas del backend y frontend.

**6.** Dentro de Visual Studio abrir su terminal con *```ctrl+j```*

## Ejecución en Windows

   ### Para el frontend:

**-** Escribir en la terminal “cd frontend” y dar enter.

**-** Escribir en la terminal ```npm install``` y dar enter. Debe esperar que se instalen todas las dependencias.

**-** Luego, debe instalar la librería scss con el comando: ```npm install -D sass```

**-** Finalmente, para ejecutar el frontend de la aplicación debe correr el comando: ```npm run dev```

**-** Seguido de esto, podrá observar un link al cual podrá dirigirse haciendo *```ctrl+click```* sobre el mismo.

![URL para visualizar el frontend](images/URL_localhost.jpg)


  ### Para el backend:

**-** Abrir una nueva terminal con *```ctrl+shift+5```*. Esto dividirá la terminal en dos.

**-** En esta nueva terminal escribir ```cd backend``` y dar enter.

**_** Crea un archivo ".env" escribiendo en la terminal  ```nano .env ```, a continuacion cree las variables de entorno de la forma Llave=Valor. En la carpeta backend hay un archivo llamado .example.env donde esta como debe lucir el archivo y todas las variables que necesitas.

**_** Entre las variables estan, PORT = 3001(Puerto que desees), DB_URI = mongodb://localhost:27017/nombre_de_tu_base_de_datos(String de conexion de mongo para equipos en local suele ser esta), EXPIRATION_RATE ="1"(Meses que durara la contraseña) , SESSION_LIFE = "10"(tiempo que dura la session), JWT_SECRET = "SEMILLA" (cualquier frase, dicha frase tiene que conincidir en con la del front para identificar que el jwt es valido),
SERVER = 'http://localhost' (ruta dle server)

**_** Una vez puesto todas las varaibles  ```CTRL + X ```, luego ``` Y ``` (para confirmar los cambios), y  ```Enter``` para cerrar.

**-** Escribir en la terminal ```npm install``` y dar enter. Debe esperar que se instalen todas las dependencias.

**_** Escribir en la terminal  ```npm run build ``` y dar enter. Debe esperar a que se compile el codigo unos pocos segundos

**-** Finalmente, para ejecutar el backend de la aplicación debe correr el comando: ```npm run dev```


