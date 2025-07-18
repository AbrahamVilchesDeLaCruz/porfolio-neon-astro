---
title: "Estructura de carpetas"
description: "Cómo estamos organizando los archivos y carpetas del proyecto"
pubDate: 2025-07-19
---

<h1 style="color:#4F46E5; font-weight:700;">Estructura de carpetas del proyecto</h1>

<p>En este post vamos a ver cómo estructuramos el proyecto para mantenerlo limpio y escalable.</p>

<h2 style="margin-top:2rem; color:#2563EB;">La estructura clave que seguimos es:</h2>

<pre style="background-color:#1E293B; color:#F8FAFC; padding:1rem 1.5rem; border-radius:0.5rem; font-size:0.9rem; overflow-x:auto;">
src/
    ├── components/  ← Componentes reutilizables (Header, Footer, etc)
    ├── content/     ← Archivos Markdown para el blog
    │   └── blog/    ← Posts en Markdown con frontmatter
    ├── layouts/     ← Layouts para envolver páginas (por ejemplo Layout.astro)
    ├── pages/       ← Páginas y rutas (index.astro, blog/[slug].astro)
    ├── styles/      ← Archivos CSS globales y Tailwind config
</pre>

<h2 style="margin-top:2rem; color:#2563EB;">¿Por qué esta estructura?</h2>

<ul style="line-height:1.6; margin-left:1rem; color:#CBD5E1;">
  <li><strong>components/</strong>: Aquí guardamos todos los componentes reutilizables, como el header y footer, para mantener la UI consistente y modular.</li>
  <li><strong>content/blog/</strong>: Contiene los posts en Markdown, con frontmatter para la metadata, que Astro puede consumir fácilmente.</li>
  <li><strong>layouts/</strong>: Para los layouts que envuelven nuestras páginas y dan estructura común.</li>
  <li><strong>pages/</strong>: Contiene las páginas y rutas de la app, donde Astro genera automáticamente las URLs.</li>
  <li><strong>styles/</strong>: Para los estilos globales, configuración de Tailwind y otros CSS.</li>
</ul>

<h2 style="margin-top:2rem; color:#2563EB;">Conclusión</h2>

<p style="color:#94A3B8; font-style:italic;">
  Organizar adecuadamente la estructura de carpetas en un proyecto es fundamental para mantener la escalabilidad y la limpieza del código. Siguiendo esta guía, podrás gestionar mejor tus archivos y facilitar la colaboración en equipo.
</p>

<p>Si tienes alguna pregunta o sugerencia sobre la estructura de carpetas, no dudes en dejar un comentario.</p>

<p style="font-weight:bold; margin-top:1rem;">¡Gracias por leer!</p>
