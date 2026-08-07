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
| `especialidad-cafe.jpg` | IMG_0998 | Café de especialidad |
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
| `galeria-cheesecake.jpg` | — | Cheesecake |
| `galeria-tarta.jpg` | IMG_2994 | Tartas |
| `galeria-torre.jpg` | IMG_0746 | La torre |
| `galeria-letrero.jpg` | IMG_5675 | El letrero |
| `galeria-jardin.jpg` | IMG_6974 | El jardín |
| `galeria-cupcake.jpg` | — | Repostería |
| `galeria-macarons2.jpg` | 1FB6D4A5… | Para llevar |

### Eventos
| Archivo | Origen | Evento |
|---|---|---|
| `galeria-teteras.jpg` | IMG_5676 | Un verano en Brujas |
| `evento-te.jpg` | IMG_3007 | Día Internacional del Té |
| `evento-catas.jpg` | IMG_3012 | Catas mensuales |

### Sin usar por ahora
`evento-temporada.jpg` (IMG_3001) y `galeria-navidad.jpg` (IMG_9966) quedan
listas por si quieren rotarlas en la galería o en un evento nuevo.

## Marca y SEO
| Archivo | Uso |
|---|---|
| `logo-revu1910.png` | Logo tipo sello (512×512), para Google y datos estructurados |
| `favicon-32.png` | Icono de la pestaña del navegador |
| `favicon-180.png` | Icono al guardar el sitio en iPhone/iPad |
| `og-revu1910.jpg` | Vista previa al compartir (1200×630), sobre la foto de la fachada |

## Cómo agregar o cambiar fotos
1. Copia el original a `images/originales/`.
2. Genera la versión web (lado mayor ~1400 px, calidad 81, progresiva).
3. Ajusta el arreglo `GALERIA` o `EVENTOS` en `../app.js`, o la ruta del `<img>`
   correspondiente en `../index.html`.
