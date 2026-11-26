# Revolución Integral

Sitio web estático de recetas saludables, desarrollado como proyecto final del curso de Desarrollo Web (Coderhouse).

## Sitio desplegado

- **Netlify:** https://revolucion-integral.netlify.app
- GitHub Pages: https://pr922.github.io/revolucion-integral/

## Páginas

| Página | Archivo |
|---|---|
| Inicio | `index.html` |
| Desayuno | `pages/desayuno.html` |
| Almuerzo | `pages/almuerzo.html` |
| Merienda | `pages/merienda.html` |
| Cena | `pages/cena.html` |
| Nosotros | `pages/nosotros.html` |

## Tecnologías

- HTML5 semántico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- SCSS con arquitectura de partials (variables, nesting, mixins con parámetros, extend), importados con `@use` desde `scss/main.scss`
- Bootstrap: navbar responsiva con menú hamburguesa, estilada desde SCSS
- Diseño 100% responsivo (mobile, tablet y desktop) con media queries
- Animaciones: `transition`/`keyframes` nativas en SCSS y una librería externa (AOS)
- SEO on-page: `title`, `meta description` y `meta keywords` únicos por página, `alt` en todas las imágenes

## Estructura

```
index.html
pages/      # 5 páginas HTML
scss/       # estilos fuente (partials + main.scss)
styles/     # CSS compilado
assets/     # imágenes e íconos
```

## Compilar los estilos

```
npm install
npm run sass
```

## Autor

Pablo Rodriguez
