Bienvenido a WOOHOO

El proyecto es un ecommerce de venta de vehículos. Intenté en todo momento brindar la mejor experiencia al usuario, deteniéndome en cada pagina, observando la situación del flujo de compra en el que me encontraba e intentando imaginar que acciones debería poder llevar a cabo a partir de la misma.

El proyecto incluye algunas librerías extra que fui necesitando para su confección. Ellas son las siguientes:

1) "@fortawesome/free-solid-svg-icons"
2) "@fortawesome/react-fontawesome"
  Fueron necesarias para lograr la imagen del carrito. Permite que sea algo liviano para no enlentecer el sitio.
3) "react-bootstrap"
Pude utilizar NavBar y Button como componentes de React, sin necesidad de trabajar tanto a bajo nivel (como si lo hiciera si los trabajara con codigo html).
4) "bootstrap"
Esta librería fue necesaria para gran parte del diseño/arquitectura de las paginas del sitio.

Como a la hora de desarrollar el proyecto tuve problemas con firebase (excedí la quota de requests) tuve que emular el servicio de forma local.

El archivo .env espera recibir una variable llamada FIREBASE_API_KEY con el valor de la apikey de firebase. Sin esta variable la aplicación no funcionará a menos que le agregue otra variable, llamada REACT_APP_NOT_USE_FIREBASE con valor true.

Tener en cuenta que en caso de agregar la ultima variable mencionada, la aplicación funcionará de forma local, es decir, sin utilizar firebase, aunque la primera variable mencionada este seteada.