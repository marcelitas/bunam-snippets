![alt text](../images/b-unam.png "B@UNAM") 
# FlipCard
___
Efecto __FlipCard__ destinado a la pantalla principal o de presentación de los cursos.

## HTML
___
Los elementos se deben colocar dentro del siguiente bloque.
```
<section>
	<div class="flip-container">
		## Your items are here
	</div>
</section>
```
La estructura de cada uno de los elementos es la siguiente.
```
<div>
	<div class="flipper">
		<div class="front"></div>
		<div class="back">
			## Your content are here
		</div>
	</div>
</div>
```
En este caso se emplea __Bootstrap__ y su sistema de [cuadrícula](http://getbootstrap.com/css/#grid).

## CSS
___
Se incluye un archivo con los estilos esenciales para el correcto funcionamiento de los elementos, sólo es necesario reemplazar los valores de `background-color` y `height` por los particulares de cada diseño.

### CSS Flip Animation
___
Se tomó como punto de partida el ejemplo de __David Walsh__ publicado en el siguiente [enlace](https://davidwalsh.name/css-flip).