const form=document.getElementsByTagName("button");
//console.log(form);

let total=0;
let visto1=false;
let visto2=false;
let visto3=false;
let visto4=false;
let visitado1=0;
let visitado2=0;
let visitado3=0;
let visitado4=0;


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
     if (visto1==true)
     {total=total-visitado1}
         //console.log(formInfo.get(arrayNombre[0]));

    let cotiza=formInfo.get(arrayNombre[0])*arrayPrecio[0];
    // console.log(cotiza);
     total=total+cotiza;
    // console.log("total es ",total);
     //alert(total);
     let frfr=document.getElementById("total").innerHTML=total;  
     visitado1=cotiza; 
     visto1=true;
   
  
   

}

function agregarCant2(){
    let formInfo1= new FormData(formu1);
    if (visto2==true)
     {total=total-visitado2}
   // console.log(formInfo1.get(arrayNombre[1]));
    let cotiza=formInfo1.get(arrayNombre[1])*arrayPrecio[1];
   // console.log(cotiza);
    total=total+cotiza;
   // console.log("total es ",total);
   // alert(total);
    let frfr=document.getElementById("total").innerHTML=total;   
    visitado2=cotiza; 
    visto2=true;
    
}
function agregarCant3(){
    let formInfo1= new FormData(formu2);
    if (visto3==true)
     {total=total-visitado3}
    //console.log(formInfo1.get(arrayNombre[2]));
    let cotiza=formInfo1.get(arrayNombre[2])*arrayPrecio[2];
    //console.log(cotiza);
    total=total+cotiza;
   // console.log("total es ",total);
  //  alert(total);
    let frfr=document.getElementById("total").innerHTML=total;   
    visitado3=cotiza; 
    visto3=true;

}
function agregarCant4(){
    let formInfo1= new FormData(formu3);
    if (visto4==true)
    {total=total-visitado4}
   // console.log(formInfo1.get(arrayNombre[3]));
    let cotiza=formInfo1.get(arrayNombre[3])*arrayPrecio[3];
  //  console.log(cotiza);
    total=total+cotiza;
   // console.log("total es ",total);
   // alert (total);
    
    let frfr=document.getElementById("total").innerHTML=total;    
    visitado4=cotiza; 
    visto4=true;

}


 

