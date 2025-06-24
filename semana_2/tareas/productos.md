#  Desafío: Recorrer Listas y Objetos

En este ejercicio trabajarás con **arrays de objetos** y practicarás cómo recorrerlos correctamente para mostrar información en pantalla.

---

## 🛠 Objetivo

Mostrar una lista de productos en pantalla al hacer clic en un botón. Cada producto tiene nombre, precio y categoría.

---

##  Instrucciones

### 1. Crea un array de productos
En tu archivo `app.js`, crea una lista (array) con varios productos. Cada producto debe ser un objeto con las siguientes propiedades:

- `nombre`
- `precio`
- `categoria`

Crea al menos 5 productos diferentes.

---

### 2. Captura el botón
Desde el DOM, obtén una referencia al botón que dice “Mostrar productos”. Lo vas a usar para mostrar la lista solo cuando se haga clic.

---

### 3. Agrega un evento al botón
Cuando el botón sea presionado, se debe ejecutar una función que recorra el array de productos y los muestre en pantalla.

---

### 4. Recorre el array
Usa un bucle (como `forEach`) para recorrer cada producto del array. Por cada producto:

- Crea un `div` con la clase `producto`.
- Muestra el nombre, el precio y la categoría en su interior.
- Agrega ese `div` al contenedor que ya existe en el HTML.

---

### 5. Bonus (si te animas)
- Agrega un filtro para mostrar solo productos de una categoría específica.
- Muestra el total de precios sumados al final de la lista.
- Usar `localStorage.setItem` y `localStorage.getItem` para guardar y recuperar la lista de productos.

---

###  Lo que vas a practicar

- Uso de arrays y objetos.
- Métodos como `.forEach()`.
- Manipulación del DOM.
- Escritura dinámica en HTML.

---

