# Estructuras de Datos en JavaScript

Esta lección aborda estructuras esenciales en JavaScript para organizar y manipular datos: objetos, sets, maps, métodos, `typeof` y bucles de recorrido.

## Objetos (Hashes)

Un objeto es una colección de pares clave-valor. Se utiliza para representar entidades estructuradas (como un usuario con nombre, edad, etc.).

**Métodos útiles:**
- `Object.keys(obj)` → array de claves.
- `Object.values(obj)` → array de valores.
- `Object.entries(obj)` → array de pares clave-valor.

## ¿Qué es un método?

Un **método** es una **función asociada a un objeto**. Permite realizar acciones con los datos del objeto. Por ejemplo, un método de un string puede convertirlo en mayúsculas, o un método de un array puede filtrar sus elementos.

También los tipos primitivos como strings o números tienen métodos temporales que JavaScript activa automáticamente, como:

- `toUpperCase()` → convierte texto a mayúsculas.
- `toFixed(2)` → redondea un número a 2 decimales.

## Sets

Un Set es una colección de valores únicos. Ideal cuando se necesita evitar duplicados.

**Principales métodos:**
- `add(valor)` → agrega un valor.
- `has(valor)` → verifica si existe.
- `delete(valor)` → elimina un valor.
- `size` → cantidad de elementos.

## Maps

Un Map también almacena pares clave-valor, pero acepta cualquier tipo de dato como clave (no solo strings).

**Métodos clave:**
- `set(clave, valor)` → agrega o actualiza.
- `get(clave)` → obtiene el valor.
- `has(clave)` → verifica si existe.
- `delete(clave)` → elimina un par.
- `size` → cantidad de pares.

## Identificación de Tipos de Datos

`typeof` permite conocer el tipo de una variable.

| Valor        | Resultado de typeof |
|--------------|---------------------|
| `undefined`  | "undefined"         |
| `null`       | "object" (histórico)|
| `true`/`false`| "boolean"         |
| `"hola"`     | "string"            |
| `123`        | "number"            |
| `function(){}` | "function"        |
| `NaN`        | "number"            |

## Bucles para recorrer estructuras

- `for...in`: recorre las **claves** de un objeto.
- `for...of`: recorre los **valores** de arrays, sets o maps.
- `forEach`: método propio de arrays que ejecuta una función para cada elemento.

## Buenas Prácticas

- Usar `;` al final de las líneas para evitar errores.
- Usar métodos como `toUpperCase()` o `toFixed()` para manipular strings y números.

## Conclusión

Estas estructuras y herramientas son fundamentales para manejar datos complejos en JavaScript. Dominar objetos, sets, maps, métodos, typeof y los distintos bucles de recorrido te permitirá escribir código más limpio, organizado y eficiente.
