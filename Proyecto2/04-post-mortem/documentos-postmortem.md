# Documento Post-Mortem

## Error en el cálculo de los totales de venta

### 1. Resumen del incidente

Durante la implementación del sistema de registro de ventas para la panadería, se detectó un error en el cálculo automático del total de una venta cuando se registraban varios productos y cantidades.

El incidente ocurrió durante las pruebas de la solución, cuando el total mostrado por el sistema no coincidía con la suma de los subtotales de los productos seleccionados. Esto podía provocar diferencias en los registros diarios y afectar los reportes de ventas.

El problema estuvo relacionado con el proceso de cálculo y registro de ventas, especialmente con los requisitos funcionales RF02 y RF03. Se decidió detener temporalmente las pruebas de aceptación hasta corregir el error y verificar que los cálculos fueran correctos.

### 2. Línea de tiempo (timeline)

- **9:00 a. m.:** Se inició la prueba del registro de ventas con varios productos.
- **9:15 a. m.:** Se detectó que el total calculado no coincidía con la suma de los subtotales.
- **9:25 a. m.:** Se repitió la prueba con diferentes cantidades y precios para confirmar el problema.
- **9:40 a. m.:** El equipo identificó que el cálculo del total no estaba considerando correctamente todos los productos registrados.
- **10:00 a. m.:** Se suspendieron las pruebas de aceptación para evitar validar una versión con errores.
- **10:30 a. m.:** El responsable del desarrollo corrigió la lógica de cálculo.
- **11:00 a. m.:** Se ejecutaron nuevamente las pruebas con distintos productos y cantidades.
- **11:30 a. m.:** Se confirmó que los totales coincidían con los resultados esperados y se autorizó continuar con las pruebas.

### 3. Impacto

El incidente afectó principalmente al personal encargado de registrar las ventas y consultar los resultados diarios.

Los efectos identificados fueron:

- **Registro de ventas:** posibilidad de guardar montos incorrectos.
- **Reportes diarios:** riesgo de mostrar totales que no coincidieran con las ventas realizadas.
- **Historial de consultas:** posibilidad de conservar información incorrecta para futuras comparaciones.
- **Operación de la panadería:** necesidad de revisar manualmente los cálculos, aumentando el tiempo de trabajo.
- **Confianza en el sistema:** riesgo de que los usuarios prefirieran regresar a sus registros manuales.

La gravedad del incidente se consideró **alta para la confiabilidad de los datos**, aunque fue detectado durante las pruebas antes de la puesta en funcionamiento. Por ello, no se asumió una pérdida real de ventas ni de información del negocio.

### 4. Causa raíz

Para identificar la causa raíz se utilizó la técnica de los cinco porqués.

**1. ¿Por qué el total de la venta era incorrecto?**

Porque el sistema no sumaba correctamente los subtotales de todos los productos registrados.

**2. ¿Por qué no se sumaban correctamente los subtotales?**

Porque la lógica de cálculo no procesaba adecuadamente todos los productos y sus respectivas cantidades.

**3. ¿Por qué no se detectó este error durante el desarrollo inicial?**

Porque las primeras pruebas se enfocaron en ventas sencillas con pocos productos.

**4. ¿Por qué las pruebas no incluían suficientes escenarios?**

Porque no se definieron casos de prueba específicos para ventas con múltiples productos, cantidades y precios diferentes.

**5. ¿Por qué no se definieron esos casos de prueba?**

Porque la planificación inicial priorizó implementar las funciones principales sin establecer criterios de validación suficientemente completos.

**Causa raíz identificada:** la falta de una estrategia de pruebas que contemplara diferentes escenarios de registro y cálculo de ventas, junto con una validación insuficiente de la lógica implementada.

El incidente no se debió únicamente a un error de programación, sino también a una deficiencia en la planificación y validación de la solución.

### 5. Acciones tomadas para solucionarlo

Para resolver el incidente se realizaron las siguientes acciones:

1. **Detener temporalmente las pruebas de aceptación.** El equipo evitó continuar validando una versión que podía producir resultados incorrectos.
2. **Revisar la lógica de cálculo.** El responsable del desarrollo verificó cómo se calculaban los subtotales y cómo se sumaban para obtener el total.
3. **Corregir el cálculo.** Se modificó la lógica para asegurar que cada subtotal se obtuviera multiplicando el precio por la cantidad y que todos los subtotales se sumaran correctamente.
4. **Repetir las pruebas.** Se probaron ventas con diferentes productos, precios y cantidades.
5. **Validar los resultados.** Se compararon los totales del sistema con cálculos manuales para confirmar que coincidieran.
6. **Documentar el incidente.** Se registró el problema y su solución para utilizarlo como referencia en futuras mejoras.

Estas acciones permitieron corregir el error antes de la puesta en funcionamiento de la solución y reducir el riesgo de registrar ventas con montos incorrectos.

### 6. Acciones a futuro

Para evitar que un incidente similar vuelva a ocurrir, se proponen las siguientes medidas:

| Acción preventiva | Responsable | Objetivo |
|---|---|---|
| Crear casos de prueba para ventas con uno o varios productos. | QA / responsable de pruebas | Detectar errores en diferentes escenarios. |
| Implementar pruebas automatizadas para los cálculos de subtotales y totales. | Desarrollador | Verificar que los resultados sean correctos después de cada cambio. |
| Definir criterios de aceptación antes de desarrollar cada requisito. | Product Manager y equipo técnico | Asegurar que todos comprendan cómo debe funcionar cada característica. |
| Validar los datos antes de guardar una venta. | Desarrollador | Evitar cantidades inválidas y registros incompletos. |
| Verificar que los reportes coincidan con las ventas almacenadas. | QA / responsable de pruebas | Prevenir inconsistencias en los resúmenes diarios e históricos. |
| Mantener un registro de errores y sus soluciones. | Scrum Master / equipo | Facilitar el seguimiento de problemas y la mejora continua. |

#### Aprendizajes obtenidos

El incidente permitió comprender que una función aparentemente sencilla, como calcular el total de una venta, puede afectar otras partes del sistema si no se valida correctamente.

También se identificó la importancia de diseñar las pruebas desde el inicio, definir criterios de aceptación claros y verificar la integridad de la información antes de poner una solución en funcionamiento.

Como aprendizaje principal, el equipo(Yo solita) concluye que **una funcionalidad no debe considerarse terminada únicamente porque esté programada, sino cuando se ha comprobado que funciona correctamente en los escenarios previstos**.
