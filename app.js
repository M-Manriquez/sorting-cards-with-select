let draw = document.getElementById("robarcartas");
let ordenar = document.getElementById("ordenarcartas");
let container = document.getElementById("cardcontainer");
let cartas = document.getElementById("cantidadcartas");
let sort = document.getElementById("ordenarcartas");
let sortContainer = document.getElementById("sortcontainer");

//const valores = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
const valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const palo = ["♦", "♥", "♠", "♣"];
let listaDeCartas = [];

//Funcion que convierte los valores de la carta a su valor visual
const obtenerValorVisual = (valor) => {
  switch (valor) {
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    case 14:
      return "A";
    default:
      return valor;
  }
};

// Funcion que crea una carta
const crearCarta = (valor, palo) => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.classList.add("mx-3");
  newCard.classList.add("shadow");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.classList.add("border-0");
  cardHeader.textContent = palo;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.classList.add("text-center");
  cardBody.textContent = obtenerValorVisual(valor);

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");
  cardFooter.textContent = palo;

  // Condicional para el color del palo
  if (palo == "♦" || palo == "♥") {
    cardHeader.classList.add("heart-diamond");
    cardFooter.classList.add("heart-diamond");
  }

  newCard.appendChild(cardHeader);
  newCard.appendChild(cardBody);
  newCard.appendChild(cardFooter);

  return newCard;
};

// Funcion que roba las cartas aleatorias dependiendo de cuantas quiere robar el usuario
function robarCartas(cantidad) {
  // Si se ingresa un valor inferior o igual a 0 da error
  if (cantidad < 1) {
    alert("NO PUEDES ROBAR MENOS DE UNA CARTA!");
    return;
  }

  // Limpia la mesa antes de enseñar las cartas nuevas
  container.innerHTML = "";

  // Vacía la lista de cartas cada vez que se roban nuevas cartas
  listaDeCartas = [];

  for (let i = 0; i < cantidad; i++) {
    // cada vez que itera, crea valores aleatorios nuevos
    let valorCarta = Math.floor(Math.random() * valores.length);
    const valorPalo = Math.floor(Math.random() * palo.length);

    // Crea una carta dando como valores los valores aleatorios antes creados
    let carta = crearCarta(valores[valorCarta], palo[valorPalo]);

    // Une la carta creada al div que las almacena
    container.appendChild(carta);

    // Se agregan los valores de las cartas a la lista de cartas para poder sortearlas
    listaDeCartas.push({ valor: valores[valorCarta], palo: palo[valorPalo] });
    console.log(listaDeCartas);
  }
}

// Funcion que ordena las cartas utilizando el metodo select sort
function selectSort(cartas) {
  // Variable que almacena el largo del array de cartas
  const cantidadCartas = cartas.length;

  // Bucle que contiene el select sort
  for (let i = 0; i < cantidadCartas - 1; i++) {
    // Variable que almacena el indice del valor mas pequeño
    let min = i;

    // Bucle que recorre el array de cartas buscando el numero menor
    for (let j = i + 1; j < cantidadCartas; j++) {
      // Si el valor que esta en el indice J es menor que el valor que esta en el indice min, entonces min pasa a tener el valor de j
      if (cartas[j].valor < cartas[min].valor) min = j;
    }
    // Variables auxiliares para el valor de la carta y su palo
    let tempValor = cartas[i].valor;
    let tempPalo = cartas[i].palo;

    // Intercambio de valores
    cartas[i].valor = cartas[min].valor;
    cartas[i].palo = cartas[min].palo;
    cartas[min].valor = tempValor;
    cartas[min].palo = tempPalo;
  }
  return cartas;
}

function ordenarCartas(cartas) {
  // Si se ingresa un valor inferior o igual a 0 da error
  if (cartas.length < 1) {
    alert("PARA ORDENAR LAS CARTAS PRIMERO NECESITAS ROBARLAS!");
    return;
  }

  // Limpia la mesa antes de enseñar las cartas nuevas
  sortContainer.innerHTML = "";

  selectSort(listaDeCartas);

  for (let i = 0; i < cartas.length; i++) {
    let carta = crearCarta(listaDeCartas[i].valor, listaDeCartas[i].palo);
    sortContainer.appendChild(carta);
  }
}

// EventListeners que hacen la magia
draw.addEventListener("click", () => {
  const cantidad = Number(cartas.value);
  robarCartas(cantidad);
});

sort.addEventListener("click", () => {
  ordenarCartas(listaDeCartas);
});
