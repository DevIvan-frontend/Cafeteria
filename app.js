/* ===========================================================
   REVU 1910 · Casa de té y café
   Configuración, datos del menú y comportamiento del sitio.
   =========================================================== */

const CONFIG = {
  // ⬇️ REEMPLAZA por el número real de WhatsApp del negocio.
  //    Formato: lada de país + número, SIN "+", espacios ni guiones.
  //    Ejemplo México: 52 (país) + 55 1234 5678  ->  "525512345678"
  whatsapp: "521234567890",
  nombreNegocio: "REVU 1910",
};

/* ------------------------- Datos del menú ------------------------- */
const MENU = {
  paninis: {
    note: "Todos incluyen guarnición de ensalada de papa y aderezo. Pan de masa madre, multigrano o finas hierbas (Amelie Panadería).",
    items: [
      { nombre: "Pavo · Pesto", desc: "Pechuga de pavo, pesto y queso provolone", precio: 150 },
      { nombre: "Atún · Nicoise", desc: "Atún, huevo cocido y aceituna negra", precio: 140 },
      { nombre: "Roast Beef · Blue Cheese", desc: "Roast beef, tocino y queso azul", precio: 180 },
      { nombre: "Alcachofa · Albahaca", desc: "Alcachofa, albahaca y queso de cabra", precio: 170 },
    ],
  },
  postres: {
    items: [
      { nombre: "Selva Negra", desc: "Pastelillo de chocolate con licor de cereza", precio: 105 },
      { nombre: "Tartas caseras", desc: "Sabores de temporada — pregunta por existencias", precio: 95, nota: "Con nieve $135" },
      { nombre: "Cheesecake", desc: "Sabores de temporada — pregunta por existencias", precio: 80 },
      { nombre: "Tiramisú", desc: "", precio: 75 },
      { nombre: "Muffin", desc: "Sabores de temporada — pregunta por existencias", precio: 50 },
      { nombre: "Galletas", desc: "Sabores de temporada — pregunta por existencias", precio: null },
    ],
  },
};

/* Bebidas con precio caliente / helado */
const BEBIDAS = [
  { nombre: "Expresso", caliente: 55, helado: null },
  { nombre: "Expresso Americano", caliente: 60, helado: 75 },
  { nombre: "Cappuccino", caliente: 70, helado: 85 },
  { nombre: "Café Latte", caliente: 70, helado: 85 },
  { nombre: "Mocha", caliente: 80, helado: 95 },
  { nombre: "Chai Latte", caliente: 90, helado: 95 },
  { nombre: "Matcha Latte", caliente: 100, helado: 105 },
  { nombre: "Café del día", caliente: 60, helado: null, desc: "Incluye un refill" },
];

const FRAPPES = [
  { nombre: "Original", precio: 90 },
  { nombre: "Vainilla", precio: 90 },
  { nombre: "Mocha", precio: 100 },
];

const SMOOTHIES = [{ nombre: "Frutos Rojos", precio: 105 }];

const EXTRAS = [
  { nombre: "Leche de coco", precio: 20 },
  { nombre: "Almendra", precio: 20 },
  { nombre: "Soya", precio: 20 },
  { nombre: "Shot de expresso", precio: 20 },
];

const SABORES = [
  { nombre: "Vainilla", precio: 20 },
  { nombre: "Caramelo", precio: 20 },
  { nombre: "Menta", precio: 20 },
];

/* --------------------------- Helpers ----------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const precio = (n) => (n == null ? "" : `$${n}`);

function itemRow({ nombre, desc, precio: p, nota }) {
  const precioHtml = p == null
    ? `<span class="menu__price"><small>Precio de temporada</small></span>`
    : `<span class="menu__price">${precio(p)}${nota ? ` <small>· ${nota}</small>` : ""}</span>`;
  return `<li class="menu__item">
      <span class="menu__item-name">${nombre}</span>
      ${precioHtml}
      ${desc ? `<span class="menu__item-desc">${desc}</span>` : ""}
    </li>`;
}

/* ---------------------- Render de paneles ------------------------ */
function renderMenu() {
  const panels = $("#menuPanels");
  if (!panels) return;

  // Paninis
  const paninis = `
    <div class="menu__panel is-active" data-cat="paninis">
      <p class="menu__note">${MENU.paninis.note}</p>
      <ul class="menu__list">${MENU.paninis.items.map(itemRow).join("")}</ul>
    </div>`;

  // Bebidas (dual price) + frappe/smoothie + extras/sabores
  const filasBebidas = BEBIDAS.map((b) => `
    <li class="menu__item menu__item--dual">
      <span class="menu__item-name">${b.nombre}</span>
      <span class="menu__price">
        <span class="menu__price-tag">${precio(b.caliente)}<span>Caliente</span></span>
        ${b.helado != null ? `<span class="menu__price-tag">${precio(b.helado)}<span>Helada</span></span>` : ""}
      </span>
      ${b.desc ? `<span class="menu__item-desc">${b.desc}</span>` : ""}
    </li>`).join("");

  const bebidas = `
    <div class="menu__panel" data-cat="bebidas">
      <p class="menu__note">¿La quieres GRANDE? +$20 en cualquier bebida.</p>
      <div class="menu__group">
        <h3 class="menu__group-title">Cafés &amp; tés</h3>
        <ul class="menu__list">${filasBebidas}</ul>
      </div>
      <div class="menu__group">
        <h3 class="menu__group-title">Frappés</h3>
        <ul class="menu__list">${FRAPPES.map(itemRow).join("")}</ul>
      </div>
      <div class="menu__group">
        <h3 class="menu__group-title">Smoothies</h3>
        <ul class="menu__list">${SMOOTHIES.map(itemRow).join("")}</ul>
      </div>
      <div class="menu__addons">
        <div class="menu__addon-card">
          <h4>Extras</h4>
          <ul>${EXTRAS.map((e) => `<li>${e.nombre}<span>${precio(e.precio)}</span></li>`).join("")}</ul>
        </div>
        <div class="menu__addon-card">
          <h4>¡Saboriza tu bebida!</h4>
          <ul>${SABORES.map((s) => `<li>${s.nombre}<span>${precio(s.precio)}</span></li>`).join("")}</ul>
        </div>
      </div>
    </div>`;

  // Postres
  const postres = `
    <div class="menu__panel" data-cat="postres">
      <ul class="menu__list">${MENU.postres.items.map(itemRow).join("")}</ul>
    </div>`;

  // Servicio de té
  const servicio = `
    <div class="menu__panel" data-cat="servicio">
      <div class="menu__tea">
        <h3>Servicio de postres</h3>
        <p>Combinación de aperitivos dulces y salados, servidos en torre. Los postres varían por temporada.</p>
        <div class="menu__tea-prices">
          <div><strong>$315</strong><span>1 – 2 personas</span></div>
          <div><strong>$580</strong><span>4 personas</span></div>
        </div>
        <a class="btn btn--gold" href="#reservar">Reservar servicio de té</a>
      </div>
    </div>`;

  panels.innerHTML = paninis + bebidas + postres + servicio;
}

