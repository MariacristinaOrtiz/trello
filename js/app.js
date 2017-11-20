window.addEventListener('load', function(event) {
  /* Inserción de dormulario*/
  var insertList = document.querySelector('.insert-list');
  var newForm = document.createElement('form');
  newForm.classList.add('new-form');
  var newInput = document.createElement('input');
  newInput.classList.add('new-input');
  newInput.setAttribute('placeholder', 'Añadir lista...');
  var newDiv = document.createElement('div');
  newDiv.innerHTML = '<button class="new-button">Guardar</button>' + '<i class="fa fa-times" aria-hidden="true"></i>';
  var sectionFather = document.getElementById('section-father');
  newForm.appendChild(newInput);
  newForm.appendChild(newDiv);
  insertList.addEventListener('click', insertForm);

  function insertForm() {
    sectionFather.appendChild(newForm);
    sectionFather.replaceChild(newForm, insertList);

    /* segundo evento*/
    var button = document.querySelector('.new-button');

    button.addEventListener('click', insertBox);
    function insertBox() {
      if (newInput.value) {
        var newBox = document.createElement('div');
        newBox.classList.add('new-box');
        var nameList = document.createElement('div');
        nameList.innerHTML = newInput.value + '<span id="fa-ellipsis"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></span>';
        var insertTarget = document.createElement('div');
        insertTarget.classList.add('insert-target');
        insertTarget.textContent = 'Añadir una tarjeta...';
        newBox.appendChild(nameList);
        newBox.appendChild(insertTarget);
        sectionFather.appendChild(newBox);
        sectionFather.replaceChild(newBox, newForm);
      }
      insertTarget.addEventListener('click', insertTextarea);
      function insertTextarea() {
        var newDivTextarea = document.createElement('div');
        var newTextarea = document.createElement('textarea');
        newInput.classList.add('new-textarea');
        var newDivButton = document.createElement('div');
        newDivButton.innerHTML = '<button class="new-button">Añadir</button>' + '<i class="fa fa-times" aria-hidden="true"></i>';
        newDivTextarea.appendChild(newTextarea);
        newDivTextarea.appendChild(newDivButton);
        newBox.replaceChild(newDivTextarea, insertTarget);
        /* cuarto evento*/
        var insertButton = document.querySelector('.new-button');
        insertButton.addEventListener('click', insertValueTextarea);
        function insertValueTextarea() {
          if (newTextarea.value) {
            var container = document.createElement('div');
            container.classList.add('new-insert-target');
            container.textContent = newTextarea.value;
            newBox.insertBefore(container, newDivTextarea);
            newTextarea.value = '';
          }
        }
      }
    }
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
      console.log(sectionFatherTwo);
      sectionFatherTwo.appendChild(newForm);
    }
  }
});
