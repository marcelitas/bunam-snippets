![alt text](../images/b-unam.png "B@UNAM") 
# Paginación
Cambio de contenidos a través de una transición lateral para visualizar el contenido anterior o siguiente de cada sección.

## HTML
Se requiere de un elemento para colocar el contenido que se trae de los distintos archivos.
```
<section class="row"></section>
```

Los contenidos deben enontrarse dentro de un elemento de clase `content` y un atributo `data-previous` y `data-next`.
```
<div class="col-xs-12 content" data-previous="pages/06.html" data-next="pages/02.html">
	## Your content are here
</div>
```

### Elemento _previous_ y _next_
Este par de elementos se encuentran al final del __body__ justo antes de la declaración de los __scripts__.

#### data-previous
Corresponde a la página anterior en la navegación, respecto al contenido a mostrar. Debe contener la ruta tal como si se mostrasé desde el [index](#). Esta propiedad se encuentra además vinculada al elemento `#previous`.
```
<a href="#" class="paginate" id="previous"></a>
```

#### data-next
Corresponde a la página siguiente en la navegación, al igual que en `data-previous` la ruta se debe referenciar como se accedería desde el [index](#).
Esta propiedad se encuentra además vinculada al elemento `#next`.
```
<a href="#" class="paginate" id="next"></a>
```

## CSS
Proporcionar un `min-height`como propiedad al elemento _contenedor_.
```
section{
	min-height: 500px;
}
```

### Paginador
Se declaran propiedades para posicionar y dar estilo a estos elementos, se recomienda únicamente no modificar los atributos __HTML__.
```
.paginate{
	...
}
.paginate#previous{
	...
}
.paginate#next{
	...
}
```

## JavaScript
Para que el menú funcione correctamente es necesario incluir en el archivo donde se utilizará el menú, el archivo fuente del _Framework_ [jQuery](https://code.jquery.com/jquery-3.1.0.min.js), hasta este momento la versión __3.1__.
```
<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
```
