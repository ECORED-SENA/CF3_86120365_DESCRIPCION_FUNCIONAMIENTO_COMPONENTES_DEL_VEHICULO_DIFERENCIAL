export default {
  global: {
    Name: 'Mantenimiento del diferencial',
    Description:
      'El componente formativo explica el mantenimiento del diferencial, abordando diagnóstico, solución de problemas y reparación. Describe verificaciones previas, regulación de piñón y corona, ajustes de rodamientos y comprobación de satélites. Incluye recomendaciones para prolongar su vida útil, uso adecuado del lubricante y pruebas posteriores a la reparación, garantizando un funcionamiento óptimo del sistema.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comprobaciones previas y diagnóstico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Reparación del diferencial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF3_MANTENIMIENTO_DEL_DIFERENCIAL.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Comprobaciones previas y diagnóstico',
      referencia: 'Vangelder. (2018). Fundamentals of Automotive Technology.',
      tipo: 'Libro Capítulo 2 y 3',
      link:
        'https://books.google.com.co/books?id=gnE1DgAAQBAJ&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      tema: 'Reparación del diferencial',
      referencia:
        'KyD Galat (2021). Lo que tienes que saber antes de reparar un diferencial. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=L0ZVq5qcLxI&ab_channel=KyDGalat',
    },
  ],
  glosario: [
    {
      termino: 'Corona',
      significado:
        'engranaje de gran tamaño que recibe la fuerza del piñón impulsor y la distribuye a los piñones satélites.',
    },
    {
      termino: 'Diferencial',
      significado:
        'mecanismo que permite que las ruedas de un vehículo giren a diferentes velocidades mientras se mantiene la tracción.',
    },
    {
      termino: 'Holgura',
      significado:
        'distancia mínima permitida entre dos componentes del diferencial para su correcto funcionamiento.',
    },
    {
      termino: 'Juego entre piñón y corona',
      significado:
        'espacio necesario entre los dientes del piñón impulsor y la corona para evitar desgaste prematuro y ruidos.',
    },
    {
      termino: 'Lubricante diferencial',
      significado:
        'aceite especializado que reduce la fricción y el desgaste en los engranajes y rodamientos del diferencial.',
    },
    {
      termino: 'Piñón impulsor',
      significado:
        'engranaje que transmite el movimiento desde el eje de transmisión a la corona del diferencial.',
    },
    {
      termino: 'Prueba de carretera',
      significado:
        'evaluación del comportamiento del diferencial después de su reparación para verificar su correcto funcionamiento.',
    },
    {
      termino: 'Rodamientos cónicos',
      significado:
        'componentes que permiten la rotación del diferencial con mínima fricción y soportan cargas axiales y radiales.',
    },
    {
      termino: 'Satélites y planetarios',
      significado:
        'conjunto de engranajes dentro del diferencial que permiten la distribución del torque entre las ruedas motrices.',
    },
    {
      termino: 'Tubo espaciador',
      significado:
        'componente que mantiene la separación adecuada entre los rodamientos del piñón impulsor.',
    },
  ],
  referencias: [
    {
      referencia:
        'Jones, D. & VanGelder, K. (2018). <em>Automotive electricity and electronics.</em> Burlington: Jones & Bartlett Learning.',
      link: '',
    },
    {
      referencia: 'Smith, A. (2018). <em>What is a locking differential?</em>',
      link:
        'https://www.cjponyparts.com/resources/locking-differentials-explained',
    },
    {
      referencia:
        'VanGelder, K. (2018). <em>Fundamentals of automotive technology. Principles and practice.</em> Jones & Bartlett Learning.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Edwin Abello Rubiano',
          cargo: 'Experto temático',
          centro:
            'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Cielo Damaris Angúlo Rodriguez',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
