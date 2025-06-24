#  Desafío: Sistema de Tareas con JavaScript

Tienes que construir un pequeño sistema de tareas usando **solo JavaScript**, ya que el HTML ya está preparado para ti. Tu objetivo es que, al escribir una tarea y presionar el botón, esta se muestre en pantalla dentro de una lista dinámica.

---

##  Instrucciones paso a paso

### 1. Captura el formulario
Lo primero que necesitas hacer es **obtener una referencia al formulario** usando `document.getElementById` o `document.querySelector`. Así podrás trabajar con él desde tu código JS.

> 💡 Pista: El formulario tiene un `id`. Usa ese `id` para seleccionarlo.

---

### 2. Agrega un evento al formulario
Ahora debes **agregar un `addEventListener` al formulario**, escuchando el evento `submit`. Ese evento debe ejecutar una función que tú definirás.

> 💡 Recuerda usar `event.preventDefault()` dentro de esa función para evitar que la página se recargue al hacer clic en el botón.

---

### 3. Captura la información ingresada
Dentro de la función que ejecuta el evento, obtén lo que la persona escribió en el campo de texto (el input).

> 💡 Pista: Usa `.value` para leer el contenido del input.

---

### 4. Almacena la tarea
Guarda la tarea en un **array de objetos**. Cada objeto puede tener dos propiedades:

- `descripcion`: lo que el usuario escribió.
- `completada`: un valor booleano que empiece en `false`.

> 💡 Define el array al inicio de tu script. Luego usa `.push()` para ir agregando nuevas tareas.

---

### 5. Muestra las tareas en pantalla
Crea una función llamada, por ejemplo, `mostrarTareas()` que:

- Limpie el contenido anterior del contenedor de tareas.
- Recorra el array de tareas con `.forEach()`.
- Cree un elemento `div` por cada tarea, mostrando su descripción.
- Agregue ese `div` al contenedor ya existente en el HTML.

> 💡 Usa `innerHTML` o `appendChild` para insertar contenido dinámico.

---

### 6. Agrega botón para marcar como completada
Dentro de cada tarea mostrada, agrega un botón con texto como **"Marcar como completada"**. Al hacer clic:

- Cambia el valor de `completada` a `true` para esa tarea específica.
- Vuelve a ejecutar `mostrarTareas()` para actualizar la vista.

> 💡 Puedes usar el índice de la tarea en el array como referencia para modificarla.

---

### 7. Refresca la lista cada vez que haya cambios
Cada vez que agregues una tarea o marques una como completada, **llama a `mostrarTareas()`** para que los cambios se vean reflejados de inmediato.

---

##  Bonus
Si terminas los pasos anteriores, puedes:
- Cambiar el color o estilo de las tareas completadas (por ejemplo, tacharlas o ponerles fondo verde).
- Agregar un botón para eliminar tareas individualmente.


---

