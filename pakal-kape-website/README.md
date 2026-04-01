# Pakal Kape — Sitio Web Oficial

> Café de Especialidad · Variedad Geisha · Jaltenango, Chiapas, México

**© 2024–2026 ESPORO & Pakal Kape. Todos los derechos reservados.**
Prohibida la reproducción o uso no autorizado de este código o contenido.

---

## Sobre el Proyecto

Sitio web oficial de **Pakal Kape**, marca de café de especialidad 100% orgánico cultivado entre 1600–1900 msnm en las montañas de Jaltenango, Chiapas. El sitio presenta los productos de la marca, la historia de los fundadores, el proceso de producción, y canales de contacto directo.

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | 19 | UI components |
| [Vite](https://vitejs.dev/) | 7 | Build tool / dev server |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first styling |
| [Framer Motion](https://www.framer-motion.com/) | latest | Animations |
| [Lucide React](https://lucide.dev/) | latest | Icons |

---

## Estructura del Proyecto

```
pakal-kape-website/
├── index.html                  # Entry point + SEO meta + JSON-LD
├── src/
│   ├── main.jsx
│   ├── App.jsx                 # Root layout + scroll progress bar
│   ├── index.css               # Global styles + Tailwind imports
│   ├── assets/                 # Logo, product images
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.jsx      # Fixed nav with scroll spy + mobile menu
│   │   │   └── footer.jsx      # Footer with nav links + copyright
│   │   └── sections/
│   │       ├── hero.jsx        # Landing screen with animations
│   │       ├── historia.jsx    # Brand story + stats
│   │       ├── diferenciador.jsx
│   │       ├── productos.jsx   # Product cards with image carousel
│   │       ├── proceso.jsx     # Production process steps
│   │       └── contacto.jsx    # WhatsApp + email + social links
│   ├── data/
│   │   └── content.js          # All text content, product data, nav items
│   ├── hooks/
│   │   └── useScrollSpy.js     # Active section detection on scroll
│   └── utils/
│       └── whatsapp.js         # WhatsApp deep link generator
```

---

## Productos

### YUUMIL BAK'AL — Café en Grano Tostado
- **Precio:** $250 MXN / 500g
- Variedad Geisha · 84 puntos SCA
- Calidad Europea de Exportación
- Cultivado entre 1600–1900 msnm

### NIKTE 'KA'ANIL — Café Molido
- **Precio:** $265 MXN / 500g
- Variedad Geisha · 84 puntos SCA
- Calidad Europea de Exportación
- Ideal para cafetera tradicional, prensa francesa o eléctrica

---

## Características del Diseño

- **Paleta:** `#080808` fondo principal · `#f5f2ec` secciones claras · `#c9a96e` acento dorado
- **Tipografía:** Playfair Display (display) · Montserrat (headings) · Inter (body)
- **Animaciones:** Framer Motion — parallax, letter-by-letter flip, scroll progress bar, stagger FadeUp, hover interactions
- **SEO:** JSON-LD structured data (LocalBusiness + Product), Open Graph, Twitter Card, meta description y keywords

---

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## SEO & Google Search Console

El sitio incluye:
- `<title>` y `<meta name="description">` optimizados
- Open Graph tags para compartir en redes sociales
- Twitter Card tags
- JSON-LD con `@type: LocalBusiness` y `@type: Product` para resultados enriquecidos en Google
- `<link rel="canonical">` apuntando a `https://pakalkape.com`

---

## Redes Sociales

- Instagram: [@pakalkape](https://instagram.com/pakalkape)
- Facebook: [pakalkape](https://facebook.com/pakalkape)

---

## Contacto

- **Email:** contacto@pakalkape.com
- **WhatsApp:** +52 221 276 4387
- **Ubicación:** Jaltenango, Chiapas, México

---

## Fundadores

**Valeria Jarquín** & **Ramses Guzmán**

---

*© 2024–2026 ESPORO & Pakal Kape. Todos los derechos reservados.*
