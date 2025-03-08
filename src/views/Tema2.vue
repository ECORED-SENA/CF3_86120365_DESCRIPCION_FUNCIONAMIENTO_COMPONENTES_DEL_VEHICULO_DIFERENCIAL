<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Reparación del diferencial

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Para garantizar el correcto funcionamiento del sistema de transmisión, una vez realizadas las comprobaciones previas y determinado que el diferencial presenta daños, el técnico debe proceder con su reparación. Este proceso requiere un diagnóstico preciso y la aplicación de técnicas especializadas para restaurar el ensamblaje del diferencial según las especificaciones del fabricante.


    .titulo-tres(data-aos="flip-up").mb-5
      h4 Pasos para la reparación y mantenimiento

    p(data-aos="fade-up").mb-4
      | El proceso de reparación del diferencial se desarrolla en varias etapas, cada una fundamental para asegurar su correcto desempeño:

    
    .row.justify-content-center.align-items-center.mb-5.bg-h80-p10
      .col-lg-7
        .tarjeta.bg-color-5.p-4(data-aos="fade-right").mb-4.mb-lg-0

          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema2/2.svg', alt='', style="max-width: 270px;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0
            .col-lg
              h5(data-aos="fade-up").mb-3(style="color: #F3D913") ¿Sabías qué?
              p(data-aos="fade-up").mb-4.text-white Lo invitamos a escuchar el siguiente Pódcast:
              TarjetaAudio.color-secundario.mb-3(
                texto="Pasos para la reparación y mantenimiento"
                :audio="require('../assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


    .titulo-tres(data-aos="flip-up").mb-5
      h4 Comprobaciones del ensamblaje del diferencial


    p(data-aos="fade-up").mb-4 Antes de realizar las verificaciones finales del conjunto diferencial, es esencial asegurarse de que todas sus piezas han sido calibradas correctamente. El sistema requiere un ensamblaje preciso, con tolerancias exactas y un asentamiento adecuado para su óptimo desempeño. Los aspectos clave a revisar son: 


    .bg-full-width.bg-fondo-slider(data-aos="fade-down").mb-5
      .p-4.p-md-5       
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo='b')
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-1-2.png")
              .col-lg-7.order-lg-1
                h4 Alineación del piñón impulsor y la corona
                p Un engrane incorrecto puede provocar desgastes prematuros, ruidos anómalos y fallos en los dientes de los engranajes. Ante la presencia de ruidos inusuales, juego excesivo entre piñones o vibraciones atípicas, se recomienda desmontar el conjunto y revisar los juegos, tolerancias y ajustes.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-2-2.png")
              .col-lg-7.order-lg-1
                h4 Sustitución del conjunto de engranajes
                p El piñón impulsor y la corona forman un sistema hermanado e inseparable, ajustado de fábrica para operar conjuntamente. En caso de daño o desgaste excesivo en uno de estos elementos, es necesario reemplazar el conjunto completo, evitando la sustitución individual de las piezas.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 2. 
      span Conjunto engranaje de mando final 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg-color-1.p-4.mb-1
          figure
            img(src='@/assets/curso/tema2/f2.png', alt='Diagrama del conjunto de engranaje de mando final. Se observa una corona de gran diámetro y un piñón impulsor acoplado a ella.', style="max-width: 370px;", data-aos="zoom-in")
        figcaption.bg-color-2.mb-4
          span Nota. VanGelder (2018). 

        p(data-aos="fade-up").mb-4
          | Este enfoque garantiza que el diferencial conserve su precisión y desempeño original, evitando problemas de desajuste que puedan comprometer la durabilidad del sistema.

        .bg-color-3.px-4.py-3
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema2/3.svg", alt="alt", style="max-width: 190px;")

            .col-lg
              p(data-aos="fade-up")
                | El fabricante, por lo general, especifica la tolerancia o holgura recomendada en el dorso de la corona o en la cara frontal del piñón. Esta indicación permite que cualquier técnico pueda ensamblar el diferencial con la referencia adecuada, asegurando un ajuste preciso y un funcionamiento óptimo del sistema.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/4.png", alt="", style="max-width: 100%;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/5.png", alt="", style="max-width: 100%;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0

      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3. 
          span Marcas para el ensamble y tolerancia recomendada por el fabricante   
        .bg-color-1.p-4.mb-1
          figure
            img(src='@/assets/curso/tema2/f3.svg', alt='Diagrama de engranajes con marcas de ensamblaje y tolerancia recomendada.', style="max-width: 682px;", data-aos="zoom-in")

        p(data-aos="fade-up").mb-4.mt-3 Para lograr un ensamblaje correcto, es fundamental seguir las marcas y referencias proporcionadas por el fabricante. No obstante, antes de realizar el montaje final, es necesario llevar a cabo ajustes individuales en cada componente: primero en el cono, luego en la corona y, por último, en el conjunto completo.

        p(data-aos="fade-up").mb-4 Una vez ensamblado el sistema, se procederá a verificar y regular los piñones satélites y planetarios, asegurando que su engrane sea adecuado y que no presenten juegos excesivos.

        .bg-color-6.px-4.py-3
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema2/7.svg", alt="alt", style="max-width: 190px;")

            .col-lg
              p(data-aos="fade-up")
                | Adicionalmente, si el diferencial cuenta con un sistema de bloqueo, se deberá inspeccionar y ajustar su mecanismo para garantizar su correcto funcionamiento, evitando deslizamientos involuntarios o bloqueos indebidos.


    .bg-full-width-2.bg-fondo-4
      .px-4.px-md-5.pb-4.pb-md-5
        .titulo-tres(data-aos="flip-up").mb-5
          h4 Regulación del piñón impulsor en la carcasa

        p(data-aos="fade-up").mb-4 Después de verificar el estado de los componentes del diferencial y asegurarse de que están en condiciones óptimas o que se ha instalado un conjunto nuevo, se debe examinar la regulación del piñón impulsor y sus rodamientos dentro de la carcasa del sistema diferencial. Los ajuste y componentes clave: 

        .row.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card.bg-color-white
              img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center #[strong Ubicación y ajuste del piñón impulsor]
                p.mb-0.text-center Se encuentra alojado en la carcasa entre dos rodamientos cónicos. Debe ajustarse con precisión para garantizar una holgura adecuada para la circulación del aceite lubricante, un giro libre sin juegos axiales o radiales y un funcionamiento estable y duradero.
          .col-lg-4.mb-4(data-aos="zoom-in")
            .custom-image-card.bg-color-white
              img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center #[strong Función del tubo espaciador]
                p.mb-0.text-center Se instala entre los dos rodamientos del piñón y debe ser reemplazado en cada reparación o ajuste, ya que pierde su tensión tras el desmontaje. Su función es mantener la holgura exacta para los rodamientos cuando se aplica el torque recomendado a la tuerca del cono.
          .tarjeta.col-lg-4.mb-4(data-aos="zoom-in-left")
            .custom-image-card.bg-color-white
              img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center #[strong Regulación mediante arandelas de calibración]               
                p.mb-0.text-center Permiten el desplazamiento del cono sin afectar su ajuste, asegurando que el piñón impulsor engrane correctamente en el centro de la corona. Esto evita desgastes irregulares y prolonga la vida útil del sistema diferencial.

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 4. 
        span Torque de apriete para regular la holgura de los rodamientos   
      .bg-color-1.px-4.pt-4.mb-1
        figure
          img(src='@/assets/curso/tema2/f4.svg', alt='Figura del ajuste del torque para regular la holgura de los rodamientos.', style="max-width: 446px;", data-aos="zoom-in").mx-auto


      .titulo-tres(data-aos="flip-up").mb-5
        h4 Regulación de los rodamientos en la corona

      p(data-aos="fade-up").mb-4 Antes de ajustar la holgura entre el piñón impulsor y la corona, se debe regular la posición de los rodamientos de la corona dentro de su alojamiento. Este ajuste garantiza un giro libre sin juego axial y se realiza mediante tuercas de regulación en la mayoría de los sistemas.
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
