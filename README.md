# 📦 Ejercicios JavaScript — Métodos de Array

Repositorio con ejercicios prácticos de JavaScript enfocados en el uso de **métodos de array**. Cada ejercicio plantea un problema concreto que debe resolverse manipulando arreglos con las herramientas que ofrece el lenguaje.

---

## 🧰 Tecnologías

- JavaScript (ES6+)
- Node.js (para ejecutar los scripts localmente)

---

## 🚀 Cómo ejecutar

```bash
# Clonar el repositorio
git clone <url-del-repo>

# Entrar al directorio
cd <nombre-del-repo>

# Ejecutar los ejercicios
node Ejercicios.js
```

---

## 📝 Ejercicios

### Ejercicio 1
Haga una función que elimine el primer elemento del arreglo.

---

### Ejercicio 2
Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3.  
En caso de recibir un arreglo de menos de 5 elementos, mostrar en pantalla un mensaje de error.

---

### Ejercicio 3
Haga una función que reciba un arreglo y un número. Tenemos que sumarle dicho número a cada elemento del arreglo y devolver el arreglo modificado.

---

### Ejercicio 4
Haga una función que reciba un número y devuelva un arreglo que tenga el tamaño del número recibido.  
El contenido del arreglo deben ser números desde el 1 hasta el número recibido. *(1 a n)*

---

### Ejercicio 5
Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que encuentre qué número es el distinto.

```js
findUniq([1,1,1,1,1,2,1,1,1]) // return (2)
```

---

### Ejercicio 6
Dado un arreglo de números enteros, encuentre y devuelva el valor de la menor suma posible entre ellos.

```js
minSum([7,4,2,3]) // return (5)
```

---

### Ejercicio 7
Dado un arreglo de números enteros, encuentre el mayor producto posible entre dos números adyacentes y devuelva el valor de dicho producto.

```js
maxAdjacentElementsProduct([9,5,10,2,24,-1]) // return (50)
// 5 * 10 = 50
```

---

### Ejercicio 8
Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cuál se está por comer.

Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero.

> **Consideración:** El lobo solo puede comer a la oveja que tiene a su derecha.

```js
warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])
// "Hey! Oveja numero 1! El lobo esta cerca!"

warnTheSheep(["sheep", "sheep", "sheep", "wolf"])
// "No sigas comiendo ovejas!"
```

---

## 👤 Autor

**Alejo Martinez**  
Ejercicios realizados como práctica de métodos de array en JavaScript.
