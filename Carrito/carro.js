const form=document.getElementsByTagName("button");
//console.log(form);

let total=0;

const formu=document.getElementById("formul");
const formu1=document.getElementById("formul1");
const formu2=document.getElementById("formul2");
const formu3=document.getElementById("formul3");

form[0].addEventListener("click",agregarCant1);
form[1].addEventListener("click",agregarCant2);
form[2].addEventListener("click",agregarCant3);
form[3].addEventListener("click",agregarCant4);

const arrayNombre=["prod1","prod2","prod3","prod4"];
const arrayPrecio=[450,890,390,490]
console.log(arrayNombre);


function agregarCant1(){
    
     let formInfo= new FormData(formu)
   
   
  
    //console.log(formInfo.get(arrayNombre[0]));
    let cotiza=formInfo.get(arrayNombre[0])*arrayPrecio[0];
   // console.log(cotiza);
    total=total+cotiza;
   // console.log("total es ",total);
    //alert(total);
    let frfr=document.getElementById("total").innerHTML=total;   

}

function agregarCant2(){
    let formInfo1= new FormData(formu1);
   // console.log(formInfo1.get(arrayNombre[1]));
    let cotiza=formInfo1.get(arrayNombre[1])*arrayPrecio[1];
   // console.log(cotiza);
    total=total+cotiza;
   // console.log("total es ",total);
   // alert(total);
    let frfr=document.getElementById("total").innerHTML=total;   
    
}
function agregarCant3(){
    let formInfo1= new FormData(formu2);
    //console.log(formInfo1.get(arrayNombre[2]));
    let cotiza=formInfo1.get(arrayNombre[2])*arrayPrecio[2];
    //console.log(cotiza);
    total=total+cotiza;
   // console.log("total es ",total);
  //  alert(total);
    let frfr=document.getElementById("total").innerHTML=total;   

}
function agregarCant4(){
    let formInfo1= new FormData(formu3);
   // console.log(formInfo1.get(arrayNombre[3]));
    let cotiza=formInfo1.get(arrayNombre[3])*arrayPrecio[3];
  //  console.log(cotiza);
    total=total+cotiza;
   // console.log("total es ",total);
   // alert (total);
    
    let frfr=document.getElementById("total").innerHTML=total;    

}


 

