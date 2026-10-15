# Issue

## Error en el cálculo de los totales de venta

### Tipo
- Bug

### Descripción

El sistema puede presentar errores al calcular el total de una venta cuando se registran varios productos o cantidades. Esto podría provocar diferencias entre el importe real de la venta y el total mostrado por el sistema.

Este problema es importante porque la panadería necesita llevar un control confiable de sus ingresos diarios. Si los cálculos son incorrectos, los resúmenes de ventas y las comparaciones entre diferentes días también podrían mostrar información equivocada, afectando la toma de decisiones del negocio.

El problema debe resolverse antes de aceptar la primera versión del sistema, ya que el cálculo automático de los totales corresponde al requisito funcional RF03.

### Mockup / Imagen

![Issue total equivocado](/scr/img/Issue.png)

### Pasos para reproducir (si aplica)

1. Abrir el formulario de registro de ventas.
2. Seleccionar dos o más productos e ingresar sus cantidades.
3. Comparar el total calculado por el sistema con la suma de los subtotales.

### Resultado esperado

El sistema debe calcular correctamente el subtotal de cada producto multiplicando su precio por la cantidad registrada y sumar todos los subtotales para obtener el total de la venta.

Además, el total debe conservarse correctamente en el registro de la venta y utilizarse en los reportes diarios y el historial de las consultas.

### Comentarios adicionales

Este issue está relacionado con los requisitos RF02, RF03 y RF04. Se recomienda realizar pruebas con ventas de diferentes cantidades y precios, incluyendo ventas con varios productos, antes de aprobar la entrega del sistema.

La corrección debe verificarse mediante casos de prueba con resultados esperados conocidos.