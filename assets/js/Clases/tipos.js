import Animal from "./animal.js";

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios) {
    super(nombre, edad, img, comentarios, "./assets/sounds/Rugido.mp3");
  }

  Rugir() {}
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios) {
    super(nombre, edad, img, comentarios, "./assets/sounds/Aullido.mp3");
  }
  Aullar() {}
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios) {
    super(nombre, edad, img, comentarios, "./assets/sounds/Gruñido.mp3");
  }
  Gruñir() {}
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios) {
    super(nombre, edad, img, comentarios, "./assets/sounds/Siseo.mp3");
  }
  Sisear() {}
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios) {
    super(nombre, edad, img, comentarios, "./assets/sounds/Chillido.mp3");
  }
  Chillar() {}
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
