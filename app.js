/* ===========================================================
   REVU 1910 · Casa de té y café — La Paz, B.C.S.
   Configuración, datos del menú, i18n (es/en) y comportamiento.
   =========================================================== */

const CONFIG = {
  // WhatsApp del negocio: 52 (México) + 612 289 3666.
  // Si algún teléfono no abre el chat, prueba con "5216122893666".
  whatsapp: "526122893666",
  telefonoVisible: "612 289 3666",
  correo: "casadeterevu1910@gmail.com",
  instagram: "https://www.instagram.com/revu1910.lpz/",
  facebook: "https://www.facebook.com/profile.php?id=100088979621605",
  nombreNegocio: "REVU 1910",
  // Horario de reservaciones (24h). Abre 16:00–22:00;
  // la última mesa se agenda 30 min antes del cierre.
  // cerrado: días de la semana sin servicio (0 = domingo).
  horario: { desde: 16, hasta: 22, cerrado: [0] },
};

/* ============================ Idioma ============================= */
let LANG = "es";

/** Idioma: preferencia guardada > idioma del dispositivo.
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
  "nav.history":      { es: "Historia", en: "Our story" },
  "nav.menu":         { es: "Menú", en: "Menu" },
  "nav.events":       { es: "Eventos", en: "Events" },
  "nav.gallery":      { es: "Galería", en: "Gallery" },
  "nav.visit":        { es: "Visítanos", en: "Visit" },
  "nav.reserve":      { es: "Reservar", en: "Reserve" },

  "hero.eyebrow":     { es: "Casa de té & café · La Paz, B.C.S.", en: "Tea & coffee house · La Paz, B.C.S." },
  "hero.script":      { es: "Donde el tiempo vuelve a servir el té", en: "Where time pours tea once more" },
  "hero.lead":        {
    es: "La primera Casa de Té de La Paz. Tés del mundo, café hecho con cariño, paninis artesanales y repostería hecha en casa, servidos entre piezas con casi un siglo de historia.",
    en: "The first Tea House in La Paz. Teas from around the world, coffee made with care, artisan paninis and homemade pastries, served among pieces nearly a century old.",
  },
  "hero.cta1":        { es: "Reservar por WhatsApp", en: "Book on WhatsApp" },
  "hero.cta2":        { es: "Ver el menú", en: "See the menu" },

  "about.title":      { es: "Nuestra casa", en: "Our house" },
  "about.intro":      {
    es: "Hay lugares que nacen para vender un producto y hay otros que nacen para conservar una historia. REVU 1910 pertenece a estos últimos: en el corazón del Centro Histórico de La Paz, a unos pasos de la Catedral y del malecón, cada taza se prepara con calma y cada rincón guarda un recuerdo.",
    en: "Some places are born to sell a product; others are born to keep a story alive. REVU 1910 belongs to the latter: in the heart of La Paz's historic downtown, steps from the Cathedral and the boardwalk, every cup is made unhurried and every corner holds a memory.",
  },
  "pillar.coffee.title": { es: "Café hecho con cariño", en: "Coffee made with care" },
  "pillar.coffee.text":  { es: "Espresso, latte, mocha y chai preparados a mano, calientes o helados, para acompañar la sobremesa.", en: "Espresso, latte, mocha and chai made by hand, hot or iced, to go with a long conversation." },
  "pillar.tea.title":    { es: "Tés del mundo", en: "Teas of the world" },
  "pillar.tea.text":     { es: "Selección de China, Japón, India, Taiwán, Sri Lanka y Marruecos. Se sirve en tetera.", en: "A selection from China, Japan, India, Taiwan, Sri Lanka and Morocco. Served by the pot." },
  "pillar.dessert.title":{ es: "Repostería artesanal", en: "Artisan pastries" },
  "pillar.dessert.text": { es: "Elaborada a diario con ingredientes frescos y productores de Baja California Sur.", en: "Made fresh daily with local ingredients from Baja California Sur growers." },

  /* ----- Historia ----- */
  "story.title":      { es: "Cómo nació REVU 1910", en: "How REVU 1910 was born" },
  "story.intro":      {
    es: "Al cruzar nuestra puerta no sólo se entra a una Casa de Té: se entra a una historia familiar que esperó generaciones para ser contada.",
    en: "Walking through our door is not just entering a Tea House: it is entering a family story that waited generations to be told.",
  },
  "story.family.title": { es: "Un sueño que nació en familia", en: "A dream born in family" },
  "story.family.text":  {
    es: "Fue concebida por <strong>Graciela Guadalupe Ríos Calderón</strong> quien, junto a sus hijos <strong>Graciela</strong> y <strong>Polo</strong>, imaginó un lugar donde convivieran tres pasiones: la cultura del té, la gastronomía artesanal y la memoria de las antiguas casas paceñas. Cada decisión respondió al mismo propósito: invitar a detener el ritmo cotidiano alrededor de una taza de té.",
    en: "It was envisioned by <strong>Graciela Guadalupe Ríos Calderón</strong> who, together with her children <strong>Graciela</strong> and <strong>Polo</strong>, imagined a place where three passions could meet: tea culture, artisan food and the memory of old La Paz homes. Every decision served the same purpose: to invite people to slow down around a cup of tea.",
  },
  "story.world.title":  { es: "Mucho más que una Casa de Té", en: "Far more than a Tea House" },
  "story.world.text":   {
    es: "La inspiración nació del respeto por una bebida que durante miles de años ha acompañado ceremonias y encuentros. Esa pasión llevó a su fundadora a recorrer casas de té en México, Estados Unidos y Europa, estudiando sus tradiciones, su arquitectura y su manera de recibir. Hoy ese conocimiento se refleja en cada selección, cata y experiencia.",
    en: "The inspiration grew from respect for a drink that has accompanied ceremonies and gatherings for thousands of years. That passion led our founder to visit tea houses across Mexico, the United States and Europe, studying their traditions, architecture and hospitality. Today that knowledge shows in every selection, tasting and experience.",
  },
  "story.heritage.title": { es: "Un patrimonio familiar", en: "A family heritage" },
  "story.heritage.text":  {
    es: "Gran parte del mobiliario, la vajilla, las fotografías y los cuadros pertenecieron a distintas generaciones de la familia Ríos Calderón. Muchas piezas tienen cerca de un siglo y fueron conservadas con cariño hasta encontrar un nuevo hogar aquí. Por eso quienes nos visitan descubren algo más que un café: un espacio donde cada objeto tiene una historia que contar.",
    en: "Much of the furniture, china, photographs and paintings belonged to generations of the Ríos Calderón family. Many pieces are nearly a century old and were lovingly kept until they found a new home here. That is why visitors discover more than a café: a place where every object has a story to tell.",
  },
  "story.philosophy.title": { es: "Nuestra filosofía", en: "Our philosophy" },
  "story.philosophy.text":  {
    es: "Creemos que una taza de té tiene el poder de reunir personas, despertar recuerdos y crear momentos para atesorar. Por eso elaboramos a diario nuestra repostería, paninis y postres de forma artesanal, con ingredientes frescos y en colaboración con productores y pequeñas empresas de Baja California Sur.",
    en: "We believe a cup of tea can bring people together, awaken memories and create moments worth keeping. That is why we make our pastries, paninis and desserts by hand every day, with fresh ingredients and in partnership with small producers from Baja California Sur.",
  },
  "story.quote":      {
    es: "Porque más que servir té, queremos compartir una experiencia que honre la historia, la tradición y el placer de conversar sin prisas.",
    en: "Because more than serving tea, we want to share an experience that honors history, tradition and the pleasure of unhurried conversation.",
  },

  "timeline.title":   { es: "Nuestros hitos", en: "Milestones" },
  "tl.1.date":        { es: "6 de enero de 2023", en: "January 6, 2023" },
  "tl.1.text":        { es: "Abrimos nuestras puertas como la primera Casa de Té establecida en La Paz.", en: "We opened our doors as the first established Tea House in La Paz." },
  "tl.2.date":        { es: "Primera en el estado", en: "A first for the state" },
  "tl.2.text":        { es: "Organizamos la primera cata especializada de té en Baja California Sur.", en: "We hosted the first specialized tea tasting in Baja California Sur." },
  "tl.3.date":        { es: "6 de junio de 2024", en: "June 6, 2024" },
  "tl.3.text":        { es: "Nuestra fundadora obtiene la certificación de Sommelier de Té por la Tea & Herbal Association of Canada: la primera persona en lograrlo en B.C.S.", en: "Our founder earns her Tea Sommelier certification from the Tea & Herbal Association of Canada — the first person to do so in B.C.S." },
  "tl.4.date":        { es: "Cada año", en: "Every year" },
  "tl.4.text":        { es: "Celebramos por primera vez en el estado el Día Internacional del Té, tradición que continúa.", en: "We were the first in the state to celebrate International Tea Day, a tradition that continues." },
  "tl.5.date":        { es: "Hoy", en: "Today" },
  "tl.5.text":        { es: "Catas mensuales, talleres y experiencias sensoriales con tés de China, Japón, India, Taiwán, Sri Lanka y Marruecos.", en: "Monthly tastings, workshops and sensory experiences with teas from China, Japan, India, Taiwan, Sri Lanka and Morocco." },

  /* ----- Menú ----- */
  "menu.title":       { es: "El menú", en: "The menu" },
  "menu.intro":       { es: "Precios en pesos mexicanos. Algunos sabores varían por temporada — pregunta por existencias.", en: "Prices in Mexican pesos. Some flavors vary by season — ask about availability." },
  "menu.card":        { es: "Menú", en: "Menu" },
  "menu.tab.paninis": { es: "Paninis & Bagels", en: "Paninis & Bagels" },
  "menu.tab.drinks":  { es: "Bebidas", en: "Drinks" },
  "menu.tab.teas":    { es: "Selección de tés", en: "Tea selection" },
  "menu.tab.desserts":{ es: "Postres", en: "Desserts" },
  "menu.tab.season":  { es: "Temporada", en: "Seasonal" },
  "menu.tab.tea":     { es: "Servicio de té", en: "Tea service" },
  "menu.tab.shatto":  { es: "Shatto's Tea Room", en: "Shatto's Tea Room" },

  "m.paninis.note":   { es: "Todos incluyen guarnición de ensalada de papa y aderezo. Pan de masa madre, multigrano o finas hierbas (Amelie Panadería).", en: "All include a side of potato salad and dressing. Sourdough, multigrain or fine-herb bread (Amelie Bakery)." },
  "m.group.paninis":  { es: "Paninis", en: "Paninis" },
  "m.group.bagels":   { es: "Bagels", en: "Bagels" },
  "m.drinks.note":    { es: "¡Haz tu bebida grande +$22 o helada +$15!", en: "Make it large +$22 or iced +$15!" },
  "m.group.hot":      { es: "Bebidas calientes", en: "Hot drinks" },
  "m.group.frappe":   { es: "Frappé & smoothie", en: "Frappé & smoothie" },
  "m.group.other":    { es: "Otras bebidas", en: "Other drinks" },
  "m.group.season":   { es: "Por tiempo limitado", en: "For a limited time" },
  "m.season.title":   { es: "Bebidas & postres de temporada", en: "Seasonal drinks & desserts" },
  "m.season.text":    { es: "Creaciones que preparamos sólo mientras dura la temporada, con fruta fresca y tés de nuestra selección.", en: "Creations we make only while the season lasts, with fresh fruit and teas from our selection." },
  "story.prev":       { es: "Capítulo anterior", en: "Previous chapter" },
  "story.next":       { es: "Capítulo siguiente", en: "Next chapter" },
  "story.goto":       { es: "Ir al capítulo", en: "Go to chapter" },
  "m.hot":            { es: "Caliente", en: "Hot" },
  "m.iced":           { es: "Helada", en: "Iced" },
  "m.extras":         { es: "Extras", en: "Add-ons" },
  "m.flavors":        { es: "¡Saboriza tu bebida!", en: "Flavor your drink!" },
  "m.seasonalPrice":  { es: "Precio de temporada", en: "Seasonal price" },
  "m.seasonalNote":   { es: "Sabores que cambian con la temporada. Consulta nuestras opciones disponibles.", en: "Flavors change with the season. Ask about today's options." },
  "m.iceScoop":       { es: "¡Añade bola de nieve!", en: "Add a scoop of ice cream!" },
  "m.frappeNote":     { es: "Pregunte por frutos de temporada.", en: "Ask about seasonal fruits." },

  "m.teas.note":      { es: "Servidos en tetera. Elige el tamaño según las personas que compartan la mesa.", en: "Served by the pot. Choose the size according to how many share the table." },
  "m.teas.potFor":    { es: "Tetera para", en: "Pot for" },
  "m.teas.tip":       { es: "Algunos de nuestros tés pueden disfrutarse con leche y/o azúcar. Consulta a tu barista para recibir una recomendación.", en: "Some of our teas can be enjoyed with milk and/or sugar. Ask your barista for a recommendation." },
  "m.teas.white":     { es: "Té blanco", en: "White tea" },
  "m.teas.green":     { es: "Té verde", en: "Green tea" },
  "m.teas.black":     { es: "Té negro", en: "Black tea" },
  "m.teas.oolong":    { es: "Té oolong", en: "Oolong tea" },
  "m.teas.puerh":     { es: "Té pu-erh", en: "Pu-erh tea" },
  "m.teas.rooibos":   { es: "Rooibos", en: "Rooibos" },
  "m.teas.tisanas":   { es: "Tisanas (sin cafeína)", en: "Herbal infusions (caffeine-free)" },
  "m.teas.pure":      { es: "Puro", en: "Pure" },
  "m.teas.blend":     { es: "Mezcla", en: "Blend" },

  "m.tea.title":      { es: "Servicio de postres", en: "Dessert service" },
  "m.tea.text":       { es: "Selección de aperitivos dulces y salados al estilo inglés, cuidadosamente presentados en platos botaneros. Los postres pueden variar por temporada.", en: "A selection of sweet and savory English-style bites, carefully presented on sharing platters. Desserts may vary by season." },
  "m.tea.p12":        { es: "1 – 2 personas", en: "1 – 2 people" },
  "m.tea.p4":         { es: "4 personas", en: "4 people" },
  "m.tea.cta":        { es: "Reservar servicio de té", en: "Book tea service" },
  "m.grace.title":    { es: "Grace's Afternoon Tea", en: "Grace's Afternoon Tea" },
  "m.grace.text":     { es: "Tradicional servicio de té de la tarde, servido a las 17:00 h, con una cuidada selección de tés y bocados dulces y salados. Previa reservación.", en: "Traditional afternoon tea served at 5:00 PM, with a curated selection of teas and sweet and savory bites. By reservation only." },
  "m.grace.salty":    { es: "Sándwiches & bocadillos salados", en: "Sandwiches & savory bites" },
  "m.grace.scones":   { es: "Scones", en: "Scones" },
  "m.grace.sweet":    { es: "Bocadillos dulces", en: "Sweet bites" },
  "m.grace.price":    { es: "por persona", en: "per person" },
  "m.grace.includes": { es: "Incluye tetera a elegir de nuestra selección especial de tés y copa de vino espumoso sin alcohol.", en: "Includes a pot of tea from our special selection and a glass of alcohol-free sparkling wine." },

  "m.shatto.kicker":  { es: "Salón privado", en: "Private room" },
  "m.shatto.text":    { es: "Un salón privado para hasta 6 personas, ideal para disfrutar una experiencia completa de té y postres sin prisas, rodeados de piezas familiares con casi un siglo de historia.", en: "A private room for up to 6 guests, ideal for an unhurried tea and dessert experience surrounded by family pieces nearly a century old." },
  "m.shatto.duration":{ es: "Duración", en: "Duration" },
  "m.shatto.durationV":{ es: "2 horas", en: "2 hours" },
  "m.shatto.capacity":{ es: "Capacidad", en: "Capacity" },
  "m.shatto.capacityV":{ es: "Hasta 6 personas", en: "Up to 6 guests" },
  "m.shatto.booking": { es: "Reservación", en: "Booking" },
  "m.shatto.bookingV":{ es: "Previa, por WhatsApp", en: "In advance, via WhatsApp" },
  "m.shatto.includes":{ es: "Incluye", en: "Includes" },
  "m.shatto.inc4":    { es: "Para 4 personas: botanero y jarra de té", en: "For 4 guests: sharing platter and pot of tea" },
  "m.shatto.inc6":    { es: "Para 6 personas: botanero", en: "For 6 guests: sharing platter" },
  "m.shatto.note":    { es: "El servicio a la carta está sujeto a consumo mínimo.", en: "À la carte service is subject to a minimum spend." },
  "m.shatto.cta":     { es: "Reservar el salón", en: "Book the room" },

  /* ----- Eventos ----- */
  "events.title":     { es: "Talleres & catas", en: "Workshops & tastings" },
  "events.intro":     { es: "Cada cierto tiempo abrimos la casa para catas, talleres y experiencias sensoriales alrededor del té y el café.", en: "Every so often we open the house for tastings, workshops and sensory experiences around tea and coffee." },
  "events.upcoming":  { es: "Próximo evento", en: "Next event" },
  "events.none":      { es: "No hay fechas publicadas por ahora", en: "No dates published right now" },
  "events.noneText":  { es: "Estamos preparando la siguiente experiencia. Síguenos en Instagram o Facebook, o escríbenos por WhatsApp para avisarte en cuanto abramos lugares.", en: "We're preparing the next experience. Follow us on Instagram or Facebook, or message us on WhatsApp and we'll let you know as soon as spots open." },
  "events.notify":    { es: "Avísenme del próximo", en: "Notify me of the next one" },
  "events.past":      { es: "Ediciones anteriores", en: "Past editions" },
  "events.pastNote":  { es: "Así se han vivido nuestras experiencias más recientes.", en: "A look at our most recent experiences." },

  "ev.brujas.date":   { es: "21 de julio de 2026", en: "July 21, 2026" },
  "ev.brujas.title":  { es: "Un verano en Brujas", en: "A summer in Bruges" },
  "ev.brujas.text":   { es: "Una tarde para viajar a través del té, inspirada en Het Brugs Theehuis (Brujas, Bélgica): cinco tés y cinco formas de disfrutarlos —cold brew, tea soda, en las rocas, infusión tradicional y maridajes seleccionados.", en: "An afternoon of travelling through tea, inspired by Het Brugs Theehuis (Bruges, Belgium): five teas and five ways to enjoy them — cold brew, tea soda, on the rocks, traditional infusion and curated pairings." },
  "ev.dia.date":      { es: "Cada 21 de mayo", en: "Every May 21" },
  "ev.dia.title":     { es: "Día Internacional del Té", en: "International Tea Day" },
  "ev.dia.text":      { es: "Fuimos los primeros en celebrarlo en Baja California Sur y lo mantenemos como tradición anual, con degustaciones y actividades abiertas al público.", en: "We were the first to celebrate it in Baja California Sur and keep it as an annual tradition, with tastings and activities open to the public." },
  "ev.cata.date":     { es: "Cada mes", en: "Monthly" },
  "ev.cata.title":    { es: "Catas mensuales de té", en: "Monthly tea tastings" },
  "ev.cata.text":     { es: "Organizamos la primera cata especializada de té del estado y desde entonces las realizamos cada mes, guiadas por nuestra Sommelier de Té certificada.", en: "We hosted the state's first specialized tea tasting and have held them monthly ever since, guided by our certified Tea Sommelier." },

  /* ----- Galería ----- */
  "gallery.title":    { es: "Galería", en: "Gallery" },
  "gallery.intro":    { es: "Un vistazo a nuestro rincón. Toca una foto para verla en grande.", en: "A glimpse of our corner. Tap a photo to enlarge it." },
  "gallery.close":    { es: "Cerrar", en: "Close" },
  "gallery.prev":     { es: "Anterior", en: "Previous" },
  "gallery.next":     { es: "Siguiente", en: "Next" },

  /* ----- Reservar ----- */
  "reserve.title":    { es: "Reserva tu mesa", en: "Book your table" },
  "reserve.intro":    { es: "Completa los datos y te llevaremos a WhatsApp con tu mensaje ya listo para enviar.", en: "Fill in the details and we'll take you to WhatsApp with your message ready to send." },
  "form.name":        { es: "Nombre", en: "Name" },
  "form.people":      { es: "Personas", en: "Guests" },
  "form.date":        { es: "Fecha", en: "Date" },
  "form.time":        { es: "Hora", en: "Time" },
  "form.notes":       { es: "Notas", en: "Notes" },
  "form.optional":    { es: "(opcional)", en: "(optional)" },
  "form.namePh":      { es: "Tu nombre", en: "Your name" },
  "form.notesPh":     { es: "Cumpleaños, Shatto's Tea Room, alergias…", en: "Birthday, Shatto's Tea Room, allergies…" },
  "form.timePh":      { es: "Elige una hora", en: "Choose a time" },
  "form.submit":      { es: "Enviar por WhatsApp", en: "Send via WhatsApp" },

  "aside.note":       { es: "Para grupos grandes, catas privadas o el salón Shatto's Tea Room, escríbenos por WhatsApp.", en: "For large groups, private tastings or the Shatto's Tea Room, message us on WhatsApp." },

  /* ----- Ubicación / pie ----- */
  "map.title":        { es: "Cómo llegar", en: "Find us" },
  "footer.cross":     { es: "e/ Reforma e Independencia", en: "between Reforma & Independencia" },
  "footer.maps":      { es: "Ver en Google Maps →", en: "View on Google Maps →" },
  "footer.tag":       { es: "Casa de té & café", en: "Tea & coffee house" },
  "footer.hoursTitle":{ es: "Horario", en: "Hours" },
  "footer.hoursValue":{ es: "Lunes a sábado<br />16:00 – 22:00", en: "Monday to Saturday<br />4:00 – 10:00 PM" },
  "footer.closed":    { es: "Domingo: cerrado", en: "Sunday: closed" },
  "form.sundayClosed":{ es: "Los domingos permanecemos cerrados. Elige otro día, por favor.", en: "We are closed on Sundays. Please choose another day." },
  "footer.contactTitle": { es: "Contacto", en: "Contact" },
  "footer.followTitle": { es: "Síguenos", en: "Follow us" },
  "footer.locationTitle": { es: "Ubicación", en: "Location" },
  "footer.love":      { es: "Hecho con cariño.", en: "Made with love." },
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
    { nombre: "Pavo · Pesto", desc: { es: "Jamón de pavo, queso provolone y pesto", en: "Turkey ham, provolone cheese and pesto" }, precio: 195 },
    { nombre: "Atún · Nicoise", desc: { es: "Atún, huevo cocido y aceituna negra", en: "Tuna, boiled egg and black olive" }, precio: 180 },
    { nombre: "Roast Beef · Blue Cheese", desc: { es: "Roast beef, tocino y queso azul", en: "Roast beef, bacon and blue cheese" }, precio: 225 },
    { nombre: "Alcachofa · Albahaca", desc: { es: "Alcachofa, albahaca y queso de cabra", en: "Artichoke, basil and goat cheese" }, precio: 215 },
  ],
  bagels: [
    { nombre: "Green Garden", desc: { es: "Aguacate y queso pepper jack en pan sabor parmesano", en: "Avocado and pepper jack cheese on parmesan bagel" }, precio: null },
    { nombre: "Serrano Cream Cheese", desc: { es: "Jamón serrano y queso crema en pan sabor parmesano", en: "Serrano ham and cream cheese on parmesan bagel" }, precio: 185 },
    { nombre: "Cream Cheese & Red Berries", desc: { es: "Queso crema y mermelada de frutos rojos en pan sabor parmesano", en: "Cream cheese and red berry jam on parmesan bagel" }, precio: 145 },
  ],
  postres: [
    { nombre: "Selva Negra", desc: { es: "Pastelillo de chocolate con licor de cereza", en: "Chocolate cake with cherry liqueur" }, precio: 115 },
    { nombre: { es: "Tarta casera", en: "Homemade tart" }, desc: { es: "Sabores de temporada", en: "Seasonal flavors" }, precio: 115 },
    { nombre: "Cheesecake", desc: { es: "Sabores de temporada", en: "Seasonal flavors" }, precio: 105 },
    { nombre: "Tiramisú", desc: "", precio: 90 },
    { nombre: "Brownie", desc: "", precio: 85 },
    { nombre: { es: "Croissant de almendra", en: "Almond croissant" }, desc: "", precio: 105 },
    { nombre: "Muffin", desc: { es: "Sabores de temporada", en: "Seasonal flavors" }, precio: 85 },
    { nombre: { es: "Galletas", en: "Cookies" }, desc: { es: "Sabores de temporada", en: "Seasonal flavors" }, precio: 85 },
  ],
};

