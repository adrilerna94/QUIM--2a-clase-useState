# 🧪 Ejercicios con useState en React + Next.js

Estos ejercicios te ayudarán a entender y practicar el hook `useState` en aplicaciones usando React y Next.js.

---

## 📘 Ejercicio 1: Contador Simple

### Descripción
Crea un componente que muestre un número en pantalla. Debe tener botones para **incrementar** y **decrementar** el valor del contador.

### Objetivo
- Usar `useState` para manejar un número.
- Renderizar dinámicamente el estado.

### Pasos
1. Crear un nuevo componente `ContadorSimple.js`.
2. Inicializar el estado con el valor `0`.
3. Crear dos botones: uno para sumar, otro para restar.
4. Mostrar el valor del contador en pantalla.

### Bonus
- Agrega un botón para **resetear** el contador a cero.

---

## 📘 Ejercicio 2: Input Controlado

### Descripción
Crea un componente con un campo de texto que muestre en tiempo real lo que el usuario escribe.

### Objetivo
- Usar `useState` para capturar y mostrar el valor del input.
- Practicar el manejo de eventos en formularios.

### Pasos
1. Crear un componente `InputNombre.js`.
2. Agregar un `<input>` de tipo texto.
3. Actualizar el estado en cada cambio del input (`onChange`).
4. Mostrar un saludo con el nombre ingresado.

### Bonus
- Si el input está vacío, mostrar un mensaje como “Por favor, escribe tu nombre”.

---

## 📘 Ejercicio 3: Pasando Props y Estado

### Descripción
Crea dos componentes: un **componente padre** que mantiene un estado y un **componente hijo** que recibe ese estado como prop y lo muestra.

### Objetivo
- Usar `useState` en el componente padre.
- Pasar datos como props al hijo.
- Entender la comunicación unidireccional en React.

### Pasos
1. Crear un componente `Padre.js` que tenga un estado `mensaje`.
2. Crear un componente `Hijo.js` que reciba `mensaje` como prop.
3. Mostrar el mensaje dentro del componente hijo.
4. En el componente padre, agregar un `<input>` para escribir el mensaje y actualizar el estado.

### Bonus
- Permitir que el hijo tenga un botón para limpiar el mensaje (llamando una función pasada por props).

---

## ✅ Recomendación

Todos estos ejercicios deben incluirse como páginas o componentes en una app de Next.js, dentro de la carpeta `app` o `pages`. Puedes ir agregando rutas como:

