---
title: "Comunicación entre Bounded Contexts en Code Finances (EDA en acción)"
description: "Cómo se comunican los distintos Bounded Contexts en Code Finances usando Event Driven Architecture: desacoplamiento, naming de eventos y flujos reales con RabbitMQ."
pubDate: 2025-04-28
tags: ["Event-Driven Architecture", "DDD", "Bounded Contexts", "RabbitMQ", "Code Finances", "Microservicios"]
---

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Seguimos con la serie de <strong>Code Finances</strong> y hoy entramos en un tema clave cuando trabajás con Domain Driven Design: cómo se comunican los distintos Bounded Contexts.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Porque diseñar bien los límites del dominio está muy bien… pero hacer que hablen entre ellos correctamente es otra historia.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🧩 El problema</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  En sistemas basados en DDD, es muy común tener múltiples contextos: Cash Flow, Liquidity Categories, Equity, Projections… Y surge la pregunta inevitable:
</p>

<blockquote style="border-left:3px solid oklch(67.3% 0.182 276.935); padding-left:1rem; margin:1.5rem 0; color:#94A3B8; font-style:italic;">
  ¿Cómo hacemos que colaboren sin acoplarlos?
</blockquote>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🚀 La solución: Event Driven Architecture</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  En <em>Code Finances</em> optamos por una estrategia clara: <strong>arquitectura orientada a eventos</strong>.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">En lugar de esto:</p>

```ts
liquidityService.allocate(revenue)
```

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">Hacemos esto:</p>

```ts
eventBus.publish(new RevenueCreatedEvent(...))
```

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Un contexto <strong>publica eventos</strong> cuando cambia su estado. Otros contextos <strong>escuchan y reaccionan</strong>. Nadie depende directamente de nadie.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">✅ Ventajas</h2>
<br />

<ul style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.5rem;">
  <li>🔌 <strong>Desacoplamiento fuerte entre contextos</strong></li>
  <li>📈 <strong>Escalabilidad independiente</strong></li>
  <li>🛡 <strong>Mayor resiliencia</strong></li>
  <li>🔄 <strong>Flexibilidad para evolucionar</strong></li>
  <li>⚡️ <strong>Procesamiento asíncrono</strong></li>
</ul>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">❌ Retos reales</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">EDA no es magia, también tiene costes:</p>

<ul style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.5rem; margin-top:0.75rem;">
  <li>🧠 <strong>Mayor complejidad</strong></li>
  <li>🔁 <strong>Duplicación de eventos o problemas de orden</strong></li>
  <li>⏳ <strong>Consistencia eventual</strong></li>
  <li>🎯 <strong>Diseñar bien los eventos es crítico</strong></li>
</ul>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🧩 Naming de eventos</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Una de las decisiones más importantes: <strong>cómo nombrás tus eventos</strong>. En <em>Code Finances</em> seguimos estas convenciones:
</p>

<h3 style="color:oklch(67.3% 0.182 276.935); font-weight:600; margin-top:1.5rem;">🔑 Eventos de dominio</h3>

```
application.bounded_context.version.event.aggregate.action
```

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:0.5rem;">Ejemplo:</p>

```
code_finances.cash_flow.1.event.revenue.created
```

<h3 style="color:oklch(67.3% 0.182 276.935); font-weight:600; margin-top:1.5rem;">👂 Colas / handlers</h3>

```
bounded_context.aggregate.action_on_domain_event
```

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:0.5rem;">Ejemplo:</p>

```
liquidity_categories.liquidity_category.allocate_liquidity_categories_on_revenue_created
```

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Esto nos da claridad semántica, versionado explícito, mejor organización de topics/routing keys y alineación total con DDD + EDA.
</p>

<blockquote style="border-left:3px solid oklch(67.3% 0.182 276.935); padding-left:1rem; margin:1.5rem 0; color:#94A3B8; font-style:italic;">
  Los eventos se nombran en <strong>pasado</strong> porque representan algo que ya ha ocurrido.
</blockquote>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🧶 Caso práctico: Create Revenue → Allocate Liquidity → Process Projection</h2>
<br />

<div style="margin-top:1rem; background:#0d1117; border:1px solid #30363d; border-radius:8px; padding:1.25rem; font-family:'Cascadia Code', monospace; font-size:0.85rem; color:#94A3B8; line-height:1.8;">
  <span style="color:oklch(67.3% 0.182 276.935);">1.</span> POST → microservicio <strong style="color:oklch(86.9% 0.022 252.894);">Cash Flow</strong><br/>
  <span style="color:oklch(67.3% 0.182 276.935);">2.</span> <code>RevenueCreator</code> procesa el caso de uso<br/>
  <span style="color:oklch(67.3% 0.182 276.935);">3.</span> Publica <code>RevenueCreatedEvent</code> en RabbitMQ<br/>
  <br/>
  <span style="color:#555;">── reacciones ──</span><br/>
  <br/>
  <span style="color:oklch(67.3% 0.182 276.935);">💧 Liquidity Categories</span> consume el evento → distribuye según porcentajes<br/>
  <span style="color:oklch(67.3% 0.182 276.935);">📊 Equity</span> actualiza el total de liquidez<br/>
  <span style="color:oklch(67.3% 0.182 276.935);">📋 Projections</span> marca el evento como procesado
</div>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1.5rem;">
  Una acción simple como "crear un revenue" puede desencadenar múltiples procesos — sin acoplamiento, de forma escalable, respetando cada contexto.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">💬 Conclusión</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  EDA no es solo una decisión técnica. Es una forma de diseñar sistemas donde los contextos son realmente independientes, el dominio fluye a través de eventos y el sistema puede crecer sin romperse.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Eso sí: requiere disciplina, especialmente en el diseño de eventos, el naming y la gestión de consistencia. Pero cuando encaja… es extremadamente potente.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<p style="font-style:italic; color:#94A3B8; line-height:1.7;">
  Publicado originalmente en <a href="https://www.linkedin.com/in/abraham-vilches-de-la-cruz-295538175/" style="color:oklch(67.3% 0.182 276.935);">LinkedIn</a>.
</p>
