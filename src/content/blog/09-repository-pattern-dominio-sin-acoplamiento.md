---
title: "Repository Pattern: deja de acoplar tu dominio a la base de datos"
description: "El Repository Pattern es la herramienta que te permite diseñar el dominio primero y postergar la decisión de infraestructura. Implementación real en Code Finances con TypeORM."
pubDate: 2025-04-28
tags: ["Repository Pattern", "DDD", "Clean Architecture", "SOLID", "Code Finances", "TypeScript"]
---

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Volviendo con la serie de <strong>Code Finances</strong>, hoy tocamos una de las decisiones más importantes — y muchas veces mal tomadas — en desarrollo de software: elegir primero la base de datos.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Sí, esa típica pregunta al empezar un proyecto:
</p>

<blockquote style="border-left:3px solid oklch(67.3% 0.182 276.935); padding-left:1rem; margin:1.5rem 0; color:#94A3B8; font-style:italic;">
  "¿Usamos MongoDB o PostgreSQL?"
</blockquote>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">❌ Error.</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">💡 Cambiemos la pregunta</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  ¿Y si diseñamos primero el dominio? ¿Y si pudiéramos acceder a datos sin depender de una tecnología concreta?
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Aquí es donde entra el <strong>Repository Pattern</strong>.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🔍 ¿Qué es el Repository Pattern?</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Es un patrón que nos permite <strong>encapsular la lógica de persistencia</strong> y <strong>desacoplar el dominio de la infraestructura</strong>. Tu dominio <strong>no sabe</strong> si usás SQL, NoSQL o cualquier otra cosa.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">📐 Cumpliendo SOLID de forma natural</h2>
<br />

<ul style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.5rem;">
  <li>✅ <strong>SRP</strong> — cada clase tiene una única responsabilidad</li>
  <li>🔓 <strong>OCP</strong> — podés extender sin modificar</li>
  <li>🔌 <strong>DIP</strong> — dependés de interfaces, no de implementaciones</li>
</ul>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🛠️ Implementación en Code Finances</h2>
<br />

<h3 style="color:oklch(67.3% 0.182 276.935); font-weight:600; margin-top:1.5rem;">📦 Dominio — la abstracción</h3>

```ts
interface LiquidityCategoryRepository {
  save(category: LiquidityCategory): Promise<void>
}
```

<h3 style="color:oklch(67.3% 0.182 276.935); font-weight:600; margin-top:1.5rem;">⚙️ Aplicación — el caso de uso depende de la interfaz</h3>

```ts
class LiquidityCategoryCreator {
  constructor(private repository: LiquidityCategoryRepository) {}

  async execute(category: LiquidityCategory) {
    await this.repository.save(category)
  }
}
```

<h3 style="color:oklch(67.3% 0.182 276.935); font-weight:600; margin-top:1.5rem;">🏗️ Infraestructura — la implementación concreta</h3>

```ts
class TypeOrmLiquidityCategoryRepository implements LiquidityCategoryRepository {
  async save(category: LiquidityCategory): Promise<void> {
    // lógica con TypeORM
  }
}
```

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🔄 ¿Qué conseguimos?</h2>
<br />

<ul style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.5rem;">
  <li>🔌 <strong>Desacoplamiento total de la base de datos</strong></li>
  <li>🧪 <strong>Tests unitarios simples</strong> — usando mocks de la interfaz</li>
  <li>🔄 <strong>Flexibilidad para cambiar de tecnología</strong> sin tocar el dominio</li>
  <li>🚀 <strong>Desarrollo centrado en el dominio</strong></li>
</ul>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">⚠️ El error común</h2>
<br />

<div style="display:flex; gap:2rem; flex-wrap:wrap; margin-top:1rem;">
  <div style="flex:1; min-width:200px;">
    <p style="color:#f87171; font-weight:600; margin-bottom:0.5rem;">❌ Enfoque típico</p>
    <ol style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.25rem;">
      <li>Elegís base de datos</li>
      <li>Diseñás tablas</li>
      <li>Adaptás el dominio a eso</li>
    </ol>
    <p style="color:#f87171; margin-top:0.75rem; font-size:0.9rem;">→ Dominio acoplado, difícil de cambiar, código rígido.</p>
  </div>
  <div style="flex:1; min-width:200px;">
    <p style="color:oklch(67.3% 0.182 276.935); font-weight:600; margin-bottom:0.5rem;">✅ Enfoque correcto</p>
    <ol style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.25rem;">
      <li>Diseñás el dominio</li>
      <li>Definís repositorios (interfaces)</li>
      <li>Implementás la infraestructura después</li>
    </ol>
    <p style="color:oklch(67.3% 0.182 276.935); margin-top:0.75rem; font-size:0.9rem;">→ La base de datos es un detalle. El dominio es lo importante.</p>
  </div>
</div>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">💬 Conclusión</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  El Repository Pattern no es solo un patrón más. Es una herramienta que te permite diseñar mejor, cambiar sin romper y mantener tu dominio limpio.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Porque al final: <strong>la base de datos es un detalle. El dominio es lo importante.</strong>
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<p style="font-style:italic; color:#94A3B8; line-height:1.7;">
  Publicado originalmente en <a href="https://www.linkedin.com/in/abraham-vilches-de-la-cruz-295538175/" style="color:oklch(67.3% 0.182 276.935);">LinkedIn</a>.
</p>
