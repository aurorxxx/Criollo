# Criollo Content Studio

Sitio estático en español para presentar servicios y solicitar cotizaciones por WhatsApp.

La identidad visual toma como referencia las piezas de Instagram proporcionadas: crema, rojo y azul marino, tramas de puntos y recortes. Conserva el logotipo cromado original de la presentación.

El lema es **Sácala del estadio con Criollo**. Las frases de los cuatro servicios del carrusel conservan su redacción original; los demás servicios mantienen descripciones directas de la presentación.

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

- `index.html`: servicios, pasos de contratación, contacto y equipo.
- `styles.css`: diseño adaptable, menú móvil y acceso persistente a WhatsApp.
- `script.js`: menú accesible, selección de servicio y generación del mensaje.
- `assets/criollo-logo.webp`: logotipo original con transparencia, extraído de la presentación; conversión sin pérdida con píxeles idénticos al PNG conservado.
- `assets/criollo-collage.webp`: ilustración decorativa generada para esta web, con referencias al béisbol y la producción audiovisual. No representa trabajos del portafolio.
- `assets/criollo-logo.png` y `assets/criollo-collage.png`: archivos originales de los recursos anteriores.
- `assets/criollo-cover.jpg`: portada de la presentación, conservada como recurso de la versión anterior.
- `assets/fonts/`: fuentes locales DM Sans, Fraunces y Criollo Mono (derivada de IBM Plex Mono), con licencias SIL OFL y documentación de origen. No se consultan servicios externos de fuentes.

Para publicar, carga `index.html`, `styles.css`, `script.js`, las imágenes WebP y `assets/fonts/` en un alojamiento de sitios estáticos, manteniendo la estructura de carpetas. Los PNG y la portada anterior pueden quedar fuera del despliegue.
