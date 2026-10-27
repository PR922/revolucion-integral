# Revolución Integral

Sitio web de recetas saludables e integrales, pensado para comer rico y simple sin ultraprocesados. Proyecto del curso de **Desarrollo Web** de Coderhouse.

El sitio tiene un diseño **mobile-first** y se adapta a celular, tablet y escritorio usando **CSS Grid**, **Flexbox** y **media queries**.

## Sitio publicado

🌐 **https://pr922.github.io/revolucion-integral/**

(Publicado con GitHub Pages desde la rama `main`, carpeta `/ (root)`.)

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

Los estilos se escriben en SCSS y se compilan a `style/style.css` (ver [Estilos con SCSS](#estilos-con-scss)). El `style.css` ya compilado está en el repositorio, así que para ver el sitio no hace falta compilar nada.

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
│   └── style.css      ← generado al compilar scss/main.scss (no se edita a mano)
├── scss/              ← código fuente de los estilos (ver más abajo)
├── package.json
├── imagen/
└── paleta/
    └── paleta.txt
```

## Estilos con SCSS

Todo el CSS propio del sitio nace de archivos `.scss` dentro de `scss/`. El archivo `style/style.css` es solo el resultado de la compilación y no se edita a mano.

```
scss/
├── main.scss              ← único punto de entrada (usa @use)
├── utilities/
│   ├── _variables.scss    ← colores, tipografía, radios, espacios y breakpoints
│   └── _mixins.scss       ← media queries, flex en columna, fondo de hojas
├── base/
│   ├── _base.scss         ← estilos globales a etiquetas (*, body, ul, a, img)
│   └── _tipografia.scss   ← h1, h2, h3 y p
├── layout/
│   ├── _header.scss       ← header
│   ├── _nav.scss          ← navbar de Bootstrap y menú
│   ├── _main.scss         ← main, contenedor y grilla doble
│   ├── _inicio.scss       ← grilla de la página de inicio
│   └── _footer.scss       ← footer, redes y mapa
└── components/
    ├── _cards.scss        ← tarjetas (article) y listas
    ├── _carousel.scss     ← carrusel de Bootstrap personalizado
    ├── _receta.scss       ← páginas de recetas
    └── _nosotros.scss     ← página Nosotros
```

Qué se usa de SCSS:

- **Variables** (`$color-verde`, `$espacio-lg`, `$bp-tablet`...): ningún color queda escrito a mano fuera de `_variables.scss`.
- **Partials** (archivos que empiezan con `_`) y **`@use`** desde `main.scss`.
- **Mixins** (`tablet`, `escritorio`, `flex-columna`, `fondo-hoja`...) para no repetir código.
- **Nesting y `&`** para agrupar las reglas de cada componente.

### Cómo compilar

Requiere [Node.js](https://nodejs.org). La primera vez:

```
npm install
```

Para compilar:

```
npm run sass
```

Para que compile solo cada vez que se guarda un `.scss`:

```
npm run sass:watch
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
- CSS3 (Grid, Flexbox, media queries) escrito con SCSS (Sass)
- Bootstrap 5.3 (barra de navegación y carruseles)
- Google Fonts (Poppins)

## Paleta de colores

| Color | Código |
| --- | --- |
| Fondo | `#FAF8F1` |
| Verde oliva | `#667A4E` |
| Terracota | `#C97855` |
| Texto | `#493B32` |
