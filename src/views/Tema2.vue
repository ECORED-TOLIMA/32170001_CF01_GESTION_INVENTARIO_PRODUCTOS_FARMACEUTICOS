<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Normativa sanitaria y buenas prácticas

    p.mb-5(data-aos="fade-down") La normativa sanitaria en el ámbito farmacéutico colombiano tiene como objetivo fundamental proteger la salud pública garantizando que los medicamentos y productos relacionados cumplan con altos estándares de calidad, seguridad y eficacia. Esta regulación aplica a lo largo de toda la cadena de producción, almacenamiento, distribución y dispensación, siendo de obligatorio cumplimiento para todos los actores del sector.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Uno de los organismos más importantes en este proceso es el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA), que ejerce funciones de inspección, vigilancia y control, además de otorgar registros sanitarios y supervisar el cumplimiento de las buenas prácticas definidas por el Ministerio de Salud y Protección Social.

    p.mb-0(data-aos="fade-down") El conocimiento y la aplicación de estas normas no solo permiten asegurar la calidad de los productos farmacéuticos, sino que también previenen errores, reducen riesgos para el paciente y fortalecen la confianza en el sistema de salud.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Rol del INVIMA en el control de calidad

    p(data-aos="fade-down") El INVIMA es la entidad encargada de proteger y promover la salud pública mediante la regulación sanitaria de productos como medicamentos, alimentos, cosméticos, suplementos dietarios, dispositivos médicos y otros productos de interés sanitario.
    p.mb-5(data-aos="fade-down") Entre sus funciones más relevantes en el contexto farmacéutico se destacan:

    .row.cajon.BG04.align-items-center.pt-lg-3.py-3.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.d-lg-flex.d-none(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img02.png', alt='Imagen decorativa')
          .col-md-8.col-lg-8.mb-4.mb-md-0(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-4")
              .tarjeta.tarjeta--C02.p-4
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img03.svg' alt='AvatarTop')
                p.text-center Otorgamiento, renovación y cancelación del registro sanitario.

              .tarjeta.tarjeta--C02.p-4
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img04.svg' alt='AvatarTop')
                p.text-center Inspección a establecimientos farmacéuticos, laboratorios y distribuidores.

              .tarjeta.tarjeta--C02.p-4
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img05.svg' alt='AvatarTop')
                p.text-center Revisión de documentación técnica y ensayos clínicos.

              .tarjeta.tarjeta--C02.p-4
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img06.svg' alt='AvatarTop')
                p.text-center Supervisión del cumplimiento de Buenas Prácticas de Manufactura (BPM), Almacenamiento (BPA) y Dispensación (BPD).

              .tarjeta.tarjeta--C02.p-4
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img07.svg' alt='AvatarTop')
                p.text-center Vigilancia poscomercialización y farmacovigilancia.

    p.mb-0(data-aos="fade-down") El INVIMA actúa como garante de que los medicamentos que llegan al usuario final han pasado por un riguroso proceso técnico y legal que respalda su calidad.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Requisitos de calidad para productos farmacéuticos

    p(data-aos="fade-down") Los productos farmacéuticos deben cumplir con una serie de requisitos de calidad que garanticen su seguridad, eficacia y estabilidad durante todo el ciclo de vida del producto, desde su fabricación hasta su administración al paciente. Estos criterios son establecidos por organismos nacionales e internacionales y son verificados rigurosamente por el INVIMA, en cumplimiento de la normativa sanitaria vigente en Colombia.
    p.mb-5(data-aos="fade-down") A continuación, se describen los principales requisitos de calidad que debe cumplir todo producto farmacéutico:

    .tarjeta.tarjeta--BG05.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row(titulo="1")
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Identidad
            p El producto debe contener exactamente el principio activo que declara su etiquetado. Esta característica permite diferenciar un medicamento de otro y evitar confusiones que puedan comprometer la seguridad del paciente. La identidad se verifica mediante pruebas químicas y técnicas analíticas de laboratorio.
          .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img09.jpg', alt='Imagen decorativa')

        .row(titulo="2")
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Pureza
            p Los medicamentos deben estar libres de contaminantes físicos (partículas extrañas), químicos (impurezas o residuos no deseados) y microbiológicos (presencia de microorganismos patógenos). La pureza garantiza que el medicamento no cause efectos indeseados adicionales al tratamiento principal.
          .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img10.jpg', alt='Imagen decorativa')

        .row(titulo="3")
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Potencia
            p Se refiere a la concentración precisa y constante del principio activo en cada unidad de dosis. Una variación en la potencia puede hacer que el tratamiento sea ineficaz o incluso peligroso. La potencia se verifica mediante análisis cuantitativos en laboratorios certificados.
          .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img11.jpg', alt='Imagen decorativa')

        .row(titulo="4")
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Estabilidad
            p Todo producto debe mantener sus propiedades físico-químicas, microbiológicas y terapéuticas durante el tiempo estipulado como vida útil. Esta estabilidad debe comprobarse bajo condiciones específicas de temperatura, humedad y luz, lo cual se valida en estudios de estabilidad acelerada y de vida real.
          .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img12.jpg', alt='Imagen decorativa')

        .row(titulo="5")
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Eficacia
            p El producto debe haber demostrado su efectividad para el tratamiento de las condiciones para las que fue autorizado. Esta eficacia debe estar respaldada por evidencia científica, estudios clínicos, revisiones sistemáticas u otra documentación técnica reconocida.
          .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img13.jpg', alt='Imagen decorativa')

        .row(titulo="6")
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Seguridad
            p La relación entre los beneficios terapéuticos y los riesgos del medicamento debe ser favorable para el paciente. Se evalúan efectos adversos, interacciones, toxicidad y contraindicaciones. La seguridad debe ser monitoreada continuamente a través de programas de farmacovigilancia.
          .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img14.jpg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema2/img08.svg' alt='AvatarTop')(style= "width: 90%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  p.mb-0(data-aos="fade-down") Estos requisitos son obligatorios para que un producto farmacéutico obtenga o mantenga su registro sanitario, expedido por el INVIMA. El registro incluye datos sobre la fórmula, el fabricante, el empaque, la rotulación, las condiciones de conservación y la vigencia del producto. Este documento es indispensable para la comercialización legal del medicamento en Colombia.

    p(data-aos="fade-down") Además, los requisitos de calidad también se aplican a los procesos de importación, distribución, almacenamiento y dispensación. Por ello, los servicios farmacéuticos deben contar con mecanismos de control documental y físico que aseguren el cumplimiento de estas condiciones en cada etapa del proceso.
    p.mb-0(data-aos="fade-down") El conocimiento y la verificación de estos requisitos permiten a los auxiliares y técnicos del sector garantizar que el producto entregado al usuario cumpla con todos los estándares de calidad, lo que contribuye directamente a la protección de la salud individual y colectiva.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Buenas prácticas relacionadas con la calidad

    p.mb-5(data-aos="fade-down") Las buenas prácticas son estándares técnicos adoptados para asegurar que todos los procesos relacionados con los medicamentos se ejecuten bajo condiciones controladas, con personal calificado y con documentación confiable. Entre las más relevantes están:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col
        .tarjeta--container.row.mb-5
          .col-xl.col-lg-4.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/img15.svg', alt='Imagen decorativa')
              
            h4.text-center Buenas Prácticas de Manufactura (BPM)
            p.mb-0 Aseguran que el producto sea elaborado bajo condiciones higiénicas, con validación de procesos, materias primas controladas y personal capacitado.

          .col-xl.col-lg-4.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/img16.svg', alt='Imagen decorativa')
              
            h4.text-center Buenas Prácticas de Almacenamiento (BPA)
            p.mb-0 Establecen condiciones para preservar la integridad del medicamento, como control de temperatura, humedad, limpieza, señalización y rotación adecuada.

          .col-xl.col-lg-4.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/img17.svg', alt='Imagen decorativa')
              
            h4.text-center Buenas Prácticas de Dispensación (BPD)
            p.mb-0 Orientan sobre cómo entregar los productos farmacéuticos de forma segura, informada y conforme a la prescripción médica y normativa vigente.

    p.mb-0(data-aos="fade-down") Estas prácticas no solo buscan preservar la calidad del producto, sino también minimizar errores, pérdidas, vencimientos o riesgos asociados al uso incorrecto.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Importancia de la normativa vigente

    p.mb-5(data-aos="fade-down") La aplicación de la normativa sanitaria no es solo un requisito legal, sino una herramienta esencial para garantizar que los productos farmacéuticos cumplan su propósito terapéutico. Entre sus beneficios se encuentran:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Protección del paciente")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Al recibir medicamentos seguros y eficaces.

              .row(numero="2" titulo="Cumplimiento legal")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Evita sanciones, cierres o procesos administrativos.

              .row(numero="3" titulo="Prevención de errores y eventos adversos")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Mediante un manejo adecuado de inventarios, almacenamiento y dispensación.

              .row(numero="4" titulo="Confianza del usuario")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Fortalece la percepción de seguridad y calidad en los servicios farmacéuticos.

              .row(numero="5" titulo="Sostenibilidad del sistema de salud")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Al evitar pérdidas económicas por vencimientos o productos deteriorados.
          .col-lg-5.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img18.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") En resumen, aplicar las normas y buenas prácticas permite prestar un servicio farmacéutico responsable, eficiente y centrado en la salud del usuario.


</template>

<script>
export default {
  name: 'Tema2',
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
