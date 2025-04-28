<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
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
      .col-xl-7.col-lg-9
        .tarjeta.bg-color-5.p-4(data-aos="fade-right").mb-4.mb-lg-0

          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema2/2.svg', alt='', style="max-width: 270px;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0
            .col-lg
              p(data-aos="fade-up").mb-4.text-white Lo invitamos a escuchar el siguiente Pódcast:
              TarjetaAudio.color-secundario.mb-3(
                texto="Pasos para la reparación y mantenimiento"
                tiempo
                :audio="require('../assets/componentes/audios/podcast.mp3')"
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
      .col-xl-8
        .bg-color-1.p-4.mb-1
          figure
            img(src='@/assets/curso/tema2/f2.png', alt='Diagrama del conjunto de engranaje de mando final. Se observa una corona de gran diámetro y un piñón impulsor acoplado a ella.', style="max-width: 370px;", data-aos="zoom-in").mx-auto
        figcaption.mt-2.mb-4 #[b Nota.] VanGelder (2018).

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

      .col-xl-4.d-none.d-xl-block
        figure
          img(src="@/assets/curso/tema2/4.png", alt="", style="max-width: 100%;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0

    .row.justify-content-center.align-items-start.mb-5
      .col-xl-4.d-none.d-xl-block
        figure
          img(src="@/assets/curso/tema2/5.png", alt="", style="max-width: 100%;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0

      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3. 
          span Marcas para el ensamble y tolerancia recomendada por el fabricante   
        .bg-color-1.p-4.mb-1
          figure
            img(src='@/assets/curso/tema2/f3.svg', alt='Diagrama de engranajes con marcas de ensamblaje y tolerancia recomendada.', style="max-width: 682px;", data-aos="zoom-in")
        figcaption.mt-2.mb-4 #[b Nota.] Marcas para el ensamble y tolerancia recomendada por el fabricante. (s.f.). [Imagen].

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

        .row
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card.bg-color-white
              img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-4.text-center #[strong Ubicación y ajuste del piñón impulsor]
                p.mb-0.text-center Se encuentra alojado en la carcasa entre dos rodamientos cónicos. Debe ajustarse con precisión para garantizar una holgura adecuada para la circulación del aceite lubricante, un giro libre sin juegos axiales o radiales y un funcionamiento estable y duradero.
          .col-lg-4.mb-4(data-aos="zoom-in")
            .custom-image-card.bg-color-white
              img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-4.text-center #[strong Función del tubo espaciador]
                p.mb-0.text-center Se instala entre los dos rodamientos del piñón y debe ser reemplazado en cada reparación o ajuste, ya que pierde su tensión tras el desmontaje. Su función es mantener la holgura exacta para los rodamientos cuando se aplica el torque recomendado a la tuerca del cono.
          .tarjeta.col-lg-4.mb-4(data-aos="zoom-in-left")
            .custom-image-card.bg-color-white
              img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-4.text-center #[strong Regulación mediante arandelas de calibración]               
                p.mb-0.text-center Permiten el desplazamiento del cono sin afectar su ajuste, asegurando que el piñón impulsor engrane correctamente en el centro de la corona. Esto evita desgastes irregulares y prolonga la vida útil del sistema diferencial.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 4. 
      span Torque de apriete para regular la holgura de los rodamientos   
    .bg-color-1.px-4.pt-4
      figure
        img(src='@/assets/curso/tema2/f4.svg', alt='Figura del ajuste del torque para regular la holgura de los rodamientos.', style="max-width: 446px;", data-aos="zoom-in").mx-auto
    figcaption.mt-2.mb-5 #[b Nota.] Torque de apriete para regular la holgura de los rodamientos. (s.f.). [Imagen].


    .titulo-tres(data-aos="flip-up").mb-5
      h4 Regulación de los rodamientos en la corona

    p(data-aos="fade-up").mb-4 Antes de ajustar la holgura entre el piñón impulsor y la corona, se debe regular la posición de los rodamientos de la corona dentro de su alojamiento. Este ajuste garantiza un giro libre sin juego axial y se realiza mediante tuercas de regulación en la mayoría de los sistemas.

    .bg-color-6.mb-5
      .row.justify-content-center.align-items-start
        .col-lg-6
          .p-4
            h4(data-aos="fade-up").mb-4 Procedimiento
            ul.lista-ul--color(data-aos="fade-up")
              li
                | #[strong a)] Separar inicialmente la corona del piñón impulsor para evitar alteraciones en la regulación.
              li
                | #[strong b)] Acomodar las tuercas de regulación, permitiendo que las pistas externas se ajusten sobre los rodamientos cónicos.
              li
                | #[strong c)] Girar las pistas de los rodamientos externos del porta corona y las tuercas de regulación, retirando los seguros hasta finalizar el ajuste.
              li
                | #[strong d)] En sistemas sin tuercas de regulación, utilizar rodelas o láminas de calibración insertadas detrás de las pistas externas para corregir la holgura.
        .col-lg-6
          .p-4.bg-color-1
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 5. 
              span Regulación entre el piñón y la corona   

            figure
              img(src='@/assets/curso/tema2/f5.svg', alt='Diagrama del ajuste entre el piñón y la corona en un mecanismo de transmisión.', style="max-width: 370px;", data-aos="zoom-in").mx-auto
            figcaption.mt-2 #[b Nota.] Regulación entre el piñón y la corona. (s.f.). [Imagen].

    p(data-aos="fade-up").mb-5 Si las rodelas de calibración están detrás de los rodamientos fijos del porta corona, se deben insertar o retirar según sea necesario para garantizar el correcto desplazamiento del porta corona.

    .titulo-tres(data-aos="flip-up").mb-5
      h4 Regulación del juego entre piñón impulsor y corona

    p(data-aos="fade-up").mb-4 Una vez regulados el piñón impulsor y los rodamientos de la corona, se procede a ajustar la holgura entre ambos componentes. Este ajuste es esencial para evitar desgastes prematuros y ruidos anómalos.

    .bg-color-6.mb-5
      .row.justify-content-center.align-items-stretch
        .col-lg-6.order-lg-2
          .p-4
            h4(data-aos="fade-up").mb-4 Pasos para la regulación
            ul.lista-ul--color(data-aos="fade-up")
              li
                | #[strong a)]  Empujar la corona contra el piñón impulsor girando la tuerca de regulación superior.
              li
                | #[strong b)]  Aflojar simultáneamente la tuerca opuesta para mantener la regulación de los rodamientos.
              li
                | #[strong c)]  Contar con precisión el número de vueltas aplicadas en las tuercas de ajuste.
              li
                | #[strong d)]  Utilizar un reloj micrométrico para medir la holgura entre los dientes de la corona y el piñón impulsor.
              li
                | #[strong e)]  Verificar que la distancia entre ambos componentes se encuentre dentro de los valores recomendados por el fabricante.
        .col-lg-6.order-lg-1
          .p-4.bg-color-1.h-100
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 6. 
              span Detalle de las tuercas de regulación y la corona  

            figure
              img(src='@/assets/curso/tema2/f6.svg', alt='Detalle de las tuercas de regulación y la corona en un sistema mecánico', style="max-width: 538px;", data-aos="zoom-in").mx-auto
            figcaption.mt-2 #[b Nota.] Detalle de las tuercas de regulación y la corona. (s.f.). [Imagen].

    .bg-full-width.bg-color-5.mb-5
      .p-4
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/12.svg", alt="", style="max-width: 90px;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0
          .col-lg
            h4(data-aos="fade-up").mb-2.text-white Consideraciones:
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0.text-white.d-flex
                i.fas.fa-arrow-circle-right
                | Un ajuste demasiado apretado genera fricción excesiva.
              li.mb-0.text-white.d-flex
                i.fas.fa-arrow-circle-right
                | Un ajuste holgado provoca vibraciones y fallos en el engranaje.
      

    .titulo-tres(data-aos="flip-up").mb-5
      h4 Comprobación del asentamiento entre piñón y corona

    p(data-aos="fade-up").mb-4 Para verificar que el asentamiento es correcto, se recomienda aplicar un tinte sobre los dientes de la corona. Esto permite evaluar el contacto entre los engranajes y detectar posibles desajustes.

    .bg-color-6.mb-5
      .row.justify-content-center.align-items-stretch
        .col-lg-6.order-lg-2
          .p-4
            h4(data-aos="fade-up").mb-4 Procedimiento
            ul.lista-ul--color(data-aos="fade-up").color-dark.mb-4
              li
                | #[strong a)] Aplicar el tinte en la corona.
              li
                | #[strong b)] Hacer girar el piñón varias veces hasta registrar las marcas de asentamiento.
              li
                | #[strong c)] Evaluar la distribución de las marcas:
              li.ms-4.d-flex
                i.fas.fa-arrow-circle-right
                | Si el piñón está demasiado afuera, agregar una arandela detrás del rodamiento interior y retirar otra del mismo espesor en la parte posterior.
              li.ms-4.d-flex
                i.fas.fa-arrow-circle-right
                | Si el piñón está demasiado adentro, retirar la arandela interior y agregar otra en la parte posterior.
        .col-lg-6.order-lg-1
          .p-4.bg-color-1.h-100
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 7. 
              span Procedimiento de aplicación del tinte
            figure
              img(src='@/assets/curso/tema2/f7.svg', alt='Aplicación de tinte para verificar el asentamiento entre piñones y corona.', style="max-width: 538px;", data-aos="zoom-in").mx-auto
            figcaption.mt-2 #[b Nota.] Procedimiento de aplicación del tinte. (s.f.). [Imagen].

    .bg-full-width.bg-color-5.mb-5
      .p-4
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/12.svg", alt="", style="max-width: 90px;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0
          .col-lg
            p(data-aos="fade-up").mb-0.text-white En cualquier modificación de la posición del piñón, es necesario retirar la corona para ajustar el piñón de forma independiente y luego verificar la holgura final. Una vez concluidos los ajustes, limpiar y lubricar todas las piezas, reajustar los pernos y asegurar que el sistema quede ensamblado conforme a las especificaciones del fabricante.

    .titulo-tres(data-aos="flip-up").mb-5
      h4 Corrección del asentamiento del piñón impulsor

    p(data-aos="fade-up").mb-4 El estado del asentamiento del piñón impulsor en la corona se puede evaluar a partir de las marcas que dejan los dientes al engranar. Dependiendo de si el piñón está muy adentro, demasiado cercano, muy afuera o muy alejado de la corona, se requerirán ajustes para corregir su posición.

    .bg-color-6.mb-5
      .row.justify-content-center.align-items-stretch
        .col-lg-6.order-lg-2
          .p-4
            h4(data-aos="fade-up").mb-4 Si el piñón impulsor está demasiado afuera:
            ul.lista-ul--color(data-aos="fade-up").color-dark.mb-4
              li.d-flex
                i.fas.fa-arrow-circle-right
                | Sustituir las rodelas o arandelas de calibración manteniendo sus espesores.
              li.d-flex
                i.fas.fa-arrow-circle-right
                | Instalar una nueva arandela detrás del rodamiento interior para permitir que el cono ingrese más.
              li.d-flex
                i.fas.fa-arrow-circle-right
                | Retirar una arandela en la parte posterior con el mismo espesor para mantener la distancia entre los rodamientos del piñón.

            h4(data-aos="fade-up").mb-4 Si el piñón impulsor está demasiado adentro:
            ul.lista-ul--color(data-aos="fade-up").color-dark.mb-4
              li.d-flex
                i.fas.fa-arrow-circle-right
                | Retirar la arandela interior.
              li.d-flex
                i.fas.fa-arrow-circle-right
                | Instalar una nueva arandela en la parte posterior con el mismo espesor.
        .col-lg-6.order-lg-1
          .p-4.bg-color-1.h-100
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 8. 
              span Asentamientos que se presentan en los dientes de la corona

            figure
              img(src='@/assets/curso/tema2/f8.svg', alt='Tipos de asentamientos en los dientes de la corona de un engranaje.', style="max-width: 467px;", data-aos="zoom-in").mx-auto
            figcaption.mt-2 #[b Nota.] Asentamientos que se presentan en los dientes de la corona. (s.f.). [Imagen].

    p(data-aos="fade-up").mb-4 Después de cualquier ajuste en la posición del piñón impulsor, es fundamental revisar el juego entre el piñón y la corona. Para ello:


    .row.mb-4.align-items-stretch
      .col-12.col-lg-6.mb-4
        .tarjeta.bg-color-5.p-4.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema2/icon-1.svg", alt="", style="max-width: 90px;")
            .col
              p.mb-0.text-white Retirar nuevamente la corona, apartándola del piñón al inicio del proceso de regulación.

      .col-12.col-lg-6.mb-4
        .tarjeta.bg-color-5.p-4.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema2/icon-1.svg", alt="", style="max-width: 90px;")
            .col
              p.mb-0.text-white Realizar la regulación del piñón impulsor de forma independiente, sin interferencias de la holgura final entre la corona y el cono.

    .row.align-items-stretch.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/13.png', alt='Imagen de limpieza de componentes mecánicos', style="max-width: 100%;").mx-auto

      .col-lg-7
        .bg-color-7.p-4.h-100
          p.mb-4 Una vez realizada la regulación exacta, se deben seguir estos pasos para completar el procedimiento:

          ul.lista-ul--color(data-aos="fade-up").color-dark
            li.d-flex
              i.fas.fa-arrow-circle-right
              | Limpiar todas las partes para eliminar residuos y asegurar un correcto funcionamiento.
            li.d-flex
              i.fas.fa-arrow-circle-right
              | Lubricar adecuadamente los componentes del diferencial.
            li.d-flex
              i.fas.fa-arrow-circle-right
              | Reajustar todos los pernos y tuercas de regulación para garantizar que el ensamblaje cumpla con las especificaciones requeridas.


    .titulo-tres(data-aos="flip-up").mb-5
      h4 Comprobación de satélites y planetarios

    p(data-aos="fade-up").mb-4 Tras desmontar y limpiar los componentes del diferencial, se debe realizar una inspección detallada de los piñones satélites y planetarios.

    .row.align-items-stretch
      .col-lg-6
        .bg-color-8.px-4.pb-5.pt-4
          h4(data-aos="fade-up").mb-4 Elementos a revisar
          
          ul.lista-ul--color(data-aos="fade-up").color-dark
            li.d-flex
              i.fas.fa-arrow-circle-right
              | Estado de las arandelas de regulación.
            li.d-flex
              i.fas.fa-arrow-circle-right
              | Desgaste o ralladuras en los dientes de los piñones.
            li.d-flex
              i.fas.fa-arrow-circle-right
              | Holguras entre los piñones satélites y planetarios.
            
        figure
          img(src='@/assets/curso/tema2/14.png', alt='', style="max-width: 100%;")

      .col-lg-6
        .bg-color-1.p-4
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 9. 
            span Comprobación del estado de piñones  

          figure
            img(src='@/assets/curso/tema2/f9.svg', alt='Diagrama de comprobación del estado de los piñones satélites y planetarios.', style="max-width: 414px;").mx-auto
          figcaption.mt-2 #[b Nota.] Comprobación del estado de piñones. (s.f.). [Imagen].


    p(data-aos="fade-up").my-4 El procedimiento de verificación es: 

    .row.mb-4.align-items-stretch.justify-content-center
      .col-12.col-lg-6.col-xl-4.mb-4.mb-md-4
        .tarjeta.bg-color-5.p-4.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema2/icon-2.svg", alt="", style="max-width: 90px;").mx-auto
            .col
              p.mb-0.text-white Instalar los piñones en su posición.

      .col-12.col-lg-6.col-xl-4.mb-4.mb-md-4
        .tarjeta.bg-color-5.p-4.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema2/icon-2.svg", alt="", style="max-width: 90px;").mx-auto
            .col
              p.mb-0.text-white Medir la holgura con un calibrador de láminas entre la superficie posterior del piñón y su alojamiento en el porta corona.

      .col-12.col-lg-6.col-xl-4.mb-4.mb-md-4
        .tarjeta.bg-color-5.p-4.h-100
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema2/icon-2.svg", alt="", style="max-width: 90px;").mx-auto
            .col
              p.mb-0.text-white Si la holgura es excesiva, instalar rodelas de compensación con las mismas características de las originales.

    p(data-aos="fade-up").my-5 Este proceso garantiza que los piñones trabajen de manera sincronizada, evitando movimientos indeseados y prolongando la vida útil del sistema diferencial.



    .titulo-tres(data-aos="flip-up").mb-5
      h4 Recomendaciones

    .row.align-items-stretch
      .col-lg-7
        .bg-color-7.p-4.h-100
          p.mb-4 Para garantizar un mantenimiento adecuado del diferencial, se deben seguir las siguientes recomendaciones:

          ul.lista-ul--color(data-aos="fade-up").color-dark
            li.d-flex
              i.fas.fa-arrow-circle-right
              | Verificar el nivel de aceite regularmente y cambiarlo en el intervalo recomendado por el fabricante.
            li.d-flex
              i.fas.fa-arrow-circle-right
              | Usar el tipo de lubricante indicado por el fabricante.
            li.d-flex
              i.fas.fa-arrow-circle-right
              | Seguir estrictamente las recomendaciones del fabricante en cada reparación.
            li.d-flex
              i.fas.fa-arrow-circle-right
              | Realizar una prueba de carretera después de completar la reparación para verificar su correcto funcionamiento.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/15.png', alt='', style="max-width: 100%;").mx-auto

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
