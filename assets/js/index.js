import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Clases/tipos.js";

let registroDeAnimales = [];
document.getElementById("btnRegistrar").addEventListener("click", () => {
  //Validando si el usuario ingreso los datos 
  const isOk = validandoDatos();
  if (!isOk) {
    return;
  }
 
  let nombreAnimal = document.getElementById("animal-dropdown");
  let edadAnimal = document.getElementById("edad");
  let boxPreview = document.getElementById("preview");
  let imagenBg = boxPreview.style.backgroundImage;
  let imgSrc = imagenBg.slice(5, imagenBg.length - 2);
  let boxComents = document.getElementById("comentarios");

  let nuevoAnimal;

  //Validando el tipo de Animal

  if (nombreAnimal.value === "Leon") {
    nuevoAnimal = new Leon(
      nombreAnimal.value,
      edadAnimal.value,
      imgSrc,
      boxComents.value
    );
  }

  if (nombreAnimal.value === "Lobo") {
    nuevoAnimal = new Lobo(
      nombreAnimal.value,
      edadAnimal.value,
      imgSrc,
      boxComents.value
    );
  }

  if (nombreAnimal.value === "Oso") {
    nuevoAnimal = new Oso(
      nombreAnimal.value,
      edadAnimal.value,
      imgSrc,
      boxComents.value
    );
  }
  if (nombreAnimal.value === "Serpiente") {
    nuevoAnimal = new Serpiente(
      nombreAnimal.value,
      edadAnimal.value,
      imgSrc,
      boxComents.value
    );
  }
  if (nombreAnimal.value === "Aguila") {
    nuevoAnimal = new Aguila(
      nombreAnimal.value,
      edadAnimal.value,
      imgSrc,
      boxComents.value
    );
  }

  registroDeAnimales.push(nuevoAnimal);
  tableOfInvestigations();
  clearValues();
  
});

//Imprimiendo Animales en investigaciòn
const tableOfInvestigations = () => {
  const animalsTable = document.getElementById("Animales");
  animalsTable.innerHTML = "";
  registroDeAnimales.forEach((animal) => {
    animalsTable.innerHTML += ` 
  
    <div class="card bg-secondary mb-2 mx-3" style="width: 15rem;">
      <div class="card-body">
        <img src="${animal.getImg()}" data-toggle="modal" data-target="#${animal.getNombre()}" class="card-img-top"/>
        <div class= "mt-3">
          <audio controls>
          <source src="${animal.getSonido()}" type="audio/mpeg">
          </audio>  
        </div>
      </div>
    </div>
        
       
    <div class="modal fade" id="${animal.getNombre()}" tabindex="-1" >
      <div class="modal-dialog modal-dialog-centered w-25" role="document">
        <div class="modal-content bg-dark text-white">
        <div class="modal-body">
          <img src="${animal.getImg()}" class="card-img-top" >
          <h5 class="modal-title"> ${animal.getNombre()}</h5>
          <p> Edad: ${animal.getEdad()}</p>
          <p> Comentario: ${animal.getComentarios()}</p>
        </div>
        </div>
      </div>
    </div>
    `;
  });
};

//Funcion validadora de Datos 
function validandoDatos() {
  const valEdadAnimal = document.getElementById("edad");
  const valComentarioAnimal = document.getElementById("comentarios");
  const valImgAnimal = document.getElementById("animal-dropdown");
  if (valImgAnimal.value == "Seleccione un animal" || valImgAnimal.value == "") {
    alert("Debes seleccionar un animal");
    return false;
  }
  if (valEdadAnimal.value == "Seleccione un rango de años" || valEdadAnimal.value == "" ) {
    alert("Debes seleccionar un rango de años ");
    return false;
  }
  if (valComentarioAnimal.value == "") {
    alert("Debes escribir un comentario");
    return false;
  }
  return true
}

//Funciòn que limpia los datos del formulario
function clearValues() {
  document.getElementById("edad").value= '';
  document.getElementById("comentarios").value= ''; 
  document.getElementById("animal-dropdown").value = '';
  document.getElementById("preview").style.backgroundImage = null;
}


