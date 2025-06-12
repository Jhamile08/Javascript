## Introducción a JavaScript para Estudiantes que ya Conocen Python

¡Bienvenidos al mundo de JavaScript!
Si ya sabes programar en Python, aprender JavaScript será mucho más fácil. Ambos lenguajes comparten muchos conceptos: variables, condicionales, bucles, funciones…
La principal diferencia está en la sintaxis y algunas reglas propias de cada lenguaje.

Este documento te mostrará cómo se escribían las cosas en Python y cómo se escriben en JavaScript.

##  1. Declarar variables
Python
```python
nombre = "Juan"
edad = 20
es_mayor = True
```
JavaScript

```js
let nombre = "Juan";
let edad = 20;
let esMayor = true;

```
    En JavaScript:

        Usamos let o const para declarar variables.

        Los booleanos van en minúscula: true, false.

        Terminamos cada línea con punto y coma (;) (aunque no es obligatorio, es buena práctica).

## 2. Condicionales (if, else)
Python
```python
if edad >= 18:
    print("Es mayor de edad")
else:
    print("Es menor de edad")
```
JavaScript
```js
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}
```
    📝 En JavaScript:

        Se usan llaves {} para agrupar bloques de código.

        Se escribe console.log() en lugar de print().

## 3. Funciones
Python
```python
def saludar(nombre):
    return f"Hola, {nombre}"
```
JavaScript
```js
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
```
    📝 En JavaScript:

        Usamos function para definir una función.

        Las templates strings se escriben con **backticks ()** y ${}` para insertar variables.

## 4. Bucles
for en Python
```python
for i in range(5):
    print(i)
```
for en JavaScript
```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
```python
while en Python

i = 0
while i < 5:
    print(i)
    i += 1
```
while en JavaScript
```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
} 
```
## 5. Listas y Arreglos
Python
```python
frutas = ["manzana", "banana", "pera"]
print(frutas[0])
```
JavaScript
```js
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[0]);
```

## 6. Objetos (diccionarios en Python)
Python
```python
persona = {
    "nombre": "Ana",
    "edad": 30
}
print(persona["nombre"])
```
JavaScript
```js
let persona = {
    nombre: "Ana",
    edad: 30
};
console.log(persona["nombre"]);
```

## 7. Funciones flecha (Arrow Functions)

Una versión moderna de las funciones en JavaScript:
```js
const saludar = (nombre) => {
    return `Hola, ${nombre}`;
};
```
## 8. Diferencias clave a tener en cuenta

| Concepto                  | Python             | JavaScript            |
|---------------------------|--------------------|------------------------|
| Comentarios               | `#`                | `//`                   |
| Bloques de código         | Sangría            | Llaves `{}`            |
| Booleanos                 | `True`, `False`    | `true`, `false`        |
| `None` o vacío            | `None`             | `null` o `undefined`   |
| Concatenación de strings  | `+` o `f""`        | `+` o `` `${}` ``      |
