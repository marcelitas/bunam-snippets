![alt text](../images/b-unam.png "B@UNAM") 
# Página Actual
Cambio de páginas vía [Ajax](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) y permite conservar a través de [LocalStorage](http://diveinto.html5doctor.com/storage.html) la última página consultada.

## HTML
Se requiere de un elemento para colocar el contenido que se trae de los distintos archivos.
```
<section class="row"></section>
```

Para almacenar la última página consultada es necesario incluir en el `body` el atributo `data-course`.
```
<body data-course="">
	<div class="container">
	...
	</div>
</div>
```

## CSS
Proporcionar un `min-height`como propiedad al elemento _contenedor_.
```
section{
	min-height: 500px;
}
```

## JavaScript
Para que el menú funcione correctamente es necesario incluir en el archivo donde se utilizará el menú, el archivo fuente del _Framework_ [jQuery](https://code.jquery.com/jquery-3.1.0.min.js), hasta este momento la versión __3.1__.
```
<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
```

El archivo [scripts.js](js/scripts.js) cubre las siguientes funciones.

### Recuperar última página visualizada
Busca la última página consultada en el __LocalStorage__ y la carga a través de la función `get_page`.

### Cargar contenido
Una vez que se recupera la última página o se solicita otro contenido se busca el contenido en la respectiva __url__ y se carga dentro del elemento `section`, esto a través de la función `get_page`.

### Establecer fuente de imágenes
Se establece la ruta completa para llegar al elemento __imagen__ desde la úbicación actual mediante la función `set_url`.
