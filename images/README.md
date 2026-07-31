# Imágenes

Guarda aquí las fotos del sitio con **exactamente** estos nombres. Se cargan
automáticamente; si un archivo no existe, el sitio muestra un marcador elegante.

## Fotos que ya elegimos (de las que enviaste)

| Foto                                                   | Guárdala como                 | Se usa en           |
|--------------------------------------------------------|-------------------------------|---------------------|
| Capuchino en taza floral con canela                    | `especialidad-cafe.jpg`       | Div "Café" + galería |
| Vista superior de 4 tazas (matcha y lattes) con flores | `especialidad-te.jpg`         | Div "Tés" + galería  |
| Cheesecake de fresa con crema                          | `especialidad-postres.jpg`    | Div "Postres" + galería |
| Panini con puré en plato de hiedra                     | `galeria-panini.jpg`          | Galería             |
| Cupcake con corazón rojo                               | `galeria-cupcake.jpg`         | Galería             |

## Generadas para el rediseño temático

| Archivo        | Uso                              | Origen |
|----------------|----------------------------------|--------|
| `hero.jpg`     | Fondo del encabezado (duotono)   | Derivada de `especialidad-te.jpg` (foto propia) |
| `era-1910.jpg` | Cinta histórica "1910"           | Fotografía de 1911 (junta revolucionaria), dominio público — Wikimedia Commons, `Toma_de_Juarez_highres.jpg`, recortada y en duotono sepia |

## Marca y SEO

| Archivo                | Uso                                                   |
|------------------------|-------------------------------------------------------|
| `logo-revu1910.png`    | Logo tipo sello (512×512). Lo usa Google en resultados y datos estructurados |
| `favicon-32.png`       | Icono de la pestaña del navegador                     |
| `favicon-180.png`      | Icono al guardar el sitio en iPhone/iPad              |
| `og-revu1910.jpg`      | Vista previa al compartir en WhatsApp, Facebook, etc. (1200×630) |

> Estos cuatro se generan por código. Si en algún momento tienen el **logo oficial**
> del negocio en alta resolución, reemplaza `logo-revu1910.png` por él (cuadrado,
> mínimo 512×512, fondo claro o transparente) y regenera la imagen social.

Consejos:
- Usa formato `.jpg` y comprime las fotos antes de subirlas (cargan más rápido).
- Fotos horizontales lucen mejor; el sitio las recorta al centro automáticamente.
- Para cambiar nombres o agregar más fotos a la galería, edita el arreglo
  `GALERIA` en `../app.js`.
