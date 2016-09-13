![alt text](../images/b-unam.png "B@UNAM") 
# Scroll
Funcionalidad de __scroll__ cuando el contenido sobrepasa el tamaño máximo de la ventana. Se presentan dos propuestas:
* Botón para regresar al principio de la página.
* Menú fijo en la parte superior de la ventana.

## Botón

### HTML
Se debe incluir el elemento __anchor__ que funcionará como botón para regresar al principio de la página, con el `id` `button_up`.
```
<a href="#" id="button_up"></a>
```

### CSS
Se establece la posicion en __fijo__ del botón sobre el costado inferior derecho de la ventana. El cual puede ser modificado de acuerdo con el diseño a emplear.

### JavaScript
Para que el menú funcione correctamente es necesario incluir en el archivo donde se utilizará el menú, el archivo fuente del _Framework_ [jQuery](https://code.jquery.com/jquery-3.1.0.min.js), hasta este momento la versión __3.1__.
```
<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
```
Se incluye una fujnción encargada de detectar el desplazamiento del _scroll_ que se encarga de aparacer y desaparecer el elemento `button_up`, así como otra función que se encarga de animar el desplazamiento hacia el principio de la página.