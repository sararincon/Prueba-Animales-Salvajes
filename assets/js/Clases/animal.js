class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    let Nombre = nombre;
    let Edad = edad;
    let Img = img;
    let Comentarios = comentarios;
    let Sonido = sonido;

    this.getNombre = () => Nombre;
    this.getEdad = () => Edad;
    this.getImg = () => Img;
    this.getComentarios = () => Comentarios;
    this.getSonido = () => Sonido;

    this.setComentarios = (comentarios) => (Comentarios = comentarios);
  }
  get Nombre() {
    return this.getNombre;
  }
  get Edad() {
    return this.getEdad;
  }
  get Img() {
    return this.getImg;
  }
  set Comentarios(comentarios) {
    return this.getComentarios(comentarios);
  }
  get Sonido() {
    return this.getSonido();
  }
}

export default Animal;

// console.log(new Animal("perro", "56", "..", "hola hola", "miau"));
