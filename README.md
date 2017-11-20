# TRELLO

* **Curso:** _Creando tu primer sitio web interactivo_
* **Unidad:** _Creando interacción con Javascript_

## Objetivo

Replicar el **Tablero** de la página web de **TRELLO**, desarrollando las versiones siguientes:

Versión 0.0.1

* Se mostrará el texto "Añadir una lista ...".
* Al hacer click se debe ocultar el texto y mostrar un formulario.
*  El formulario está conformado por un input y un botón para que pueda añadir tareas a tu lista.

Versión 0.0.2

* Al dar click en el botón de "Guardar", se mostrará un nuevo cuadro donde estará el nombre de la lista agregada.
* Mostrar un texto de "Añadir una tarea" dentro de la lista.

Versión 0.0.3

* Al dar click en "Añadir una tarea", deberá mostrar un formulario con un textarea y un botón que diga "Añadir".

Versión 0.0.4

* Poner focus al input al dar click en "Agregar nueva tarea".
* Al dar click en el botón de "Añadir", deberá aparecer el texto de la tarea debajo del título de la lista.

Versión 0.0.5

* Mostrar el formulario nuevamente debajo de la última tarea añadida.

Versión 0.0.6 (Extra)

* Poder agregar múltiples listas con tarjetas. Para esto, el formulario de "Añadir una lista" debe aparecer a la derecha de la lista anteriormente creada.

## Alumna
* Maria Cristina Ortiz Villafuerte.

## Descripción

Se muestra una replica del **Tablero** de la página web **Trello**. Para resolver dicho reto se hizo lo siguiente:

* Se creó un documento HTML donde figura: **header**(donde se encuentra las dos  barra de navegación: _nav.menu-one_ y _nav.menu-two_),  **section-father** (donde se encuentra el _div.insert-list_ el cual sera reemplazado por elementos(formulario.newForm(_form_), div.newBox (_div_), div.newDivTextarea (_div_ que contiene el _textarea_) y div.container (_div_ que contiene las listas ñadidas en el _textarea_)) creados en el DOM mediante los eventos _click_ hechos en javascript), **second-section** (sin contenido en el cual se agregará una replica del formulario.newForm(_form_) al aplicar un evento _click_).

* Se creó un archivo **main.css** donde se encuentran todos los estilos aplicados a todas la partes del body del documento HTML, y los estilos a los elementos creados en el archivo javascript.

* Se creó un archivo **javascript** donde se encuentran todos los eventos aplicados ( _click_ ) a la **section-father**, **second-section** y a los elementos creados en el DOM.


## Ejemplo usada para el replicado

![twitter Website]()
