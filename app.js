let draw = document.getElementById("robarcartas");
let ordenar = document.getElementById("ordenarcartas");
let container = document.getElementById("cardcontainer");
let cartas = document.getElementById("cantidadcartas");

const valores = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
const palos = ["♦", "♥", "♠", "♣"];
let listaDeCartas = [];

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
  cardBody.textContent = valor;

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");
  cardFooter.textContent = palo;

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
    const valorPalo = Math.floor(Math.random() * palos.length);

    // Crea una carta dando como valores los valores aleatorios antes creados
    let carta = crearCarta(valores[valorCarta], palos[valorPalo]);

    // Une la carta creada al div que las almacena
    container.appendChild(carta);

    // Se agregan los valores de las cartas a la lista de cartas para poder sortearlas
    listaDeCartas.push({ valor: valores[valorCarta], palos: palos[valorPalo] });
    console.log(listaDeCartas);
  }
}

// EventListener que hace la magia
draw.addEventListener("click", () => {
  let cantidad = Number(cartas.value);
  robarCartas(cantidad);
});