/* Bebidas calientes con precio único (helada +$15) */
const BEBIDAS = [
  { nombre: "Expresso", precio: 70 },
  { nombre: "Expresso Americano", precio: 75 },
  { nombre: "Cappuccino", precio: 95 },
  { nombre: "Café Latte", precio: 85 },
  { nombre: "Mocha", precio: 95 },
  { nombre: { es: "Café del día", en: "Coffee of the day" }, desc: { es: "Incluye un refill", en: "Includes one refill" }, precio: 75 },
  { nombre: "Chai Latte", precio: 105 },
  { nombre: "Matcha Latte", precio: 115 },
];

const FRAPPES = [
  { nombre: { es: "Frappé original", en: "Original frappé" }, precio: 110 },
  { nombre: { es: "Frappé de vainilla", en: "Vanilla frappé" }, precio: 110 },
  { nombre: { es: "Frappé de mocha", en: "Mocha frappé" }, precio: 120 },
  { nombre: { es: "Smoothie de frutos rojos", en: "Red berry smoothie" }, precio: 120 },
];

const OTRAS_BEBIDAS = [
  { nombre: { es: "Agua natural", en: "Still water" }, precio: 18 },
  { nombre: { es: "Agua alcalina", en: "Alkaline water" }, precio: 40 },
  { nombre: { es: "Agua mineral", en: "Sparkling water" }, precio: 65 },
  { nombre: { es: "Agua mineral saborizada", en: "Flavored sparkling water" }, precio: 65 },
];

