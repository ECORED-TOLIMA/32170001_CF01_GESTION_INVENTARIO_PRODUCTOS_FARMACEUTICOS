<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 8
      h1 Procedimiento de distribución

    .row.justify-content-center.px-md-5.px-4
      .col-12
        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-lg-6.col-12.order-lg-2.order-2
            p(data-aos="fade-down") La distribución de productos farmacéuticos es una fase crítica del proceso logístico, en la que se garantiza que los medicamentos y dispositivos médicos lleguen a los puntos de uso en condiciones óptimas de calidad, seguridad y eficacia. Este proceso debe estar cuidadosamente planificado y ejecutado, cumpliendo con las Buenas Prácticas de Distribución (BPD) y los lineamientos establecidos por el INVIMA, el Decreto 2200 de 2005 y otras normas técnicas nacionales e internacionales.
            p(data-aos="fade-down") Una distribución eficaz evita pérdidas económicas, asegura la trazabilidad de los productos y protege la salud de los usuarios finales. Por ello, involucra procedimientos documentados, control ambiental adecuado, personal capacitado y recursos logísticos apropiados.
          .col-lg-6.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema8/img01.png', alt='Imagen decorativa')

    separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1 Etapas, protocolos y recomendaciones
    
    p.mb-5(data-aos="fade-down") El proceso de distribución debe seguir una serie de etapas y aplicar protocolos específicos para garantizar la integridad de los productos farmacéuticos. A continuación, se describen sus componentes principales:

    .tarjeta.tarjeta--BG09.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-centerp-4
          .col-lg-7.order-lg-1.order-2
            h4 Etapas del proceso de distribución
            ul.lista-ul.mb-3(data-aos="fade-right")
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 <b>Solicitud interna o externa:</b> generada desde farmacias, servicios clínicos u otras instituciones, especificando productos, cantidades y justificación.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 <b>Preparación del pedido:</b> selección, revisión y empaque de productos según la solicitud. Se verifica lote, fecha de vencimiento, condiciones especiales y conformidad.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 <b>Verificación y validación:</b> el responsable verifica que lo preparado coincida con lo solicitado y cumple las condiciones establecidas.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 <b>Registro del despacho:</b> se documenta la salida del inventario en el sistema y se genera guía o remisión interna.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 <b>Transporte y entrega:</b> los productos se trasladan de forma segura hasta el punto de destino, garantizando condiciones adecuadas de conservación.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema8/img02.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Protocolos esenciales
            ul.lista-ul.mb-3(data-aos="fade-right")
              li
                i.lista-ul__vineta
                | Aplicar FEFO o PEPS, según corresponda, en la selección de productos para distribución.
              li
                i.lista-ul__vineta
                | Utilizar medios de transporte que garanticen control térmico cuando se trate de productos de cadena de frío.
              li
                i.lista-ul__vineta
                | Proteger productos fotosensibles, frágiles o peligrosos mediante empaques adecuados y señalización clara.
              li
                i.lista-ul__vineta
                | Mantener un registro trazable del lote, fecha de vencimiento, responsable del despacho y del receptor.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema8/img03.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Recomendaciones para una distribución segura
            ul.lista-ul.mb-3(data-aos="fade-right")
              li
                i.lista-ul__vineta
                | Capacitar al personal en manipulación y transporte de productos sensibles.
              li
                i.lista-ul__vineta
                | Validar la integridad del empaque antes de la entrega.
              li
                i.lista-ul__vineta
                | Realizar entregas solo en puntos autorizados y con firma de recibido.
              li
                i.lista-ul__vineta
                | En caso de devolución, registrar los motivos, conservar el producto en zona aislada y evaluar su estado. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema8/img04.jpg', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema8',
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
