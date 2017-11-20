/* FUNCIÓN PARA AEGURAR QUE LA PÁGINA CARGUE TOTALMENTE ANTES DE APLICAR LOS EVENTOS*/
window.addEventListener('load', function(event) {
  /* EVENTO UNO(click): Inserción del formulario, al hacer click el formulario remplaza al div.insert-list*/
  var insertList = document.querySelector('.insert-list');
  /* Creación del formulario y sus elemento incluidos en el: input, button"guardar", e ico "X"*/
  var newForm = document.createElement('form');
  newForm.classList.add('new-form');
  var newInput = document.createElement('input');
  newInput.classList.add('new-input');
  newInput.setAttribute('placeholder', 'Añadir una lista...');
  var newDiv = document.createElement('div');
  newDiv.innerHTML = '<button class="new-button">Guardar</button>' + '<i class="fa fa-times" aria-hidden="true"></i>';
  var sectionFather = document.getElementById('section-father');
  newForm.appendChild(newInput);
  newForm.appendChild(newDiv);
  /* Creación del evento  en si*/
  insertList.addEventListener('click', insertForm);
  /* funcion que se ejecutara al aplicar el evento click*/
  function insertForm() {
    sectionFather.appendChild(newForm);
    /* Reemplazo del formulario por el div.insert-list*/
    sectionFather.replaceChild(newForm, insertList);

    /* EVENTO DOS:Inserción del box div que contendrá el nombre de la lista añadida en el formulario y la opcion "añadir tarjetas", al hacer click en el button "guardar" reemplaza al formulario añadido anteriormente (se crea dentro dela funcion del EVENTO  UNO para poder acceder al button guardar) */
    var button = document.querySelector('.new-button');
    button.addEventListener('click', insertBox);
    /* Función que se ejecutará al aplicar el evento click*/
    function insertBox() {
      /* Condicionamos para que se agregue solo si el input del formulario tiene valor(contenido, incluye espacios(tab))*/
      if (newInput.value) {
        /* Creación del div.new-box que contendra el nombre de la lista ingresada en el formulario(nameList) y la opcion "añadir una tarjeta"(insert-target)*/
        var newBox = document.createElement('div');
        newBox.classList.add('new-box');
        var nameList = document.createElement('div');
        nameList.classList.add('name-list');
        nameList.innerHTML = newInput.value;
        var insertTarget = document.createElement('div');
        insertTarget.classList.add('insert-target');
        insertTarget.textContent = 'Añadir una tarjeta...';
        newBox.appendChild(nameList);
        newBox.appendChild(insertTarget);
        sectionFather.appendChild(newBox);
        /* Reemplazo del formulario por el div.new-box*/
        sectionFather.replaceChild(newBox, newForm);
      }
      /* EVENTO TRES:Inserción del div(newDivTextarea) que contendrá un textarea.new-textarea y un button "añadir", al hacer click se creara el div(newDivTextarea) reemplzara al div(insertTarget) (se crea dentro de la funcion del EVENTO DOS para poder acceder al div(insertTraget) */
      insertTarget.addEventListener('click', insertTextarea);
      /* Función que se ejecutará al aplicar el evento click*/
      function insertTextarea() {
        /* Creación del  div(newDivTextarea) y los elementos incluidos en el*/
        var newDivTextarea = document.createElement('div');
        newDivTextarea.classList.add('new-div-textarea');
        var newTextarea = document.createElement('textarea');
        newTextarea.classList.add('new-textarea');
        var newDivButton = document.createElement('div');
        newDivButton.innerHTML = '<button class="new-button">Añadir</button>' + '<i class="fa fa-times" aria-hidden="true"></i>';
        newDivTextarea.appendChild(newTextarea);
        newDivTextarea.appendChild(newDivButton);
        /* Reemplazo del div insertTarget  por el div(newDivTextarea)*/
        newBox.replaceChild(newDivTextarea, insertTarget);
        /* EVENTO TRES:Inserción de los div(container) en la parte superior que contienen el valor añadido en el textarea, al hacer click se añadira el valor del textarea un div y este sera incluido en la parte superior del textarea (se crea dentro de la funcion del EVENTO TRES para poder acceder al BUTTON "Añadir" */
        var insertButton = document.querySelector('.new-button');
        insertButton.addEventListener('click', insertValueTextarea);
        /* Función que se ejecutará al aplicar el evento click*/
        function insertValueTextarea() {
          if (newTextarea.value) {
            var container = document.createElement('div');
            container.classList.add('new-insert-target');
            container.textContent = newTextarea.value;
            /* Se inserta antes del testarea*/
            newBox.insertBefore(container, newDivTextarea);
            newTextarea.value = '';
          }
        }
      }
    }
    /* EVENTO DOS: Alhacer click en el button "guardar" de formulario se creará tambien una replica del mismo formulario que se ubicará en la parte derecha del div(newBox) (se crea dentro de la funcion del EVENTO  UNO para poder acceder al button guardar)*/
    var button = document.querySelector('.new-button');
    button.addEventListener('click', insertNewForm);
    function insertNewForm() {
      var newForm = document.createElement('form');
      newForm.classList.add('new-form');
      var newInput = document.createElement('input');
      newInput.classList.add('new-input');
      newInput.setAttribute('placeholder', 'Añadir lista...');
      var newDiv = document.createElement('div');
      newDiv.innerHTML = '<button class="new-button">Guardar</button>' + '<i class="fa fa-times" aria-hidden="true"></i>';
      newForm.appendChild(newInput);
      newForm.appendChild(newDiv);
      var sectionFatherTwo = document.getElementById('second-section');
      /* Se agrega en la section "second-father" ya existente en el  HTML*/
      sectionFatherTwo.appendChild(newForm);
    }
  }
});
