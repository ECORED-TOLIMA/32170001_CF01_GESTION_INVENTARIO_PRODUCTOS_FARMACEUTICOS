export default {
  global: {
    componenteFormativo: 'Gestión y almacenamiento de productos farmacéuticos',
    descripcionCurso:
      'Este componente formativo fortalece la capacidad para almacenar productos farmacéuticos conforme a procedimientos, buenas prácticas y normativa vigente. Brinda herramientas conceptuales y operativas esenciales para garantizar la calidad, seguridad y trazabilidad de los productos en el servicio farmacéutico, promoviendo decisiones acertadas en contextos regulados y dinámicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Negocio y productos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características del negocio farmacéutico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Características fisicoquímicas y condiciones de conservación de los productos farmacéuticos ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Criterios de clasificación de los productos farmacéuticos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Importancia de la caracterización y clasificación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Normativa de calidad de productos farmacéuticos',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normativa sanitaria y buenas prácticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Rol del INVIMA en el control de calidad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Requisitos de calidad para productos farmacéuticos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Buenas prácticas relacionadas con la calidad',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Importancia de la normativa vigente',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Condiciones del almacén farmacéutico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Infraestructura y estructura física',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Control ambiental: temperatura y humedad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Distribución interna y señalización',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Zonas diferenciadas y condiciones especiales',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Rotación y conservación de productos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principios de rotación: PEPS, FEFO y LIFO',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Productos con requerimientos especiales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Recomendaciones generales para la conservación y rotación',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Recepción técnica de productos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Preparación del área y verificación documental',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Inspección física y técnica',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Registro y almacenamiento en zona de cuarentena',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Manejo de productos no conformes y observados',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Ingreso definitivo al sistema de inventario',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Documentación soporte en la recepción de productos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Factura o remisión del proveedor',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Orden de compra y certificado de calidad',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Registro sanitario INVIMA y licencia sanitaria del proveedor',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Formatos y registros de recepción',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Acta de productos no conformes (si aplica)',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Registro e ingreso de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Finalidad e información del registro',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Características del registro y buenas prácticas',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Procedimiento de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Etapas, protocolos y recomendaciones',
            hash: 't_8_1',
          },
        ],
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
        download: 'downloads/CFA_XX_DU.pdf',
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
      tema: '3. Condiciones del almacén farmacéutico',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Buenas prácticas de almacenamiento de los productos farmacéuticos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=naLJb7109Zs',
    },
    {
      tema: '5.5. Ingreso definitivo al sistema de inventario',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Gestión de inventarios de un servicio farmacéutico [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EvCtbrFspJY',
    },
  ],
  glosario: [
    {
      termino: 'Cuarentena',
      significado:
        'zona temporal de almacenamiento donde se ubican productos farmacéuticos que aún no han sido verificados o aprobados para su uso o distribución.',
    },
    {
      termino: 'Estupefaciente',
      significado:
        'sustancia con efecto depresor del sistema nervioso central que puede generar dependencia. Su manejo está regulado por normativas especiales.',
    },
    {
      termino: 'FEFO (First Expired, First Out)',
      significado:
        'método de rotación que prioriza el uso de los productos con fecha de vencimiento más próxima para evitar su expiración en el inventario.',
    },
    {
      termino:
        'INVIMA (Instituto Nacional de Vigilancia de Medicamentos y Alimentos)',
      significado:
        'entidad colombiana encargada de regular y controlar la calidad de medicamentos, alimentos, dispositivos médicos y otros productos para la salud.',
    },
    {
      termino: 'Lote',
      significado:
        'cantidad de unidades de un producto elaborado en un mismo ciclo de producción, bajo condiciones homogéneas. Es clave para la trazabilidad.',
    },
    {
      termino: 'PEPS (Primeras Entradas, Primeras Salidas)',
      significado:
        'sistema de rotación en el que se utilizan primero los productos que ingresaron antes al inventario, independientemente de su fecha de vencimiento.',
    },
    {
      termino: 'Productos fotosensibles',
      significado:
        'medicamentos que pueden degradarse o perder efectividad si se exponen a la luz. Deben almacenarse en envases opacos o lugares oscuros.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de identificar el historial, ubicación y trayectoria de un producto farmacéutico a lo largo de todas las etapas de la cadena de suministro.',
    },
    {
      termino: 'Zonificación',
      significado:
        'Organización física del área de almacenamiento en secciones diferenciadas (recepción, cuarentena, cadena de frío, devoluciones, etc.), según la naturaleza de los productos y su riesgo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (s. f.). Buenas prácticas de almacenamiento y distribución para establecimientos farmacéuticos.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (s. f.). Buenas prácticas de manufactura, almacenamiento y dispensación.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (s. f.). Guía de Buenas Prácticas de Almacenamiento para establecimientos farmacéuticos.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional para la Seguridad y Salud Ocupacional (NIOSH). (2023). List of antineoplastic and other hazardous drugs in healthcare settings. Centers for Disease Control and Prevention.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2005). Decreto 2200 de 2005: por el cual se reglamenta el servicio farmacéutico y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=16944',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007). Resolución 1403 de 2007: Por la cual se definen los procedimientos y condiciones de la organización y funcionamiento de los servicios farmacéuticos.',
      link:
        'https://autorregulacion.saludcapital.gov.co/leyes/Resolucion_1403_de_2007.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007). Resolución 2950 de 2007: Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras disposiciones.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/RESOLUCI%C3%93N%202955%20DE%202007.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (1995). Decreto 677 de 1995: Por el cual se reglamenta el registro sanitario de medicamentos.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9751',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2006). Resolución 1478 de 2006: Por la cual se establecen los requisitos sanitarios de establecimientos farmacéuticos.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=20670',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2012). Política farmacéutica nacional.',
      link:
        'https://www.minsalud.gov.co/Paginas/Pol%C3%ADtica%20Farmac%C3%A9utica%202012.aspx',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2003). Buenas prácticas de almacenamiento de productos farmacéuticos (Serie de informes técnicos N.º 908).',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud (OPS). (2010). Servicios farmacéuticos basados en la atención primaria de salud: Documento de posición de la OPS/OMS.',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud (OPS). (2018). Time to treatment and severity of snake envenoming in Brazil.',
      link: 'https://iris.paho.org/handle/10665.2/34968',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Christian Llano Villegas',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
