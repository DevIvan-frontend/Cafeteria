/* ===========================================================
   REVU 1910 · Casa de té y café
   Configuración, datos del menú, i18n (es/en) y comportamiento.
   =========================================================== */

const CONFIG = {
  // Número de WhatsApp del negocio: 52 (México) + 612 291 0636.
  // Si algún teléfono no abre el chat, prueba con "5216122910636".
  whatsapp: "526122910636",
  nombreNegocio: "REVU 1910",
  // Horario de reservaciones (formato 24h). El local abre 16:00–22:00;
  // la última mesa se agenda 30 min antes del cierre.
  horario: { desde: 16, hasta: 22 },
};

/* ============================ Idioma ============================= */
let LANG = "es";

/** Detecta el idioma: preferencia guardada > idioma del dispositivo.
 *  Español si el dispositivo está en español; para cualquier otro
 *  idioma, el predeterminado es inglés. */
function detectLang() {
  const saved = localStorage.getItem("revu-lang");
  if (saved === "es" || saved === "en") return saved;
  const nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  return nav.startsWith("es") ? "es" : "en";
}

/* Diccionario de textos estáticos (data-i18n en el HTML). */
const I18N = {
  "nav.about":        { es: "Nosotros", en: "About" },
  "nav.menu":         { es: "Menú", en: "Menu" },
  "nav.gallery":      { es: "Galería", en: "Gallery" },
  "nav.visit":        { es: "Visítanos", en: "Visit" },
  "nav.reserve":      { es: "Reservar", en: "Reserve" },

  "hero.eyebrow":     { es: "Casa de té & café", en: "Tea & coffee house" },
  "hero.script":      { es: "Un rincón de otra época", en: "A corner from another era" },
  "hero.lead":        {
    es: "Cafés de especialidad, tés selectos, paninis artesanales y postres caseros, servidos con el encanto de principios del siglo XX.",
    en: "Specialty coffees, fine teas, artisan paninis and homemade desserts, served with the charm of the early 20th century.",
  },
  "hero.cta1":        { es: "Reservar por WhatsApp", en: "Book on WhatsApp" },
  "hero.cta2":        { es: "Ver el menú", en: "See the menu" },

  "about.title":      { es: "Nuestra casa", en: "Our house" },
  "about.intro":      {
    es: "Entre muros de ladrillo y herrería verdigris, REVU 1910 recupera la calidez de las antiguas casas de té. Cada taza se prepara con calma, cada postre se hornea en casa y cada visita es una pausa fuera del tiempo.",
    en: "Between brick walls and verdigris ironwork, REVU 1910 revives the warmth of old tea houses. Every cup is made with care, every dessert is baked in-house, and every visit is a pause outside of time.",
  },
  "pillar.coffee.title": { es: "Café de especialidad", en: "Specialty coffee" },
  "pillar.coffee.text":  { es: "Espresso, latte, mocha y matcha preparados por baristas, calientes o helados.", en: "Espresso, latte, mocha and matcha prepared by baristas, hot or iced." },
  "pillar.tea.title":    { es: "Tés selectos", en: "Fine teas" },
  "pillar.tea.text":     { es: "Chai, matcha e infusiones de temporada servidos en vajilla de época.", en: "Chai, matcha and seasonal infusions served in vintage china." },
  "pillar.dessert.title":{ es: "Postres caseros", en: "Homemade desserts" },
  "pillar.dessert.text": { es: "Selva negra, cheesecake, tiramisú y tartas de temporada recién hechas.", en: "Black forest, cheesecake, tiramisu and freshly made seasonal cakes." },

  "era.title":        { es: "El año que nos da nombre", en: "The year that gives us our name" },
  "era.text":         {
    es: "Nuestra casa vive sobre la Calle Revolución, bautizada en honor a 1910. De aquella época tomamos lo mejor: la sobremesa larga, la vajilla fina y el gusto por recibir como se recibía entonces.",
    en: "Our house sits on Revolución Street, named in honor of 1910. From that era we keep the best: long conversations at the table, fine china, and the art of hosting the way it was done back then.",
  },
  "era.caption":      { es: "México, 1911 · fotografía de época — dominio público", en: "Mexico, 1911 · period photograph — public domain" },

  "menu.title":       { es: "El menú", en: "The menu" },
  "menu.card":        { es: "Menú", en: "Menu" },
  "menu.intro":       { es: "Precios en pesos mexicanos. Algunos sabores varían por temporada — pregunta por existencias.", en: "Prices in Mexican pesos. Some flavors vary by season — ask about availability." },
  "menu.tab.paninis": { es: "Paninis", en: "Paninis" },
  "menu.tab.drinks":  { es: "Bebidas", en: "Drinks" },
  "menu.tab.desserts":{ es: "Postres", en: "Desserts" },
  "menu.tab.tea":     { es: "Servicio de té", en: "Tea service" },

  "gallery.title":    { es: "Galería", en: "Gallery" },
  "gallery.intro":    { es: "Un vistazo a nuestro rincón.", en: "A glimpse of our corner." },

  "reserve.title":    { es: "Reserva tu mesa", en: "Book your table" },
  "reserve.intro":    { es: "Completa los datos y te llevaremos a WhatsApp con tu mensaje ya listo para enviar.", en: "Fill in the details and we'll take you to WhatsApp with your message ready to send." },
  "form.name":        { es: "Nombre", en: "Name" },
  "form.people":      { es: "Personas", en: "Guests" },
  "form.date":        { es: "Fecha", en: "Date" },
  "form.time":        { es: "Hora", en: "Time" },
  "form.notes":       { es: "Notas", en: "Notes" },
  "form.optional":    { es: "(opcional)", en: "(optional)" },
  "form.namePh":      { es: "Tu nombre", en: "Your name" },
  "form.notesPh":     { es: "Cumpleaños, servicio de té, alergias…", en: "Birthday, tea service, allergies…" },
  "form.timePh":      { es: "Elige una hora", en: "Choose a time" },
  "form.submit":      { es: "Enviar por WhatsApp", en: "Send via WhatsApp" },

  "map.title":        { es: "Cómo llegar", en: "Find us" },
  "footer.cross":     { es: "e/ Reforma e Independencia", en: "between Reforma & Independencia" },
  "footer.maps":      { es: "Ver en Google Maps →", en: "View on Google Maps →" },
  "footer.tag":       { es: "Casa de té & café", en: "Tea & coffee house" },
  "footer.hoursTitle":{ es: "Horario", en: "Hours" },
  "footer.hoursValue":{ es: "Todos los días<br />16:00 – 22:00", en: "Every day<br />4:00 – 10:00 PM" },
  "footer.contactTitle": { es: "Contacto", en: "Contact" },
  "footer.contactSub":{ es: "Reserva en línea", en: "Book online" },
  "footer.locationTitle": { es: "Ubicación", en: "Location" },
  "footer.love":      { es: "Hecho con cariño.", en: "Made with love." },
  "footer.credit":    { es: "Fotografía histórica (México, 1911): dominio público, Wikimedia Commons.", en: "Historical photograph (Mexico, 1911): public domain, Wikimedia Commons." },
  "aside.note":       { es: "Para grupos grandes, eventos o servicio de té completo, escríbenos por WhatsApp.", en: "For large groups, events or full tea service, message us on WhatsApp." },

  // Textos del menú generado por JS
  "m.paninis.note":   { es: "Todos incluyen guarnición de ensalada de papa y aderezo. Pan de masa madre, multigrano o finas hierbas (Amelie Panadería).", en: "All include a side of potato salad and dressing. Sourdough, multigrain or fine-herb bread (Amelie Bakery)." },
  "m.drinks.note":    { es: "¿La quieres GRANDE? +$20 en cualquier bebida.", en: "Want it LARGE? +$20 on any drink." },
  "m.group.coffee":   { es: "Cafés & tés", en: "Coffee & tea" },
  "m.group.frappe":   { es: "Frappés", en: "Frappés" },
  "m.group.smoothie": { es: "Smoothies", en: "Smoothies" },
  "m.hot":            { es: "Caliente", en: "Hot" },
  "m.iced":           { es: "Helada", en: "Iced" },
  "m.extras":         { es: "Extras", en: "Add-ons" },
  "m.flavors":        { es: "¡Saboriza tu bebida!", en: "Flavor your drink!" },
  "m.seasonalPrice":  { es: "Precio de temporada", en: "Seasonal price" },
  "m.tea.title":      { es: "Servicio de postres", en: "Dessert service" },
  "m.tea.text":       { es: "Combinación de aperitivos dulces y salados, servidos en torre. Los postres varían por temporada.", en: "A tower of sweet and savory bites. Desserts vary by season." },
  "m.tea.p12":        { es: "1 – 2 personas", en: "1 – 2 people" },
  "m.tea.p4":         { es: "4 personas", en: "4 people" },
  "m.tea.cta":        { es: "Reservar servicio de té", en: "Book tea service" },
};

