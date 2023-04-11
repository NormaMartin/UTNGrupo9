
const nombre = document.getElementById ("nombre");
const apellido = document.getElementById ("apellido");
const dni = document.getElementById ("dni");
const domicilio = document.getElementById ("domicilio");
const localidad = document.getElementById ("localidad");
const file = document.getElementById ("file");


const formu1 = document.getElementById("form1");
const formu2 = document.getElementById("form2");
const botonform = document.getElementsByClassName("botonform");

for (let i = 0; i < botonform.length; i++) {
    botonform[i].addEventListener("click", tomaformulario);

}
function tomaformulario (e) {
e.preventDefault();


    switch (e.target.id) {
        case "siguiente":
            formu1.classList.toggle("d-none");
            formu2.classList.toggle("d-none");
            break;
            case "anterior2":
                formu2.classList.toggle("d-none");
                formu1.classList.toggle("d-none");
                break;
                case "submit":
                    formudatos()
                    
               break;     
        default:
            break;
    }

}
function formudatos() {
    console.log(nombre.value);
    console.log(apellido.value);
    console.log(dni.value);
    console.log(domicilio.value);
    console.log(localidad.value);
    console.log(file.value);

    formu1.reset();
    formu2.reset();
    formu1.classList.toggle("d-none");
    formu2.classList.toggle("d-none");
}
