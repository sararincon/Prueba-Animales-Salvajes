import todosAnimales from "./consulta.js";

async function findAnimal(animalName) {
  const { animales } = await todosAnimales.getData();
  const selectedAnimal = animales.find(({ name }) => name === animalName);
  return selectedAnimal;
}

document
  .getElementById("animal-dropdown")
  .addEventListener("change", async ({ target }) => {
    const selectedAnimalName = target.value; // la seleccion del animal en el dropdown
    const selectedAnimal = await findAnimal(selectedAnimalName);
    const imagePath = `./assets/imgs/${selectedAnimal.imagen}`; //Creación del Path
    // const img = `<img width="200" src="${imagePath}" />`;
    document.getElementById(
      "preview"
    ).style.backgroundImage = `url(${imagePath})`;
    // document.getElementById("preview").innerHTML = img;
  });
