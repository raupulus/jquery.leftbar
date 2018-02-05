# jquery.leftbar (Versión en pruebas)
Este Plugin JQuery genera en el lateral izquierdo de la pantalla una barra de menú con los nombres y las imágenes que se les pasan.
En estos momentos está recién creado y termino de mejorar su código.

![Ejemplo de configuración básica](./Previsualizaciones/preview.png)

## Objetivos en el desarrollo
- [x] Crear una barra de menú
- [x] Posicionarlo en lateral izquierdo
- [x] Estilos para el menú internos en el plugin
- [x] Imagen con previsualización
- [x] Animar la imagen al pasar el ratón por encima
- [x] Mostrar el título del apartado al pasar el ratón por su imagen
- [x] Llevar a una localización cuando se hace click
- [x] Menú ligeramente enterrado hacia la izquierda, saldrá del todo al pasar ratón por encima de la propia barra o cualquiera de sus elementos

## Descripción
Es un menú configurable y adaptable.

Cuando lo invocamos le podemos decir los colores y tamaños que debe utilizar, además como segundo parámetro le pasaremos una matriz indicando cada elemento del menú.

El menú quedará un poco oculto fuera de página, con algo de transparencia hasta que pasamos el ratón por encima dándole movimiento al elemento bajo este y mostrando su título.

## Parámetros
La invocación del plugin tendrá siempre 2 parámetros:
* Opciones de configuración, un objeto (puede ser vacío) o alguno de estos:
    * back1             → Degradado → 0%
    * back2             → Degradado → 20%
    * back3             → Degradado → 45%
    * back4             → Degradado → 100%
    * letras_color      → Color de letras título
    * letras_background → Color de fondo letras
    * letras_borde      → Color del borde para bloque letras
    * letras_ancho      → El ancho del bloque para letras
    * letras_alto       → El ancho del bloque para letras
* Un array que contendrá a su vez otro array por cada elemento con los datos:
    * [0] → Nombre del menú
    * [1] → Imagen de miniatura 120x80px
    * [2] → Enlace hacia donde llevará



## Invocación

## Tamaño de las imágenes

## Longitud máxima de título

## Modo de uso
Importa primero la librería jQuery y después este plugin.

Ejemplo:
```html
    <script type="text/javascript" src="./jquery-3.3.1"></script>
    <script type="text/javascript" src="./jquery.leftbar.js"></script>
```
