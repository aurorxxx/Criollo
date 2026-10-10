# Criollo Content Studio

Sitio estático en español para presentar servicios y solicitar cotizaciones por WhatsApp.

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
- `assets/criollo-cover.jpg`: logotipo extraído de la presentación proporcionada.

Para publicar, carga estos archivos y `assets` en un alojamiento de sitios estáticos, manteniendo la estructura de carpetas.