function t(key) {
  const entry = I18N[key];
  return entry ? entry[LANG] : key;
}
/** Devuelve el valor correcto de un campo que puede ser string o {es,en}. */
function tr(field) {
  if (field == null) return "";
  return typeof field === "string" ? field : field[LANG] || field.es || "";
}

/* ------------------------- Datos del menú ------------------------- */
const MENU = {
  paninis: [
    { nombre: "Pavo · Pesto", desc: { es: "Pechuga de pavo, pesto y queso provolone", en: "Turkey breast, pesto and provolone cheese" }, precio: 150 },
    { nombre: "Atún · Nicoise", desc: { es: "Atún, huevo cocido y aceituna negra", en: "Tuna, boiled egg and black olive" }, precio: 140 },
    { nombre: "Roast Beef · Blue Cheese", desc: { es: "Roast beef, tocino y queso azul", en: "Roast beef, bacon and blue cheese" }, precio: 180 },
    { nombre: "Alcachofa · Albahaca", desc: { es: "Alcachofa, albahaca y queso de cabra", en: "Artichoke, basil and goat cheese" }, precio: 170 },
  ],
  postres: [
    { nombre: "Selva Negra", desc: { es: "Pastelillo de chocolate con licor de cereza", en: "Chocolate cake with cherry liqueur" }, precio: 105 },
    { nombre: "Tartas caseras", desc: { es: "Sabores de temporada — pregunta por existencias", en: "Seasonal flavors — ask about availability" }, precio: 95, nota: { es: "Con nieve $135", en: "With ice cream $135" } },
    { nombre: "Cheesecake", desc: { es: "Sabores de temporada — pregunta por existencias", en: "Seasonal flavors — ask about availability" }, precio: 80 },
    { nombre: "Tiramisú", desc: "", precio: 75 },
    { nombre: "Muffin", desc: { es: "Sabores de temporada — pregunta por existencias", en: "Seasonal flavors — ask about availability" }, precio: 50 },
    { nombre: "Galletas", desc: { es: "Sabores de temporada — pregunta por existencias", en: "Seasonal flavors — ask about availability" }, precio: null },
  ],
};

