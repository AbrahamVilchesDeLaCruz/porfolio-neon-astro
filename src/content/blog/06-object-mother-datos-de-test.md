---
title: "Object Mother: cómo generar datos de test sin ensuciar tus tests"
description: "El patrón Object Mother como factoría de datos para tests: limpio, reutilizable y mantenible. Implementación real en Code Finances con Faker."
pubDate: 2025-03-17
tags: ["Testing", "Object Mother", "TDD", "Code Finances", "TypeScript", "Buenas Prácticas"]
---

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Después de un tiempo, volvemos con la serie de <strong>Code Finances</strong>. Esta vez vamos a algo clave pero muchas veces ignorado: cómo generar datos de test de forma limpia, reutilizable y mantenible.
</p>

<blockquote style="border-left:3px solid oklch(67.3% 0.182 276.935); padding-left:1rem; margin:1.5rem 0; color:#94A3B8; font-style:italic;">
  "Para testear bien, primero necesitas datos válidos, coherentes y fáciles de generar."
</blockquote>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Y aquí es donde entra en juego el patrón <strong>Object Mother</strong>.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🤔 ¿Qué es Object Mother?</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  El patrón Object Mother actúa como una <strong>factoría de datos para tests</strong>. Se encarga de crear objetos válidos — payloads, DTOs, requests — listos para usar, sin que tengas que construirlos manualmente en cada test.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">⚠️ El problema sin Object Mother</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Cuando no tienes una estrategia clara para generar datos de test:
</p>

<ul style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.5rem; margin-top:0.75rem;">
  <li>🧩 Repites la creación de objetos en cada test</li>
  <li>😵 Los tests se llenan de ruido (datos irrelevantes)</li>
  <li>🔧 Cambiar un campo rompe múltiples tests</li>
  <li>🧠 Pierdes el foco en lo importante: el comportamiento</li>
</ul>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🚀 La solución: centralizar la creación de datos</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  En lugar de construir los datos en cada test:
</p>

```ts
const request = new RequestRevenueCreator(
  'uuid',
  100,
  'SALARY',
  'description',
  '2024-01-01',
  'accountId',
  'userId'
)
```

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Usamos un Object Mother:
</p>

```ts
const request = RevenueCreatorMother.createValidRequest()
```

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Una sola línea. Datos válidos. Test limpio.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">⚡️ Implementación en Code Finances</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Creamos una clase encargada de generar datos válidos usando <strong>Faker</strong>:
</p>

```ts
export class RevenueCreatorMother {
  static createValidRequest(): RequestRevenueCreator {
    return new RequestRevenueCreator(
      faker.string.uuid(),
      faker.number.float({ min: 1, max: 10000 }),
      faker.helpers.arrayElement(Object.values(ERevenueIncomeSourceType)),
      faker.lorem.sentence(1),
      faker.date.past().toISOString().split('T')[0],
      faker.string.uuid(),
      faker.string.uuid()
    )
  }
}
```

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Y en el test:
</p>

```ts
const request = RevenueCreatorMother.createValidRequest()

const result = await revenueCreator.execute(request)
```

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">💡 Faker: datos realistas sin esfuerzo</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Faker nos permite generar UUIDs, valores de enums, fechas y textos. Esto evita datos hardcodeados, acerca los inputs a producción y genera variabilidad sin esfuerzo.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🧠 ¿Qué ganamos?</h2>
<br />

<ul style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.5rem;">
  <li>✅ <strong>Legibilidad</strong> — el test se enfoca en el comportamiento</li>
  <li>🔁 <strong>Reutilización</strong> — un mismo generador sirve para muchos tests</li>
  <li>🔧 <strong>Mantenibilidad</strong> — cambios centralizados</li>
  <li>🔍 <strong>Separación de responsabilidades</strong> — los datos viven fuera del test</li>
</ul>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🧼 Buenas prácticas</h2>
<br />

<ul style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.5rem;">
  <li>Mantén los Object Mothers simples</li>
  <li>Evita lógica compleja o decisiones internas</li>
  <li>Genera datos realistas, pero controlados</li>
  <li>Si necesitas variaciones, permite <em>overrides</em> sencillos</li>
</ul>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">⚠️ Antipatrones a evitar</h2>
<br />

<ul style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.5rem;">
  <li>🚫 Usarlo como si fuera un Builder complejo lleno de métodos encadenados</li>
  <li>🚫 Generar aleatoriedad sin control — los tests flaky son un infierno</li>
  <li>🚫 Forzarlo cuando cada test necesita estructuras totalmente distintas</li>
</ul>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🧪 ¿Y si Object Mother no es suficiente?</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Dependiendo del contexto, puedes combinarlo con otras alternativas o utilizar enfoques distintos:
</p>

<ul style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.5rem; margin-top:0.75rem;">
  <li>🧱 <strong>Test Data Builders</strong> — más flexibilidad con métodos encadenados controlados</li>
  <li>📁 <strong>Fixtures</strong> — útiles para datos persistidos en base de datos</li>
  <li>⚙️ <strong>Factory Functions</strong> — rápidas pero menos estructuradas</li>
</ul>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">💬 Conclusión</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Object Mother no es solo una forma de generar datos. Es una forma de <strong>mantener tus tests limpios, legibles y sostenibles en el tiempo</strong>.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Porque un buen test no debería preocuparse por <em>cómo crear datos</em>… sino por <em>qué comportamiento está validando</em>.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<p style="font-style:italic; color:#94A3B8; line-height:1.7;">
  Publicado originalmente en <a href="https://www.linkedin.com/in/abraham-vilches-de-la-cruz-295538175/" style="color:oklch(67.3% 0.182 276.935);">LinkedIn</a>.
</p>
