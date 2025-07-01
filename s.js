fetch("http://localhost:3000/productos/1")
  .then(response => response.json())
  .then(data => console.log("GET:", data))
  .catch(error => console.error("Error en GET:", error));