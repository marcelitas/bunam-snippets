![alt text](../images/b-unam.png "B@UNAM") 
# Menú herramientas
Menu lateral que desplaza el contenedor para mostrarse al lado derecho de la pantalla.

## HTML
Se requiere de un elemento __anchor__ que funcione como botón para mostrar y ocultar el menú de herramientas.
```
<a href="#" id="tools">
	<img src="images/tools.png" alt="Tools">
</a>
```
Para construir el menú de herramientas se requiere la siguiente estructura.
```
<div id="sidebar">
	<ul>
		<li><a href="#">Home</a>
			<ul>
				<li><a href="#">Enlace 1</a></li>
			</ul>
		</li>
		<li><a href="#">Sign Out</a></li>
	</ul>
</div>
```
El elemento __#tools__ así como el __#sidebar__ son los primeros elementos dentro del __body__.
```
<body>
	<a href="#" id="tools">
		<img src="images/tools.png" alt="Tools">
	</a>
	<div id="sidebar">
		## Your items are here
	</div>
	...
</body>
```

## CSS
Se incluye un archivo con los estilos esenciales para el correcto funcionamiento de los elementos, se recomienda sólo reemplazar las propiedades que se encuentran al final del archivo después de la nota _Replace this properties_.

## JavaScript
Para que el menú funcione correctamente es necesario incluir en el archivo donde se utilizará el menú, el archivo fuente del _Framework_ [jQuery](https://code.jquery.com/jquery-3.1.0.min.js), hasta este momento la versión __3.1__.
```
<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
```