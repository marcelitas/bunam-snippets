![B@UNAM](../images/b-unam.png "B@UNAM") 
# Menú
Menú de unidades y temas.

## HTML
La lista se define de la siguiente forma.
```
<ul>
	<li><a data-unit="unidad-1" href="unidad-1/index.html">Unidad 1</a></li>
	<li><a data-unit="unidad-2" href="unidad-2/index.html">Unidad 2</a></li>
	<li><a data-unit="unidad-3" href="unidad-3/index.html">Unidad 3</a></li>
	<li><a data-unit="unidad-4" href="unidad-4/index.html">Unidad 4</a></li>
</ul>
```
El atributo `data-unit` contiene el valor del menú con el que se almacenará en el [LocalStorage](http://diveinto.html5doctor.com/storage.html), con lo que una vez que sea solicitado el submenú que se encuentra en el archivo [index.html](#) de cada unidad, este será asignado a la variable con el valor de `data-unit` para en futuras peticiones sólo llamarlo del __storage__ del navegador.

El archivo [unidad-1/index.html](#) se estructura tan sólo como se muestra a continuación.
```
<ul>
	<li><a href="#">Unidad 1 Tema 1</a></li>
	<li><a href="#">Unidad 1 Tema 2</a></li>
	<li><a href="#">Unidad 1 Tema 3</a></li>
	<li><a href="#">Unidad 1 Tema 4</a></li>
</ul>
```

## CSS
Se incluye un archivo con los estilos esenciales para el correcto funcionamiento del menú, sólo es necesario reemplazar los valores `background-color` y `border-color` por los particulares de cada diseño.

## JavaScript
Para que el menú funcione correctamente es necesario incluir en el archivo donde se utilizará el menú, el archivo fuente del _Framework_ [jQuery](https://code.jquery.com/jquery-3.1.0.min.js), hasta este momento la versión __3.1__.
```
<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
```