/* ----------------------- Pestañas del menú ----------------------- */
function initTabs() {
  const tabs = $$(".menu__tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const cat = tab.dataset.cat;
      tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      $$(".menu__panel").forEach((p) =>
        p.classList.toggle("is-active", p.dataset.cat === cat)
      );
    });
  });
}

/* --------------------------- Galería ----------------------------- */
const GALERIA = [
  { src: "images/galeria-1.jpg", alt: "Fachada de REVU 1910", etiqueta: "La fachada" },
  { src: "images/galeria-2.jpg", alt: "Café de especialidad", etiqueta: "El café" },
  { src: "images/galeria-3.jpg", alt: "Postres caseros", etiqueta: "Los postres" },
  { src: "images/galeria-4.jpg", alt: "Interior de la casa de té", etiqueta: "El rincón" },
  { src: "images/galeria-5.jpg", alt: "Servicio de té", etiqueta: "Servicio de té" },
  { src: "images/galeria-6.jpg", alt: "Paninis artesanales", etiqueta: "Paninis" },
];

function renderGaleria() {
  const cont = $("#gallery");
  if (!cont) return;
  cont.innerHTML = GALERIA.map((g) => `
    <figure class="gallery__item">
      <img src="${g.src}" alt="${g.alt}" loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='grid';" />
      <div class="gallery__ph" style="display:none">
        ✦ ${g.etiqueta}
        <small>Agrega ${g.src}</small>
      </div>
    </figure>`).join("");
}

/* ---------------------- Reservar por WhatsApp -------------------- */
function initReserva() {
  const form = $("#reservaForm");
  const hint = $("#waHint");
  const waLink = $("#waLink");
  const waFloat = $("#waFloat");

  const numeroListo = CONFIG.whatsapp && !CONFIG.whatsapp.startsWith("52123");

  // Enlaces directos (footer + botón flotante) a un chat sencillo
  const saludo = encodeURIComponent(
    `¡Hola ${CONFIG.nombreNegocio}! Me gustaría más información / reservar una mesa.`
  );
  const chatUrl = `https://wa.me/${CONFIG.whatsapp}?text=${saludo}`;
  if (waLink) waLink.href = chatUrl;
  if (waFloat) waFloat.href = chatUrl;

  if (hint && !numeroListo) {
    hint.textContent = "⚠️ Configura el número de WhatsApp en app.js (CONFIG.whatsapp).";
  }

  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const fecha = d.get("fecha");
    const fechaTxt = fecha
      ? new Date(fecha + "T00:00").toLocaleDateString("es-MX", {
          weekday: "long", day: "numeric", month: "long",
        })
      : "";

    const lineas = [
      `¡Hola ${CONFIG.nombreNegocio}! Quiero reservar una mesa 🫖`,
      "",
      `👤 Nombre: ${d.get("nombre")}`,
      `👥 Personas: ${d.get("personas")}`,
      `📅 Fecha: ${fechaTxt}`,
      `🕒 Hora: ${d.get("hora")}`,
    ];
    const notas = (d.get("notas") || "").trim();
    if (notas) lineas.push(`📝 Notas: ${notas}`);

    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lineas.join("\n"))}`;
    window.open(url, "_blank", "noopener");
    if (hint) hint.textContent = "Abriendo WhatsApp… si no abre, revisa tu bloqueador de ventanas.";
  });
}

/* ------------------- Menú móvil + reveal + año ------------------- */
function initUI() {
  const toggle = $("#navToggle");
  const links = $(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("is-open"));
    links.addEventListener("click", (e) => {
      if (e.target.tagName === "A") links.classList.remove("is-open");
    });
  }

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Reveal al hacer scroll
  const targets = $$(".section, .pillar, .gallery__item");
  targets.forEach((t) => t.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((t) => io.observe(t));
  } else {
    targets.forEach((t) => t.classList.add("is-visible"));
  }
}

/* ----------------------------- Init ------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  initTabs();
  renderGaleria();
  initReserva();
  initUI();
});
