# GRANO VIVE — Bowl Lab

Constructor de bowls responsive con visualización SVG animada, estimación de precios y guardado de favoritos.

## Stack
- HTML, CSS y JavaScript nativo
- Supabase Auth y tabla `public.gv_bowls`
- Netlify para alojamiento estático

## Despliegue en Netlify
1. Abre el proyecto existente `grano-vive-bowl-lab` en Netlify.
2. Conecta **Git repository** > GitHub > `Pendragon31/GRANO-VIVE` > rama `main`.
3. Configura build command `node build.cjs` y publish directory `.` (ya definidos en netlify.toml).
4. Verifica las variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_PUBLISHABLE_KEY`. Solo se usa la clave **pública** de Supabase; jamás un service_role o secret.
5. Despliega y configura en Supabase Auth la URL del sitio dentro de Site URL y redirect URLs.

El build crea `config.js` con valores públicos para el navegador. El repositorio no almacena secretos.

## Alcance
- Guardar favoritos autenticados en Supabase con RLS.
- Guardar favoritos locales sin iniciar sesión.
- Carrito local ilustrativo: **no se cobran pagos ni se generan órdenes reales**.
- Los precios son simulados, no un catálogo comercial definitivo.
