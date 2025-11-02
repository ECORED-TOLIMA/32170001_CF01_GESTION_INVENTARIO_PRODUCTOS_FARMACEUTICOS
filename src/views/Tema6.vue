<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 6
      h1 Documentación soporte en la recepción de productos farmacéuticos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img01.jpg')})`}" data-aos="flip-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="flip-left")
        p.mb-0 Durante el proceso de recepción técnica, la documentación de soporte cumple una función clave para validar que los productos entregados cumplen con los criterios técnicos, legales y contractuales. Este conjunto documental permite verificar la identidad, calidad, legalidad y trazabilidad de los productos, así como proteger al establecimiento frente a posibles inconformidades o hallazgos durante auditorías o inspecciones.

    p(data-aos="fade-right") A continuación, se detallan los documentos esenciales que deben revisarse, archivarse y estar disponibles durante la recepción de productos farmacéuticos.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Factura o remisión del proveedor
    
    p(data-aos="fade-right") La factura o remisión es el primer documento que se debe revisar al momento de recibir un producto farmacéutico. Este documento, emitido por el proveedor o distribuidor, tiene valor legal y contable, y detalla la transacción realizada entre ambas partes. Su análisis cuidadoso permite verificar que los productos entregados coincidan con lo solicitado y que se encuentren dentro de los parámetros establecidos para su recepción.
    p.mb-5(data-aos="fade-right") Contenidos claves de una factura o remisión:

    .row.cajon.BG04.align-items-center.pt-lg-3.py-3.px-lg-5.px-4.mb-5
      .col-lg-4.mb-4.mb-lg-0.d-lg-flex.d-none(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/img02.png', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-4
              .col-lg-8.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema6/img03.svg' alt='Imagen decorativa')
            p.text-center.mb-0 Nombre del producto farmacéutico, incluyendo su concentración y forma farmacéutica.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-4
              .col-lg-8.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema6/img04.svg' alt='Imagen decorativa')
            p.text-center.mb-0 Presentación comercial (blíster, frasco, caja, ampolla, etc.).
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-4
              .col-lg-8.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema6/img05.svg' alt='Imagen decorativa')
            p.text-center.mb-0 Cantidad entregada, la cual debe coincidir exactamente con lo que figura en la orden de compra.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-4
              .col-lg-8.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema6/img06.svg' alt='Imagen decorativa')
            p.text-center.mb-0 Número de lote y fecha de vencimiento, datos fundamentales para la trazabilidad y rotación posterior.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-4
              .col-lg-8.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema6/img07.svg' alt='Imagen decorativa')
            p.text-center.mb-0 Precio unitario y total, especialmente útil para fines contables o de auditoría.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-4
              .col-lg-8.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema6/img08.svg' alt='Imagen decorativa')
            p.text-center.mb-0 Nombre y razón social del proveedor, junto con su número de identificación tributaria (NIT).
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-4
              .col-lg-8.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema6/img09.svg' alt='Imagen decorativa')
            p.text-center.mb-0 Número de factura o remisión y fecha de emisión del documento.

    p.mb-5(data-aos="fade-right") La factura o remisión cumple un papel esencial en la validación inicial de los productos que ingresan al servicio farmacéutico. A continuación, se presentan algunas de las funciones clave que justifican su revisión rigurosa:

    .tarjeta--container.row.mb-5
      .col-lg-4.tarjeta.tarjeta--C02.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-5.col-6
            figure
              img(src='@/assets/curso/temas/tema6/img10.svg', alt='Imagen decorativa')
        p.mb-0 Permite comparar lo recibido con lo facturado y detectar errores u omisiones desde el primer momento.
      .col-lg-4.tarjeta.tarjeta--C03.p-5(data-aos="flip-up")
        .row.justify-content-center.mb-4
          .col-lg-5.col-6
            figure
              img(src='@/assets/curso/temas/tema6/img11.svg', alt='Imagen decorativa')
        p.mb-0 Es la base para autorizar o rechazar la entrada de productos al sistema, en conjunto con la inspección técnica.
      .col-lg-4.tarjeta.tarjeta--C04.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-5.col-6
            figure
              img(src='@/assets/curso/temas/tema6/img12.svg', alt='Imagen decorativa')
        p.mb-0 Es obligatoria para dejar constancia legal del ingreso de productos a la institución y debe ser archivada según el protocolo interno.

    p.mb-5(data-aos="fade-right") Para asegurar la trazabilidad, la legalidad y la calidad en la entrada de productos farmacéuticos, es fundamental aplicar criterios técnicos y normativos en la revisión documental. A continuación, se presentan algunas recomendaciones clave para fortalecer este proceso:

    .row.mb-5
      .col-lg.col-md-6.mb-lg-0.mb-4.tarjeta--tabla.p-4(data-aos="fade-right")
        .row.justify-content-center
          .col-4
            img(src='@/assets/curso/temas/tema6/img13.svg' alt='Imagen decorativa')
        p.text-center.mb-0 Revisar que toda la información esté legible y completa.
      .col-lg.col-md-6.mb-lg-0.mb-4.tarjeta--tabla.p-4(data-aos="flip-right")
        .row.justify-content-center
          .col-4
            img(src='@/assets/curso/temas/tema6/img14.svg' alt='Imagen decorativa')
        p.text-center.mb-0 Comparar los datos de la factura con los de la orden de compra y con los productos físicos.
      .col-lg.col-md-6.mb-lg-0.mb-4.tarjeta--tabla.p-4(data-aos="flip-left")
        .row.justify-content-center
          .col-4
            img(src='@/assets/curso/temas/tema6/img15.svg' alt='Imagen decorativa')
        p.text-center.mb-0 Registrar cualquier diferencia, inconsistencia o hallazgo en el formato de recepción o acta de no conformidad si aplica.
      .col-lg.col-md-6.mb-lg-0.mb-4.tarjeta--tabla.p-4(data-aos="fade-left")
        .row.justify-content-center
          .col-4
            img(src='@/assets/curso/temas/tema6/img16.svg' alt='Imagen decorativa')
        p.text-center.mb-0 No firmar la conformidad de la recepción hasta haber realizado la verificación documental y física completa.

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Orden de compra y certificado de calidad

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img17.jpg')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 <b>La orden de compra</b> es el documento que origina el proceso de adquisición de productos farmacéuticos. Es generada por la institución solicitante y constituye el respaldo legal y administrativo que permite verificar si los productos recibidos coinciden con lo solicitado. En ella se especifican datos clave como: nombre del producto, concentración, forma farmacéutica, cantidad, presentación, condiciones de entrega y requisitos especiales (por ejemplo, cadena de frío o certificaciones técnicas).

    p.mb-5(data-aos="fade-right") Durante la recepción, la orden de compra debe compararse cuidadosamente con la factura o remisión del proveedor y con los productos físicos entregados. Cualquier diferencia entre lo solicitado y lo recibido debe registrarse de inmediato, especialmente si compromete la seguridad o calidad del producto. Esta verificación permite detectar errores tempranos y tomar decisiones oportunas, como aceptar, rechazar o colocar en cuarentena el producto.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img18.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Por su parte, <b>el certificado de calidad</b> del lote es un documento técnico emitido por el laboratorio fabricante o por el proveedor autorizado. En él se certifica que el lote entregado ha superado las pruebas fisicoquímicas, microbiológicas y de estabilidad exigidas por la normativa. Este certificado debe incluir, entre otros aspectos: identificación del producto, número de lote, fecha de fabricación y vencimiento, especificaciones analíticas, resultados de laboratorio y firma del responsable técnico.

    p(data-aos="fade-right") Este documento es indispensable especialmente para productos de alto riesgo o condiciones especiales (biológicos, inyectables, psicotrópicos o citotóxicos), ya que garantiza que cumplen con los estándares de calidad antes de ingresar al inventario. Su ausencia o incongruencia puede ser motivo de retención del producto en cuarentena o rechazo definitivo.

    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Registro sanitario INVIMA y licencia sanitaria del proveedor

    p(data-aos="fade-right") La verificación del registro sanitario del INVIMA es un paso esencial en la recepción de productos farmacéuticos, ya que garantiza que los medicamentos o dispositivos médicos han sido evaluados y aprobados por la autoridad sanitaria competente en Colombia. El INVIMA (Instituto Nacional de Vigilancia de Medicamentos y Alimentos) es la entidad encargada de certificar que un producto cumple con los requisitos de calidad, seguridad y eficacia antes de autorizar su comercialización en el país.
    p.mb-5(data-aos="fade-right") Cada producto debe contar con un número de registro sanitario visible en su empaque, el cual debe ser verificado durante la recepción para confirmar que:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-4.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/img19.svg', alt='Imagen decorativa')
      .col-lg-9.col-12.order-lg-2.order-2(data-aos="fade-left")
        .cajon.cajon.C01.p-4.mb-0
          ul.lista-ul--color
            li 
              i.fas.fa-chevron-right
              | Está vigente (no vencido).
            li 
              i.fas.fa-chevron-right
              | Corresponde al nombre, forma farmacéutica, concentración y presentación del producto recibido.
            li 
              i.fas.fa-chevron-right
              | Coincide con el producto autorizado por el INVIMA (puede consultarse en su base de datos oficial).

    p(data-aos="fade-right") La ausencia de registro, su vencimiento o inconsistencias entre lo declarado y lo recibido son causales de rechazo inmediato o retención en cuarentena del producto, según los protocolos internos.
    p(data-aos="fade-right") Por otro lado, la licencia sanitaria del proveedor es el documento expedido por la Secretaría de Salud competente que autoriza legalmente a una empresa o entidad para la fabricación, importación, distribución o comercialización de productos farmacéuticos. Esta licencia garantiza que el proveedor opera bajo estándares técnicos, éticos y sanitarios establecidos por la normatividad nacional.
    p.mb-5(data-aos="fade-right") Durante la recepción, es importante confirmar que el proveedor:

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img20.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4
              p.mb-0.text-center.text-bold Cuenta con licencia sanitaria vigente.
      .col-lg-4.col-md-6.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img21.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4
              p.mb-0.text-center.text-bold Está autorizado para comercializar el tipo de producto entregado.
      .col-lg-4.col-md-6.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img22.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4
              p.mb-0.text-center.text-bold Tiene historial de cumplimiento en inspecciones sanitarias.

    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-0(data-aos="fade-right") El incumplimiento de estas condiciones puede implicar riesgos para la trazabilidad, la legalidad del producto y la seguridad del paciente. Por eso, conservar una copia de la licencia del proveedor y realizar verificaciones periódicas es parte fundamental del sistema de aseguramiento de la calidad en el servicio farmacéutico.

    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Formatos y registros de recepción

    p.mb-5(data-aos="fade-right") Son documentos fundamentales que respaldan legal y operativamente el ingreso de productos farmacéuticos a la institución. Su adecuada diligenciación garantiza la trazabilidad, el control y la transparencia del proceso, permitiendo evidenciar que cada medicamento fue recibido bajo condiciones aceptables de calidad, cantidad y conformidad.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.h-100(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(data-aos="fade-right")(src='@/assets/curso/temas/tema6/img23.svg' alt='Imagen decorativa')(style= "width: 85%")
          .tarjeta.tarjeta--C02.p-4
            p.ps-5.mb-0(data-aos="fade-right") Estos formatos pueden ser físicos (papel membretado institucional) o digitales (en sistemas de gestión de inventarios), y deben estar previamente diseñados con los campos obligatorios establecidos por la normatividad vigente y los protocolos internos.

    p.mb-5(data-aos="fade-right") Un formato de recepción completo debe incluir como mínimo:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/img24.png', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-left")
        .cajon.cajon.C01.p-3
          ul.lista-ul--color.mb-0
            li 
              i.fas.fa-chevron-right
              | Fecha y hora de recepción.
            li 
              i.fas.fa-chevron-right
              | Nombre completo del producto recibido.
            li 
              i.fas.fa-chevron-right
              | Presentación, concentración y forma farmacéutica.
            li 
              i.fas.fa-chevron-right
              | Cantidad recibida y número de unidades.
            li 
              i.fas.fa-chevron-right
              | Número de lote y fecha de vencimiento.
            li 
              i.fas.fa-chevron-right
              | Nombre del proveedor o transportador.
            li 
              i.fas.fa-chevron-right
              | Nombre y firma del personal que entrega y recibe.
            li 
              i.fas.fa-chevron-right
              | Resultado de la inspección física y técnica (producto conforme o no conforme).
            li 
              i.fas.fa-chevron-right
              | Observaciones relevantes (estado del empaque, condiciones de transporte, temperatura si aplica).
            li.mb-0
              i.fas.fa-chevron-right
              | Firma del responsable del área farmacéutica.

    p.mb-5(data-aos="fade-right") Además, debe contar con campos específicos para dejar constancia de acciones tomadas en caso de hallazgos, como cuarentena, devolución o rechazo. La correcta utilización de estos formatos cumple con varios propósitos clave:

    .row.mb-5(data-aos="fade-right")
      .col-lg.col-md-6.mb-lg-0.mb-4.tarjeta--tabla.p-4
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/temas/tema6/img25.svg' alt='Imagen decorativa')
        p.text-center.mb-0 Establece una evidencia documental obligatoria ante auditorías internas o externas.
      .col-lg.col-md-6.mb-lg-0.mb-4.tarjeta--tabla.p-4
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/temas/tema6/img26.svg' alt='Imagen decorativa')
        p.text-center.mb-0 Facilita el seguimiento de lotes, fechas de vencimiento y movimientos de inventario.
      .col-lg.col-md-6.mb-lg-0.mb-4.tarjeta--tabla.p-4
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/temas/tema6/img27.svg' alt='Imagen decorativa')
        p.text-center.mb-0 Contribuye a la seguridad del paciente, al prevenir el ingreso de productos no conformes.
      .col-lg.col-md-6.mb-lg-0.mb-4.tarjeta--tabla.p-4
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/temas/tema6/img28.svg' alt='Imagen decorativa')
        p.text-center.mb-0 Favorece la gestión de riesgos en la cadena de suministro.

    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-0(data-aos="fade-right") Es indispensable que el personal encargado esté capacitado en el uso del formato, conozca la normativa sanitaria aplicable y registre la información de forma clara, completa y sin alteraciones. Asimismo, estos registros deben archivarse según el protocolo institucional, generalmente por un periodo no menor a cinco años o el que indique la regulación específica del sector salud.

    separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Acta de productos no conformes (si aplica)

    p(data-aos="fade-right") El acta de productos no conformes es un documento fundamental para registrar oficialmente cualquier anomalía detectada durante la recepción de productos farmacéuticos. Su propósito es dejar constancia detallada de las irregularidades encontradas y activar los protocolos correctivos establecidos por la institución, de acuerdo con la normativa sanitaria vigente.
    p.mb-5(data-aos="fade-right") Esta acta debe diligenciarse de forma inmediata cuando se identifique que uno o varios productos no cumplen con los criterios técnicos, físicos o documentales esperados, tales como:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .cajon.cajon.C01.p-4
          ul.lista-ul--color
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Empaques deteriorados o abiertos.
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Productos con fecha de vencimiento próxima o vencida.
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Diferencia entre lo solicitado y lo entregado (concentración, presentación, cantidad).
            li
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Faltante de documentos requeridos.
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Ruptura de cadena de frío o mala conservación.
            li
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Productos sin registro sanitario vigente o con información incompleta.
      .col-lg-3.col-md-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema6/img29.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-4.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/img30.png', alt='Imagen decorativa')
      .col-lg-7(data-aos="fade-left")
        p El contenido mínimo del acta debe incluir:
        .cajon.cajon.C01.p-4
          ul.lista-ul--color.mb-0
            li 
              i.fas.fa-chevron-right
              | Nombre completo del producto observado.
            li 
              i.fas.fa-chevron-right
              | Presentación, concentración, cantidad y número de lote.
            li 
              i.fas.fa-chevron-right
              | Fecha de vencimiento.
            li 
              i.fas.fa-chevron-right
              | Descripción del hallazgo o no conformidad.
            li 
              i.fas.fa-chevron-right
              | Fecha y hora de la detección.
            li 
              i.fas.fa-chevron-right
              | Nombre del proveedor o transportador.
            li 
              i.fas.fa-chevron-right
              | Nombre, cargo y firma del personal que detectó la irregularidad.
            li 
              i.fas.fa-chevron-right
              | Acción inmediata tomada: cuarentena, devolución, rechazo, notificación al proveedor.
            li 
              i.fas.fa-chevron-right
              | Firma del responsable del área de servicios farmacéuticos o del jefe inmediato.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-right") Opcionalmente, se recomienda adjuntar fotografías como evidencia del estado del producto, especialmente si el daño es visual o físico (como envases abollados, etiquetas ilegibles o productos derramados).

    p(data-aos="fade-right") El acta debe ser archivada junto con la documentación de la recepción y comunicada al proveedor según lo establecido por el contrato o convenio. En caso de productos regulados (como psicotrópicos o biológicos), el hallazgo debe reportarse también a la autoridad sanitaria competente.
    p(data-aos="fade-right") Una gestión eficiente de productos no conformes evita errores de dispensación, previene riesgos al paciente y fortalece los sistemas de calidad del servicio farmacéutico.

</template>

<script>
export default {
  name: 'Tema6',
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
