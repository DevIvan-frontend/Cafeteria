# ☕ REVU 1910 · Casa de Té y Café

Sitio web de una sola página (landing) para promocionar **Casa de té y café REVU 1910**
y recibir reservaciones directamente por **WhatsApp**. Estética de casa de té de
principios del siglo XX: ladrillo, verdigris, crema y toques dorados.

## Secciones

- **Hero** — presentación de la marca.
- **Nuestra casa** — breve historia y pilares (café, té, postres).
- **Menú** — pestañas: Paninis · Bebidas · Postres · Servicio de té.
- **Galería** — espacios para tus fotos.
- **Reservar** — formulario que arma un mensaje de WhatsApp listo para enviar.
- **Visítanos** — horario, contacto y ubicación.

## Configuración (¡importante!)

1. **Número de WhatsApp.** Abre [`app.js`](app.js) y edita `CONFIG.whatsapp`
   con el número real del negocio: lada de país + número, sin `+`, espacios ni guiones.
   Ejemplo México: `"525512345678"`.

2. **Fotos.** Coloca tus imágenes en la carpeta [`images/`](images/):
   - `hero.jpg` — foto de fondo del encabezado (recomendado 1600×900 o mayor).
   - `galeria-1.jpg` … `galeria-6.jpg` — fotos de la galería.
   - Mientras no existan, se muestran marcadores elegantes automáticamente.

3. **Datos de contacto.** Actualiza horario y ubicación en [`index.html`](index.html)
   (sección `footer`).

## Cómo verlo

Abre [`index.html`](index.html) en tu navegador. No requiere instalación ni servidor.

## Estructura

```
Cafeteria/
├── index.html   # Estructura y contenido
├── styles.css   # Estilos (paleta vintage)
├── app.js       # Datos del menú, pestañas y reservación por WhatsApp
├── images/      # Tus fotos (hero + galería)
└── README.md
```
