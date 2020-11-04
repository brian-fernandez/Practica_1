function texto1 ()
{
    // hay dos formas para realizar un cambio en la pagina utilizando
    // el id 
    /*
    document.getElementById("texto1").innerHTML = "HOLA SOY EL PRIMER CAMBIO DE LA PAGINA";
    */

   var dato = document.getElementById("texto1");
  dato.innerHTML=("<h2 style='color:red;'>TOYOTA</h2> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi magni oditatque laboreitaque nemo iste sunt reprehenderit, harum ad dolore cumque, corrupti ullam? Dolore nemo aspernaturdignissimos! Quos, dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, omnis! Atlabore aperiam maiores delectus saepe suscipit accusantium aspernatur, eos voluptas accusamus provident voluptatum obcaecati id aut eius. Nostrum, doloremque. Lorem ipsum, dolor sit amet consectetur adipisicingelit. Sint impedit voluptas, consequatur libero nulla suscipit. Error suscipit ipsam exercitationem, laboreperspiciatis consequuntur animi deserunt sapiente officiis. Dolores aspernatur dicta itaque.");
dato.style.display="block";
}
function texto2()
{
    var dato2 = document.getElementById("texto1");
   dato2.innerHTML=(" <h2 style='color:black;'>HONDA</h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa minustemporibus minimanesciunt est quas voluptatibus ab velit voluptate, quasi molestias nam reiciendis dolore non fugiat, fugitdignissimos alias !Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, omnis! At laboreaperiam maiores delectus saepe suscipit accusantium aspernatur, eos voluptas accusamus provident voluptatumobcaecati id aut eius. Nostrum, doloremque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sintimpedit voluptas, consequatur libero nulla suscipit. Error suscipit ipsam exercitationem, laboreperspiciatis consequuntur animi deserunt sapiente officiis. Dolores aspernatur dicta itaque.");
   dato2.style.display="block";
}
function texto3()
{
    var dato3 = document.getElementById("texto1");
dato3.innerHTML=(" <h2 style='color:black;'>NISSAN</h2>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia rationeex itaque eaqueet modi exercitationem fugit laborum praesentium! Quae quas aspernatur, recusandae in debitis providentasperiores id ipsam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, omnis! At laboreaperiam maiores delectus saepe suscipit accusantium aspernatur, eos voluptas accusamus provident voluptatumobcaecati id aut eius. Nostrum, doloremque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sintimpedit voluptas, consequatur libero nulla suscipit. Error suscipit ipsam exercitationem, laboreperspiciatis consequuntur animi deserunt sapiente officiis. Dolores aspernatur dicta itaque.");
    dato3.style.display="block";
}

function img1()
{
    const dato4 =document.querySelector(".cont-t");
    dato4.classList.toggle("active");
   
}
function img2()
{
    const dato5 =document.querySelector(".cont-t-2");
    dato5.classList.toggle("active");
   
}
function img3()
{
    const dato6 =document.querySelector(".cont-t-3");
    dato6.classList.toggle("active");


}

function efecto5()
{
  var d1 =  document.getElementById("menu");
  d1.innerHTML= "Screen Width: " + screen.width;
}

   



