<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1 Recepción técnica de productos farmacéuticos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La recepción técnica es el primer filtro de control dentro del proceso logístico farmacéutico. Consiste en validar que los productos que ingresan al almacén cumplan con las condiciones sanitarias, documentales y técnicas exigidas por la normatividad vigente. Esta etapa es clave para garantizar que solo medicamentos seguros, eficaces y con trazabilidad completa ingresen al sistema de inventario, reduciendo riesgos para los pacientes y cumpliendo con los estándares establecidos por el INVIMA, el Decreto 2200 de 2005 y las Buenas Prácticas de Almacenamiento (BPA).

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Preparación del área y verificación documental

    p(data-aos="fade-down") La recepción de productos farmacéuticos inicia con la preparación adecuada del espacio físico donde se llevará a cabo el proceso. Esta área debe estar claramente delimitada y separada del resto del almacén para evitar contaminación cruzada y confusión con el inventario ya aprobado. Además, debe cumplir con condiciones físicas y funcionales específicas que garanticen la integridad de los productos durante la inspección.
    p.mb-5(data-aos="fade-down") A continuación, se describen las características principales del área de recepción:

    .row.justify-content-center.mb-5
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img02.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4
              p.mb-0.text-center Limpieza y desinfección regular antes y después del proceso.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4
              p.mb-0.text-center Señalización visible con carteles como “Zona de recepción” o “No mezclar con inventario”.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4
              p.mb-0.text-center Superficies lisas y lavables, resistentes a sustancias químicas y al uso constante.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4
              p.mb-0.text-center Espacio suficiente para revisar simultáneamente varias cajas o embalajes sin amontonarlos.

      .col-lg-4.col-lg.mb-0.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4
              p.mb-0.text-center Acceso controlado, permitiendo únicamente el ingreso de personal autorizado.

    p(data-aos="fade-down") En paralelo, se debe asegurar la disponibilidad de los formatos de verificación, ya sean físicos (formularios impresos) o digitales (sistemas informáticos validados), donde se registrarán los datos del producto recibido y las observaciones detectadas.
    p.mb-5(data-aos="fade-down") Una vez adecuada el área, se procede a la verificación documental, que consiste en comprobar que la información del proveedor y del producto coincida con lo previamente solicitado y cumpla con los requisitos legales. Este paso es indispensable para validar la legitimidad, calidad y trazabilidad del medicamento o dispositivo médico. 

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span <em>Documentos a verificar</em>          
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de producto
                th(data-aos="fade-down")(style= "width: 70%") Ejemplos
            tbody
              tr
                td.text-bold(data-aos="fade-down") Factura o remisión
                td(data-aos="fade-down") Confirmar cantidades, fechas y datos del proveedor.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Orden de compra
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Verificar que el producto entregado corresponde al solicitado.
              tr
                td.text-bold(data-aos="fade-down") Licencia sanitaria del proveedor
                td(data-aos="fade-down") Validar que el proveedor está autorizado por la autoridad sanitaria competente.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Certificado de calidad del lote (si aplica)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Confirmar que el lote ha sido sometido a pruebas técnicas de calidad.
              tr
                td.text-bold(data-aos="fade-down") Registro sanitario INVIMA
                td(data-aos="fade-down") Garantizar que el producto cuenta con autorización de comercialización en Colombia.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Otros certificados
                td(data-aos="fade-down")(style="background-color: #F6F6F6") En casos especiales: cadena de frío, certificaciones internacionales, etc.
        
        p.mb-0(data-aos="fade-down") Toda la documentación debe estar vigente, legible y libre de inconsistencias. Si alguno de estos documentos falta o presenta errores, el lote no debe avanzar al siguiente paso del proceso de recepción y debe ser clasificado como no conforme hasta aclarar la situación con el proveedor.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Inspección física y técnica

    p.mb-5(data-aos="fade-down") Una vez verificada la documentación, se procede a la inspección física y técnica de los productos farmacéuticos. Esta etapa tiene como objetivo asegurar que los medicamentos o dispositivos médicos cumplen con los requisitos de identidad, integridad, condiciones de empaque, fecha de vencimiento y demás criterios que garanticen su calidad y seguridad antes de su ingreso al sistema de inventario.

    .row.justify-content-center.px-md-5.px-4
      .col-lg-11.col-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-12.order-lg-2.order-2
            .row
              .bloque-texto-b.color-primario.p-4
                .bloque-texto-b__texto
                  p.mb-0(data-aos="fade-down") La inspección debe ser realizada por personal capacitado y en un entorno controlado, siguiendo protocolos estandarizados definidos en las Buenas Prácticas de Almacenamiento (BPA) y el Decreto 2200 de 2005. Este procedimiento actúa como una barrera de seguridad que permite detectar no conformidades antes de que los productos entren al flujo normal del servicio farmacéutico.
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema5/img07.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") A continuación, se presentan los aspectos clave en el momento de inspeccionar:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span <em>Aspectos a tener en cuenta en la inspección</em>          
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Elemento
                th(data-aos="fade-down")(style= "width: 70%") Criterio de inspección
            tbody
              tr
                td.text-bold(data-aos="fade-down") Nombre del producto
                td(data-aos="fade-down") Debe coincidir exactamente con el solicitado en la orden de compra y con lo descrito en la documentación.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Presentación farmacéutica
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Confirmar que corresponde con la forma, dosis y cantidad requerida (ejemplo: tabletas, viales y cremas).
              tr
                td.text-bold(data-aos="fade-down") Cantidad recibida
                td(data-aos="fade-down") Verificar que el número de unidades coincida con lo indicado en la factura y la orden de compra.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Número de lote
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Revisar que esté claramente visible en el empaque y coincida con el certificado de calidad, si aplica.
              tr
                td.text-bold(data-aos="fade-down") Fecha de vencimiento
                td(data-aos="fade-down") Debe ser mayor a seis meses (salvo excepciones justificadas). No se aceptan productos vencidos o próximos a vencer.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Condiciones del empaque
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El empaque primario y secundario debe estar íntegro, limpio, sin rupturas, manchas, humedad o signos de manipulación.
              tr
                td.text-bold(data-aos="fade-down") Etiquetado
                td(data-aos="fade-down") Debe incluir nombre del producto, concentración, lote, fecha de vencimiento, registro INVIMA y fabricante.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Registro sanitario (INVIMA)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Confirmar que el número coincida con el declarado y esté vigente.
              tr
                td.text-bold(data-aos="fade-down") Condiciones especiales
                td(data-aos="fade-down") En productos refrigerados, verificar temperatura en el momento de recepción. En fotosensibles, comprobar protección.
                

    p.mb-5(data-aos="fade-down") En la práctica cotidiana de la inspección física y técnica, suelen presentarse hallazgos que requieren atención inmediata por parte del personal encargado. A continuación, se describen algunos ejemplos comunes que describen cómo aplicar los criterios de evaluación y las acciones correctivas correspondientes:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema5/img08.svg", alt="Imagen decorativa").img130.m-auto
          h4.text-center Producto con nombre correcto, pero concentración errada
          p.mb-0 No conforme.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema5/img09.svg", alt="Imagen decorativa").img130.m-auto
          h4.text-center Caja con abolladuras y sello roto
          p.mb-0 Debe evaluarse, posible cuarentena o devolución.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema5/img10.svg", alt="Imagen decorativa").img130.m-auto
          h4.text-center Viales refrigerados entregados sin control térmico
          p.mb-0 Rechazo inmediato por ruptura de cadena de frío.

    p.mb-5(data-aos="fade-down") Para llevar a cabo una inspección física y técnica eficaz, es fundamental contar con herramientas que faciliten la verificación detallada de los productos y el registro de hallazgos. Estos instrumentos permiten asegurar la trazabilidad del proceso y respaldar las decisiones tomadas durante la recepción:

    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-md-6.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/temas/tema5/img11.svg', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p.mb-0 Checklist físico o digital con campos obligatorios de inspección.

      .col-md-6.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/temas/tema5/img12.svg', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p.mb-0 Lupa o linterna para revisar detalles en el rotulado.
    
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-md-6.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/temas/tema5/img13.svg', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p.mb-0 Termómetro digital o sensor para verificar temperatura en productos de cadena de frío.

      .col-md-6.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/temas/tema5/img14.svg', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p.mb-0 Cámara fotográfica o escáner para documentar hallazgos cuando se requiera.

    p.mb-0(data-aos="fade-down") Una inspección física y técnica rigurosa reduce significativamente el riesgo de errores de dispensación, problemas terapéuticos y sanciones regulatorias. Además, fortalece la trazabilidad y el control del inventario desde su primer punto de contacto con el servicio farmacéutico.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Registro y almacenamiento en zona de cuarentena

    p.mb-5(data-aos="fade-down") Luego de realizar la verificación documental y la inspección física y técnica, los productos que cumplan con los requisitos iniciales deben ser registrados y almacenados temporalmente en la zona de cuarentena, un espacio clave para mantener el control del inventario antes de su validación final.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema5/img15.svg' alt='AvatarTop')(style= "width: 85%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  p.mb-0(data-aos="fade-down") Esta zona debe estar claramente señalizada y separada físicamente del inventario activo, evitando confusiones o mezclas con productos ya aprobados. Aquí se depositan los productos mientras se evalúan otros aspectos, como documentación faltante, confirmación de características técnicas, o procesos internos de validación por parte del personal farmacéutico.

    p.mb-5(data-aos="fade-down") El registro se realiza utilizando formatos físicos o sistemas electrónicos, e incluye campos como:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-11.col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.order-lg-2.order-2
            .cajon.cajon.C01.p-4.mb-3
              ul.lista-ul--color
                li.mb-4 
                  i.fas.fa-chevron-right
                  | Nombre y concentración del producto.
                li.mb-4 
                  i.fas.fa-chevron-right
                  | Cantidad recibida.
                li.mb-4 
                  i.fas.fa-chevron-right
                  | Lote y fecha de vencimiento.
                li.mb-4 
                  i.fas.fa-chevron-right
                  | Condiciones especiales de almacenamiento (refrigeración, fotosensibilidad o control especial).
                li.mb-0 
                  i.fas.fa-chevron-right
                  | Observaciones durante la inspección.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema5/img16.svg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") En esta etapa, ningún producto debe ser utilizado ni distribuido, hasta tanto no haya sido liberado formalmente por el responsable del control de calidad o del servicio farmacéutico. El monitoreo riguroso de esta zona permite garantizar la trazabilidad y la integridad del proceso de recepción.

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Manejo de productos no conformes y observados

    p.mb-5(data-aos="fade-down") Durante la recepción, algunos productos pueden presentar inconformidades, es decir, desviaciones respecto a los requisitos establecidos. Estas pueden ser físicas (como empaques dañados), documentales (como falta de certificados) o técnicas (como diferencias en lote o concentración). Estos productos se clasifican en dos categorías:
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema5/img17.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Productos observados
            h5.t2.mb-2 Productos observados
            p.mb-0 Presentan inconsistencias menores que pueden resolverse con validaciones adicionales.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema5/img18.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Productos no conformes
            h5.t2.mb-2 Productos no conformes
            p.mb-0 Presentan desviaciones graves que impiden su uso o almacenamiento, como violación de cadena de frío o error en la concentración.
    
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        p(data-aos="fade-down") Ambos deben ser aislados inmediatamente en un área identificada como “PRODUCTOS OBSERVADOS/NO CONFORMES”, rotulados de forma visible con leyendas como “NO USAR” y registrados en un formato o acta de no conformidad, el cual debe contener:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12
        .row.justify-content-center.align-items-center
          .col-lg-7.col-12.order-lg-1.order-2
            .cajon.cajon.C01.p-4
              ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right
                  | Descripción del hallazgo.
                li 
                  i.fas.fa-chevron-right
                  | Lote, proveedor y fecha de recepción.
                li 
                  i.fas.fa-chevron-right
                  | Personal responsable.
                li.mb-0 
                  i.fas.fa-chevron-right
                  | Acciones tomadas o recomendadas.
          .col-lg-5.col-md-7.col-12.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema5/img19.svg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") Según el caso, los productos observados pueden ser validados posteriormente para ingreso al inventario o devueltos. Los productos no conformes deben ser retenidos, devueltos al proveedor o dispuestos como residuos, siguiendo los protocolos establecidos y registrando cada paso para auditorías y control interno.

    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Ingreso definitivo al sistema de inventario

    p.mb-5(data-aos="fade-down") Una vez que los productos han pasado todos los filtros y han sido validados como conformes, se procede a su ingreso definitivo al inventario del servicio farmacéutico. Este proceso debe realizarse a través de un sistema de gestión de inventarios, preferiblemente digital, que garantice la trazabilidad y actualización en tiempo real del <em>stock</em>. En esta etapa, se debe consignar:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-11.col-12
        .row.justify-content-center.align-items-center
          .col-lg-7.col-12.order-lg-2.order-2
            .cajon.cajon.C01.p-4
              ol.lista-ol--cuadro.lista-ol
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold a
                  | Nombre comercial y genérico del producto.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold b
                  | Presentación, concentración, forma farmacéutica.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold c
                  | Fecha de vencimiento y lote                
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold d
                  | Cantidad y ubicación asignada en el almacén.
                li
                  .lista-ol--cuadro__vineta
                    span.text-bold e
                  | Tipo de almacenamiento requerido (temperatura, luz, control especial).
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema5/img20.png', alt='Imagen decorativa')

    p(data-aos="fade-down") El sistema debe reflejar fielmente la disponibilidad real de los productos, de manera que se facilite su rotación (FEFO o PEPS) y se reduzca el riesgo de vencimiento o exceso de inventario. También se deben generar reportes que permitan hacer seguimiento a productos próximos a vencer, devoluciones, o diferencias entre inventario físico y digital.

    p.mb-0(data-aos="fade-down") Este ingreso marca el fin del proceso de recepción y habilita los productos para ser distribuidos, dispensados o utilizados, cumpliendo con los principios de seguridad, calidad y eficiencia del servicio farmacéutico.

</template>

<script>
export default {
  name: 'Tema5',
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
