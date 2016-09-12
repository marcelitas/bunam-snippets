![alt text](../images/b-unam.png "B@UNAM") 
# Vídeo Modal
Ajustes del __Modal__ de [Bootstrap](http://getbootstrap.com/javascript/#modals) para la integración de vídeos de _youtube_ y la funcionalidad _responsive_ para la implementación de los elemenetos `iframe`.

## HTML
Se requiere de un elemento para enlazar al __Modal__.
```
<a href="#" data-toggle="modal" data-target="#myModal">Mi vídeo</a>
```

En la parte final del archivo __html__ se coloca el __Modal__ con los siguientes elementos de acuerdo con la documentación de [Bootstrap](http://getbootstrap.com/javascript/#modals).
```
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Title</h4>
			</div>
			<div class="modal-body">
				## Your content is here
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div>
		</div>
	</div>
</div>
```
Para esta implementación únicamente se utilizan los elementos `modal-header` y `modal-body`.

## CSS
No requiere ningún estilo adicional.

## JavaScript
Para que el menú funcione correctamente es necesario incluir en el archivo donde se utilizará el menú, el archivo fuente del _Framework_ [jQuery](https://code.jquery.com/jquery-3.1.0.min.js), hasta este momento la versión __3.1__.
```
<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
```
El elemento `a[data-toggle="modal"]` es el que se encarga de detonar toda la funcionalidad y esta construido para utilizar un núnmero ilimitado de elementos __Modal__.

No es necesaria ninguna configuración adicional.

Ha sido implementado el cierre del vídeo en reproducción junto con el cierre del __Modal__, funcionalidad que no se encuentra de manera convencional en la documentación de [Bootstrap](http://getbootstrap.com/javascript/#modals).