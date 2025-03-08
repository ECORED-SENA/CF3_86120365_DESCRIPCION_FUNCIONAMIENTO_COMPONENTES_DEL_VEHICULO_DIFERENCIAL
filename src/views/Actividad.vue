<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Mantenimiento del diferencial',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Identificar los procedimientos de diagnóstico, mantenimiento y reparación del diferencial.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una de las causas más comunes de falla en el diferencial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de lubricante de alta calidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desgaste natural de los componentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Falta de aire en los neumáticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conducción agresiva con arranques bruscos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué se debe revisar antes de desmontar el diferencial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El nivel y estado del aceite.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La presión de los neumáticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La batería del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El estado del radiador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué indica la presencia de limaduras en el aceite del diferencial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que el diferencial no necesita mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que el aceite es de buena calidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que hay fricción inadecuada y desgaste de componentes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que el aceite se cambió recientemente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la función principal del tubo espaciador en el diferencial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener la holgura exacta de los rodamientos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar la velocidad del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar el sobrecalentamiento del aceite.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ajustar la presión del engranaje de mando final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué se recomienda hacer al encontrar fugas de aceite en el diferencial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agregar más aceite sin revisar la fuga.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desarmar la tapa y limpiar el empaque.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No realizar ninguna acción si la fuga es mínima.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar completamente el diferencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué sucede si el piñón impulsor y la corona no están bien ajustados?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El sistema de frenos se ve afectado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se generan ruidos, desgastes y fallas en los dientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se mejora la tracción del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se reduce el consumo de combustible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cómo se regula el juego entre el piñón impulsor y la corona?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicando mayor cantidad de lubricante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ajustando las tuercas de regulación y midiendo la holgura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Modificando el tamaño de la carcasa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentando la presión de los rodamientos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta se usa para medir la holgura entre el piñón y la corona?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Llave de impacto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Multímetro digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reloj micrométrico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Regla metálica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la principal función de los piñones satélites y planetarios en el diferencial?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Distribuir la fuerza entre las ruedas motrices.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Regular el nivel del aceite lubricante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la temperatura del diferencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Frenar el vehículo en pendientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué procedimiento se realiza para comprobar el asentamiento entre piñón y corona?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Girar el diferencial en seco sin aceite.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar tinte y observar el desgaste en los dientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Usar un calibrador de presión de aire.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lijar los dientes del piñón para mejorar el ajuste.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El mantenimiento del diferencial incluye la medición del nivel de aceite y su cambio periódico.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El conjunto de engranaje de mando final puede desarmarse y ajustarse por separado.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La prueba de carretera es opcional después de realizar una reparación en el diferencial.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Si el piñón impulsor está demasiado alejado de la corona, se debe corregir con arandelas de calibración.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El uso del lubricante adecuado prolonga la vida útil del diferencial y evita desgastes prematuros.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
