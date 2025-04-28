<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.mb-0.overflow-hidden
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-4.pb-md-5
        .row
          .col-xl-9
            p(data-aos="fade-left").mb-4 El mantenimiento del diferencial es fundamental para garantizar el correcto funcionamiento del sistema de transmisión de un vehículo. Factores como el desgaste natural de los componentes, el uso inadecuado y la falta de lubricación pueden generar fallas en este mecanismo, afectando el desempeño y la seguridad en la conducción.

            .bg-color-1.mb-4(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/intro/1.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") En este componente formativo se abordan las comprobaciones previas necesarias para detectar fallos en el diferencial, así como los procedimientos de diagnóstico y reparación. Se detallan los pasos para el desmontaje, limpieza, ajuste y reemplazo de componentes clave, asegurando un ensamblaje preciso y una calibración adecuada.

            p(data-aos="fade-left").mb-4 Además, se incluyen recomendaciones para prolongar la vida útil del diferencial, enfatizando la importancia del uso de lubricantes específicos y la realización de pruebas de funcionamiento tras cualquier intervención. Con este conocimiento, se busca optimizar el rendimiento del sistema y prevenir averías costosas en el futuro.

          .col-xl-3.d-none.d-xl-block(data-aos="fade-left")
            figure
              img(src="@/assets/curso/intro/2.png", alt="")

</template>

<script>
export default {
  name: 'Introduccion',
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
