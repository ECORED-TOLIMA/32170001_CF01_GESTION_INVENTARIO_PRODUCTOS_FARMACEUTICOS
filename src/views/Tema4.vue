<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Rotación y conservación de productos farmacéuticos

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") La rotación y conservación adecuada de los productos farmacéuticos es fundamental para mantener su calidad, reducir pérdidas económicas, prevenir riesgos para los pacientes y cumplir con la normativa vigente. En el contexto de los servicios farmacéuticos, se aplican principios logísticos que permiten priorizar el uso oportuno de los medicamentos y asegurar que lleguen al usuario en condiciones óptimas.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Principios de rotación: PEPS, FEFO y LIFO

    .row.justify-content-center.tarjeta--BG07.px-md-5.px-4
      .col-12
        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-lg-8.col-12.order-lg-1.order-2
            p(data-aos="fade-down") En los servicios farmacéuticos, una gestión eficiente del inventario es clave para garantizar la disponibilidad, calidad y seguridad de los productos farmacéuticos. Uno de los aspectos fundamentales de esta gestión es la correcta rotación de los medicamentos, que permite minimizar el riesgo de vencimientos, reducir pérdidas económicas y asegurar el cumplimiento de las normativas sanitarias. La rotación implica determinar el orden en que los productos deben ser utilizados o dispensados, de acuerdo con su fecha de ingreso, vencimiento o condición específica. Para ello, existen diferentes métodos logísticos que orientan la toma de decisiones, cada uno con sus propias ventajas, limitaciones y niveles de aplicabilidad dentro del ámbito farmacéutico.
            p(data-aos="fade-down") La elección del método adecuado depende del tipo de producto, su vida útil, los requerimientos normativos y las políticas internas del establecimiento. A continuación, se presentan los principales métodos utilizados en la rotación de productos farmacéuticos, con una descripción clara de su funcionamiento, aplicación práctica y nivel de recomendación en el contexto sanitario:
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema4/img02.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <em>Métodos de rotación</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Método
                th(data-aos="fade-down")(style= "width: 25%") Descripción
                th(data-aos="fade-down")(style= "width: 25%") Descripción
                th(data-aos="fade-down")(style= "width: 25%") Ejemplo
            tbody
              tr
                td.text-bold(data-aos="fade-down") PEPS o FIFO (First In, First Out)
                td(data-aos="fade-down") Se da salida primero a los productos que ingresaron antes al inventario.
                td(data-aos="fade-down") Útil en productos con fechas de vencimiento homogéneas.
                td(data-aos="fade-down") Aceptado, pero menos seguro que FEFO.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") FEFO (First Expired, First Out)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se da prioridad de salida a los productos cuya fecha de vencimiento está más próxima.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ideal en servicios farmacéuticos. Previene vencimientos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Altamente recomendado.
              tr
                td.text-bold(data-aos="fade-down") LIFO (Last In, First Out)
                td(data-aos="fade-down") Se utilizan primero los productos que llegaron más recientemente.
                td(data-aos="fade-down") Desaconsejado en farmacia por riesgo de vencimiento.
                td(data-aos="fade-down") No recomendado.

    p.mb-0(data-aos="fade-down") En servicios farmacéuticos, FEFO es considerado el método más seguro y eficaz, ya que prioriza el vencimiento real sobre el orden de llegada.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Productos con requerimientos especiales

    p.mb-5(data-aos="fade-down") En el entorno farmacéutico, no todos los productos pueden ser almacenados y manipulados bajo condiciones estándar. Existen medicamentos y dispositivos médicos que, por su naturaleza físico-química, su sensibilidad a factores ambientales o su potencial riesgo para la salud pública, requieren una gestión diferenciada y protocolos estrictos de conservación, rotación y control. Estos productos, conocidos como productos con requerimientos especiales, incluyen desde vacunas y biológicos que requieren cadena de frío, hasta medicamentos fotosensibles, psicotrópicos, citotóxicos y productos de preparación extemporánea.

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") El manejo inadecuado de estos insumos puede comprometer su estabilidad, eficacia terapéutica y seguridad, generando consecuencias clínicas, legales y económicas. Por ello, su almacenamiento, transporte y uso deben estar alineados con los lineamientos del INVIMA, el Decreto 2200 de 2005, las Buenas Prácticas de Almacenamiento (BPA) y las normas internacionales de farmacovigilancia y bioseguridad.

    p.mb-5(data-aos="fade-down") A continuación, se presenta una tabla que resume las principales categorías de productos con condiciones especiales, sus características más relevantes y las recomendaciones esenciales para su conservación y rotación en los servicios farmacéuticos:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span <em>Productos con condiciones especiales</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Tipo de producto
                th(data-aos="fade-down")(style= "width: 25%") Ejemplos
                th(data-aos="fade-down")(style= "width: 25%") Conservación
                th(data-aos="fade-down")(style= "width: 25%") Recomendaciones de rotación
            tbody
              tr
                td.text-bold(data-aos="fade-down") Cadena de frío (2–8 °C)
                td(data-aos="fade-down") Vacunas, insulina y biológicos.
                td(data-aos="fade-down") Nevera farmacéutica certificada con monitoreo constante.
                td(data-aos="fade-down") FEFO estricto. Evitar contacto con paredes internas o ventiladores.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Fotosensibles
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Amiodarona, nitroglicerina y ondansetrón.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Envases opacos y protección contra luz natural y artificial.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Prioridad de uso y verificación frecuente del estado del empaque.
              tr
                td.text-bold(data-aos="fade-down") Medicamentos de control especial
                td(data-aos="fade-down") Morfina, clonazepam y fentanilo.
                td(data-aos="fade-down") Almacenamiento en caja fuerte, con control de acceso y doble llave.
                td(data-aos="fade-down") Registro individual, control diario y FEFO obligatorio.
              tr
                td.text-bold(data-aos="fade-down") Citotóxicos o peligrosos
                td(data-aos="fade-down") Quimioterapéuticos y antivirales especiales.
                td(data-aos="fade-down") Zonas señalizadas, ventiladas, con protección personal.
                td(data-aos="fade-down") Inventario separado y registros detallados.
              tr
                td.text-bold(data-aos="fade-down") Uso urgente o caducidad corta
                td(data-aos="fade-down") Antídotos, soluciones reconstituidas y fórmulas magistrales.
                td(data-aos="fade-down") Identificación visible, zonas de acceso rápido.
                td(data-aos="fade-down") Uso inmediato, registro de fecha y hora de preparación.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Recomendaciones generales para la conservación y rotación

    p(data-aos="fade-down") La conservación y rotación adecuada de los productos farmacéuticos es un eje fundamental en la gestión segura y eficiente del inventario. Estas prácticas no solo aseguran la estabilidad, eficacia y seguridad de los medicamentos, sino que también previenen pérdidas económicas, reducen riesgos clínicos y garantizan el cumplimiento normativo exigido por entidades como el INVIMA y la Organización Mundial de la Salud (OMS).
    p.mb-5(data-aos="fade-down") A continuación, se presentan recomendaciones generales organizadas en tres dimensiones clave de almacenamiento, rotación y control documental.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 a) Almacenamiento seguro y controlado:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img03.svg' alt='AvatarTop')
          h4.text-center Mantener condiciones ambientales óptimas
          p Control continuo de temperatura (15–30 °C) y humedad (menor al 65 %) con registros diarios y alarmas para detectar desviaciones.
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img04.svg' alt='AvatarTop')
          h4.text-center Evitar la exposición a agentes externos
          p Proteger los productos de la luz directa, el polvo, los contaminantes y la humedad excesiva.
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img05.svg' alt='AvatarTop')
          h4.text-center Usar estanterías adecuadas
          p Metálicas o de plástico resistente, separadas del piso (mínimo 10 cm) y de las paredes (mínimo 5 cm), que faciliten la limpieza y el flujo de aire.
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img06.svg' alt='AvatarTop')
          h4.text-center Ubicación estratégica de productos especiales
          p Refrigeradores certificados para cadena de frío, cajas fuertes para controlados y zonas de riesgo para citotóxicos o peligrosos.
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img07.svg' alt='AvatarTop')
          h4.text-center Limpieza programada del área de almacenamiento
          p Aplicar protocolos de limpieza diaria y fumigación periódica, con registro de actividades realizadas.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 b) Rotación efectiva del inventario:

    .row.justify-content-center.px-md-4.px-4.mb-5(data-aos="flip-up")
      .col-lg-11.col-12
        .row.justify-content-center.align-items-center
          .col-lg-7.col-12.order-lg-2.order-2
            .cajon.cajon.C01.p-3
              ol.lista-ol--cuadro.lista-ol--separador
                li.mb-1 
                  .lista-ol--cuadro__vineta
                    span.text-bold 1
                  | Aplicar el método FEFO (First Expired, First Out) como principio general, especialmente para productos con vencimiento corto o sensibles.
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span.text-bold 2
                  | PEPS (Primeras Entradas, Primeras Salidas) puede aplicarse en productos con larga vida útil y fechas similares.
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span.text-bold 3
                  | Evitar el uso de LIFO (Last In, First Out) en contextos farmacéuticos, ya que puede generar acumulación de productos próximos a vencer.
                li.mb-0 
                  .lista-ol--cuadro__vineta
                    span.text-bold 4
                  | Etiquetar claramente con fecha de vencimiento visible: usar marcadores de colores o cintas para alertar sobre productos próximos a caducar (por ejemplo, cinta roja para vencimientos menores a 3 meses).
                li.mb-0
                  .lista-ol--cuadro__vineta
                    span.text-bold 5
                  | Organizar los productos por lotes y fechas para facilitar inspecciones visuales rápidas y prevenir errores de dispensación.
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema4/img08.png', alt='Imagen decorativa')

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 c) Control documental y trazabilidad:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-11.col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.order-lg-1.order-2
            .cajon.cajon.C01.p-4.mb-3
              ul.lista-ul--color
                li 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Llevar registros precisos de entradas, salidas, lotes, fechas de vencimiento, condiciones especiales y eventos adversos detectados.
                li 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Realizar inspecciones internas periódicas al inventario: mínimo una vez por semana, con formato establecido para verificar vencimientos, condiciones de empaque y rotulación.
                li 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Capacitar constantemente al personal sobre las buenas prácticas de almacenamiento, el uso adecuado de los métodos de rotación y la importancia de la trazabilidad.
                li.mb-0
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Incorporar auditorías internas y externas que permitan identificar fallas, riesgos o áreas de mejora en la gestión del inventario.
          .col-lg-3.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema4/img09.svg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") La aplicación rigurosa de estas recomendaciones garantiza que los productos farmacéuticos mantengan sus condiciones óptimas hasta su dispensación, reduciendo riesgos para el paciente, optimizando los recursos institucionales y asegurando el cumplimiento legal y técnico del servicio farmacéutico. Estas acciones fortalecen la calidad del sistema de salud y la confianza del usuario en la atención recibida.


</template>

<script>
export default {
  name: 'Tema4',
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
