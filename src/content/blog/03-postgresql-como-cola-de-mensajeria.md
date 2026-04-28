---
title: "PostgreSQL como cola de mensajería? Depende."
description: "Reflexiones sobre cuándo usar PostgreSQL como event bus, cómo implementarlo con dos tablas y cómo se relaciona con las transacciones en sistemas con arquitectura orientada a eventos."
pubDate: 2025-04-28
tags: ["Event-Driven Architecture", "PostgreSQL", "DDD", "Clean Architecture", "SOLID", "Infraestructura"]
---

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Este último fin de semana aproveché para hacer un par de cursos de Codely: <em>"Event bus en base de datos [Diseño de Infraestructura]"</em> y <em>"Transacciones [Diseño de infraestructura]"</em>, con el fin de profundizar en la teoría de cómo implementar estas soluciones.
</p>

<br />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🐇 El contexto: RabbitMQ no siempre está en la mesa</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  En los últimos años he experimentado los beneficios de sistemas con <strong>event-driven architecture</strong> usando RabbitMQ principalmente. Aun así, hay proyectos en los que participo que o bien no tienen implementados los eventos, o todavía no requieren de esa potencia que nos proporcionan piezas de infraestructura como RabbitMQ o Kafka.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Sin embargo, he notado que no utilizar este tipo de sistemas <strong>reduce significativamente la capacidad de construir código sin romper principios</strong> como OCP o SRP, sobre todo en sistemas con varios casos de uso derivados. Además, la dificultad en cuanto a testeabilidad y mantenibilidad del código incrementa exponencialmente.
</p>

<br />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🤔 Entonces, ¿PostgreSQL como cola?</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Volviendo a la pregunta del principio: de vuelta, <strong>depende</strong>. Un bus en memoria podría solventar todos los problemas de mantenibilidad y testeabilidad, y en caso de ser un sistema sencillo donde podamos permitirnos sincronía, es una buena solución.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  En el caso particular que estoy resolviendo, la respuesta definitiva es que <strong>sí: PostgreSQL es mi nueva cola de mensajería</strong>. Me garantiza:
</p>

<ul style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.5rem; margin-top:1rem;">
  <li>Asincronía</li>
  <li>Orden en los eventos</li>
  <li>Retry</li>
  <li>Dead letter</li>
  <li>Skip locked</li>
  <li>Capacidad de crecer y refactorizar en armonía</li>
  <li>Todos los beneficios SOLID respetando la clean architecture</li>
</ul>

<br />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🗃️ La implementación: dos tablas</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  En mi caso necesito <strong>dos tablas</strong>:
</p>

<ul style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-left:1.5rem; margin-top:1rem;">
  <li><strong>Tabla de eventos:</strong> donde se insertan los eventos a consumir.</li>
  <li><strong>Tabla de relaciones evento → subscribers:</strong> actualizada en cada despliegue, obteniendo todos los subscribers mediante el inyector de dependencias, ya que cada uno implementa una interfaz de dominio.</li>
</ul>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Cuando se levanta la app, se asigna un <strong>worker</strong> que va haciendo consultas a la tabla de eventos y consumiendo lo que se va creando. Desde ahí, es el funcionamiento típico de un bus: el publisher publica los eventos de dominio y los consumers los van ejecutando mediante los subscribers para los casos de uso derivados.
</p>

<br />

<h2 style="color:oklch(67.3% 0.182 276.935); font-weight:700; margin-top:2rem;">🔗 El rol de las transacciones</h2>
<br />

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894);">
  Enlazo esto con las transacciones, ya que me parece una posible <strong>fase intermedia previa a los eventos de dominio</strong>. Aunque abogaría por su uso en las implementaciones de los repositorios, en caso de tener que orquestar varios casos de uso las utilizaría como <strong>decorador en la capa de infraestructura</strong>.
</p>

<p style="line-height:1.7; color:oklch(86.9% 0.022 252.894); margin-top:1rem;">
  Mi conclusión final es <strong>reducir su uso a situaciones estrictamente necesarias</strong>. Teniendo un sistema de eventos con retry, dead letter, etc., me inclino por tratar todos los casos de uso derivados sin bloquear la opción de continuar generando recursos mediante la funcionalidad principal.
</p>

<hr style="margin:2rem 0; border:none; border-top:1px solid #CBD5E1;" />

<p style="font-style:italic; color:#94A3B8; line-height:1.7;">
  Publicado originalmente en <a href="https://www.linkedin.com/in/abraham-vilches-de-la-cruz-295538175/" style="color:oklch(67.3% 0.182 276.935);">LinkedIn</a>.
</p>
