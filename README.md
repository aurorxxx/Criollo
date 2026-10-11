# Criollo Content Studio

Sitio estático en español para mostrar trabajos del equipo, presentar servicios y solicitar cotizaciones por WhatsApp.

La identidad visual toma como referencia las piezas de Instagram proporcionadas: crema, rojo y azul marino, tramas de puntos y recortes. Conserva el logotipo cromado original de la presentación.

El lema es **Sácala del estadio con Criollo**. La portada explica la propuesta «Estrategia, contenido y producción para darle presencia a tu marca». Las frases de béisbol proceden del carrusel y acompañan descripciones claras de los servicios.

El orden es portada → proyectos → servicios → cómo trabajamos → equipo → contacto. Los servicios se agrupan en estrategia digital, diseño y branding, producción audiovisual, y eventos y activaciones. Web, impresión, carpintería, herrería y corpóreos siguen incluidos dentro de esas áreas.

El nombre completo es **Criollo Content Studio** y también se utiliza en los mensajes de WhatsApp. «Criollo» se conserva como nombre corto y en el lema.

## Equipo y proceso

«El equipo detrás de la jugada» presenta los perfiles proporcionados de Alejandra Martínez (dirección de proyectos y estrategia), Adrian Albarrán (fotografía y realización audiovisual) y David Picón (dirección creativa y producción audiovisual). Las tarjetas mantienen nombres destacados, cargos legibles y biografías visibles sobre fondos crema. Las referencias a marcas y eventos corresponden a la trayectoria individual de cada integrante.

El perfil de David enlaza al caso AKIRA y los créditos del caso enlazan a su perfil. Solo se conectan participaciones confirmadas: todavía no hay otros trabajos de Alejandra y Adrian disponibles en el portafolio. Los retratos, fotografías del equipo trabajando y nuevos casos de estrategia, fotografía, branding y eventos quedan pendientes de material real; no se sustituyen por imágenes ficticias.

«Cómo trabajamos» describe el proyecto completo en tres etapas: **Conversamos**, **Definimos la propuesta** y **Producimos**. La cotización sigue disponible en el formulario y por contacto directo.

## Portafolio

El caso **AKIRA — visuales para concierto** reúne los dos videos proporcionados. Los créditos corresponden a **David Picón**, integrante del equipo de Criollo, por modelado 3D en Blender. El caso presenta dos piezas de un mismo proyecto, no dos clientes distintos. Consulta `assets/projects/README.md` para el origen de los archivos y sus versiones web.

El caso explica el objetivo (visuales para acompañar un concierto), la participación (modelado 3D en Blender) y la entrega (lettering cromado y personaje en 3D). No atribuye resultados o conceptos de campaña que no hayan sido confirmados.

Los videos usan controles nativos, reproducción en línea y `preload="none"`; se descargan al reproducirlos y no se reproducen automáticamente. Al iniciar uno se pausa el otro. Los fotogramas de portada provienen de los videos originales. Las piezas no tienen diálogo y cuentan con descripciones visibles.

## Ver la página

Abre `index.html` en tu navegador, conservando `styles.css`, `script.js` y la carpeta `assets` en sus ubicaciones. No requiere instalación de dependencias ni compilación.

Para servirla localmente, desde la carpeta del proyecto:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

## Contacto

El número configurado es **+58 422 060 3133**. Los enlaces directos abren WhatsApp con un saludo. El formulario añade el servicio y la descripción del proyecto; el nombre es opcional. La persona debe revisar y enviar el mensaje desde WhatsApp. El sitio no procesa pagos ni almacena solicitudes.

Para cambiar el contacto, actualiza `WHATSAPP_NUMBER` en `script.js` y los enlaces `wa.me` de `index.html`, que sirven como alternativa cuando JavaScript está desactivado.

## Archivos

- `index.html`: portada, proyectos, servicios, cómo trabajamos, equipo y contacto.
- `styles.css`: diseño adaptable, menú móvil y acceso persistente a WhatsApp.
- `script.js`: menú accesible, selección de servicio y generación del mensaje.
- `assets/criollo-logo-header.webp`: versión de 400 × 208 para la cabecera y el pie, con transparencia y compresión sin pérdida.
- `assets/criollo-logo-hero.webp`: versión de 1000 × 521 del logo original para la portada.
- `assets/criollo-collage-web.webp`: ilustración decorativa reducida a 720 × 809 para la web. No representa trabajos del portafolio.
- `assets/criollo-social.jpg`: imagen de 1200 × 630 para compartir el enlace, incluida en Open Graph y Twitter Card.
- `assets/projects/`: dos MP4 optimizados de AKIRA, fotogramas de portada y créditos.
- `assets/criollo-logo.webp` y `assets/criollo-collage.webp`: versiones originales en WebP conservadas como recursos fuente.
- `assets/criollo-logo.png` y `assets/criollo-collage.png`: archivos originales de los recursos anteriores.
- `assets/criollo-cover.jpg`: portada de la presentación, conservada como recurso de la versión anterior.
- `assets/fonts/`: fuentes locales DM Sans, Fraunces y Criollo Mono (derivada de IBM Plex Mono), con licencias SIL OFL y documentación de origen. No se consultan servicios externos de fuentes.

Para publicar, carga `index.html`, `styles.css`, `script.js`, los tres WebP usados por la página, `criollo-social.jpg`, `assets/projects/` y `assets/fonts/` en un alojamiento de sitios estáticos, manteniendo la estructura de carpetas. Los PNG, la portada anterior y los WebP de tamaño original pueden quedar fuera del despliegue.

Las URL de `canonical`, Open Graph y Twitter Card apuntan a `https://aurorxxx.github.io/Criollo/`. Actualízalas junto con la URL absoluta de la imagen si cambia el dominio del sitio.
