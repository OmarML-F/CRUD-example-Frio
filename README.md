# CRUD-example-Frio
En este caso realize una implementacion de: javascript, Angular Backend: Node js, Express Js BD: postgresql JSON -> frontend, backend Prime NG Git

BackEnd: Hice las respectivas conexiones a la base de datos que en este caso es PostgreSQL y despues empece a hacer las rutas y controladores en donde con la ayuda de Postman fui creando las peticiones JSON al servidor para despues mostrarlas en el FrontEnd. (para iniciar el servidor solo se ejecuta el comando {{npm run dev}} en la terminal)

FrontEnd: Empece ejecutando Angular y modificando la carpeta app.component para poder traer solo los selectores que iba a utilizar, en este caso fueron el Header y Mi tabla empleados. Para este momento ya habia implementado las librerias de primeNG y habia instalado los recursos.

De ahi se implementaron dos componentes los cuales son Header y employee Comenzando con employee que es el componente en donde mandaba a traer los datos y hacia que estos interacturan con el diseño de mi pagina, mandando a llamar a un servicio que posteriormente inicie llamado service/employee-service en donde mandaba a llamar todos mis datos JSON de mi backEnd y para que hiciera peticiones directamente al servidor.

Para que mi servidor y mi FrontEnd pudieran interactuar y poder utilizar los datos de una manera mas comoda, tuve que optar por crear una carpeta "Models" con un archivo ts en el cual crearia mi modelo para poder traer los datos de esa estructura.

Utilizando la ayuda de PrimeNG me fue sencillo implementar una tabla, la cual respondiera a un splitter que podia dividir la parte de mi tabla y de la insercion de un nuevo usuario Posteriormente implementando un scrollPanel para que todos nuestros usuarios que sean llamados pudieran acomodarse de una mejor manera, tambien fui capaz de usar el ¨KeyFilter" el cual puede hacer validaciones basicas para que el usuario solo pueda ingresar cierto tipo de datos.

Y por ultimo agrege el header en donde agrege un menu bar para su posterior "upgrade" si es que este qusiera regresarme al inicio/about o si quisiera redirigirme al servidor y traerme los usuarios en formato JSON. Tambien intente colocar un label en donde fuera posible buscar a los usuarios por nombre y traerlos.
