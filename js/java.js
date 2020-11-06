function openMenu() {
    var navMain = document.getElementById('navMenuId');
    if (navMain.className === 'navMenu') {
        navMain.className += ' mobileView';
    } else {
        navMain.className = 'navMenu';
    }
}


function pizza()
{
    var contenido1 = document.getElementById("parrafo-1");
    contenido1.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eligendivoluptatem officia nam, perspiciatis reiciendis ad at explicabo ratione, modi voluptates suscipitreprehenderit rerum. Ea consectetur animi tempore eos aspernatur!"
}
function pizza2()
{
    var contenido1 = document.getElementById("parrafo-2");
    contenido1.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eligendivoluptatem officia nam, perspiciatis reiciendis ad at explicabo ratione, modi voluptates suscipitreprehenderit rerum. Ea consectetur animi tempore eos aspernatur!"
}
function pizza3()
{
    var contenido1 = document.getElementById("parrafo-3");
    contenido1.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eligendivoluptatem officia nam, perspiciatis reiciendis ad at explicabo ratione, modi voluptates suscipitreprehenderit rerum. Ea consectetur animi tempore eos aspernatur!"
}




function hamburger()
{
    var contenido1 = document.getElementById("parrafo-1-1");
    contenido1.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eligendivoluptatem officia nam, perspiciatis reiciendis ad at explicabo ratione, modi voluptates suscipitreprehenderit rerum. Ea consectetur animi tempore eos aspernatur!"
}
function hamburger2()
{
    var contenido1 = document.getElementById("parrafo-2-2");
    contenido1.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eligendivoluptatem officia nam, perspiciatis reiciendis ad at explicabo ratione, modi voluptates suscipitreprehenderit rerum. Ea consectetur animi tempore eos aspernatur!"
}
function hamburger3()
{
    var contenido1 = document.getElementById("parrafo-3-3");
    contenido1.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eligendivoluptatem officia nam, perspiciatis reiciendis ad at explicabo ratione, modi voluptates suscipitreprehenderit rerum. Ea consectetur animi tempore eos aspernatur!"
}




function openventana(Name) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(Name).style.display = "block";  
  }