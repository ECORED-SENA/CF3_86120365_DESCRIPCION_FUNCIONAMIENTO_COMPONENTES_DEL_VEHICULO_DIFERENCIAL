<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Comprobaciones previas y diagnóstico

    .row.justify-content-center.align-items-center.mb-4
      .col-lg
        p(data-aos="fade-up").mb-4 Al detectar una anomalía en el diferencial, es preciso realizar comprobaciones previas antes de desmontar el conjunto. Para ello, se inicia con la revisión del nivel y estado del aceite, lo que permite identificar la presencia de limaduras ocasionadas por fricciones inadecuadas y el desgaste de los elementos del conjunto diferencial. Si es necesario, se debe completar el nivel de aceite con el tipo de lubricante recomendado por el fabricante para garantizar un funcionamiento adecuado y prolongar la vida útil de los componentes.

      .col-lg-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/1.svg", alt="alt", style="max-width: 190px;")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1. 
          span Inspección del estado y nivel de aceite         

        .bg-color-1.p-4.mb-5
          figure.mb-2
            img(src='@/assets/curso/tema1/f1.png', alt='La figura muestra dos pasos: en el primero, se afloja el tapón de drenaje con una llave; en el segundo, se observa la salida de aceite, indicando su nivel y condición.', style="max-width: 770px;", data-aos="zoom-in")
          figcaption.bg-color-2
            span Nota. VanGelder (2018). 


    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-4.pb-md-5
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/2.png", alt="alt", style="max-width: 100%;")

          .col-lg-8
            p(data-aos="fade-up").mb-4
              | También es fundamental verificar que no existan fugas de aceite en el diferencial. En caso de detectarlas, se debe desmontar la tapa y limpiar minuciosamente el empaque o sellante dañado para evitar nuevas fugas al momento de su reemplazo.

            .bg-color-3.px-4.py-3
              .row.justify-content-center.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/tema1/3.svg", alt="alt", style="max-width: 190px;")

                .col-lg
                  p(data-aos="fade-up")
                    | Después de retirar la tapa y comprobar el funcionamiento del ensamble instalado en el vehículo (para diferenciales con tapa posterior), se debe inspeccionar los juegos y detectar posibles ruidos o vibraciones, simulando las condiciones de trabajo del diferencial, tanto con carga como sin ella. Este proceso es clave para diagnosticar con precisión los trabajos o reparaciones que se deban realizar.

        p(data-aos="fade-up").mb-4 Los pasos para la revisión y diagnóstico del diferencial son: 
          
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/4.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Revisión del aceite
              p.mb-0.text-center Verificar el nivel y estado del aceite. Si es bajo, completar con el lubricante recomendado.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/5.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Detección de fugas
              p.mb-0.text-center Inspeccionar si hay fugas de aceite. Si se encuentran, desmontar la tapa y limpiar el empaque o sellante dañado.
    
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/6.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Comprobación del funcionamiento
              p.mb-0.text-center Revisar el ensamble del diferencial, inspeccionar los juegos de las piezas y detectar ruidos o vibraciones en condiciones de carga y sin carga.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/7.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Diagnóstico final
              p.mb-0.text-center Analizar los hallazgos para determinar las reparaciones necesarias.


    .titulo-tres(data-aos="flip-up").mb-5
      h4 Diagnóstico y solución de problemas

    p(data-aos="fade-up").mb-4
      | Un diagnóstico adecuado es fundamental para efectuar una reparación confiable. Por ello, es importante contar con una guía de solución de problemas para el diferencial. Dado que existen diversas clases de diferenciales, a continuación se presenta una guía para diagnosticar fallas en diferenciales convencionales y conjuntos de mando final.


    .bg-full-width.bg-fondo-slider(data-aos="fade-down").mb-5
      .p-4.p-md-5       
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo='b')

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/slider-1.png")
              .col-lg-7.order-lg-1
                h4 Ruido únicamente en curvas
                
                ul.lista-ul--color
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Causa posible:] piñones satélites y planetarios apretados con el alojamiento del mecanismo diferencial. #[strong Corrección:] revisar el diferencial y realizar los ajustes o cambios necesarios.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Causa posible:] piñones satélites o planetarios defectuosos. #[strong  Corrección:] revisar y reemplazar los piñones si es necesario.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Causa posible:] juego excesivo entre piñones planetarios y satélites. #[strong  Corrección:] ajustar o reemplazar los componentes desgastados.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/slider-2.png")
              .col-lg-7.order-lg-1
                h4 Ruido intermitente
                
                ul.lista-ul--color
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Causa posible:] la corona no funciona adecuadamente. Corrección: revisar el diferencial y reemplazar la corona defectuosa o los rodamientos del diferencial.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Causa posible:] rodamientos del diferencial sueltos o dañados. Corrección: ajustar o reemplazar los rodamientos.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/slider-3.png")
              .col-lg-7.order-lg-1
                h4 Ruido constante
                
                ul.lista-ul--color
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Causa posible:] aceite lubricante incorrecto. Corrección: verificar el tipo y clase de lubricante usado.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Causa posible:] nivel de aceite muy bajo. Corrección: revisar el nivel de aceite y agregar hasta el nivel adecuado.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Causa posible:] dientes de la corona astillados o desgastados; rodamientos sueltos o desgastados. Corrección: revisar y reemplazar la corona, piñones o rodamientos.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Causa posible:] corona y piñón impulsor no ajustados para el correcto contacto de los dientes. Corrección: ajustar corona y piñón para un correcto contacto de los dientes.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Causa posible:] demasiada o muy poca holgura entre la corona y el piñón.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Corrección:] ajustar la holgura de los engranajes.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/slider-4.png")
              .col-lg-7.order-lg-1
                h4 Las ruedas traseras no conducen el movimiento
                
                ul.lista-ul--color
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Causa posible:] eje de transmisión roto. Corrección: reemplazar el eje roto.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Causa posible:] dientes de la corona pelados, piñones satélites o planetarios rotos o alojamiento del mecanismo diferencial roto.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | #[b Corrección:] revisar y reemplazar la corona, piñones o el alojamiento del mecanismo diferencial.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
