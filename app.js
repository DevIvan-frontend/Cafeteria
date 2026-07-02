// Menú de la cafetería: nombre y precio (en pesos).
const menu = [
  { nombre: "Café americano", precio: 30 },
  { nombre: "Capuchino", precio: 45 },
  { nombre: "Latte", precio: 45 },
  { nombre: "Croissant", precio: 35 },
];

function renderMenu(items) {
  const lista = document.getElementById("menu");
  if (!lista) return;
  lista.innerHTML = items
    .map(
      (item) =>
        `<li><span>${item.nombre}</span><span>$${item.precio}</span></li>`
    )
    .join("");
}

renderMenu(menu);
