






//* push fondo *//

const body = document.querySelector("body");
const Boton_fondo = document.getElementById("Boton_fondo");


Boton_fondo.onclick = function () {
  Boton_fondo.classList.toggle("active_fondo");
  body.classList.toggle("active_fondo");

};



//*boton activar menu_oculto*//

let togglebtn = document.querySelector(".togglebtn_swuish");
let container = document.querySelector(".container-menu_oculto");

togglebtn.onclick = function () {
  container.classList.toggle("active_text");
};


//*barra de navegacion menu hamburguesa*//

const cont_Boton_menu = document.querySelector(".cont_Boton_menu");
const navigation = document.querySelector(".navigation");
const icon = document.querySelector(".icon");


cont_Boton_menu.onclick = function () {
  navigation.classList.toggle("open")
  icon.classList.toggle("open")
}


/** Boton contacto activar conte formulario */
let BotonContacto = document.querySelector(".boton_contacto");
let ContenedorFormulario = document.querySelector(".conten_form")
let cerrarform = document.querySelector(".Cerrar_formulario");

BotonContacto.onclick = function () {
  ContenedorFormulario.classList.toggle("visibleform")

  cerrarform.onclick = function () {
    ContenedorFormulario.classList.remove("visibleform")
  }
}





//* barra de navegacion lateral*//

const list = document.querySelectorAll(".list");
function activar_links() {
  list.forEach((item) =>
    item.classList.remove("active"))

  this.classList.add("active")
}
list.forEach((item) =>
  item.addEventListener("click", activar_links))



/**++++++++++++++++++slider CARDS++++++++++++++++++++ */



document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide_cards').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide_cards').prepend(lists[lists.length - 1]);
}






/** INCREMENTADORES PROYECTOS */
let numero_pro = 0;
const valorMaximo_pro = 123;
const Number_incrementadores_proyectos = document.getElementById('Number_incrementadores_proyectos');

function incrementarYMostrar_proy() {
  numero_pro++;
  if (numero_pro <= valorMaximo_pro) {
    Number_incrementadores_proyectos.textContent = numero_pro;
  }
  if (numero_pro > valorMaximo_pro) {
    numero_pro = 0;
    setTimeout(incrementarYMostrar_proy, 2500); // Pausa de 2 segundos antes de reiniciar
  } else {
    setTimeout(incrementarYMostrar_proy, 15); // Incrementa cada segundo (1000 ms)
  }
}

incrementarYMostrar_proy();


/** INCREMENTADORES RESEÑAS */
let numero_reseñas = 0;
const valorMaximo_reseñas = 62;
const Number_incrementadores_reseñas = document.getElementById('Number_incrementadores_reseñas');

function incrementarYMostrar_reseñas() {
  numero_reseñas++;
  if (numero_reseñas <= valorMaximo_reseñas) {
    Number_incrementadores_reseñas.textContent = numero_reseñas;
  }
  if (numero_reseñas > valorMaximo_reseñas) {
    numero_reseñas = 0;
    setTimeout(incrementarYMostrar_reseñas, 2000); // Pausa de 2 segundos antes de reiniciar
  } else {
    setTimeout(incrementarYMostrar_reseñas, 15); // Incrementa cada segundo (1000 ms)
  }
}

incrementarYMostrar_reseñas();
/** INCREMENTADORES SEGUIDORES */
let numero_seguidores = 700;
const valorMaximo_seguidores = 845;
const Number_incrementadores_seguidores = document.getElementById('Number_incrementadores_seguidores');

function incrementarYMostrar_seguidores() {
  numero_seguidores++;
  if (numero_seguidores <= valorMaximo_seguidores) {
    Number_incrementadores_seguidores.textContent = numero_seguidores;
  }
  if (numero_seguidores > valorMaximo_seguidores) {
    numero_seguidores = 700;
    setTimeout(incrementarYMostrar_seguidores, 3000); // Pausa de 2 segundos antes de reiniciar
  } else {
    setTimeout(incrementarYMostrar_seguidores, 2); // Incrementa cada segundo (1000 ms)
  }
}

incrementarYMostrar_seguidores();


/**  CONTEOL DE ANIMACION ACTIVE EN MOBIL */

const finalLayers = document.querySelector('.final__layers');

finalLayers.addEventListener('click', () => {
  finalLayers.classList.toggle('active');
});

/**  ANIMACIONES QUE SE ACTIVAN CON SCROOL */

