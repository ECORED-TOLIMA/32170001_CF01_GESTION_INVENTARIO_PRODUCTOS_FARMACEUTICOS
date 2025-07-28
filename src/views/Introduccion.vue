<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-7.col-12.order-lg-2.order-2
            p(data-aos="fade-down") Comprender la adecuada gestión del inventario de productos farmacéuticos constituye un pilar esencial para garantizar la continuidad de los tratamientos, la calidad de la atención y la seguridad de los pacientes dentro de los servicios de salud. En el contexto colombiano, esta labor no solo responde a una necesidad operativa, sino también a un marco normativo exigente que regula detalladamente los procesos de almacenamiento, conservación, rotación, recepción y distribución de medicamentos.
            .cajon.cajon.C01.color-primario.p-4.mb-3
              p.mb-0 La formación de talento humano con competencias en estos procesos resulta estratégica para asegurar el uso racional de los recursos, mantener la trazabilidad de los productos y cumplir con los estándares establecidos por entidades como el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA) y el Ministerio de Salud y Protección Social. El cumplimiento riguroso de estas normativas no solo protege la salud pública, sino que fortalece la confianza en el sistema de abastecimiento farmacéutico.
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/intro/img01.png', alt='Imagen decorativa')

    p(data-aos="fade-down") Este componente formativo, dirigido a aprendices del área de servicios farmacéuticos, tiene como propósito desarrollar habilidades prácticas para gestionar el inventario de medicamentos con base en criterios técnicos, normativos y logísticos. A lo largo del curso, se abordan aspectos fundamentales como las condiciones físicas del almacén, la zonificación del espacio, el manejo de productos con requerimientos especiales y la aplicación de métodos de rotación, todo ello en concordancia con las Buenas Prácticas de Almacenamiento (BPA).
    p.mb-5(data-aos="fade-down") La apropiación de estos conocimientos permite optimizar los procesos internos, minimizar riesgos, reducir pérdidas económicas y mejorar la eficiencia del servicio farmacéutico, lo que se traduce directamente en beneficios para el sistema de salud y los usuarios. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/wVGvSYgmh2s?si=rt4zX2V1fwXUei8b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
