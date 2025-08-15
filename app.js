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

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.textContent = palo;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.textContent = valor;

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");
  cardFooter.textContent = palo;

  newCard.appendChild(cardHeader);
  newCard.appendChild(cardBody);
  newCard.appendChild(cardFooter);

  return newCard;
};

// Funcion que roba las cartas aleatorias dependiendo de cuantas quiere robar el usuario
function robarCartas(cantidad) {
  if (cantidad < 1) {
    alert("NO PUEDES ROBAR MENOS DE UNA CARTA!");
    return;
  }
  container.innerHTML = "";
  listaDeCartas = [];
  for (let i = 0; i < cantidad; i++) {
    let valorCarta = Math.floor(Math.random() * valores.length);
    const valorPalo = Math.floor(Math.random() * palos.length);
    let carta = crearCarta(valores[valorCarta], palos[valorPalo]);
    container.appendChild(carta);
    listaDeCartas.push({ valor: valores[valorCarta], palos: palos[valorPalo] });
    console.log(listaDeCartas);
  }
}

draw.addEventListener("click", () => {
  let cantidad = Number(cartas.value);
  robarCartas(cantidad);
});
