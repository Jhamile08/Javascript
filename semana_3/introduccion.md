# Semana 3 – Servidores, APIs y Consumo de Datos en JavaScript

## ¿Qué es un servidor?

Un servidor es una computadora (o software) que almacena y entrega información a otros dispositivos llamados clientes. Cuando visitas una web, tu navegador (cliente) hace una solicitud y el servidor responde con la información que pediste.

### Tipos de servidores

- **Web**: entrega páginas web.
- **De archivos**: almacena documentos.
- **De base de datos**: gestiona datos.
- **De correo**: envía y recibe emails.
- **De aplicaciones**: ejecuta la lógica de una app.

---

## Protocolos: ¿Cómo se comunican cliente y servidor?

Un protocolo es un conjunto de reglas para que dos dispositivos puedan entenderse.

- **HTTP**: protocolo para transmitir datos.
- **HTTPS**: versión segura, cifra la información.
- **FTP**: para transferir archivos.
- **SMTP/IMAP**: para correos.

---

## ¿Qué es JSON?

JSON (JavaScript Object Notation) es un formato simple para enviar y recibir datos. Es muy usado porque es fácil de leer por humanos y entender por computadoras.

---

## Métodos HTTP y operaciones CRUD

Los métodos HTTP permiten hacer acciones desde el cliente al servidor:

| Acción | Método | Ejemplo                 |
|--------|--------|--------------------------|
| Crear  | POST   | Agregar un usuario       |
| Leer   | GET    | Ver lista de productos   |
| Actualizar | PUT / PATCH | Modificar un perfil |
| Eliminar | DELETE | Borrar una publicación |

- **PUT** reemplaza todo.
- **PATCH** modifica solo una parte.

---

## Status Codes: ¿Cómo responde el servidor?

Los códigos de estado indican si la solicitud funcionó:

- `200 OK`: todo bien.
- `201 Created`: recurso creado.
- `400 Bad Request`: error del cliente.
- `404 Not Found`: recurso no existe.
- `500 Internal Server Error`: error del servidor.

---

## ¿Qué es una API?

Una API (Interfaz de Programación de Aplicaciones) permite que diferentes programas se comuniquen. Por ejemplo, una app de clima usa una API para pedir el pronóstico a un servidor y mostrarlo al usuario.

### Tipos de API

- **REST**: el más común. Usa HTTP y JSON.
- **SOAP**: más formal, usa XML.
- **GraphQL**: consultas flexibles, pide solo lo necesario.
- **Públicas**: abiertas (ej. Google Maps).
- **Privadas**: internas, solo para una empresa.

---

## JSON Server + Node.js

- **Node.js**: permite ejecutar JavaScript en el servidor.
- **npm**: gestor para instalar herramientas.
- **JSON Server**: crea una API simulada con un archivo `db.json`.

Pasos:
1. Instalar Node.js.
2. Ejecutar `npm install -g json-server`.
3. Crear `db.json` con los datos.
4. Correr `json-server db.json`.

---

## AJAX: actualizar sin recargar

AJAX permite pedir datos al servidor sin recargar toda la página. Usa `XMLHttpRequest` para hacer solicitudes GET, POST, etc. en segundo plano.

Ventajas:
- Mejor experiencia para el usuario.
- Menos carga para el servidor.

---

## CORS: seguridad en las solicitudes

CORS protege al servidor permitiendo o bloqueando solicitudes desde otros sitios. Si una app intenta pedir datos desde otro dominio sin permiso, el navegador la bloquea.

---

## Fetch API: la forma moderna

`fetch()` es una forma más simple y moderna de hacer solicitudes. Devuelve promesas y permite usar `then()` y `catch()` para manejar respuestas y errores.

Ejemplo básico:
```js
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

# También permite personalizar:

    Método: GET, POST, etc.

    Encabezados.

    Cuerpo de la solicitud (JSON).

    Opciones como mode, credentials, cache.

## Manejo de errores

    try...catch: atrapa errores en bloques de código.

    throw: lanza errores personalizados.

    ?. (encadenamiento opcional): evita errores si una propiedad no existe.

    debugger: pausa la ejecución del código para inspeccionar.

## Cómo estructurar una función con Fetch API

La función `fetch()` permite realizar solicitudes HTTP (GET, POST, PUT, DELETE, etc.) desde JavaScript de manera asíncrona. Su estructura básica es muy flexible y depende del tipo de operación que quieras realizar.

### Ejemplo: función para hacer una solicitud GET

```js
function obtenerDatos(url) {
  fetch(url)
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status}`);
      }
      return respuesta.json();
    })
    .then(data => {
      console.log("Datos recibidos:", data);
    })
    .catch(error => {
      console.error("Error al obtener datos:", error.message);
    });
}

// Uso:
obtenerDatos('http://localhost:3000/productos');
```
## ¿Qué hace esta función?

    fetch(url): hace una solicitud GET por defecto.

    respuesta.ok: verifica si el servidor respondió correctamente.

    .json(): convierte la respuesta en un objeto JavaScript.

    .catch(): captura errores como falta de conexión o malformato.

## ¿Cómo convertir esta función en una solicitud POST?

Para hacer un POST, se debe pasar un segundo parámetro a fetch() con las opciones necesarias.
```js
function enviarDatos(url, datos) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      console.log("Respuesta del servidor:", data);
    })
    .catch(err => {
      console.error("Error al enviar datos:", err.message);
    });
}

// Uso:
enviarDatos('http://localhost:3000/productos', {
  nombre: "Nuevo Producto",
  precio: 99.99,
  stock: 5,
  categoria: "Accesorios"
});
```
### Diferencias clave entre GET y POST en Fetch

A la hora de usar `fetch()`, es importante entender en qué se diferencia una solicitud **GET** de una **POST**. Aquí te explicamos los puntos más importantes:

| Parte        | GET                                                        | POST                                                             |
|--------------|-------------------------------------------------------------|------------------------------------------------------------------|
| `method`     | No es necesario especificarlo porque GET es el valor 
                 por defecto.                                               | Se debe escribir `"POST"` explícitamente para indicar que se envían datos. |
| `headers`    | No siempre se usan. Solo se agregan si el servidor requiere información adicional. | Es necesario incluir `"Content-Type": "application/json"` para indicar que se están enviando datos en formato JSON. |
| `body`       | No se utiliza. GET solo solicita información.              | Se utiliza para enviar los datos al servidor (por ejemplo, un nuevo producto). Deben ser convertidos a JSON con `JSON.stringify()`. |
| Objetivo     | Obtener datos del servidor, como una lista o un producto. | Enviar datos al servidor para crear un nuevo recurso.           |

### Ejemplo rápido:

```js
// GET (consultar datos)
fetch('http://localhost:3000/productos');

// POST (enviar datos)
fetch('http://localhost:3000/productos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ nombre: 'Nuevo producto', precio: 50 })
});
```
## Recuerda:
    Usar fetch(url) para solicitudes simples (GET).

    Usar fetch(url, options) para personalizar la solicitud (POST, PUT, etc.).

    Siempre maneja errores con .catch() y verifica response.ok.

Esto te permitirá trabajar de manera sólida con APIs en tus proyecto

## Resumen

Con esta lección aprendiste a:

    Entender cómo funciona un servidor y su relación con el cliente.

    Usar JSON para intercambiar datos.

    Aplicar métodos HTTP para CRUD.

    Interpretar códigos de estado.

    Trabajar con APIs (REST, SOAP, GraphQL).

    Simular una API con JSON Server.

    Usar AJAX y Fetch para consumir datos sin recargar la página.

    Manejar y depurar errores de forma eficiente.