const BEBIDAS = [
  { nombre: "Expresso", caliente: 55, helado: null },
  { nombre: "Expresso Americano", caliente: 60, helado: 75 },
  { nombre: "Cappuccino", caliente: 70, helado: 85 },
  { nombre: "Café Latte", caliente: 70, helado: 85 },
  { nombre: "Mocha", caliente: 80, helado: 95 },
  { nombre: "Chai Latte", caliente: 90, helado: 95 },
  { nombre: "Matcha Latte", caliente: 100, helado: 105 },
  { nombre: "Café del día", caliente: 60, helado: null, desc: { es: "Incluye un refill", en: "Includes one refill" } },
];

const FRAPPES = [
  { nombre: "Original", precio: 90 },
  { nombre: "Vainilla", precio: 90 },
  { nombre: "Mocha", precio: 100 },
];

const SMOOTHIES = [{ nombre: { es: "Frutos Rojos", en: "Red Berries" }, precio: 105 }];

const EXTRAS = [
  { nombre: { es: "Leche de coco", en: "Coconut milk" }, precio: 20 },
  { nombre: { es: "Almendra", en: "Almond milk" }, precio: 20 },
  { nombre: { es: "Soya", en: "Soy milk" }, precio: 20 },
  { nombre: { es: "Shot de expresso", en: "Espresso shot" }, precio: 20 },
];

