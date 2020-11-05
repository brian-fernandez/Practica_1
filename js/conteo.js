var producto = 0 ;
var num = document.getElementById("num");
var ventana = document.getElementById("vent");


function añadir()
{
    producto ++;
    num.innerHTML=(producto);
    ventana.style.display="block";
    
    
    
}
function eliminar()
{
    producto = 0;
    num.innerHTML=(producto);
    ventana.style.display="none";

}