const EXTRAS = [
  { nombre: { es: "Hazla grande", en: "Make it large" }, precio: 22 },
  { nombre: { es: "Hazla helada", en: "Make it iced" }, precio: 15 },
  { nombre: { es: "Leche de coco, almendra o soya", en: "Coconut, almond or soy milk" }, precio: 22 },
];

const SABORES = [
  { nombre: { es: "Menta", en: "Mint" }, precio: 22 },
  { nombre: { es: "Vainilla", en: "Vanilla" }, precio: 22 },
  { nombre: { es: "Caramelo", en: "Caramel" }, precio: 22 },
];

/* Selección de tés: precios por tetera para 1 / 2 / 4 personas */
const TES = [
  { grupo: "m.teas.white", items: [
    { nombre: "Pai Mu Tan", tipo: "m.teas.pure", precios: [105, 175, 205] },
  ]},
  { grupo: "m.teas.green", items: [
    { nombre: "Verde Sencha", tipo: "m.teas.pure", precios: [85, 130, 165] },
    { nombre: "Matcha Toyotomi", tipo: "m.teas.pure", precios: [105, 180, 205] },
    { nombre: "Frescura Marroquí", tipo: "m.teas.blend", precios: [85, 130, 165] },
    { nombre: "Luna Verde", tipo: "m.teas.blend", precios: [95, 155, 175] },
    { nombre: "Verde Jazmín", tipo: "m.teas.blend", precios: [95, 155, 175] },
  ]},
  { grupo: "m.teas.black", items: [
    { nombre: "Yunnan Gold", tipo: "m.teas.pure", precios: [105, 175, 205] },
    { nombre: "Kasbiret", tipo: "m.teas.pure", precios: [155, 275, 305] },
    { nombre: "Chai Negro", tipo: "m.teas.blend", precios: [85, 130, 165] },
    { nombre: "English Breakfast", tipo: "m.teas.blend", precios: [85, 130, 165] },
    { nombre: "Earl Grey", tipo: "m.teas.blend", precios: [95, 155, 175] },
    { nombre: "Jengibre · Limón", tipo: "m.teas.blend", precios: [100, 170, 200] },
  ]},
  { grupo: "m.teas.oolong", items: [
    { nombre: "Quangzhou Milk", tipo: "m.teas.blend", precios: [120, 220, 270] },
  ]},
  { grupo: "m.teas.puerh", items: [
    { nombre: "Pu-erh Café Cacao", tipo: "m.teas.blend", precios: [95, 155, 175] },
  ]},
  { grupo: "m.teas.rooibos", items: [
    { nombre: "Chai Herbal", precios: [95, 155, 175] },
    { nombre: "Madagascar", desc: { es: "Sin cafeína", en: "Caffeine-free" }, precios: [90, 165, 185] },
  ]},
  { grupo: "m.teas.tisanas", items: [
    { nombre: { es: "Tisana de moras", en: "Blackberry infusion" }, precios: [85, 135, 165] },
    { nombre: { es: "Manzanilla", en: "Chamomile" }, precios: [95, 155, 175] },
  ]},
];