const SABORES = [
  { nombre: { es: "Vainilla", en: "Vanilla" }, precio: 20 },
  { nombre: { es: "Caramelo", en: "Caramel" }, precio: 20 },
  { nombre: { es: "Menta", en: "Mint" }, precio: 20 },
];

/* --------------------------- Helpers ----------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const precio = (n) => (n == null ? "" : `$${n}`);

function itemRow(item) {
  const p = item.precio;
  const nombre = tr(item.nombre);
  const desc = tr(item.desc);
  const nota = item.nota ? tr(item.nota) : "";
  const precioHtml = p == null
    ? `<span class="menu__price"><small>${t("m.seasonalPrice")}</small></span>`
    : `<span class="menu__price">${precio(p)}${nota ? ` <small>· ${nota}</small>` : ""}</span>`;
  return `<li class="menu__item">
      <span class="menu__item-name">${nombre}</span>
      <span class="menu__leader" aria-hidden="true"></span>
      ${precioHtml}
      ${desc ? `<span class="menu__item-desc">${desc}</span>` : ""}
    </li>`;
}

/* ---------------------- Render de paneles ------------------------ */
function renderMenu() {
  const panels = $("#menuPanels");
  if (!panels) return;

  const activeCat = $(".menu__tab.is-active")?.dataset.cat || "paninis";

  const paninis = `
    <div class="menu__panel" data-cat="paninis">
      <p class="menu__note">${t("m.paninis.note")}</p>
      <ul class="menu__list menu__list--cols">${MENU.paninis.map(itemRow).join("")}</ul>
    </div>`;

  const filasBebidas = BEBIDAS.map((b) => `
    <li class="menu__item menu__item--dual">
      <span class="menu__item-name">${tr(b.nombre)}</span>
      <span class="menu__leader" aria-hidden="true"></span>
      <span class="menu__price">
        <span class="menu__price-tag">${precio(b.caliente)}<span>${t("m.hot")}</span></span>
        ${b.helado != null ? `<span class="menu__price-tag">${precio(b.helado)}<span>${t("m.iced")}</span></span>` : ""}
      </span>
      ${b.desc ? `<span class="menu__item-desc">${tr(b.desc)}</span>` : ""}
    </li>`).join("");

  const bebidas = `
    <div class="menu__panel" data-cat="bebidas">
      <p class="menu__note">${t("m.drinks.note")}</p>
      <div class="menu__group">
        <h3 class="menu__group-title">${t("m.group.coffee")}</h3>
        <ul class="menu__list">${filasBebidas}</ul>
      </div>
      <div class="menu__group">
        <h3 class="menu__group-title">${t("m.group.frappe")}</h3>
        <ul class="menu__list">${FRAPPES.map(itemRow).join("")}</ul>
      </div>
      <div class="menu__group">
        <h3 class="menu__group-title">${t("m.group.smoothie")}</h3>
        <ul class="menu__list">${SMOOTHIES.map(itemRow).join("")}</ul>
      </div>
      <div class="menu__addons">
        <div class="menu__addon-card">
          <h4>${t("m.extras")}</h4>
          <ul>${EXTRAS.map((e) => `<li>${tr(e.nombre)}<span>${precio(e.precio)}</span></li>`).join("")}</ul>
        </div>
        <div class="menu__addon-card">
          <h4>${t("m.flavors")}</h4>
          <ul>${SABORES.map((s) => `<li>${tr(s.nombre)}<span>${precio(s.precio)}</span></li>`).join("")}</ul>
        </div>
      </div>
    </div>`;

  const postres = `
    <div class="menu__panel" data-cat="postres">
      <ul class="menu__list menu__list--cols">${MENU.postres.map(itemRow).join("")}</ul>
    </div>`;

  const servicio = `
    <div class="menu__panel" data-cat="servicio">
      <div class="menu__tea">
        <h3>${t("m.tea.title")}</h3>
        <p>${t("m.tea.text")}</p>
        <div class="menu__tea-prices">
          <div><strong>$315</strong><span>${t("m.tea.p12")}</span></div>
          <div><strong>$580</strong><span>${t("m.tea.p4")}</span></div>
        </div>
        <a class="btn btn--gold" href="#reservar">${t("m.tea.cta")}</a>
      </div>
    </div>`;

  panels.innerHTML = paninis + bebidas + postres + servicio;
  // Mantiene la pestaña activa tras un cambio de idioma
  $$(".menu__panel").forEach((p) => p.classList.toggle("is-active", p.dataset.cat === activeCat));
}

