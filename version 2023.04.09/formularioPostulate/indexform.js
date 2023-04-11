/*
  esta parte la habia escrito Javier, quizas sirve para el boton Enviar
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
  hasta aca */
/*procedimiento para gestionar el form */

const botones = document.getElementsByClassName("btn-form"); //recupera todos los botones de la clase btn-form
const formulario1 = document.getElementById("paso1");
const formulario2 = document.getElementById("paso2");
for(let i = 0; i < botones.length - 1; i++){
  botones[i].addEventListener("click", handleMultistep);

}

function handleMultistep(evento) {
  evento.preventDefault;
  // formulario1.classList.toggle("d-none") 
  // let idboton = evento.target.id;
   switch (evento.target.id){
    case 'btn-sig':
      formulario1.classList.toggle("d-none");
      formulario2.classList.toggle("d-none");
      break;
    case 'btn-ant':
      formulario1.classList.toggle("d-none");
      formulario2.classList.toggle("d-none");
      break;
    case 'enviar':
      handleSubmit();      
      break;
    default:
      break; 
  }
}


function handleSubmit(){
 /* aqui falta escribir */  

}

/*

..por último, escondemos el form2 y volvemos a mostrar el form1 (previamente reseteado)
podríamos dar un feedback "su mensaje fue enviado y lo leerá el primo de Magoya"
*/