# Imágenes

Todas las fotos del sitio ya están optimizadas para web. Los **originales sin
comprimir** se conservan en `originales/`, que no se sube a GitHub (está en
`.gitignore`) para no inflar el repositorio.

## Dónde aparece cada foto

### Encabezado
| Archivo | Origen | Uso |
|---|---|---|
| `hero.jpg` | IMG_3427 | Fondo de la portada (estantería de tés) |

### "Nuestra casa" — los tres pilares
| Archivo | Origen | Uso |
|---|---|---|
| `especialidad-cafe.jpg` | IMG_0998 | Café hecho con cariño |
| `especialidad-te.jpg` | IMG_3006 | Tés del mundo (sirviendo de la tetera) |
| `especialidad-postres.jpg` | IMG_2997 | Repostería artesanal (tartaletas) |

### Galería (14 fotos, en este orden)
| Archivo | Origen | Etiqueta |
|---|---|---|
| `galeria-fachada.jpg` | IMG_0635 | La fachada |
| `galeria-salon.jpg` | IMG_0745 | El salón |
| `galeria-teteras.jpg` | IMG_5676 | Las teteras |
| `galeria-charola.jpg` | IMG_2715 | Servicio de té |
| `galeria-panini.jpg` | IMG_2922 | Paninis |
| `galeria-macarons.jpg` | IMG_3013 | Macarrones |
| `galeria-frappe.jpg` | IMG_3016 | Frappés |
| `galeria-helado.jpg` | helado | Ice Mess |
| `galeria-cheesecake.jpg` | — | Cheesecake |
| `galeria-tarta.jpg` | IMG_2994 | Tartas |
| `galeria-torre.jpg` | IMG_0746 | La torre |
| `galeria-letrero.jpg` | IMG_5675 | El letrero |
| `galeria-jardin.jpg` | IMG_6974 | El jardín |
| `galeria-cupcake.jpg` | — | Repostería |
| `galeria-macarons2.jpg` | 1FB6D4A5… | Para llevar |

### Boutique
| Archivo | Origen | Uso |
|---|---|---|
| `boutique-utensilios.jpg` | utencilios para té | Foto principal (expositor de accesorios) |
| `boutique-tes.jpg` | recorte de `hero.jpg` | Foto secundaria (estantería de tés) |

### Noticias (el bloque que se turna solo en "Talleres & catas")
Cada noticia lleva una imagen principal en formato 4:5 y dos miniaturas 3:2
que abren la versión completa en otra pestaña.

| Archivo | Origen | Uso |
|---|---|---|
| `prensa-mujeresaladas-portada.jpg` | recorte de la pág. 136 | **Principal:** mención en la revista Mujeresaladas (nov. 2026) |
| `prensa-mujeresaladas-136.webp` | captura de la revista | Doble página completa, primera parte |
| `prensa-mujeresaladas-138.webp` | captura de la revista | Doble página completa, segunda parte |
| `prensa-mujeresaladas-136-mini.jpg`, `-138-mini.jpg` | — | Miniaturas de las dos dobles páginas |
| `donblack-emblema.jpg` | recorte de Don Black03 | **Principal:** el emblema de REVU 1910 en la camioneta #755 |
| `donblack-1.jpg`, `donblack-2.jpg`, `donblack-3.jpg` | Don Black01–03 | Fotos completas de la camioneta |
| `donblack-1-mini.jpg`, `donblack-2-mini.jpg` | — | Miniaturas |

Las dobles páginas de la revista se quedan en WebP tal como llegaron: son
puro texto y recomprimirlas sólo las ensuciaría.

### Eventos (ediciones anteriores)
| Archivo | Origen | Evento |
|---|---|---|
| `evento-halloween-jack.jpg` | Revú 1910 Halloween en el Mundo de Jack | Noche de Halloween (31 oct 2026) |
| `evento-cata-halloween.jpg` | Halloween Tea Invitation | Cata de Té Halloween (27 oct 2026) |
| `evento-cata-tres-colores.jpg` | INVITACION CATA | Cata Tres Colores (22 sep 2026) |
| `galeria-teteras.jpg` | IMG_5676 | Un verano en Brujas |
| `evento-te.jpg` | IMG_3007 | Día Internacional del Té |
| `evento-catas.jpg` | IMG_3012 | Catas mensuales |

### Sin usar por ahora
`evento-temporada.jpg` (IMG_3001) y `galeria-navidad.jpg` (IMG_9966) quedan
listas por si quieren rotarlas en la galería o en un evento nuevo.

## Marca y SEO
| Archivo | Uso |
|---|---|
| `logo-marca.png` | **Emblema oficial** del negocio, en la portada |
| `logo-google.png` | Emblema para los resultados de Google (512×512, fondo transparente) |
| `icon-192.png` | Icono al guardar el sitio en Android |
| `favicon-32.png` | Icono de la pestaña del navegador |
| `favicon-180.png` | Icono al guardar el sitio en iPhone/iPad |
| `og-revu1910.jpg` | Vista previa al compartir (1200×630), sobre la foto de la fachada |

## Cómo agregar o cambiar fotos
1. Copia el original a `images/originales/`.
2. Genera la versión web (lado mayor ~1400 px, calidad 81, progresiva).
   Los **carteles** llevan otro trato: 900×1350, calidad 82 y sin
   submuestreo de color (`subsampling=0`), para que no se ensucie la letra
   fina ni el naranja sobre el fondo oscuro. Tampoco se les aplica enfoque.
3. Ajusta el arreglo `GALERIA` o `EVENTOS` en `../app.js`, o la ruta del `<img>`
   correspondiente en `../index.html`.
