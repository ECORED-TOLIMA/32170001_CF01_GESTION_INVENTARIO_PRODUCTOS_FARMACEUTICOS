<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 7
      h1 Registro e ingreso de productos

    p.mb-5(data-aos="fade-right") El registro e ingreso de productos farmacéuticos al sistema de inventario constituye la etapa final del proceso de recepción. Esta fase garantiza que solo aquellos productos que hayan sido verificados y aprobados ingresen formalmente al inventario institucional, asegurando la trazabilidad, disponibilidad y control de los medicamentos.
    
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/tema7/img01.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-0(data-aos="fade-right") Registrar correctamente cada producto permite planificar adecuadamente la distribución, evitar pérdidas por vencimiento o deterioro, y cumplir con las auditorías internas y externas exigidas por entidades como el INVIMA o la Secretaría de Salud.

    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Finalidad e información del registro
    
    p(data-aos="fade-right") El registro de productos tiene como finalidad dejar constancia formal del ingreso de medicamentos y dispositivos médicos que han sido inspeccionados y aprobados. Este proceso asegura la trazabilidad del inventario desde su entrada hasta su dispensación final.
    p.mb-5(data-aos="fade-right") La información mínima que debe contener un registro de ingreso incluye:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right") 
        img(src='@/assets/curso/temas/tema7/img02.svg', alt='Imagen decorativa')
      .col-lg-6(data-aos="fade-right") 
        .cajon.cajon.C01.p-4
          ul.lista-ul--color.mb-0
            li 
              i.fas.fa-chevron-right
              | Nombre completo del producto.
            li 
              i.fas.fa-chevron-right
              | Concentración y forma farmacéutica.
            li 
              i.fas.fa-chevron-right
              | Cantidad recibida.
            li 
              i.fas.fa-chevron-right
              | Número de lote y fecha de vencimiento.
            li 
              i.fas.fa-chevron-right
              | Nombre del proveedor o distribuidor.
            li 
              i.fas.fa-chevron-right
              | Fecha de recepción e ingreso.
            li 
              i.fas.fa-chevron-right
              | Identificación del responsable que realiza el registro.
            li 
              i.fas.fa-chevron-right
              | Código interno o referencia en el sistema de inventario (si aplica).
            li 
              i.fas.fa-chevron-right
              | Condición del producto (conforme / observación / cuarentena).
            li 
              i.fas.fa-chevron-right
              | Ubicación en el almacén o zona específica.
      
    p.mb-5(data-aos="fade-right") Esta información puede ser registrada en formatos físicos o, preferiblemente, en sistemas informáticos especializados que permiten generar reportes automáticos, alertas de vencimiento y control por lotes. Entre los más utilizados en el sector salud se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema7/img03.svg' alt='Imagen decorativa', style= "width: 100%")
          .tarjeta.tarjeta--C02.p-4
            h4.ps-5 SIIS
            p.ps-5.mb-0 (Sistema de Información de Inventarios en Salud).
      .col-lg-6.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema7/img04.svg' alt='Imagen decorativa', style= "width: 100%")
          .tarjeta.tarjeta--C02.p-4
            h4.ps-5.mb-0 Kardex digital farmacéutico
      .col-lg-6.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema7/img05.svg' alt='Imagen decorativa', style= "width: 100%")
          .tarjeta.tarjeta--C02.p-4
            h4.ps-5 SAP
            p.ps-5.mb-0 Con módulos logísticos y de salud.
      .col-lg-6.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema7/img06.svg' alt='Imagen decorativa', style= "width: 100%")
          .tarjeta.tarjeta--C02.p-4
            h4.ps-5 HEON
            p.ps-5.mb-0 (Utilizado en algunas IPS del sector público en Colombia).
      .col-lg-6.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema7/img07.svg' alt='Imagen decorativa', style= "width: 100%")
          .tarjeta.tarjeta--C02.p-4
            h4.ps-5 SIAF
            p.ps-5.mb-0 (Sistema Integrado de Administración Financiera con módulos de inventario).
      .col-lg-6.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema7/img08.svg' alt='Imagen decorativa', style= "width: 100%")
          .tarjeta.tarjeta--C02.p-4
            h4.ps-5 Power BI o Excel avanzado con macros y control  de lotes 
            p.ps-5.mb-0 (En instituciones sin sistemas especializados).

    p(data-aos="fade-right") Estos sistemas permiten la trazabilidad completa del producto, facilitan auditorías y reducen el margen de error humano en el registro manual.

    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Características del registro y buenas prácticas
    
    p.mb-5(data-aos="fade-right") Para asegurar una adecuada gestión de los productos farmacéuticos, es esencial que el sistema de registro cumpla con ciertos estándares de calidad y funcionalidad. No se trata solo de almacenar datos, sino de garantizar la trazabilidad, seguridad y disponibilidad de la información en todo momento. El registro debe permitir validar fechas de vencimiento, controlar el inventario en tiempo real, asociar cada movimiento a un responsable y facilitar auditorías internas o externas. Además, debe adaptarse a la normatividad vigente y ser accesible para el personal autorizado sin comprometer la integridad de los datos. En este sentido, un sistema de registro eficaz debe ser:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema7/img09.png', alt='Imagen decorativa')
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-acento-botones.especial
          div(numero="1" titulo="Claro")
            p.mb-0 Los datos deben estar escritos de forma legible o correctamente digitados en el sistema.
          div(numero="2" titulo="Exacto")
            p.mb-0 Sin omisiones ni errores, especialmente en fechas de vencimiento y lotes.
          div(numero="3" titulo="Trazable")
            p.mb-0 Cada producto debe poder rastrearse desde su recepción hasta su dispensación.
          div(numero="4" titulo="Actualizado")
            p.mb-0 Debe reflejar los movimientos en tiempo real o al cierre de cada jornada.
          div(numero="5" titulo="Seguro")
            p.mb-0 Con acceso restringido al personal autorizado, evitando modificaciones no controladas.

    p.mb-5(data-aos="fade-right") En este punto es importante destacar las buenas prácticas para el ingreso de productos al sistema:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .cajon.cajon.C01.p-4
          ul.lista-ul--color.mb-0
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Solo registrar productos que hayan pasado satisfactoriamente la inspección documental y física.
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Verificar que la cantidad ingresada coincida con la cantidad aprobada.
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Validar que los lotes, fechas y demás datos estén correctamente registrados.
            li
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Ingresar productos con condiciones especiales (refrigerados, citotóxicos, controlados) en sus módulos correspondientes dentro del sistema.
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Respaldar la información con la documentación soporte: formato de recepción, factura, orden de compra, certificado de calidad.
            li
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Generar reportes de ingreso y firmarlos como constancia del procedimiento.
      .col-lg-4.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema7/img10.svg', alt='Imagen decorativa')

    p(data-aos="fade-right") Una adecuada gestión del registro e ingreso fortalece el control del inventario, facilita la toma de decisiones operativas y garantiza la calidad del servicio farmacéutico.


</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
