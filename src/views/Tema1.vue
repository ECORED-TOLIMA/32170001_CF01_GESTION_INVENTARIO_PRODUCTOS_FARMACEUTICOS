<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Negocio y productos farmacéuticos
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") El negocio farmacéutico forma parte esencial del sistema de salud, ya que garantiza la disponibilidad, calidad y acceso seguro a los medicamentos. Este sector involucra diversos actores encargados de fabricar, almacenar, distribuir y dispensar productos farmacéuticos, enmarcados en una estricta regulación técnica y sanitaria. Comprender sus características, así como la clasificación y normativa aplicable a los medicamentos, permite fortalecer la gestión de inventarios y asegurar el cumplimiento de las buenas prácticas establecidas para proteger la salud pública.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Características del negocio farmacéutico

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") El negocio farmacéutico en Colombia constituye un eje fundamental del sistema de salud, enfocado en garantizar el acceso oportuno, seguro y racional a medicamentos y tecnologías en salud. Este sector involucra múltiples actores que participan en la producción, almacenamiento, distribución, dispensación y control de productos farmacéuticos, enmarcados en una normativa estricta orientada a proteger la salud pública y garantizar la calidad, eficacia y seguridad de los medicamentos.

    p.mb-5(data-aos="fade-down") Entre los principales actores se encuentran laboratorios, droguerías, farmacias comunitarias, farmacias hospitalarias, depósitos mayoristas, Entidades Promotoras de Salud (EPS), Instituciones Prestadoras de Servicios de Salud (IPS) y cadenas de farmacias con integración logística. Cada uno desempeña funciones específicas y presenta necesidades particulares en cuanto a trazabilidad, almacenamiento y cumplimiento normativo. Los establecimientos farmacéuticos pueden clasificarse así:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img02.svg", alt="alt").img130.m-auto
          h4.text-center Farmacias o droguerías
          p.mb-0 Enfocadas en venta al público con o sin prescripción.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img03.svg", alt="alt").img130.m-auto
          h4.text-center Depósitos de medicamentos
          p.mb-0 Distribución mayorista.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img04.svg", alt="alt").img130.m-auto
          h4.text-center Servicios farmacéuticos hospitalarios
          p.mb-0 Dispensación para pacientes hospitalizados.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img05.svg", alt="alt").img130.m-auto
          h4.text-center Laboratorios farmacéuticos
          p.mb-0 Fabricación y control de calidad.

    p(data-aos="fade-down") El Decreto 2200 de 2005, la Resolución 1403 de 2007 y otras disposiciones del INVIMA y el Ministerio de Salud regulan este negocio. Además, influyen factores como la política farmacéutica nacional, los sistemas de trazabilidad, las tecnologías de inventario y estrategias logísticas.

    p.mb-0(data-aos="fade-down") Conocer las características del negocio farmacéutico permite adaptar los procedimientos de gestión y almacenamiento según el tipo de establecimiento, asegurando el cumplimiento normativo y la protección del usuario.
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Características fisicoquímicas y condiciones de conservación de los productos farmacéuticos 

    p.mb-5(data-aos="fade-down") Los productos farmacéuticos son sustancias elaboradas para prevenir, diagnosticar, tratar o aliviar enfermedades en los seres humanos. Están compuestos por un principio activo, encargado de generar el efecto terapéutico y una serie de excipientes que permiten su correcta formulación, estabilidad y administración. La combinación de estos componentes determina su comportamiento físico, químico y terapéutico, aspectos fundamentales para su manejo adecuado en los servicios farmacéuticos.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img06.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde el punto de vista físico y químico, los productos farmacéuticos presentan características que influyen en su conservación y eficacia. Factores como el pH, la sensibilidad a la luz, la humedad, la temperatura y la forma farmacéutica (tabletas, soluciones, cremas, inyectables, entre otros) inciden directamente en las condiciones de almacenamiento requeridas. Por ejemplo, algunos medicamentos deben mantenerse en refrigeración, otros deben almacenarse en lugares secos o protegidos de la luz directa.
        br

    p(data-aos="fade-down") Desde el enfoque terapéutico, cada medicamento está diseñado para cumplir una función específica, de acuerdo con una indicación médica, una vía de administración definida (oral, tópica, parenteral, etc.) y una posología que establece la cantidad, la frecuencia y la duración del tratamiento. El incumplimiento de estas condiciones puede disminuir la efectividad del fármaco o generar reacciones adversas.

    p.mb-5(data-aos="fade-down") Entre las condiciones de conservación más comunes se destacan:

    .row.mb-5
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img07.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4
              h4.text-center Cadena de frío (2 °C a 8 °C)
              p.mb-0.text-center Necesaria para vacunas, insulina y otros productos biológicos.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img08.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4
              h4.text-center Fotosensibles
              p.mb-0.text-center Requieren protección contra la luz, como la amiodarona o la nitroglicerina.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img09.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4
              h4.text-center Higroscópicos
              p.mb-0.text-center Absorben humedad del ambiente, como ciertos comprimidos efervescentes, y deben almacenarse en envases herméticos.

    p.mb-0(data-aos="fade-down") Todos los productos deben contar con registro sanitario expedido por el INVIMA, el cual certifica su calidad, seguridad y eficacia. Además, deben cumplir con requisitos de rotulado, que incluyen información sobre su principio activo, concentración, número de lote, fecha de vencimiento, forma farmacéutica, fabricante y condiciones de almacenamiento. El cumplimiento de estas normas garantiza que el medicamento conserve su integridad desde la producción hasta su dispensación al usuario final.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Criterios de clasificación de los productos farmacéuticos

    p.mb-5(data-aos="fade-down") Los productos farmacéuticos se clasifican según diferentes criterios, lo cual facilita su gestión, almacenamiento y control. Esta clasificación permite aplicar medidas específicas de conservación, rotación y seguimiento, de acuerdo con la naturaleza del producto. Entre los criterios más comunes se encuentran:

    .row.justify-content-center
      .col-12.mb-4
        figure.movil
          img(src='@/assets/curso/temas/tema1/img11.svg', alt='Imagen decorativa')
      .col-lg-10.col-12
        ImagenInfografica.color-acento-botones.desktop(data-aos="zoom-in")
          template(v-slot:imagen)
            figure.mb-5
              img(src='@/assets/curso/temas/tema1/img10.svg', alt="Imagen decorativa")
          .tarjeta.color-acento-botones.p-3(x="11%" y="66%" numero="+")
            //- .h5.mb-2 Según uso terapéutico
            ul.lista-ul.mb-0
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Medicamentos esenciales (PBS).
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 De alto costo (biológicos y oncológicos).
              li
                i.lista-ul__vineta
                p.mb-0 Para enfermedades huérfanas.

          .tarjeta.color-acento-botones.p-3(x="21%" y="23%" numero="+")
            //- .h5.mb-2 Según forma farmacéutica
            ul.lista-ul.mb-0
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Sólidos: tabletas y cápsulas.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Líquidos: jarabes y soluciones.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Semisólidos: cremas y ungüentos.
              li
                i.lista-ul__vineta
                p.mb-0 Gaseosos: aerosoles e inhaladores

          .tarjeta.color-acento-botones.p-3(x="50%" y="12%" numero="+")
            //- .h5.mb-2 Según origen
            ul.lista-ul.mb-0
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Sintéticos
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Biológicos
              li
                i.lista-ul__vineta
                p.mb-0 Naturales o herbolarios.

          .tarjeta.color-acento-botones.p-3(x="78%" y="23%" numero="+")
            //- .h5.mb-2 Según condición de venta
            ul.lista-ul.mb-0
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Con prescripción médica (Rx).
              li
                i.lista-ul__vineta
                p.mb-0  De venta libre (OTC).

          .tarjeta.color-acento-botones.p-3(x="90%" y="66%" numero="+")
            //- .h5.mb-2 Según nivel de control
            ul.lista-ul.mb-0
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0 Medicamentos de control especial
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 (psicotrópicos y estupefacientes).
              li
                i.lista-ul__vineta
                p.mb-0 Medicamentos de bajo riesgo.
        
        p.mb-0(data-aos="fade-down") Esta clasificación no solo permite organizar adecuadamente los inventarios, sino también establecer protocolos específicos para su conservación, rotación y dispensación, garantizando la seguridad del paciente y el cumplimiento de la normativa vigente.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Importancia de la caracterización y clasificación
    
    p.mb-5(data-aos="fade-down") La caracterización y clasificación de los productos farmacéuticos facilita procesos operativos clave como el almacenamiento, la conservación, la rotación y el control de inventarios. Una adecuada clasificación:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.mb-4
          .col-lg-8.col-12.order-lg-2.order-2
            .cajon.cajon.C01.p-4.mb-3
              ol.lista-ol--cuadro.lista-ol--separador
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 1
                  | Mejora la organización del almacén.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 2
                  | Permite aplicar metodologías como Primeras Entradas, Primeras Salidas (PEPS) o Primeras en Vencer, Primeras en Salir (FEFO).
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 3
                  | Reduce pérdidas por vencimiento o deterioro.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 4
                  | Cumple con requisitos normativos y de trazabilidad.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold 5
                  | Facilita la dispensación adecuada y el uso racional.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema1/img12.png', alt='Imagen decorativa')

        p.mb-0(data-aos="fade-down") Desde una perspectiva normativa, garantiza el cumplimiento de exigencias del INVIMA y del Ministerio de Salud, especialmente en lo relacionado con medicamentos controlados, de cadena de frío o de venta restringida. Desde lo clínico, fortalece la toma de decisiones y la atención segura al paciente.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Normativa de calidad de productos farmacéuticos

    p.mb-5(data-aos="fade-down") La calidad de los productos farmacéuticos está regulada por un conjunto de normas técnicas, sanitarias y legales que buscan garantizar la seguridad, eficacia y estabilidad de los medicamentos desde su fabricación hasta su uso por parte del paciente. En Colombia, estas disposiciones están alineadas con estándares internacionales y son supervisadas principalmente por el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA), en conjunto con el Ministerio de Salud y Protección Social.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema1/img13.svg' alt='AvatarTop')(style= "width: 90%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  p.mb-0(data-aos="fade-down") Estas normativas establecen los requisitos que deben cumplir los medicamentos y productos afines en todas las etapas de la cadena farmacéutica: producción, almacenamiento, distribución, dispensación y disposición final. El objetivo central es asegurar que cada producto llegue al usuario final en condiciones óptimas, sin riesgos para su salud y cumpliendo con el efecto terapéutico esperado.

    p.mb-5(data-aos="fade-down") Entre los marcos normativos más relevantes se destacan:

    .tarjeta.tarjeta--BG03.p-4.p-md-5.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-6.order-lg-1.order-2
              h4 Decreto 2200 de 2005
              p Regula la organización y funcionamiento de los servicios farmacéuticos en Colombia. Establece la obligatoriedad de aplicar las Buenas Prácticas de Elaboración (BPE), Almacenamiento (BPA) y Dispensación (BPD), garantizando la calidad en cada proceso.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img14.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-6.order-lg-1.order-2
              h4 Resolución 1403 de 2007
              p Define las condiciones esenciales y los procedimientos para la prestación del servicio farmacéutico, incluyendo el manejo adecuado de inventarios, la conservación de medicamentos y la gestión de los residuos generados.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img15.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-6.order-lg-1.order-2
              h4 Decreto 677 de 1995
              p Regula los requisitos sanitarios para la fabricación, importación y comercialización de medicamentos en Colombia. Incluye lineamientos sobre pruebas de calidad, estudios de estabilidad, etiquetado, envasado y control de materias primas.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img16.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-6.order-lg-1.order-2
              h4 Resolución 2950 de 2007
              p Adopta el Manual de Buenas Prácticas de Manufactura (BPM) para medicamentos de uso humano, el cual establece estándares de calidad en procesos, equipos, instalaciones, personal y documentación durante la fabricación.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img17.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-6.order-lg-1.order-2
              h4 Resolución 1478 de 2006
              p Establece los criterios de calidad, eficacia y seguridad para dispositivos médicos y productos biomédicos, que también forman parte de los productos controlados en los servicios farmacéuticos.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img18.jpg', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Además de estas normas específicas, los productos deben contar con un registro sanitario expedido por el INVIMA, que certifica que el medicamento ha sido evaluado y cumple con las exigencias legales para ser comercializado. Este registro garantiza la trazabilidad, el control de calidad por lote y la responsabilidad del fabricante frente a cualquier evento adverso.

    p.mb-0(data-aos="fade-down") El cumplimiento de la normativa de calidad no solo tiene un carácter técnico, sino también ético y legal. Un medicamento mal conservado, falsificado o fuera de especificaciones puede poner en riesgo la vida del paciente, generar resistencia farmacológica o provocar eventos adversos graves. Por ello, es indispensable que los auxiliares y técnicos en servicios farmacéuticos conozcan a profundidad estas normativas y las apliquen con rigurosidad en cada proceso.
</template>

<script>
export default {
  name: 'Tema1',
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