/* Bebidas y postres de temporada (por tiempo limitado) */
const TEMPORADA = [
  { nombre: { es: "Frappé Cereza · Coco", en: "Cherry · Coconut frappé" }, desc: { es: "Mezcla de cereza natural y leche de coco", en: "Natural cherry blended with coconut milk" }, precio: 140 },
  { nombre: { es: "Smoothie de mango", en: "Mango smoothie" }, desc: { es: "Pulpa de mango natural", en: "Natural mango pulp" }, precio: 135 },
  { nombre: "Afogato · Matcha", desc: { es: "Bola de nieve de coco con un shot de matcha", en: "Coconut ice cream with a shot of matcha" }, precio: 135 },
  { nombre: "Soda Tea", desc: { es: "Infusión de té a elegir con agua mineral y jarabe", en: "Your choice of tea infusion with sparkling water and syrup" }, precio: 105 },
  { nombre: "Cold Brew Tea", desc: { es: "Pregunte por el té del día", en: "Ask for today's tea" }, precio: 90 },
  { nombre: "Ice Mess", desc: { es: "Brownie servido con nieve de vainilla", en: "Brownie served with vanilla ice cream" }, precio: 110 },
];

/* Grace's Afternoon Tea */
const GRACE = {
  precio: 550,
  salados: [
    { nombre: { es: "Sándwich de pepino", en: "Cucumber sandwich" }, desc: { es: "Queso crema, ralladura de limón, semillas de mostaza, pan blanco", en: "Cream cheese, lemon zest, mustard seeds, white bread" } },
    { nombre: { es: "Sándwich de salmón ahumado", en: "Smoked salmon sandwich" }, desc: { es: "Queso crema, jengibre, pan de hierbas", en: "Cream cheese, ginger, herb bread" } },
    { nombre: { es: "Sándwich de huevo", en: "Egg sandwich" }, desc: { es: "Perejil, mostaza y pan blanco", en: "Parsley, mustard and white bread" } },
  ],
  scones: [
    { nombre: { es: "Scone natural y scone con frutos de temporada", en: "Plain scone and seasonal fruit scone" }, desc: { es: "Recién horneados, con crema de mantequilla y mermelada", en: "Freshly baked, with butter cream and jam" } },
  ],
  dulces: [
    { nombre: { es: "Tarta", en: "Tart" }, desc: { es: "Crema pastelera y frutos rojos", en: "Pastry cream and red berries" } },
    { nombre: "Cheesecake", desc: { es: "Sabores de temporada", en: "Seasonal flavors" } },
    { nombre: { es: "Macarrón", en: "Macaron" }, desc: { es: "Sabores de temporada", en: "Seasonal flavors" } },
    { nombre: { es: "Galletas de mantequilla", en: "Butter cookies" }, desc: { es: "Rellenas de mermelada", en: "Filled with jam" } },
  ],
};

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

