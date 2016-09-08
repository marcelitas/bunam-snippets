![alt text](../images/b-unam.png "B@UNAM") 
# Menú Color
Menú que cambia de color de acuerdo con el elemento al que se le hizo clic.

## HTML
Los elementos del menu deben tener el atributo `data-color` al que se le debe asignar el valor en [hexadecimal](http://www.color-hex.com/) del color.
```
<li><a data-color="#c29af2" href="#">Unidad 1</a></li>
```

## CSS
No contiene estilos propios.

## JavaScript
Para que el menú funcione correctamente es necesario incluir en el archivo donde se utilizará el menú, el archivo fuente del _Framework_ [jQuery](https://code.jquery.com/jquery-3.1.0.min.js), hasta este momento la versión __3.1__.
```
<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
```
El archivo [scripts.js](js/scripts.js) esta dividido en dos secciones.

### Aplicación de una página
Se parte del supuesto que el contenido será cargado vía [Ajax](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) por lo que el color del menú sólo se actualiza en esta página.

Se debe de emplear únicamente el apartado __Single Page Application__.

### Navegación natural
La navegación entre los contenidos se da entre archivos, por lo que se emplea el recurso [LocalStorage](http://diveinto.html5doctor.com/storage.html) para almacenar el color seleccionado.

Se debe emplear únicamente el apartado __Natural Navigation__.

#### LocalStorage
Se incluye en el __HTML__ el botón para borrar el __LocalStorage__ con la finalidad de hacer pruebas, no se recomienda mantenerlo en el archivo de __producción__.
```
<li><a href="#" id="deleteStorage">Borrar LocalStorage</a></li>
```
