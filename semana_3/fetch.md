Suponiendo una API de ejemplo:

https://jsonplaceholder.typicode.com/posts

 1. GET (Obtener datos)
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log("GET:", data))
  .catch(error => console.error("Error en GET:", error));

// con asyc/await

async function crearPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Nuevo Post",
        body: "Este es el contenido del post",
        userId: 1
      })
    });

    const data = await response.json();
    console.log("POST:", data);
  } catch (error) {
    console.error("Error en POST:", error);
  }
}

crearPost();

```
 2. POST (Crear recurso nuevo)
```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Nuevo Post",
    body: "Este es el contenido del post",
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log("POST:", data))
.catch(error => console.error("Error en POST:", error));

// con asyc/await

async function crearPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Nuevo Post",
        body: "Este es el contenido del post",
        userId: 1
      })
    });

    const data = await response.json();
    console.log("POST:", data);
  } catch (error) {
    console.error("Error en POST:", error);
  }
}

crearPost();

```

 3. PUT (Actualizar recurso completo)
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Post actualizado",
    body: "Contenido actualizado",
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log("PUT:", data))
.catch(error => console.error("Error en PUT:", error));

// con asyc/await

async function actualizarPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 1,
        title: "Post actualizado",
        body: "Contenido actualizado",
        userId: 1
      })
    });

    const data = await response.json();
    console.log("PUT:", data);
  } catch (error) {
    console.error("Error en PUT:", error);
  }
}

actualizarPost();

```
 5. DELETE (Eliminar recurso)
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
.then(response => {
  if (response.ok) {
    console.log("DELETE: recurso eliminado correctamente");
  } else {
    console.error("Error al eliminar");
  }
})
.catch(error => console.error("Error en DELETE:", error));

// con asyc/await

async function eliminarPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE"
    });

    if (response.ok) {
      console.log("DELETE: recurso eliminado correctamente");
    } else {
      console.error("Error al eliminar");
    }
  } catch (error) {
    console.error("Error en DELETE:", error);
  }
}

eliminarPost();

```



 Versión 1: fetch con .then().then().catch()
```JS
<h2>Versión con then/catch</h2>
<button onclick="cargarConThen()">Cargar Posts</button>
<ul id="lista-then"></ul>

<script>
  function cargarConThen() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los posts');
        }
        return response.json();
      })
      .then(data => {
        const lista = document.getElementById('lista-then');
        lista.innerHTML = '';
        data.slice(0, 5).forEach(post => {
          const li = document.createElement('li');
          li.textContent = post.title;
          lista.appendChild(li);
        });
      })
      .catch(error => {
        console.error(' Error con then:', error);
      });
  }
</script>
```

Versión 2: fetch con async/await y try...catch
```JS
<h2>Versión con async/await</h2>
<button onclick="cargarConAwait()">Cargar Posts</button>
<ul id="lista-await"></ul>

<script>
  async function cargarConAwait() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Error al obtener los posts');
      }

      const data = await response.json();
      const lista = document.getElementById('lista-await');
      lista.innerHTML = '';
      data.slice(0, 5).forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        lista.appendChild(li);
      });

    } catch (error) {
      console.error('Error con await:', error);
    }
  }
</script>

```



Por que usar async y no then then?
```JS
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    console.log("GET /posts:", posts);

    // Llamamos ahora la segunda API
    return fetch("https://jsonplaceholder.typicode.com/users");
  })
  .then(response => response.json())
  .then(users => {
    console.log("GET /users:", users);
  })
  .catch(error => console.error("Error en las peticiones:", error));
```
```JS

async function obtenerDatos() {
  try {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postsResponse.json();
    console.log("GET /posts:", posts);

    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await usersResponse.json();
    console.log("GET /users:", users);
    
  } catch (error) {
    console.error("Error en las peticiones:", error);
  }
}

obtenerDatos();
```