/* ----------------------- Pestañas del menú ----------------------- */
function initTabs() {
  const tabs = $$(".menu__tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const cat = tab.dataset.cat;
      tabs.forEach((tb) => tb.classList.toggle("is-active", tb === tab));
      $$(".menu__panel").forEach((p) =>
        p.classList.toggle("is-active", p.dataset.cat === cat)
      );
    });
  });
}

/* --------------------------- Galería ----------------------------- */
const GALERIA = [
  { src: "images/galeria-panini.jpg", alt: { es: "Panini artesanal con guarnición", en: "Artisan panini with side" }, etiqueta: { es: "Paninis", en: "Paninis" } },
  { src: "images/especialidad-postres.jpg", alt: { es: "Cheesecake de fresa", en: "Strawberry cheesecake" }, etiqueta: { es: "Cheesecake", en: "Cheesecake" } },
  { src: "images/galeria-cupcake.jpg", alt: { es: "Cupcake con detalle de corazón", en: "Cupcake with heart topper" }, etiqueta: { es: "Repostería", en: "Bakery" } },
  { src: "images/especialidad-te.jpg", alt: { es: "Matcha y lattes en vajilla de época", en: "Matcha and lattes in vintage china" }, etiqueta: { es: "Tés & lattes", en: "Teas & lattes" } },
  { src: "images/especialidad-cafe.jpg", alt: { es: "Capuchino en taza floral", en: "Cappuccino in floral cup" }, etiqueta: { es: "El café", en: "The coffee" } },
];

function renderGaleria() {
  const cont = $("#gallery");
  if (!cont) return;
  cont.innerHTML = GALERIA.map((g) => `
    <figure class="gallery__item">
      <img src="${g.src}" alt="${tr(g.alt)}" loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='grid';" />
      <div class="gallery__ph" style="display:none">✦ ${tr(g.etiqueta)}</div>
      <figcaption class="gallery__caption">
        <strong>${tr(g.etiqueta)}</strong>
        <small>REVU 1910 · La Paz</small>
      </figcaption>
    </figure>`).join("");
}

