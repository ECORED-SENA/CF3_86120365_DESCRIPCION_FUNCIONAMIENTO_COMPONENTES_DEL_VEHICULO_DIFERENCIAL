<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
    .row.justify-content-center
      .col-lg-12.mb-5
        figure.bg-color-sintesis.p-5.tarjeta
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de flujo sobre el mantenimiento del diferencial, dividido en dos grandes procesos: comprobaciones previas y diagnóstico, y reparación del diferencial. Las comprobaciones incluyen revisar el nivel y estado del aceite, diagnosticar problemas y realizar una reparación confiable. La reparación del diferencial abarca pasos de mantenimiento y comprobaciones de ensamble, que permiten regular los rodamientos en la corona, el piñón impulsor en la carcasa, el juego entre piñón impulsor y corona, y verificar el asentamiento entre cono y corona, así como la comprobación de satélites y planetarios. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
