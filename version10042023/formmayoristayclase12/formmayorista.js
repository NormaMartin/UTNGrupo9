
/* toma los campos de los formularios */
const cebolla = document.getElementById ("cebolla");
const espinaca = document.getElementById ("espinaca");
const manzana = document.getElementById ("manzana");
const pera = document.getElementById ("pera");
const nombre = document.getElementById ("nombre");
const domicilio = document.getElementById ("domicilio");
const localidad = document.getElementById ("localidad");
const resumen = document.getElementById ("resumen");


/* toma los formularios */
const formu0 = document.getElementById("form0");
const formu1 = document.getElementById("form1");
const formu2 = document.getElementById("form2");

/* escucha los botones */
const botonform = document.getElementsByClassName("botonform");

for (let i = 0; i < botonform.length; i++) {
    botonform[i].addEventListener("click", tomaformulario);

}
/* toma los botones y lanza la funcion para el resumen de compra en el tercer case*/
function tomaformulario (e) {
e.preventDefault();


    switch (e.target.id) {
        case "siguiente1":
            formu0.classList.toggle("d-none");
            formu1.classList.toggle("d-none");
            break;
            case "anterior2":
            formu0.classList.toggle("d-none");
            formu1.classList.toggle("d-none");
            break;
            case "siguiente2":
            formu1.classList.toggle("d-none");
            formu2.classList.toggle("d-none");
            formufinal()
                  break;
            case "anterior3":
                formu1.classList.toggle("d-none");
                formu2.classList.toggle("d-none");
                break;
                case "submit":
                    formudatos()
                    
               break;     
        default:
            break;
    }

}

/* muestra en consola resetea el formulario y muestra form0 */
function formudatos() {
    console.log("cajones de cebolla " + cebolla.value );
    console.log("cajones de espinaca " + espinaca.value);
    console.log("cajones de manzana " + manzana.value);
    console.log("cajones de pera " + pera.value);
    console.log("destinatario " + nombre.value);
    console.log("domicilio " + domicilio.value);
    console.log("localidad " + localidad.value);
        

    formu0.reset();
    formu1.reset();
   
    formu2.reset();

    formu0.classList.toggle("d-none");
    formu2.classList.toggle("d-none");



}

/* precios por cajón (se podrían modificar los valores con un imput desde un "htmladmin")*/

const preciocebolla = 1500
const precioespinaca = 3000
const preciomanzana = 4000
const preciopera = 6000


/* cambia los precios publicados en html*/

cebollapesos.textContent= "Cebolla bolsa 20 kg $ " + preciocebolla
espinacapesos.textContent= "Espinaca cajón 10 kg $ " + precioespinaca
manzanapesos.textContent= "Manzana cajón 19 kg $ " + preciomanzana
perapesos.textContent= "Pera cajón 19 kg $ " + preciopera


/* muestra en form2 el resumen del pedido */
function formufinal() {
   
let suma
    if (cebolla.value != 0) suma = ("$ "+(cebolla.value * preciocebolla)+" cebolla" +"\n")
    else suma = ""
    if (espinaca.value != 0) suma = (suma + "$ "+(espinaca.value * precioespinaca)+" espinaca" +"\n")
    if (manzana.value != 0) suma = (suma + "$ "+(manzana.value * preciomanzana)+" manzanas"+"\n")
    if (pera.value != 0) suma = (suma + "$ "+(pera.value * preciopera)+" peras"+"\n")

    let total = "$ "+(cebolla.value * preciocebolla + espinaca.value * precioespinaca + manzana.value * preciomanzana + pera.value * preciopera + " TOTAL"+"\n"+"\n")

   casa = ("DATOS DE ENTREGA"
   
   +"\n" + "Destinatario "+(nombre.value)+"\n"+"Domicilio "+(domicilio.value)+"\n"+"Localidad "+(localidad.value)+"\n"
    +"click en ENVIAR para confirmar pedido")

    resumen.textContent = suma + total + casa
  
}

 