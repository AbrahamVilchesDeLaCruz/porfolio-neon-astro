---
title: "Lo que la IA no te hace"
description: "La IA puede apagar fuegos, pero no acabar con el incendio. Sobre el pensamiento a largo plazo en ingeniería de software y el patrón Criteria como ejemplo de diseño sostenible."
pubDate: 2025-02-17
tags: ["IA", "Patrones de Diseño", "Criteria", "Clean Architecture", "DDD", "Ingeniería de Software"]
---

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🚨 Las gafas de cerca</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Muchas personas del sector tech —me incluyo— tenemos la tendencia de preguntarle, o más bien exigirle, a la IA una respuesta a un problema. Y sí, muchas veces acierta en el razonamiento. Pero siempre lleva puestas <strong>las gafas de cerca</strong>.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Todavía no tiene la capacidad de imaginar.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Pero nosotros sí. Y tenemos la capacidad de pensar. Los ingenieros deberíamos hacerlo con las gafas del <strong>impacto inmediato y del futuro lejano</strong>. Debemos proponer y aplicar soluciones garantizando escalabilidad, legibilidad y sostenibilidad.
</p>

<br />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🔥 Apagar fuegos vs acabar con el incendio</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Lo que la IA no hace es <strong>diseñar a largo plazo</strong>. Puede que te sirva para apagar un fuego, pero no te da para acabar con el incendio. Por lo menos si no la guiás en soluciones completas. Dándole tus gafas. Tus ideas. Tu conocimiento.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Si sos ingeniero de software, desarrollador o apasionado por la programación: <strong>aprende patrones de diseño. Aprende las bases.</strong> Y después, propúlsate usando IA. No hay ningún problema en eso.
</p>

<br />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🎯 El patrón Criteria</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Como ejemplo de lo que significa diseñar con intención, os dejo una solución a un problema bastante común en los sistemas: la capacidad de <strong>filtrar y paginar en una API de manera elegante y sostenible</strong>, sin que el repositorio crezca hasta el infinito.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  El <strong>patrón Criteria</strong> resuelve exactamente eso. En vez de tener un método por cada combinación posible de filtros en el repositorio, encapsulás los criterios de búsqueda en un objeto que el repositorio sabe interpretar. El repositorio no crece. La lógica de filtrado vive en el dominio. Y podés componer criterios con libertad.
</p>

<div style="margin-top:1.5rem; border-left: 3px solid oklch(67.3% 0.182 276.935); padding-left:1rem;">
  <p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); font-style:italic;">
    Sin Criteria: <code style="color:oklch(67.3% 0.182 276.935);">findByUserAndDateAndCategory()</code>, <code style="color:oklch(67.3% 0.182 276.935);">findByUserAndAmount()</code>, <code style="color:oklch(67.3% 0.182 276.935);">findByUserPaginated()</code>... hasta el infinito.
  </p>
  <p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); font-style:italic; margin-top:0.5rem;">
    Con Criteria: <code style="color:oklch(67.3% 0.182 276.935);">find(criteria: Criteria)</code>. Un método. Infinitas combinaciones.
  </p>
</div>

<br />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">💰 Aplicado en Code Finances</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Apliqué este patrón en la búsqueda y filtrado de ingresos dentro de <strong>Code Finances</strong>. El caso de uso necesitaba filtrar por usuario, rango de fechas, categoría y paginar los resultados. Sin Criteria, el repositorio habría explotado en métodos específicos. Con Criteria, el repositorio expone un único punto de entrada y el caso de uso construye los filtros que necesita.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Este es exactamente el tipo de solución que la IA no te va a proponer sola. Necesita que vos llegues con el patrón en la cabeza, con el problema entendido, y la uses como acelerador. No como arquitecto.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<p style="font-style:italic; color:#94A3B8; line-height:1.7;">
  Publicado originalmente en <a href="https://www.linkedin.com/in/abraham-vilches-de-la-cruz-295538175/" style="color:oklch(67.3% 0.182 276.935);">LinkedIn</a>.
</p>
