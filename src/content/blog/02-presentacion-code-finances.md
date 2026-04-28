---
title: "Presentación del proyecto Code Finances"
description: "Gestión de patrimonios desde cero, aplicando DDD, Clean Architecture, Event-Driven Architecture y TDD."
pubDate: 2025-08-04
tags:
  [
    "Code Finances",
    "DDD",
    "Event driven architecture",
    "TDD",
    "Desde la Capa de Dominio",
  ]
---

<div class="max-w-3xl mx-auto">

  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    <strong>Code Finances</strong> no es solo un producto, es una forma activa y consciente de gestionar el patrimonio personal. Lo aplico desde que recibí mi primer salario, y con el tiempo se ha consolidado en un sistema flexible, adaptable a cada persona, pero con una esencia universal.
  </p>

  <p class="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    En este blog —especialmente en los artículos etiquetados como <strong>"Code Finances"</strong>— construiremos esta solución desde la ingeniería y el negocio. Nuestro objetivo es expresar ideas complejas con un lenguaje claro que cualquier desarrollador entienda.
  </p>

  <hr class="my-10 border-slate-300 dark:border-slate-600" />

  <h2 class="text-2xl font-semibold text-indigo-400 mb-4">🧠 ¿En qué consiste Code Finances?</h2>

  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Code Finances se basa en una idea simple pero poderosa: <strong>todo ingreso se distribuye en categorías específicas de liquidez</strong>. Esto permite prever necesidades futuras, evitando sorpresas.
  </p>

  <p class="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    Cada vez que ingresas dinero, este se reparte automáticamente en distintos "colchones financieros". Así, no hay gastos imprevistos (spoiler: ya estaban previstos). Es un sistema aplicable tanto con cuentas bancarias separadas, sobres físicos o cualquier medio de gestión.
  </p>

  <div class="mt-6 border border-slate-200 dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-800">
    <h3 class="text-lg font-semibold text-indigo-400 mb-2">📊 Ejemplo de distribución (adaptable):</h3>
    <ul class="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
      <li>Obligaciones: 50%</li>
      <li>Ocio: 15%</li>
      <li>Ahorro: 10%</li>
      <li>Inversión: 20%</li>
      <li>Educación: 2.5%</li>
      <li>Donaciones: 2.5%</li>
    </ul>
  </div>

  <p class="mt-6 text-slate-700 dark:text-slate-300 leading-relaxed">
    Además, el sistema incluye una sección específica para el <strong>seguimiento de inversiones</strong>: criptomonedas, acciones, bienes raíces, fondos indexados... Todo consolidado y organizado para facilitar el análisis y la estrategia.
  </p>

  <div class="mt-8 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
    <h3 class="text-lg font-semibold text-indigo-400 mb-2">🔑 Principios fundamentales del modelo:</h3>
    <ul class="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
      <li>Cada ingreso se trata como liquidez disponible.</li>
      <li>Cada gasto (incluidas las inversiones) se registra como salida de liquidez.</li>
      <li>Las decisiones se basan en datos reales y categorías adaptadas a tus objetivos.</li>
    </ul>
  </div>

  <hr class="my-10 border-slate-300 dark:border-slate-600" />

  <h2 class="text-2xl font-semibold text-indigo-400 mb-4">¿Qué encontrarás en la serie Code Finances?</h2>

  <ul class="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
    <li>Conceptos clave para diseñar software alineado con el negocio.</li>
    <li>Buenas prácticas para construir soluciones mantenibles y escalables.</li>
    <li>Un enfoque técnico claro para comprender lo que construyes y por qué.</li>
  </ul>

  <hr class="my-10 border-slate-300 dark:border-slate-600" />

  <h2 class="text-2xl font-semibold text-indigo-400 mb-4">Metodologías y principios aplicados</h2>

  <ul class="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
    <li><strong>Domain-Driven Design (DDD):</strong> Alinear el software con el lenguaje del negocio.</li>
    <li><strong>Test-Driven Development (TDD):</strong> Construcción desde las pruebas desde el primer día.</li>
    <li><strong>Clean Architecture y Event-Driven:</strong> Para sistemas robustos, escalables y desacoplados.</li>
  </ul>

  <hr class="my-10 border-slate-300 dark:border-slate-600" />

  <h2 class="text-2xl font-semibold text-indigo-400 mb-4">El camino que vamos a recorrer</h2>

  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Partiremos de un <strong>monolito simple</strong>, estructurado y claro, para luego evolucionar hacia una arquitectura basada en <strong>microservicios</strong>, comunicados mediante eventos de dominio.
  </p>

  <p class="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    Aquí no hay teoría vacía. Construiremos <strong>software real</strong> con intención y principios sólidos, desde la capa de dominio hasta la infraestructura.
  </p>

  <p class="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    Todo el código estará disponible en <a href="https://github.com/AbrahamVilchesDeLaCruz/code-finances-api?tab=readme-ov-file" class="text-indigo-400 underline hover:text-indigo-600 transition">Code Finance Repository</a>, para que puedas seguirlo, aprender o incluso usarlo como referencia en tus propios proyectos.
  </p>

  <p class="mt-10 italic text-slate-500 dark:text-slate-400 text-center">
    Bienvenido a Code Finances. Empezamos.
  </p>
</div>
