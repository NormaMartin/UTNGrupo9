const nombre = document.getElementById ("nombre");
const telefono = document.getElementById ("telefono");
const mail = document.getElementById ("mail");
const domicilio = document.getElementById ("domicilio");
const comentarios = document.getElementById ("comentarios");
const localidad = document.getElementById ("localidad");

/*procedimiento para gestionar el form */

const botones = document.getElementsByClassName("btn-form"); //recupera todos los botones de la clase btn-form
const formulario1 = document.getElementById("paso1");
const formulario2 = document.getElementById("paso2");
for(let i = 0; i < botones.length; i++){
  botones[i].addEventListener("click", handleMultistep);
}

function handleMultistep(evento) {
  evento.preventDefault();
  // formulario1.classList.toggle("d-none") 
  //let idboton = evento.target.id;
   switch (evento.target.id){
    case 'btn-sig':
      formulario1.classList.toggle("d-none");
      formulario2.classList.toggle("d-none");
      break;
    case 'btn-ant':
      formulario1.classList.toggle("d-none");
      formulario2.classList.toggle("d-none");
      break;
    case "enviar":      
      enviardatos();      
      break;
    default:
      break; 
  }
}


function enviardatos() {
  let sigo = "SI";
  let msg = "Debe ingresar ";
  if (nombre.value == "") {
     sigo = "NO";
     msg = msg + "nombre";
    }
  if (mail.value == "") {
      sigo = "NO";
      if (msg == "Debe ingresar ") 
        msg = msg + "email";
      else 
        msg = msg + ", " + "email";
     }  
  if (domicilio.value == "") {
      sigo = "NO";
      if (msg == "Debe ingresar ") 
        msg = msg + "domicilio";
      else 
        msg = msg + ", " + "domicilio";
     }
  if (localidad.value == "") {
      sigo = "NO";
      if (msg == "Debe ingresar ") 
        msg = msg + "localidad";
      else 
        msg = msg + ", " + "localidad";
     }     
    
  if (sigo !== "NO" )  {
    
   console.log("Apellido y nombre " + nombre.value );
   console.log("Telefono" + telefono.value );
   console.log("Correo " + mail.value );
   console.log("Domicilio " + domicilio.value );
   console.log("Localidad " + localidad.value );
   console.log("Comentarios " + comentarios.value );
  // console.log(nombre.value, telefono.value, mail.value, domicilio?.value, localidad.value, comentarios.value);
   formulario1.reset();
   formulario2.reset();  
   alert("Los datos fueron guardados, nos contactaremos cuando surja una vacante");
  }
  else alert(msg) ;
  
}

