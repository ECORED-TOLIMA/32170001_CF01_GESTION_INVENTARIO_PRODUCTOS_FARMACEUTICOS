<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La gestión de productos farmacéuticos exige el cumplimiento de normativas sanitarias y la aplicación de buenas prácticas que garanticen su calidad, eficacia y seguridad. Desde la caracterización del negocio farmacéutico hasta la distribución final, cada etapa del proceso, como el almacenamiento bajo condiciones controladas, la rotación adecuada mediante métodos como PEPS (Primeras Entradas, Primeras Salidas) y FEFO (Primeros en Vencer, Primeros en Salir), la recepción técnica con inspección detallada y el uso de documentación soporte como facturas, registros INVIMA y certificados de calidad, contribuye a asegurar la trazabilidad y la correcta gestión del inventario. Estas acciones, guiadas por estándares nacionales e internacionales, son fundamentales para proteger la salud de los usuarios y garantizar la eficiencia del servicio farmacéutico .
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis presenta de forma esquemática los aspectos clave en la gestión de productos farmacéuticos, desde la comprensión del negocio y la normativa sanitaria, hasta los procesos técnicos de almacenamiento, rotación, recepción y distribución. También incluye los criterios de clasificación de los medicamentos, las condiciones especiales de conservación y los documentos requeridos para asegurar la calidad y trazabilidad en cada etapa del inventario farmacéutico.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
