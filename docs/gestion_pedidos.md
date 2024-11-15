[⬅️ Volver](index.md#prestashop-doc) <!-- Enlace de regreso -->

---
# Gestión de pedidos 📦
---

La página de **Pedidos**, accesible desde el menú principal, muestra toda la información relacionada con las ventas de tu tienda. Los pedidos se organizan por fecha, desde el más reciente hasta el más antiguo.

## ⚙️ Funcionalidades Principales <a href="funcionalidades-principales" id="funcionalidades-principales"></a>
---

  - **Filtrar pedidos**: Usa el campo de búsqueda en la parte superior para encontrar pedidos específicos. Por ejemplo, escribe "Doe" en el campo **Cliente** y haz clic en **Filtrar**.
  - **Exportar pedidos**: Descarga la lista completa de pedidos haciendo clic en **Exportar** en la barra superior.

  > **Nota importante**: No se pueden **eliminar pedidos** en PrestaShop debido a regulaciones legales en Europa.

  > **Recordatorio**: PrestaShop **no permite importar pedidos**.

  ![Captura de gestión de pedidos](assets/Vender_01_001.png)


## ➕ Crear un pedido <a href="pedidos-crearunpedido" id="pedidos-crearunpedido"></a>
---

  PrestaShop permite crear un pedido desde el back-office, útil cuando un cliente necesita ayuda para completar su compra.

  1. **Añadir nuevo pedido**: Haz clic en "Añadir nuevo pedido" y busca al cliente por nombre, apellido o email. Si el cliente no tiene cuenta, usa el botón "Añadir cliente" para crear una nueva.
  2. **Seleccionar dirección**: Asegúrate de registrar la dirección del cliente. Usa "Añadir nueva dirección" si es necesario.
  3. **Elegir productos**: Busca productos y agrégalos al carrito. Puedes elegir combinaciones de productos y ver el stock disponible para informar al cliente.
  4. **Aplicar descuento**: Añade un cupón de descuento o crea uno nuevo si es necesario.
  5. **Dirección de envío y facturación**: Selecciona las direcciones para el envío y la facturación, o crea nuevas según sea necesario.

## 🔍 Ver los detalles de un pedido <a href="pedidos-verdetalles" id="pedidos-verdetalles"></a>
---

  Para revisar un pedido, ve a la página "Pedidos" y haz clic en el pedido o en el botón de su derecha. Esto abrirá la página completa de detalles del pedido.

  **En esta página verás:**

  - **Información del pedido** (a la izquierda):
    - Estado e historial.
    - Información de envío: peso total y método de transporte elegido.
  - **Información del cliente** (a la derecha):
    - Nombre e historial de compra.
    - Nota privada, si existe.
    - Dirección de envío y facturación (con un mapa aproximado).
  - **Otros detalles**:
    - Método de pago, costo de productos y gastos de envío.
    - Información de los productos pedidos.
  
## ✏️ Modificar el pedido <a href="pedidos-modificarpedido" id="pedidos-modificarpedido"></a>
---

  Los pedidos pueden ser ajustados antes de enviarse. Esto es útil si necesitas cambiar algo, como un producto agotado o una solicitud especial del cliente.

## ➕ Añadir un producto

  En la parte inferior de la lista de **Productos** comprados por el cliente en el pedido, encontrarás el botón **Añadir un producto** para agregar nuevos productos al pedido.

  1. **Buscar el producto**: Escribe las primeras letras del nombre del producto en el campo de búsqueda y selecciona el producto deseado. 
  2. **Seleccionar combinaciones** (si aplica): Si el producto tiene combinaciones, selecciona la adecuada para que el precio se ajuste automáticamente.
  3. **Establecer cantidad**: Indica la cantidad y haz clic en **Añadir producto** para incluirlo en el pedido.

  > Nota: No puedes añadir más cantidad de un producto de la que hay disponible en el inventario.

### ❌ Eliminar un producto

  Si necesitas eliminar un producto del pedido, accede a la lista de productos y utiliza la acción **Eliminar** o la opción **Modificar** para reducir la cantidad.

  1. **Eliminar o ajustar cantidad**: Si solo deseas reducir la cantidad de un producto, usa **Modificar** en lugar de eliminarlo por completo.
  2. **Confirmar eliminación**: Haz clic en **Cancelar** para guardar los cambios en la modificación del pedido.

## 📝 Editar los detalles de un pedido <a href="pedidos-editardetalles" id="pedidos-editardetalles"></a>
---

Puedes actualizar o corregir detalles en varias secciones del pedido según lo necesites.

### 📋 Estado del pedido <a href="pedidos-editardetalles-estadodepedido" id="pedidos-editardetalles-estadodepedido"></a>

El estado del pedido ayuda a seguir el proceso de cada pedido. Cambiar el estado afecta las funcionalidades y notificaciones.

Principales estados de pedido:
- **Pago en espera** (por transferencia, cheque, PayPal).
- **Preparación en curso**
- **Enviado**
- **Entregado**
- **Reembolsado**
- **Cancelado**

Cada cambio de estado se registra automáticamente. También puedes reenviar notificaciones por correo electrónico al cliente al cambiar el estado.

### 🔘 Botones de acción <a href="pedidos-editardetalles-botonesdeaccion" id="pedidos-editardetalles-botonesdeaccion"></a>

Los botones disponibles varían según el estado del pedido:
- **Reembolso estándar**: Reembolsa el total del pedido si aún no se ha enviado.
- **Reembolso parcial**: Reembolsa parte del pedido por productos devueltos o como compensación.
- **Devolver productos**: Registra productos que han sido devueltos.

Opciones adicionales:
- **Reingresar productos al inventario**: Añade los productos devueltos al stock.
- **Generar factura por abono**: Crea una factura de devolución.
- **Generar cupón de descuento**: Ofrece un cupón para futuras compras.
- **Reembolsar gastos de envío**: Opcional, como gesto para el cliente.

### 📄 Documentos <a href="pedidos-editardetalles-documentos" id="pedidos-editardetalles-documentos"></a>

Puedes obtener documentos en PDF para el pedido, como:
- **Imprimir pedido**: Genera el pedido en PDF.
- **Generar factura**: Disponible al marcar el pedido como "Pago aceptado".
- **Comprobante de envío**: Se genera al establecer el estado en "Preparación en curso".

Puedes añadir notas a la factura para el cliente.

### 🚚 Transporte <a href="pedidos-editardetalles-transporte" id="pedidos-editardetalles-transporte"></a>

Edita el número de seguimiento en la sección de transporte para reflejar actualizaciones de envío. Haz clic en **Modificar** junto al campo de seguimiento para ingresar el nuevo número.

### 📍 Dirección de envío <a href="pedidos-editardetalles-envio" id="pedidos-editardetalles-envio"></a>

Modifica la dirección de envío usando el icono **Modificar** o seleccionando otra dirección del cliente registrada. Si necesitas agregar una nueva dirección, hazlo desde el menú **Clientes > Direcciones**.

### 💳 Dirección de facturación <a href="pedidos-editardetalles-facturacion" id="pedidos-editardetalles-facturacion"></a>

Actualiza la dirección de facturación de forma similar a la de envío. Puedes seleccionar una dirección registrada o crear una nueva en **Clientes > Direcciones**.

### 🎁 Descuento <a href="pedidos-editardetalles-descuento" id="pedidos-editardetalles-descuento"></a>

Añade un descuento específico al pedido sin utilizar cupones:
1. **Nombre**: Título del descuento visible para el cliente.
2. **Tipo**: Elige entre porcentaje, cantidad o envío gratuito.
3. **Valor**: Establece el valor del descuento.
4. **Factura**: Aplica el descuento a una factura específica o a todas las facturas del pedido.

El descuento se aplica antes de calcular los gastos de envío.

## 📬 Adjuntar un mensaje al pedido <a href="pedidos-adjuntarmensajes" id="pedidos-editardetalles-adjuntarmensajes"></a>
---

En la sección **Mensajes** (parte derecha de la página), puedes añadir un comentario sobre el pedido para tu equipo.

También puedes optar por enviar el mensaje al cliente, para informarle de cambios, retrasos, o compartirle promociones y ofertas.

### 🛠️ Opciones para los mensajes: <a href="pedidos-adjuntarmensajes-opciones" id="pedidos-editardetalles-adjuntarmensajes-opciones"></a>

- **Seleccionar mensaje estándar**: Si deseas usar un mensaje predefinido, selecciónalo de la lista desplegable. Estos mensajes ahorran tiempo al reutilizar contenido ya escrito. Puedes crear más mensajes predefinidos en **Servicio al cliente > Mensajes predefinidos**.

- **Mostrar al cliente**: Decide si el mensaje es visible solo para tu equipo o también para el cliente.

- **Escribir mensaje**: Si usas un mensaje predefinido, aparecerá aquí. Si no, puedes escribir directamente en este campo.

El mensaje se guardará en el perfil del cliente y se enviará por correo electrónico si decides hacerlo.

### 🚀 Acciones: <a href="pedidos-adjuntarmensajes-acciones" id="pedidos-editardetalles-adjuntarmensajes-acciones"></a>

- **Enviar mensaje**: Haz clic para enviar el mensaje al cliente o guardarlo solo para el equipo.
- **Mostrar todos los mensajes**: Enlace a la página de **Servicio al cliente** para ver todos los mensajes registrados.