function grupoTitulo(key) {
  return `<h3 class="menu__group-title">${t(key)}</h3>`;
}

/* ---------------------- Render de paneles ------------------------ */
function renderMenu() {
  const panels = $("#menuPanels");
  if (!panels) return;

  const activeCat = $(".menu__tab.is-active")?.dataset.cat || "tes";

  /* --- Paninis & bagels --- */
  const paninis = `
    <div class="menu__panel" data-cat="paninis">
      <p class="menu__note">${t("m.paninis.note")}</p>
      <div class="menu__group">
        ${grupoTitulo("m.group.paninis")}
        <ul class="menu__list menu__list--cols">${MENU.paninis.map(itemRow).join("")}</ul>
      </div>
      <div class="menu__group">
        ${grupoTitulo("m.group.bagels")}
        <ul class="menu__list menu__list--cols">${MENU.bagels.map(itemRow).join("")}</ul>
      </div>
    </div>`;

  /* --- Bebidas --- */
  const bebidas = `
    <div class="menu__panel" data-cat="bebidas">
      <p class="menu__note">${t("m.drinks.note")}</p>
      <div class="menu__group">
        ${grupoTitulo("m.group.hot")}
        <ul class="menu__list menu__list--cols">${BEBIDAS.map(itemRow).join("")}</ul>
      </div>
      <div class="menu__group">
        ${grupoTitulo("m.group.frappe")}
        <ul class="menu__list menu__list--cols">${FRAPPES.map(itemRow).join("")}</ul>
        <p class="menu__footnote">${t("m.frappeNote")}</p>
      </div>
      <div class="menu__group">
        ${grupoTitulo("m.group.other")}
        <ul class="menu__list menu__list--cols">${OTRAS_BEBIDAS.map(itemRow).join("")}</ul>
      </div>
      <div class="menu__addons">
        <div class="menu__addon-card">
          <h4>${t("m.extras")}</h4>
          <ul>${EXTRAS.map((e) => `<li>${tr(e.nombre)}<span>+${precio(e.precio)}</span></li>`).join("")}</ul>
        </div>
        <div class="menu__addon-card">
          <h4>${t("m.flavors")}</h4>
          <ul>${SABORES.map((s) => `<li>${tr(s.nombre)}<span>+${precio(s.precio)}</span></li>`).join("")}</ul>
        </div>
      </div>
    </div>`;

  /* --- Selección de tés (tabla de teteras) --- */
  const filasTes = TES.map((g) => `
    <tbody class="tea__group">
      <tr class="tea__group-row">
        <th colspan="4" scope="colgroup">${t(g.grupo)}</th>
      </tr>
      ${g.items.map((it) => `
        <tr>
          <th scope="row">
            <span class="tea__name">${tr(it.nombre)}</span>
            ${it.tipo ? `<span class="tea__kind">${t(it.tipo)}</span>` : ""}
            ${it.desc ? `<span class="tea__kind">${tr(it.desc)}</span>` : ""}
          </th>
          ${it.precios.map((p) => `<td>${precio(p)}</td>`).join("")}
        </tr>`).join("")}
    </tbody>`).join("");

  const tes = `
    <div class="menu__panel" data-cat="tes">
      <p class="menu__note">${t("m.teas.note")}</p>
      <div class="tea__wrap">
        <table class="tea">
          <thead>
            <tr>
              <td></td>
              <th colspan="3" class="tea__potfor">${t("m.teas.potFor")}</th>
            </tr>
            <tr class="tea__sizes">
              <td></td><th scope="col">1</th><th scope="col">2</th><th scope="col">4</th>
            </tr>
          </thead>
          ${filasTes}
        </table>
      </div>
      <p class="menu__footnote">${t("m.teas.tip")}</p>
    </div>`;

  /* --- Postres --- */
  const postres = `
    <div class="menu__panel" data-cat="postres">
      <ul class="menu__list menu__list--cols">${MENU.postres.map(itemRow).join("")}</ul>
      <div class="menu__addons menu__addons--single">
        <div class="menu__addon-card">
          <h4>${t("m.iceScoop")}</h4>
          <ul><li>${t("m.seasonalNote")}<span>+$35</span></li></ul>
        </div>
      </div>
    </div>`;

  /* --- Temporada (carta con identidad propia) --- */
  const temporada = `
    <div class="menu__panel" data-cat="temporada">
      <div class="season">
        <span class="season__leaf season__leaf--tl" aria-hidden="true"><svg viewBox="0 0 140 140"><use href="#branch-citrus"/></svg></span>
        <span class="season__leaf season__leaf--br" aria-hidden="true"><svg viewBox="0 0 140 140"><use href="#branch-citrus"/></svg></span>
        <div class="season__head">
          <p class="season__badge">${t("m.group.season")}</p>
          <h3 class="season__title">${t("m.season.title")}</h3>
          <p class="season__note">${t("m.season.text")}</p>
        </div>
        <ul class="menu__list menu__list--cols">${TEMPORADA.map(itemRow).join("")}</ul>
        <p class="season__foot">${t("m.seasonalNote")}</p>
      </div>
    </div>`;

  /* --- Servicio de té (postres + Grace's) --- */
  const graceLista = (titulo, arr) => `
    <div class="grace__block">
      <h4>${t(titulo)}</h4>
      <ul>${arr.map((i) => `<li><strong>${tr(i.nombre)}</strong>${i.desc ? `<span>${tr(i.desc)}</span>` : ""}</li>`).join("")}</ul>
    </div>`;

  const servicio = `
    <div class="menu__panel" data-cat="servicio">
      <div class="menu__tea">
        <h3>${t("m.tea.title")}</h3>
        <p>${t("m.tea.text")}</p>
        <div class="menu__tea-prices">
          <div><strong>$350</strong><span>${t("m.tea.p12")}</span></div>
          <div><strong>$640</strong><span>${t("m.tea.p4")}</span></div>
        </div>
      </div>

      <div class="grace">
        <h3 class="grace__title">${t("m.grace.title")}</h3>
        <p class="grace__text">${t("m.grace.text")}</p>
        <div class="grace__grid">
          ${graceLista("m.grace.salty", GRACE.salados)}
          ${graceLista("m.grace.scones", GRACE.scones)}
          ${graceLista("m.grace.sweet", GRACE.dulces)}
        </div>
        <p class="grace__price"><strong>$${GRACE.precio}</strong> <span>${t("m.grace.price")}</span></p>
        <p class="grace__includes">${t("m.grace.includes")}</p>
        <a class="btn btn--gold" href="#reservar">${t("m.tea.cta")}</a>
      </div>
    </div>`;

  /* --- Shatto's Tea Room --- */
  const shatto = `
    <div class="menu__panel" data-cat="shatto">
      <div class="shatto">
        <p class="shatto__kicker">${t("m.shatto.kicker")}</p>
        <h3 class="shatto__title">Shatto's Tea Room</h3>
        <p class="shatto__text">${t("m.shatto.text")}</p>
        <p class="shatto__price"><strong>$1,200</strong></p>
        <dl class="shatto__specs">
          <div><dt>${t("m.shatto.capacity")}</dt><dd>${t("m.shatto.capacityV")}</dd></div>
          <div><dt>${t("m.shatto.duration")}</dt><dd>${t("m.shatto.durationV")}</dd></div>
          <div><dt>${t("m.shatto.booking")}</dt><dd>${t("m.shatto.bookingV")}</dd></div>
        </dl>
        <div class="shatto__includes">
          <h4>${t("m.shatto.includes")}</h4>
          <ul>
            <li>${t("m.shatto.inc4")}</li>
            <li>${t("m.shatto.inc6")}</li>
          </ul>
        </div>
        <p class="shatto__note">${t("m.shatto.note")}</p>
        <a class="btn btn--gold" href="#reservar">${t("m.shatto.cta")}</a>
      </div>
    </div>`;

  // Los tés van primero: son el corazón de la casa.
  panels.innerHTML = tes + paninis + bebidas + postres + temporada + servicio + shatto;
  // Mantiene la pestaña activa tras un cambio de idioma
  const hay = $$(".menu__panel").some((p) => p.dataset.cat === activeCat);
  $$(".menu__panel").forEach((p) =>
    p.classList.toggle("is-active", p.dataset.cat === (hay ? activeCat : "tes"))
  );
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

/* ------------------ Carrusel "Cómo nació REVU" ------------------- */
function initStorySlider() {
  const track = $("#storyTrack");
  const dots = $("#storyDots");
  if (!track) return;
  const cards = $$(".story__card", track);
  if (!cards.length) return;

  /** Marca como central la tarjeta más cercana al centro del carril. */
  const marcarCentro = () => {
    const centro = track.scrollLeft + track.clientWidth / 2;
    let mejor = 0, min = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - centro);
      if (d < min) { min = d; mejor = i; }
    });
    cards.forEach((c, i) => c.classList.toggle("is-center", i === mejor));
    $$(".story__dot", dots).forEach((d, i) => {
      d.classList.toggle("is-active", i === mejor);
      d.setAttribute("aria-selected", i === mejor ? "true" : "false");
    });
    const prev = $("#storyPrev"), next = $("#storyNext");
    if (prev) prev.disabled = mejor === 0;
    if (next) next.disabled = mejor === cards.length - 1;
    return mejor;
  };

  const irA = (i) => {
    const c = cards[Math.max(0, Math.min(cards.length - 1, i))];
    if (!c) return;
    track.scrollTo({ left: c.offsetLeft - (track.clientWidth - c.offsetWidth) / 2, behavior: "smooth" });
  };

  // Puntos de navegación
  if (dots && !dots.children.length) {
    dots.innerHTML = cards.map((_, i) =>
      `<button class="story__dot" type="button" role="tab" data-i18n-aria="story.goto" data-go="${i}"></button>`
    ).join("");
    dots.addEventListener("click", (e) => {
      const b = e.target.closest(".story__dot");
      if (b) irA(Number(b.dataset.go));
    });
  }

  $("#storyPrev")?.addEventListener("click", () => irA(marcarCentro() - 1));
  $("#storyNext")?.addEventListener("click", () => irA(marcarCentro() + 1));

  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); irA(marcarCentro() - 1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); irA(marcarCentro() + 1); }
  });

  let raf = null;
  track.addEventListener("scroll", () => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(marcarCentro);
  }, { passive: true });
  window.addEventListener("resize", marcarCentro);

  // Arranca con la primera tarjeta centrada
  requestAnimationFrame(() => { irA(0); marcarCentro(); });
}

