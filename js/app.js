window.addEventListener('load', function(event){
  console.log(event);/*me da propiedades del evento*/
  console.log(event.target);/* recibe y ejecuta el evento me bota document*/
  console.log(event.currentTarget);/* escucha el click (tiene el addeventlistener por default)el evento me bota window*/
  /*escribir las funcione*/
});
