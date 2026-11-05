# Granovive · Tu mezcla. Tu momento.

## Dirección
Una presentación editorial centrada en el producto, inspirada en la jerarquía y los bloques de Simply Chocolate. Paleta propia: bosque, salvia, lima suave, crema y tonos naturales de fruta. El logotipo publicado se conserva literalmente; esta entrega no sustituye el lettering por una nueva propuesta.

## Cambios
- Portada fotográfica con movimiento suave, pausa y respeto a movimiento reducido.
- Colección con fotografías propias, categorías claras y acceso al constructor con la base elegida.
- Tipografía Outfit alojada localmente, bajo licencia OFL (assets/OFL-Outfit.txt).
- Bowl Lab con distribución en franjas, círculo y libre, resumen y alérgenos.
- Favoritas locales consultables desde Mi espacio, restauración y compartir el texto de una mezcla.
- Las líneas y beneficios en preparación mantienen su estado visible. Los precios siguen siendo de demostración y no se habilitan pagos.

## Recursos
Generados con la herramienta integrada Imagegen; optimizados como WebP para la página.
- assets/hero-bowl.webp: bowl de yogur, frutos rojos y granola sobre fondo verde bosque.
- assets/smoothie.webp: vaso de batido de fresa sobre rosa natural.
- assets/overnight.webp: avena trasnochada, mango y granola sobre amarillo cálido.
Las fotografías son referencias del universo visual, no imágenes de cada combinación del usuario.

## Prompts de generación
### Portada
Use case: product-mockup. Asset type: full-width website hero photograph for a Colombian yogurt and granola food brand, 1536x1024 landscape. Primary request: premium appetizing close-up of a warm ivory ceramic bowl filled with thick glossy Greek yogurt, sliced strawberries, blueberries and golden oat granola. Several granola pieces naturally suspended falling into the yogurt above the bowl. Scene: seamless deep forest green studio background #163e30 with a sage green tabletop. Composition: bowl in the center-right, right half very tactile and close; left 35 percent clean deep forest green negative space for website HTML headline; camera low three-quarter angle. Soft directional daylight, real food textures, natural fruit colors, editorial sophisticated fresh mood. No text, no lettering, no labels, no logo, no watermark, no extra utensils, no surreal floating berries. Realistic food photography.
### Batido
Use case: product-mockup. Asset type: square ecommerce food photograph. A single tall plain transparent glass of creamy strawberry pink yogurt smoothie with a sliced strawberry garnish and a few fresh berries beside it, set on warm pink clay backdrop and tabletop. Subtle natural condensation, soft directional daylight, premium editorial food campaign with large simple shapes and appetizing realistic textures. Composition: full glass centered with generous pink background, 1024x1024. Color palette natural strawberry pink, warm cream and forest green tiny leaf accent. No logos, no lettering, no text, no straws, no watermark.
### Avena
Use case: product-mockup. Asset type: square ecommerce food photograph. A single plain clear wide-mouth glass jar of overnight oats with creamy beige oats, chia flecks, mango chunks and golden granola topping. Simple sculptural setting on warm soft pale-yellow backdrop and tabletop, a single mango wedge beside the jar. Premium editorial food campaign, soft directional daylight, tactile real oat texture and juicy mango, fresh sophisticated natural mood. Composition: full jar centered with generous pale-yellow background, 1024x1024. No logos, no labels, no lettering, no text, no lids, no watermark.

## Validación
- Sintaxis de los dos scripts verificada con node --check.
- Prueba en navegador: cambio de base, toppings y tamaño; estimación; guardado local; consulta y restauración de favorita; acceso con base de avena; filtro de batidos.
- Prueba responsive en un iframe real de navegador, anchos 320 y 390 px. Se corrigió un desbordamiento del título; portada, colección y constructor sin desplazamiento horizontal a 320 px.
- La prueba local no valida autenticación de Supabase ni guardado en la nube. No se alteran su configuración ni sus tablas.
- El video generado de 5 segundos queda pendiente de autorización del gasto de 35 créditos. La versión actual utiliza fotografía con animación CSS pausible.