/* --------------------------- Eventos ----------------------------- */
const EVENTOS = [
  { key: "brujas", img: "images/galeria-teteras.jpg" },
  { key: "dia", img: "images/evento-te.jpg" },
  { key: "cata", img: "images/evento-catas.jpg" },
];

function renderEventos() {
  const cont = $("#eventList");
  if (!cont) return;
  cont.innerHTML = EVENTOS.map((e) => `
    <article class="event">
      <div class="event__media">
        <img src="${e.img}" alt="${t(`ev.${e.key}.title`)}" loading="lazy" />
      </div>
      <div class="event__body">
        <p class="event__date">${t(`ev.${e.key}.date`)}</p>
        <h3 class="event__title">${t(`ev.${e.key}.title`)}</h3>
        <p class="event__text">${t(`ev.${e.key}.text`)}</p>
      </div>
    </article>`).join("");
}

/* --------------------------- Galería ----------------------------- */
const GALERIA = [
  { src: "images/galeria-fachada.jpg", alt: { es: "Fachada de REVU 1910 con su herrería verde y mesas en la banqueta", en: "REVU 1910 storefront with its green ironwork and sidewalk tables" }, etiqueta: { es: "La fachada", en: "The storefront" } },
  { src: "images/galeria-salon.jpg", alt: { es: "Salón interior con muros de ladrillo y mobiliario antiguo", en: "Interior room with brick walls and antique furniture" }, etiqueta: { es: "El salón", en: "The parlour" } },
  { src: "images/galeria-teteras.jpg", alt: { es: "Teteras de porcelana floral de la colección familiar", en: "Floral porcelain teapots from the family collection" }, etiqueta: { es: "Las teteras", en: "The teapots" } },
  { src: "images/galeria-charola.jpg", alt: { es: "Charola de tres pisos con bocadillos dulces y salados", en: "Three-tier stand with sweet and savory bites" }, etiqueta: { es: "Servicio de té", en: "Tea service" } },
  { src: "images/galeria-panini.jpg", alt: { es: "Panini artesanal recién prensado", en: "Freshly pressed artisan panini" }, etiqueta: { es: "Paninis", en: "Paninis" } },
  { src: "images/galeria-macarons.jpg", alt: { es: "Macarrones de temporada sobre plato de porcelana", en: "Seasonal macarons on a porcelain plate" }, etiqueta: { es: "Macarrones", en: "Macarons" } },
  { src: "images/galeria-frappe.jpg", alt: { es: "Frappé coronado con crema batida", en: "Frappé topped with whipped cream" }, etiqueta: { es: "Frappés", en: "Frappés" } },
  { src: "images/galeria-helado.jpg", alt: { es: "Ice Mess servido en taza floral con cuchara de porcelana", en: "Ice Mess served in a floral cup with a porcelain spoon" }, etiqueta: "Ice Mess" },
  { src: "images/galeria-cheesecake.jpg", alt: { es: "Cheesecake de fresa con crema", en: "Strawberry cheesecake with cream" }, etiqueta: { es: "Cheesecake", en: "Cheesecake" } },
  { src: "images/galeria-tarta.jpg", alt: { es: "Cheesecake de temporada con crema y coulis de calabaza", en: "Seasonal cheesecake with cream and pumpkin coulis" }, etiqueta: { es: "Cheesecake de temporada", en: "Seasonal cheesecake" } },
  { src: "images/galeria-torre.jpg", alt: { es: "Torre de bocadillos entre luces cálidas", en: "Tiered stand of bites among warm lights" }, etiqueta: { es: "La torre", en: "The tower" } },
  { src: "images/galeria-letrero.jpg", alt: { es: "Letrero colgante Casa de Té y Café REVU 1910", en: "Hanging sign: REVU 1910 Tea & Coffee House" }, etiqueta: { es: "El letrero", en: "The sign" } },
  { src: "images/galeria-jardin.jpg", alt: { es: "Escultura de tazas apiladas con el número 1910 en el jardín", en: "Stacked teacup sculpture with the number 1910 in the garden" }, etiqueta: { es: "El jardín", en: "The garden" } },
  { src: "images/galeria-cupcake.jpg", alt: { es: "Cupcake con detalle de corazón", en: "Cupcake with heart topper" }, etiqueta: { es: "Repostería", en: "Bakery" } },
  { src: "images/galeria-macarons2.jpg", alt: { es: "Estuche de macarrones de colores sobre mantel bordado", en: "Box of colorful macarons on an embroidered cloth" }, etiqueta: { es: "Para llevar", en: "To take away" } },
];

