const form1 = document.getElementById("paso1");
form.addEventListener ("submit", agarraform);

const form2 = document.getElementById("paso2");
form.addEventListener ("submit", agarraform);


function agarraform (e){
  e.preventDefault();  
  let datosform = new FormData (form);
  console.log(datosform.get("nombre")); 
  console.log(datosform.get("telefono")); 
  console.log(datosform.get("mail")); 
  console.log(datosform.get("domicilio")); 
  console.log(datosform.get("localidad"));  
  console.log(datosform.get("comentarios")); 
  document.write ("Resumen"+ "<br>");
  document.write ("Apellido y Nombre"+ "<br>");
  document.write(datosform.get("nombre"));
  document.write ("<br>" +"Teléfono"+ "<br>");
  document.write(datosform.get("telefono"));
  document.write ("<br>" +"Correo electrónico"+ "<br>");
  document.write(datosform.get("mail")); 
  
  document.write ("<br>" +"Localidad"+ "<br>");
  document.write(datosform.get("localidadstep1")); 
  document.write ("<br>" +"Domicilio"+ "<br>");
  document.write(datosform.get("domicilio")); 
  document.write ("<br>" +"Comentarios"+ "<br>");
  document.write(datosform.get("comentarios")); 
 
}
/*procedimiento para gestionar el form
form id="paso1" form id="paso2"
//1 indicar los elementos con id y/o clases, según corresponda
//2 capturar los elementos.
//3 escuchar los elementos claves (botones) y lanzar una función -> esta función va a escuchar el click y también averiguará en qué botón se produjo el evento.

scenarios:
form1-> 
1) btn-siguiente: ocultar form1 y mostrar form2

form2 ->
1) btn-previo: ocultar form2 mostrar form1
2) btn-enviar: lanzar función de procesamiento del form (form*2)


función de proceso del formulario (formularios, ya sé)
capturamos los elementos del formulario (inputs, textarea) y accedemos a sus valores, para almacenarlos en variables... por ej

const email = document.getElementById("email").value
console.log(email) -> marcelobettini@bla.com


..por último, escondemos el form2 y volvemos a mostrar el form1 (previamente reseteado)
podríamos dar un feedback "su mensaje fue enviado y lo leerá el primo de Magoya"
*/