/* -------------------- Selector de hora (12h) --------------------- */
/** Formatea una hora 24h (h, m) a texto de 12 horas: "4:30 PM". */
function to12h(h, m) {
  const ampm = h >= 12 ? "PM" : "AM";
  let hour = h % 12;
  if (hour === 0) hour = 12;
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

function renderHoras() {
  const sel = $("#horaSelect");
  if (!sel) return;
  const prev = sel.value;
  const { desde, hasta } = CONFIG.horario;
  let opts = `<option value="" disabled selected>${t("form.timePh")}</option>`;
  // Franjas de 30 min; la última mesa es 30 min antes del cierre.
  for (let h = desde; h < hasta; h++) {
    for (const m of [0, 30]) {
      const label = to12h(h, m);
      opts += `<option value="${label}">${label}</option>`;
    }
  }
  sel.innerHTML = opts;
  if (prev) sel.value = prev; // conserva la selección al cambiar idioma
}

/* ---------------------- Reservar por WhatsApp -------------------- */
function whatsappTexts() {
  return LANG === "es"
    ? {
        chat: `¡Hola ${CONFIG.nombreNegocio}! Me gustaría más información / reservar una mesa.`,
        greet: `¡Hola ${CONFIG.nombreNegocio}! Quiero reservar una mesa 🫖`,
        name: "Nombre", people: "Personas", date: "Fecha", time: "Hora", notes: "Notas",
        opening: "Abriendo WhatsApp… si no abre, revisa tu bloqueador de ventanas.",
      }
    : {
        chat: `Hi ${CONFIG.nombreNegocio}! I'd like more info / to book a table.`,
        greet: `Hi ${CONFIG.nombreNegocio}! I'd like to book a table 🫖`,
        name: "Name", people: "Guests", date: "Date", time: "Time", notes: "Notes",
        opening: "Opening WhatsApp… if it doesn't open, check your pop-up blocker.",
      };
}

function refreshWaLinks() {
  const w = whatsappTexts();
  const chatUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(w.chat)}`;
  const waLink = $("#waLink");
  const waFloat = $("#waFloat");
  if (waLink) waLink.href = chatUrl;
  if (waFloat) waFloat.href = chatUrl;
}

function initReserva() {
  const form = $("#reservaForm");
  const hint = $("#waHint");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const w = whatsappTexts();
    const d = new FormData(form);
    const fecha = d.get("fecha");
    const fechaTxt = fecha
      ? new Date(fecha + "T00:00").toLocaleDateString(LANG === "es" ? "es-MX" : "en-US", {
          weekday: "long", day: "numeric", month: "long",
        })
      : "";

    const lineas = [
      w.greet,
      "",
      `👤 ${w.name}: ${d.get("nombre")}`,
      `👥 ${w.people}: ${d.get("personas")}`,
      `📅 ${w.date}: ${fechaTxt}`,
      `🕒 ${w.time}: ${d.get("hora")}`,
    ];
    const notas = (d.get("notas") || "").trim();
    if (notas) lineas.push(`📝 ${w.notes}: ${notas}`);

    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lineas.join("\n"))}`;
    window.open(url, "_blank", "noopener");
    if (hint) hint.textContent = w.opening;
  });
}

/* --------------------- Aplicar idioma al DOM --------------------- */
function applyLang(lang) {
  LANG = lang;
  localStorage.setItem("revu-lang", lang);
  document.documentElement.lang = lang;

  // Textos por textContent
  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  // Textos con HTML (p. ej. saltos de línea)
  $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  // Placeholders
  $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });

  // Botón de idioma: muestra el idioma AL QUE se cambiará
  const toggle = $("#langToggle");
  if (toggle) {
    toggle.textContent = lang === "es" ? "EN" : "ES";
    toggle.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
  }

  // Contenido dinámico
  renderMenu();
  renderGaleria();
  renderHoras();
  refreshWaLinks();
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

  const langToggle = $("#langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => applyLang(LANG === "es" ? "en" : "es"));
  }

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Reveal al hacer scroll
  const targets = $$(".section, .pillar, .gallery__item");
  targets.forEach((el) => el.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((el) => io.observe(el));
  } else {
    targets.forEach((el) => el.classList.add("is-visible"));
  }
}

/* ----------------------------- Init ------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initReserva();
  initUI();
  applyLang(detectLang());
});