function renderGaleria() {
  const cont = $("#gallery");
  if (!cont) return;
  cont.innerHTML = GALERIA.map((g, i) => `
    <figure class="gallery__item">
      <button class="gallery__btn" type="button" data-index="${i}" aria-label="${tr(g.etiqueta)}">
        <img src="${g.src}" alt="${tr(g.alt)}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='grid';" />
        <span class="gallery__ph" style="display:none">✦ ${tr(g.etiqueta)}</span>
      </button>
      <figcaption class="gallery__caption">
        <strong>${tr(g.etiqueta)}</strong>
        <small>REVU 1910 · La Paz</small>
      </figcaption>
    </figure>`).join("");
}

/* ------------------ Visor de galería (lightbox) ------------------ */
let lbIndex = 0;
let lbLastFocus = null;

function lbOpen(i) {
  const box = $("#lightbox");
  if (!box) return;
  lbLastFocus = document.activeElement;
  lbIndex = i;
  lbShow();
  box.classList.add("is-open");
  box.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("#lbClose")?.focus();
}

function lbClose() {
  const box = $("#lightbox");
  if (!box) return;
  box.classList.remove("is-open");
  box.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lbLastFocus?.focus();
}

function lbShow() {
  const g = GALERIA[lbIndex];
  if (!g) return;
  const img = $("#lbImage");
  const cap = $("#lbCaption");
  const cnt = $("#lbCounter");
  if (img) { img.src = g.src; img.alt = tr(g.alt); }
  if (cap) cap.textContent = tr(g.etiqueta);
  if (cnt) cnt.textContent = `${lbIndex + 1} / ${GALERIA.length}`;
}

