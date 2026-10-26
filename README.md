# Revolución Integral

Sitio web de recetas saludables e integrales, pensado para comer rico y simple sin ultraprocesados. Proyecto del curso de **Desarrollo Web** de Coderhouse.

El sitio tiene un diseño **mobile-first** y se adapta a celular, tablet y escritorio usando **CSS Grid**, **Flexbox** y **media queries**.

## Páginas

| Página | Archivo |
| --- | --- |
| Inicio | `index.html` |
| Recetas para desayunar | `pages/desayuno.html` |
| Recetas para almorzar | `pages/almuerzo.html` |
| Recetas para merendar | `pages/merienda.html` |
| Recetas para cenar | `pages/cena.html` |
| Nosotros | `pages/nosotros.html` |

## Cómo ejecutarlo

No necesita instalación ni servidor:

1. Clonar o descargar el repositorio.
2. Abrir `index.html` (está en la raíz del repositorio) en el navegador.

También se puede abrir la carpeta en VS Code y usar la extensión **Live Server** (clic derecho sobre `index.html` → *Open with Live Server*).

> Bootstrap y la tipografía Poppins se cargan por CDN, por lo que hace falta conexión a internet para verlos.

## Estructura de carpetas

```
revolucion-integral/   (raíz del repositorio)
├── README.md
├── index.html
├── pages/
│   ├── almuerzo.html
│   ├── cena.html
│   ├── desayuno.html
│   ├── merienda.html
│   └── nosotros.html
├── style/
│   └── style.css      ← hoja de estilos única para todo el sitio
├── imagen/
└── paleta/
    └── paleta.txt
```

## Diseño responsive

Se parte del diseño para celular (sin media query, todo apilado en 1 columna al 100% del ancho) y se suma complejidad con `min-width`:

| Pantalla | Breakpoint | Qué cambia |
| --- | --- | --- |
| Móvil | base (sin media query) | Secciones apiladas en 1 columna |
| Tablet | `min-width: 768px` | Inicio en 2 columnas. Recetas: foto + ingredientes lado a lado y pasos abajo |
| Escritorio | `min-width: 1024px` | Inicio en 3 columnas. Recetas en 2 columnas (foto + ingredientes / paso a paso). Nosotros en 2 columnas. Footer en fila y tipografías más grandes |

### Grillas con `grid-template-areas`

- **Layout general** (`body`): áreas `header`, `main` y `footer`.
- **Inicio** (`.inicio`): áreas `titulo`, `intro`, `motivo` y `proposito`.
- **Recetas** (`.receta.grid-doble`): áreas `presentacion`, `ingredientes` y `pasos`.
- **Nosotros** (`.nosotros.grid-doble`): áreas `historia` y `carrusel`.

Las columnas se definen con la unidad `fr` y el espaciado entre elementos con `gap`.

## Tecnologías

- HTML5 semántico
- CSS3 (Grid, Flexbox, media queries)
- Bootstrap 5.3 (barra de navegación y carruseles)
- Google Fonts (Poppins)

## Paleta de colores

| Color | Código |
| --- | --- |
| Fondo | `#FAF8F1` |
| Verde oliva | `#667A4E` |
| Terracota | `#C97855` |
| Texto | `#493B32` |
