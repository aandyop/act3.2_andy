# Proyecto Web: Autor de Libros de Fotografía

Landing page profesional para el autor Ernesto Martínez, enfocada en la presentación de sus libros sobre fotografía y edición digital.

## Estructura del proyecto
- `index.html`: Página principal.
- `libros.html`: Catálogo de publicaciones.
- `sobre-autor.html`: Biografía del autor.
- `contacto.html`: Formulario de contacto conectado a base de datos.
- `style.css`: Hojas de estilos.
- `procesar.php`: Lógica de backend para el formulario.
- `act3_ernesto.sql`: Archivo de exportación de la base de datos.

## Requisitos de ejecución
1. **Servidor Local:** Es necesario contar con un entorno como XAMPP o WAMP.
2. **Base de Datos:**
   - Inicia el servidor Apache y MySQL desde tu panel de control (XAMPP/WAMP).
   - Accede a `http://localhost/phpmyadmin/`.
   - Crea una base de datos llamada `act3_ernesto`.
   - Importa el archivo `act3_ernesto.sql` incluido en este repositorio.
3. **Ubicación:** Mueve la carpeta del proyecto a la ruta `htdocs` de tu servidor local.
4. **Acceso:** Abre tu navegador y dirígete a `http://localhost/nombre-de-tu-carpeta/index.html`.

## Características Principales

- **Diseño Mobile First:** Arquitectura CSS estructurada desde dispositivos móviles hacia escritorio, garantizando una experiencia fluida en cualquier pantalla.
- **Interactividad Nativa:** 
  - Carrusel táctil para dispositivos móviles utilizando CSS Scroll Snap.
  - Sección de opiniones implementada con la semántica de HTML5 (`<details>` y `<summary>`).
  - Efecto Parallax en la sección principal para mayor profundidad visual.
- **Optimización de Rendimiento:** Proyecto empaquetado y minificado utilizando Webpack (HTML, CSS, JS e imágenes optimizadas).
- **Formulario Funcional:** Integración preparada para backend con PHP y MySQL.

## Tecnologías Utilizadas

- **Frontend:** HTML5 Semántico, CSS3 (Variables, Flexbox, CSS Grid) y JavaScript (ES6 Modules).
- **Backend:** PHP, MySQL (Formulario de contacto).
- **Herramientas de Construcción:** Webpack 5, Node.js, npm.

## Arquitectura del Proyecto

El proyecto sigue una arquitectura de desarrollo moderna separando el código fuente del código de producción:

- `/src`: Contiene el código fuente original (HTML, CSS, JS, imágenes sin comprimir). *Área de trabajo del desarrollador.*
- `/dist`: Directorio generado automáticamente por Webpack. Contiene los archivos minificados y optimizados listos para ser desplegados en el servidor.

