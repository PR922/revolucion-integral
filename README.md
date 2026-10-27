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
├── js/
│   └── main.js        ← inicializa AOS (animaciones al hacer scroll)
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
│   ├── _mixins.scss       ← media queries, flex en columna, mixins de animación
│   └── _placeholders.scss ← placeholders para @extend
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
    ├── _nosotros.scss     ← página Nosotros
    └── _animaciones.scss  ← @keyframes y transiciones
```

Qué se usa de SCSS:

- **Variables** (`$color-verde`, `$espacio-lg`, `$bp-tablet`...): ningún color queda escrito a mano fuera de `_variables.scss`.
- **Partials** (archivos que empiezan con `_`) y **`@use`** desde `main.scss`.
- **Mixins** (`tablet`, `escritorio`, `flex-columna`, `fondo-hoja`...) para no repetir código.
- **Nesting y `&`** para agrupar las reglas de cada componente.
- **Mixins con parámetros** (`transicion($propiedad, $duracion, $curva)`, `animacion($nombre, $duracion, $retraso)`, `elevar($escala, $sombra)`).
- **`@extend`** con un placeholder (`%interactivo`) para compartir estilos entre el logo y los íconos de redes.
- **Operadores** (`*`, `+` y `math.div`) para calcular duraciones, escalas y desplazamientos a partir de las variables.

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

## Animaciones

- **Nativas (SCSS)**, en `scss/components/_animaciones.scss`:
  - `@keyframes aparecer-subir`: el texto del carrusel entra cada vez que cambia la diapositiva.
  - `transition`: subrayado que crece en los links de la navbar, zoom suave en las fotos de las recetas y en el logo, y efecto al pasar el mouse sobre los íconos de redes.
- **Con librería**: [AOS](https://michalsnik.github.io/aos/) (CDN) en las 6 páginas. Los títulos, tarjetas, fotos y el mapa aparecen con `fade` y `zoom` al hacer scroll (atributos `data-aos` en el HTML y configuración en `js/main.js`).
- Todas las animaciones se desactivan si el usuario tiene activada la opción "reducir movimiento" de su sistema.

## Diseño responsive

Se parte del diseño para celular (sin media query, todo apilado en 1 columna al 100% del ancho) y se suma complejidad con `min-width`:

| Pantalla | Breakpoint | Qué cambia |
| --- | --- | --- |
| Móvil | base (sin media query) | Secciones apiladas en 1 columna |
| Tablet | `min-width: 768px` | Inicio en 2 columnas. Recetas: foto + ingredientes lado a lado y pasos abajo |
| Escritorio | `min-width: 1024px` | Inicio en 3 columnas. Recetas en 2 columnas (foto + ingredientes / paso a paso). Nosotros en 2 columnas. Footer en fila y tipografías más grandes |
| Celular chico | `max-width: 480px` | Menos padding, carrusel más bajo y sin subtítulo en las diapositivas |
| Pantalla grande | `min-width: 1440px` | Contenedor y carrusel más anchos, títulos más grandes |
| Celular horizontal | `max-height: 500px` + landscape | Carruseles más bajos para que entren en pantalla |
| Navbar | `992px` a `1199px` | Letra más chica y sin cortar el texto de los links |

### Grillas con `grid-template-areas`

- **Layout general** (`body`): áreas `header`, `main` y `footer`.
- **Inicio** (`.inicio`): áreas `titulo`, `intro`, `motivo` y `proposito`.
- **Recetas** (`.receta.grid-doble`): áreas `presentacion`, `ingredientes` y `pasos`.
- **Nosotros** (`.nosotros.grid-doble`): áreas `historia` y `carrusel`.

Las columnas se definen con la unidad `fr` y el espaciado entre elementos con `gap`.

## SEO on-page y accesibilidad

### Títulos y meta descriptions

Cada página tiene un `<title>` y una `<meta name="description">` propios, que coinciden con su contenido (sin `meta keywords`, que ya no se usa).

| Página | Title | Palabras clave |
| --- | --- | --- |
| Inicio | Recetas saludables e integrales \| Revolución Integral | recetas saludables, integrales |
| Desayuno | Panqueques de banana y avena \| Desayunos saludables | panqueques de banana, desayuno saludable |
| Almuerzo | Polenta a la plancha con atún y queso \| Almuerzo saludable | polenta con atún, almuerzo saludable |
| Merienda | Budín integral de limón \| Meriendas saludables | budín integral, merienda saludable |
| Cena | Tortilla de verduras y avena \| Cenas saludables | tortilla de verduras, cena saludable |
| Nosotros | Sobre nosotros \| Revolución Integral, recetas saludables | Revolución Integral, comida saludable |

Las palabras clave aparecen de forma natural en el `<title>`, el `<h1>`, los subtítulos y el texto de introducción, sin repetirlas de más.

### HTML semántico

- Un solo `<h1>` por página y jerarquía ordenada (`h1` → `h2` → `h3` → `h4`), sin saltos de nivel.
- Se usan `<header>`, `<nav aria-label>`, `<main>`, `<section aria-labelledby>`, `<article>`, `<figure>`, `<aside>` y `<footer>` en lugar de `<div>` genéricos.
- Los iframes (mapa) tienen `title` y los links externos `rel="noopener noreferrer"`.

### Imágenes

- Todas las imágenes tienen un `alt` descriptivo y específico de cada página.
- Los archivos tienen nombres descriptivos en minúsculas y con guiones: `logo-revolucion-integral.png`, `icono-instagram.jpg`, `icono-facebook.webp` y `fondo-hojas-acuarela.avif` (antes `logo.png`, `instagram.jpg`, `facebook.webp` y `fondo-hoja-verde.png`, que en realidad era un AVIF).

### Contraste (WCAG AA)

| Texto | Fondo | Ratio |
| --- | --- | --- |
| Texto `#493B32` | `#FAF8F1` | 10.11:1 |
| Verde de títulos `#5A6D43` (antes `#667A4E`, 4.43:1) | `#FAF8F1` | 5.34:1 |
| Terracota `#C97855` (solo títulos grandes) | `#FAF8F1` | 3.14:1 (mínimo para texto grande: 3:1) |

## Tecnologías

- HTML5 semántico
- CSS3 (Grid, Flexbox, media queries) escrito con SCSS (Sass)
- Bootstrap 5.3 (barra de navegación y carruseles)
- AOS 2.3 (animaciones al hacer scroll)
- Google Fonts (Poppins)

## Paleta de colores

| Color | Código |
| --- | --- |
| Fondo | `#FAF8F1` |
| Verde oliva | `#667A4E` |
| Terracota | `#C97855` |
| Texto | `#493B32` |
