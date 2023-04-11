const form = document.getElementById("laboral");
form.addEventListener ("submit", agarraform);


function agarraform (e){
  e.preventDefault();  
  let datosform = new FormData (form);
  console.log(datosform.get("nombre")); 
  console.log(datosform.get("apellido")); 
  console.log(datosform.get("dni")); 
  console.log(datosform.get("domicilio")); 
  console.log(datosform.get("telefono")); 
  console.log(datosform.get("mail")); 
  console.log(datosform.get("comentarios")); 
  document.write ("Resumen"+ "<br>");
  document.write ("Nombre"+ "<br>");
  document.write(datosform.get("nombre"));
  document.write ("<br>" + "Apellido"+ "<br>");
  document.write(datosform.get("apellido"));
  document.write ("<br>" +"DNI"+ "<br>");
  document.write(datosform.get("dni")); 
  document.write ("<br>" +"Domicilioo"+ "<br>");
  document.write(datosform.get("domicilio")); 
  document.write ("<br>" +"Teléfono"+ "<br>");
  document.write(datosform.get("telefono"));
  document.write ("<br>" +"Correo electrónico"+ "<br>");
  document.write(datosform.get("mail")); 
  document.write ("<br>" +"Comentarios"+ "<br>");
  document.write(datosform.get("comentarios")); 
 
}