function lbMove(step) {
  lbIndex = (lbIndex + step + GALERIA.length) % GALERIA.length;
  lbShow();
}

function initLightbox() {
  const gallery = $("#gallery");
  const box = $("#lightbox");
  if (!gallery || !box) return;

  gallery.addEventListener("click", (e) => {
    const btn = e.target.closest(".gallery__btn");
    if (btn) lbOpen(Number(btn.dataset.index) || 0);
  });

  $("#lbClose")?.addEventListener("click", lbClose);
  $("#lbPrev")?.addEventListener("click", () => lbMove(-1));
  $("#lbNext")?.addEventListener("click", () => lbMove(1));
  box.addEventListener("click", (e) => { if (e.target === box) lbClose(); });

  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("is-open")) return;
    if (e.key === "Escape") lbClose();
    else if (e.key === "ArrowLeft") lbMove(-1);
    else if (e.key === "ArrowRight") lbMove(1);
  });

  // Deslizar en pantallas táctiles
  let x0 = null;
  box.addEventListener("touchstart", (e) => { x0 = e.changedTouches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", (e) => {
    if (x0 == null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) lbMove(dx < 0 ? 1 : -1);
    x0 = null;
  }, { passive: true });
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
        events: `¡Hola ${CONFIG.nombreNegocio}! Me gustaría que me avisen del próximo taller o cata de té.`,
      }
    : {
        chat: `Hi ${CONFIG.nombreNegocio}! I'd like more info / to book a table.`,
        greet: `Hi ${CONFIG.nombreNegocio}! I'd like to book a table 🫖`,
        name: "Name", people: "Guests", date: "Date", time: "Time", notes: "Notes",
        opening: "Opening WhatsApp… if it doesn't open, check your pop-up blocker.",
        events: `Hi ${CONFIG.nombreNegocio}! I'd like to be notified about the next tea workshop or tasting.`,
      };
}

function refreshWaLinks() {
  const w = whatsappTexts();
  const chatUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(w.chat)}`;
  $("#waLink") && ($("#waLink").href = chatUrl);
  $("#waFloat") && ($("#waFloat").href = chatUrl);
  const ev = $("#eventNotify");
  if (ev) ev.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(w.events)}`;
}

/** true si la fecha (YYYY-MM-DD) cae en un día sin servicio. */
function esDiaCerrado(fecha) {
  if (!fecha) return false;
  return CONFIG.horario.cerrado.includes(new Date(fecha + "T00:00").getDay());
}

function initReserva() {
  const form = $("#reservaForm");
  const hint = $("#waHint");
  if (!form) return;

  const fechaInput = form.querySelector('input[name="fecha"]');
  if (fechaInput) {
    // No permite fechas pasadas
    fechaInput.min = new Date().toISOString().slice(0, 10);
    // Avisa en cuanto eligen un domingo
    fechaInput.addEventListener("change", () => {
      const cerrado = esDiaCerrado(fechaInput.value);
      fechaInput.setCustomValidity(cerrado ? t("form.sundayClosed") : "");
      if (hint) {
        hint.textContent = cerrado ? t("form.sundayClosed") : "";
        hint.classList.toggle("form__hint--warn", cerrado);
      }
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const w = whatsappTexts();
    const d = new FormData(form);
    const fecha = d.get("fecha");

    if (esDiaCerrado(fecha)) {
      if (hint) {
        hint.textContent = t("form.sundayClosed");
        hint.classList.add("form__hint--warn");
      }
      fechaInput?.focus();
      return;
    }
    hint?.classList.remove("form__hint--warn");
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

  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });

  // Botón de idioma: muestra el idioma AL QUE se cambiará
  const toggle = $("#langToggle");
  if (toggle) {
    toggle.textContent = lang === "es" ? "EN" : "ES";
    toggle.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
  }

  // Contenido dinámico
  renderMenu();
  renderGaleria();
  renderEventos();
  renderHoras();
  refreshWaLinks();
  if ($("#lightbox")?.classList.contains("is-open")) lbShow();
}

/* --------------------- Contacto (enlaces) ------------------------ */
function initContacto() {
  const mail = $("#mailLink");
  if (mail) {
    mail.href = `mailto:${CONFIG.correo}`;
    mail.textContent = CONFIG.correo;
  }
  $$("[data-ig]").forEach((el) => { el.href = CONFIG.instagram; });
  $$("[data-fb]").forEach((el) => { el.href = CONFIG.facebook; });
  const tel = $("#telLink");
  if (tel) {
    tel.href = `tel:+52${CONFIG.telefonoVisible.replace(/\s/g, "")}`;
    tel.textContent = CONFIG.telefonoVisible;
  }
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
  // (las tarjetas del carrusel manejan su propia opacidad)
  const targets = $$(".section, .pillar, .gallery__item, .event, .tl__item");
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
  initContacto();
  initLightbox();
  initStorySlider();
  initUI();
  applyLang(detectLang());
});
