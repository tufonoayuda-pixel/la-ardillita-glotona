# Diseño para "La Ardillita Glotona" - Cuento Interactivo Infantil

## Design Approach

**Reference-Based Approach**: Inspirado en cuentos infantiles ilustrados de finales de los 90 e inicios de los 2000 (estilo de libros como "El Pollo Pepe", "Cocodrilo", publicaciones de Ediciones SM y Santillana de esa época).

**Principios clave**:
- Nostalgia visual de libros físicos infantiles
- Colores vibrantes y saturados típicos de la impresión offset de la época
- Bordes decorativos con elementos escolares (lápices, crayones)
- Ilustraciones centrales grandes con texto legible
- Interactividad simple y clara para niños

## Color Palette

**Modo Claro (Principal)**:
- Background: 45 85% 95% (azul cielo muy claro, papel de libro)
- Primary: 25 95% 50% (naranja/dorado ardilla)
- Secondary: 140 60% 45% (verde bosque)
- Accent: 350 85% 55% (rojo frambuesa/cereza)
- Text: 220 15% 20% (gris oscuro casi negro, legible)
- Borders decorativos: Multicolor (35 90% 55%, 200 85% 50%, 320 80% 60%, 150 75% 45%)

**No usar modo oscuro** - los cuentos infantiles tradicionales son de fondo claro

## Typography

**Fuentes principales (Google Fonts)**:
- Títulos: 'Fredoka One' o 'Bubblegum Sans' (400-700, redondeada, infantil)
- Texto del cuento: 'Patrick Hand' o 'Comic Neue' (400, manuscrita/clara)
- Tamaños: Título 2.5rem-3rem, Texto 1.25rem-1.5rem, Número de página 0.875rem

## Layout System

**Espaciado Tailwind**: Usar unidades de 4, 6, 8, 12, 16 y 20 para consistencia
- Padding de contenedor: p-8 a p-12
- Spacing entre elementos: space-y-6 a space-y-8
- Márgenes de ilustración: m-6 a m-8

**Estructura de página**:
- Contenedor principal: max-w-5xl centrado, aspect ratio de libro abierto
- Área de ilustración: 60% altura, centrada
- Área de texto: 30% altura, debajo de ilustración
- Navegación: 10% altura, inferior

## Component Library

**Página del Libro**:
- Fondo con textura de papel (subtle pattern)
- Borde decorativo con lápices de colores rotados aleatoriamente en las esquinas
- Sombra tipo libro físico (shadow-2xl)
- Transición suave entre páginas (transform translate)

**Área de Ilustración**:
- Placeholder con fondo de color suave relacionado a la escena
- Border redondeado (rounded-3xl)
- Sombra interior sutil
- Texto descriptivo en color primario para cada escena

**Texto del Cuento**:
- Fondo blanco/crema semi-transparente (bg-white/80)
- Padding generoso (p-6 a p-8)
- Line-height amplio para legibilidad (leading-relaxed)
- Text-center para estética de libro infantil

**Navegación**:
- Botones grandes redondeados (rounded-full, w-14 h-14)
- Iconos de flechas claros (Heroicons)
- Posición fija en esquinas inferiores
- Colores vibrantes con hover scale (hover:scale-110)
- Botón deshabilitado con opacity-50

**Indicador de Página**:
- Centro inferior
- Formato "Página X de Y"
- Estilo vintage con fuente manuscrita
- Puntos/círculos decorativos

**Portada y Contraportada**:
- Portada: Título grande, ilustración de ardilla, decoración de bellotas/nueces
- Contraportada: Mensaje de fin, decoración con estrellas/corazones

## Animations

**Transiciones de página**:
- Fade + slide horizontal (100ms-200ms duration)
- Efecto de "pasar página" con transform y opacity
- Hover en botones: scale-110 con transition-transform

**Micro-interacciones**:
- Bounce sutil en botones al cargar página
- Pulse suave en elementos decorativos (opcional, muy sutil)

## Images/Illustrations

**Placeholders por página** (con descripción para ilustración):
1. Portada: Ardilla sonriente con cola esponjosa, rodeada de bellotas
2. Página 1: Ardilla en árbol de roble con hojas verdes
3. Página 2: Ardilla con mejillas infladas comiendo bellota
4. Página 3: Ardilla bajando del árbol con barriga redonda
5. Página 4: Ardilla acostada bajo el árbol, aspecto cansado
6. Página 5: Ardilla aprendiendo lección, sentada pensativa
7. Contraportada: Ardilla feliz compartiendo bellotas con amigos

**Estilo ilustrativo**: Formas simples, colores planos con contornos oscuros gruesos, estilo cartoon de los 90s (similar a ilustraciones de libros Alfaguara Infantil)

## Special Features

- Contador de páginas visible
- Botones deshabilitados en primera/última página
- Área de título decorativa en cada página con fuente especial
- Background pattern sutil que simula textura de papel reciclado
- Border decorativo con lápices de colores en posiciones variadas (rotate-12, -rotate-6, etc.)
