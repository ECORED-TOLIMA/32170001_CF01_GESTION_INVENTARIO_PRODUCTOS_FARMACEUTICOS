<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Condiciones del almacén farmacéutico

    figure.mb-5
      img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')

    p(data-aos="fade-right") El almacén de productos farmacéuticos constituye una unidad estratégica dentro del servicio farmacéutico, donde se resguardan medicamentos y dispositivos médicos bajo condiciones controladas que aseguren su estabilidad, eficacia y seguridad. Estas condiciones deben cumplir con los lineamientos establecidos en las Buenas Prácticas de Almacenamiento (BPA), conforme a lo estipulado en el Decreto 2200 de 2005, la Resolución 1403 de 2007 y las directrices del INVIMA.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Infraestructura y estructura física

    p(data-aos="fade-right") La estructura física del almacén farmacéutico debe estar diseñada para garantizar condiciones higiénicas, facilitar la organización del inventario y permitir un flujo eficiente de productos. Esta infraestructura constituye el soporte físico que asegura la conservación adecuada de los medicamentos y dispositivos médicos, minimizando los riesgos de contaminación, deterioro o pérdida.
    p.mb-5(data-aos="fade-right") Entre los aspectos estructurales fundamentales se encuentran:
    
    .tarjeta.tarjeta--BG06.p-md-5.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Pisos, paredes y techos
            p Deben ser construidos con materiales resistentes, impermeables, lisos, no porosos y de fácil limpieza. Esto evita la acumulación de polvo, humedad o microorganismos, que pueden comprometer la integridad de los productos almacenados. Las uniones entre paredes y pisos deben ser curvas (no en ángulo recto) para facilitar la desinfección.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img02.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Iluminación
            p Debe ser suficiente, uniforme y sin generar calor excesivo. Se recomienda el uso de iluminación fluorescente o LED, que no altere las condiciones térmicas ni afecte productos fotosensibles. Además, debe permitir una visibilidad adecuada para el desarrollo de labores de inspección, rotulación y registro.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img03.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Ventilación
            p El área debe contar con sistemas de ventilación natural o mecánica que permitan la renovación del aire y eviten acumulaciones de humedad, calor o gases contaminantes. En zonas de alta carga térmica o con productos especiales, se pueden utilizar extractores o sistemas HVAC (calefacción, ventilación y aire acondicionado) controlados.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img04.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Altura del techo
            p Debe permitir una correcta circulación del aire y la instalación de estanterías altas, si es necesario, sin afectar la seguridad del personal ni los productos. En ambientes con mucha humedad o temperatura elevada, se recomienda un diseño que favorezca la disipación del calor.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img05.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Diseño del espacio
            p Debe permitir una distribución racional del inventario, con pasillos amplios que faciliten la movilidad del personal y de los elementos de carga, como carros o estibas. Además, debe evitar zonas oscuras, rincones inaccesibles o áreas sin ventilación.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img06.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Estanterías
            p Deben ser resistentes, estables, fabricadas con materiales no corrosivos y fáciles de limpiar. Deben estar elevadas del suelo (mínimo 10 cm), separadas de paredes y techos (mínimo 5 cm) y permitir el acceso visual a todos los productos para facilitar el control y la rotación.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img07.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Drenajes y lavamanos
            p Si se requiere limpieza constante, deben instalarse puntos de desagüe apropiados. También es recomendable contar con lavamanos cercanos para promover la higiene del personal.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img08.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Accesos y seguridad
            p El área debe contar con accesos restringidos solo a personal autorizado, con mecanismos de control como cerraduras, tarjetas electrónicas o cámaras de vigilancia, según el nivel de riesgo del producto. Además, debe estar equipada con extintores, señalización de emergencia, rutas de evacuación y protocolos de contingencia.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img09.jpg', alt='Imagen decorativa')

    p(data-aos="fade-right") Una infraestructura adecuada no solo garantiza el cumplimiento de la normativa sanitaria, sino que también mejora la eficiencia operativa, reduce pérdidas económicas por vencimientos o deterioro, y fortalece la trazabilidad y la seguridad de los productos farmacéuticos dentro del servicio.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Control ambiental: temperatura y humedad

    p.mb-5(data-aos="fade-right") El control de temperatura y humedad es uno de los pilares fundamentales en la gestión del almacén farmacéutico, ya que garantiza la estabilidad, eficacia y seguridad de los productos durante su almacenamiento. Las condiciones ambientales inadecuadas pueden alterar la composición química, reducir la vida útil o anular los efectos terapéuticos de los medicamentos. Por esta razón, el cumplimiento estricto de los parámetros establecidos en las Buenas Prácticas de Almacenamiento (BPA) es obligatorio para todos los establecimientos farmacéuticos.

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='Imagen decorativa').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Temperatura

    .row.justify-content-center.tarjeta--BG07.px-md-4.px-4.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p La mayoría de los productos farmacéuticos deben conservarse a temperatura ambiente controlada, usualmente entre 15 °C y 30 °C, dependiendo de las especificaciones del fabricante y la normativa vigente. El control de este parámetro debe realizarse de manera continua, utilizando equipos de medición calibrados como termómetros digitales, sensores electrónicos o sistemas automatizados con registro gráfico (<em>data loggers</em>).
        p.mb-0 Para productos que requieren cadena de frío, como vacunas, insulinas o ciertos antibióticos biotecnológicos, se deben mantener en un rango estricto entre 2 °C y 8 °C. Estos productos deben almacenarse en neveras o cuartos fríos especiales para uso farmacéutico, con sistemas de alarma en caso de variaciones de temperatura, respaldo de energía eléctrica y protocolos de contingencia.
      .col-lg-4.col-md-7.mb-4.order-lg-2.order-1.mb-lg-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-right") Es importante destacar que los productos refrigerados no deben colocarse en contacto directo con las paredes internas del refrigerador, ni mezclarse con alimentos u otros insumos no farmacéuticos. El monitoreo debe ser registrado mínimo dos veces al día, y cualquier desviación debe documentarse e investigarse, aplicando las acciones correctivas pertinentes.

    .row.align-items-center.mb-5
      .col-auto.pe-0(style="z-index:2", data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='Imagen decorativa').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1", data-aos="fade-left")
        .p-2
          h3.mb-0.ms-3 Humedad

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img11.png', alt='Imagen decorativa')
      .col-lg-6
        p(data-aos="fade-left") La humedad relativa del ambiente es otro factor determinante para la conservación de los medicamentos, especialmente aquellos higroscópicos, es decir, que absorben humedad del entorno, como algunos polvos, tabletas efervescentes o productos liofilizados. Se recomienda mantenerla por debajo del 65 %, en ambientes controlados y bien ventilados.
        .cajon.cajon.C01.color-primario.p-4.mb-4(data-aos="fade-left")
          p.mb-0 El uso de higrómetros permite medir la humedad relativa de forma precisa. En zonas con alta humedad ambiental, puede ser necesario implementar deshumidificadores, utilizar empaques herméticos o acondicionar las áreas con equipos HVAC para mantener las condiciones ideales.
        p.mb-0(data-aos="fade-left") Además, se deben implementar controles preventivos para evitar la condensación, el crecimiento de hongos o bacterias, y la afectación de las etiquetas o empaques, que pueden deteriorarse ante exposiciones prolongadas a ambientes húmedos.      

    p(data-aos="fade-right") Tanto la temperatura como la humedad deben ser monitoreadas y registradas periódicamente mediante formatos físicos o sistemas digitales. Estos registros deben conservarse durante un tiempo mínimo determinado por la normativa institucional o nacional, y deben estar disponibles para auditorías o inspecciones por parte de entidades como el INVIMA.
    p(data-aos="fade-right") La correcta documentación de estos datos permite demostrar que se cumplen las condiciones exigidas para el almacenamiento de cada producto, y constituye una evidencia clave dentro del sistema de gestión de calidad del servicio farmacéutico.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Distribución interna y señalización
    
    p.mb-5(data-aos="fade-right") La distribución interna del almacén de productos farmacéuticos responde a principios de organización, seguridad, eficiencia operativa y cumplimiento normativo. Un diseño adecuado del espacio no solo facilita el acceso y control de los medicamentos, sino que también reduce los riesgos de errores, contaminación cruzada y pérdidas por vencimiento o deterioro. A continuación, se describen los objetivos de una buena distribución interna:

    .row.justify-content-center.px-md-4.px-4.mb-5
      .col-lg-3.col-md-7.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen decorativa')
      .col-lg-7.order-lg-2.order-2(data-aos="fade-right")
        .cajon.cajon.C01.p-3
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li.mb-2 
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Optimizar el flujo de entrada, almacenamiento y salida de productos.
            li.mb-2 
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Evitar la mezcla de productos conformes y no conformes.
            li.mb-2 
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Aplicar correctamente los métodos de rotación como PEPS (Primero en Entrar, Primero en Salir) y FEFO (Primero en Vencer, Primero en Salir), según el tipo de producto y sus condiciones de caducidad.
            li.mb-2 
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Facilitar la trazabilidad, inspección y limpieza.
            li.mb-1 
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Cumplir con las Buenas Prácticas de Almacenamiento (BPA).

    p.mb-5(data-aos="fade-right") En este punto es indispensable identificar las principales zonas funcionales del almacén. La siguiente tabla presenta las zonas clave de un almacén farmacéutico, su función y ejemplos prácticos:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Zonas clave de un almacén farmacéutico</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr(data-aos="fade-right")
                th(style= "width: 20%") Zona
                th(style= "width: 40%") Función principal
                th(style= "width: 40%") Ejemplo práctico
            tbody
              tr(data-aos="fade-right")
                td.text-bold Recepción
                td Verificación física y documental de los productos al llegar.
                td Revisión de la factura, número de lote y fecha de vencimiento.
              tr(data-aos="fade-right")
                td.text-bold(style="background-color: #F6F6F6") Cuarentena
                td(style="background-color: #F6F6F6") Almacenamiento temporal de productos no verificados o en evaluación.
                td(style="background-color: #F6F6F6") Medicamentos esperando certificado de calidad o revisión técnica.
              tr(data-aos="fade-right")
                td.text-bold Inventario activo
                td Almacenamiento de productos autorizados para uso y distribución.
                td Estantes con analgésicos, antibióticos y dispositivos médicos.
              tr(data-aos="fade-right")
                td.text-bold(style="background-color: #F6F6F6") Próximos a vencer
                td(style="background-color: #F6F6F6") Separar productos con fecha de vencimiento cercana.
                td(style="background-color: #F6F6F6") Estantería rotulada: “Vence en menos de 6 meses - aplicar FEFO”.
              tr(data-aos="fade-right")
                td.text-bold Devoluciones
                td Aislamiento de productos devueltos que requieren evaluación o baja.
                td Caja marcada con productos rechazados por errores en la fórmula.
              tr(data-aos="fade-right")
                td.text-bold(style="background-color: #F6F6F6") Disposición final (residuos)
                td(style="background-color: #F6F6F6") Almacenamiento de medicamentos vencidos, deteriorados o contaminados.
                td(style="background-color: #F6F6F6") Contenedor rojo con señalización: “Residuos RESPEL - no usar”.
              tr(data-aos="fade-right")
                td.text-bold Productos de cadena de frío
                td Espacio para neveras especializadas con monitoreo de temperatura.
                td Vacunas almacenadas a 2-8 °C con registrador digital.
              tr(data-aos="fade-right")
                td.text-bold(style="background-color: #F6F6F6") Psicotrópicos / estupefacientes
                td(style="background-color: #F6F6F6") Zona segura con control de acceso.
                td(style="background-color: #F6F6F6") Caja fuerte con doble llave y libro de control oficial.

    p.mb-5(data-aos="fade-right") Para garantizar una operación segura y eficiente en el almacén farmacéutico, es fundamental implementar ciertas medidas que favorezcan la organización, el acceso y la conservación de los productos. Estas recomendaciones prácticas contribuyen a minimizar errores, facilitar el control y optimizar el espacio disponible, siempre en cumplimiento de la normativa vigente y las Buenas Prácticas de Almacenamiento. A continuación, se presentan algunas pautas clave para una distribución interna adecuada:

    .row.mb-4
      .col-lg-6.mb-4(data-aos="fade-right")
        .row.justify-content-center.h-100
          .col-lg-auto.col-3.col-sm-2.px-0
            .cajon.cajon.C02.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img13.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0
            .cajon.cajon.C02.p-4.h-100
              h5 Zonificación clara
              p.MB-0 Delimitar físicamente cada zona y evitar cruces innecesarios de flujo entre productos.
      .col-lg-6.mb-4(data-aos="fade-left")
        .row.justify-content-center.h-100
          .col-lg-auto.col-3.col-sm-2.px-0
            .cajon.cajon.C02.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img14.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0
            .cajon.cajon.C02.p-4.h-100
              h5 Estanterías adecuadas
              p.MB-0 Resistentes, no metálicas oxidadas, separadas del piso (10 cm) y de la pared (5 cm).
      .col-lg-6.mb-4(data-aos="fade-right")
        .row.justify-content-center.h-100
          .col-lg-auto.col-3.col-sm-2.px-0
            .cajon.cajon.C02.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img15.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0
            .cajon.cajon.C02.p-4.h-100
              h5 Pasillos amplios
              p.MB-0 Permitir el paso de personal y carros transportadores sin dificultad.
      .col-lg-6.mb-4(data-aos="fade-left")
        .row.justify-content-center.h-100
          .col-lg-auto.col-3.col-sm-2.px-0
            .cajon.cajon.C02.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img16.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0
            .cajon.cajon.C02.p-4.h-100
              h5 Separación vertical
              p.MB-0 Productos peligrosos o pesados deben almacenarse en niveles bajos, los livianos en la parte superior.

    p.mb-5(data-aos="fade-right") La señalización es clave para garantizar la seguridad del personal y la correcta ubicación de los productos. Toda zona, estante o contenedor debe estar claramente identificado con rótulos visibles, legibles y permanentes. A continuación, algunos ejemplos de rótulos útiles:

    .row.justify-content-center.mb-5
      .col-lg-5
        .row.justify-content-center.h-100
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="fade-right")
            .cajon.cajon.C01.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img17.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-right")
            .cajon.cajon.C01.p-4.h-100
              h5.mb-0 Zona de productos refrigerados: mantener entre 2 °C y 8 °C.
      .col-lg-5
        .row.justify-content-center.h-100
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="fade-right")
            .cajon.cajon.C01.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img18.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-right")
            .cajon.cajon.C01.p-4.h-100
              h5.mb-0 Medicamentos próximos a vencer - FEFO.     
      .col-lg-5
        .row.justify-content-center.h-100
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="fade-right")
            .cajon.cajon.C01.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img19.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-right")
            .cajon.cajon.C01.p-4.h-100
              h5.mb-0 No utilizar - Producto vencido.     
      .col-lg-5
        .row.justify-content-center.h-100
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="fade-right")
            .cajon.cajon.C01.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema3/img20.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-right")
            .cajon.cajon.C01.p-4.h-100
              h5.mb-0 Acceso restringido - Medicamentos de control especial.

    p.mb-5(data-aos="fade-right") La señalización dentro del almacén es un elemento clave para garantizar la seguridad, la identificación rápida de zonas y la prevención de riesgos. El uso de colores estandarizados facilita la orientación del personal y el cumplimiento de las normativas vigentes. A continuación, se presentan los colores recomendados para la señalización, según las normas de seguridad industrial:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 2.
      span <em>Colores recomendados para señalización</em>          
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr(data-aos="fade-right")
            th(style= "width: 20%") Color
            th(style= "width: 40%") Uso
            th(style= "width: 40%") Ejemplo
        tbody
          tr(data-aos="fade-right")
            td.text-bold
              span.text-bold(style="margin-left: 4px;") Rojo
              div(style="display: inline-block; width: 16px; height: 16px; background-color: red; margin-left: 10px; vertical-align: middle;")
            td Prohibido / Peligro.
            td Señal para residuos farmacéuticos peligrosos.
          tr(data-aos="fade-right")
            td.text-bold(style="background-color: #F6F6F6") 
              span.text-bold(style="margin-left: 4px;") Amarillo
              div(style="display: inline-block; width: 16px; height: 16px; background-color: yellow; margin-left: 10px; vertical-align: middle;")
            td(style="background-color: #F6F6F6") Precaución.
            td(style="background-color: #F6F6F6") Área de cuarentena o productos frágiles.
          tr(data-aos="fade-right")
            td.text-bold
              span.text-bold(style="margin-left: 4px;") Verde
              div(style="display: inline-block; width: 16px; height: 16px; background-color: green; margin-left: 10px; vertical-align: middle;")
            td Información segura / zonas de tránsito.
            td Rutas de evacuación, estantes con inventario activo.
          tr(data-aos="fade-right")
            td.text-bold(style="background-color: #F6F6F6") 
              span.text-bold(style="margin-left: 4px;") Azul
              div(style="display: inline-block; width: 16px; height: 16px; background-color: blue; margin-left: 10px; vertical-align: middle;")
            td(style="background-color: #F6F6F6") Información obligatoria / general.
            td(style="background-color: #F6F6F6") Instrucciones de conservación o higiene.

    p.mb-5(data-aos="fade-right") El flujo interno en un almacén farmacéutico debe estar organizado para minimizar errores y garantizar la trazabilidad. Idealmente, los productos deben seguir esta secuencia:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <em>Flujo interno del almacén farmacéutico</em>     
        figure.desktop(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img21.svg', alt='En la figura 1 se presenta el flujo interno del almacén farmacéutico, que inicia con la entrada de los productos en la zona de recepción, continúa con su ubicación en la zona de cuarentena para el control de calidad, luego pasan al inventario activo para su gestión y, finalmente, se dirigen a la zona de distribución para su entrega.')
        figure.movil(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img21_.svg', alt='En la figura 1 se presenta el flujo interno del almacén farmacéutico, que inicia con la entrada de los productos en la zona de recepción, continúa con su ubicación en la zona de cuarentena para el control de calidad, luego pasan al inventario activo para su gestión y, finalmente, se dirigen a la zona de distribución para su entrega.')

    p.mb-5(data-aos="fade-right") Las áreas especiales como neveras para productos refrigerados, cajas fuertes para psicotrópicos y estupefacientes, y zonas de disposición final deben estar claramente diferenciadas, señalizadas. Por ejemplo, en rojo para productos inservibles y ubicadas de forma que no interfieran con el flujo general. Se recomienda el uso de flechas verdes en el piso o paredes para indicar los flujos de desplazamiento y rótulos grandes y visibles para identificar cada zona del almacén. Esta organización mejora la seguridad, facilita las inspecciones y cumple con los lineamientos de las Buenas Prácticas de Almacenamiento (BPA).

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-right") Una distribución interna bien planificada, complementada con señalización clara y un flujo organizado de los productos, contribuye significativamente a la seguridad del paciente, la eficiencia del servicio farmacéutico y el cumplimiento de los estándares sanitarios exigidos por el INVIMA y otras entidades reguladoras.
              
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Zonas diferenciadas y condiciones especiales

    p.mb-5(data-aos="fade-right") Para garantizar la trazabilidad, seguridad y conservación de los productos, el almacén debe contar con zonas específicas, entre las cuales se destacan:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-4
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img22.svg' alt='Imagen decorativa')
          h4.text-center Zona de recepción
          p.mb-0 Donde se realiza la verificación documental y física de los productos recibidos.
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-4
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img23.svg' alt='Imagen decorativa')
          h4.text-center Zona de cuarentena
          p.mb-0 Destinada a productos en espera de validación o que requieren revisión adicional.
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-4
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img24.svg' alt='Imagen decorativa')
          h4.text-center Zona de productos próximos a vencer
          p.mb-0 Permite aplicar el principio FEFO (First Expired, First Out).
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-4
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img25.svg' alt='Imagen decorativa')
          h4.text-center Zona de productos devueltos o no conformes
          p.mb-0 Deben mantenerse separados hasta su evaluación final.
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-4
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img26.svg' alt='Imagen decorativa')
          h4.text-center Zona de productos en uso o de alta rotación
          p.mb-0 Para facilitar su despacho inmediato.
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-4
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img27.svg' alt='Imagen decorativa')
          h4.text-center Zona de devoluciones al proveedor
          p.mb-0 Con trazabilidad documental completa.
        .tarjeta.tarjeta--BG08.p-4
          .row.justify-content-center.mb-4
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img28.svg' alt='Imagen decorativa')
          h4.text-center Zona de disposición final
          p.mb-0 Para productos vencidos o deteriorados, conforme a la normativa ambiental sobre residuos peligrosos.

    p.mb-5(data-aos="fade-right") Además, ciertos productos requieren condiciones especiales, tales como:

    .row.mb-5(data-aos="fade-right")
      .col-sm-6.col-lg.tarjeta--tabla.p-4.mb-lg-0.mb-4
        .row.justify-content-center
          .col-4
            img(src='@/assets/curso/temas/tema3/img29.svg' alt='Imagen decorativa')
        h4.text-center Psicotrópicos y estupefacientes
        p.text-center.mb-0 Almacenados en cajas fuertes con doble control de acceso.
      .col-sm-6.col-lg.tarjeta--tabla.p-4.mb-lg-0.mb-4
        .row.justify-content-center
          .col-4
            img(src='@/assets/curso/temas/tema3/img30.svg' alt='Imagen decorativa')
        h4.text-center Citotóxicos y medicamentos peligrosos
        p.text-center.mb-0 Ubicados en áreas con señalización de riesgo biológico.
      .col-sm-6.col-lg.tarjeta--tabla.p-4.mb-lg-0.mb-4
        .row.justify-content-center
          .col-4
            img(src='@/assets/curso/temas/tema3/img31.svg' alt='Imagen decorativa')
        h4.text-center Fotosensibles
        p.text-center.mb-0 Protegidos de la luz directa.
      .col-sm-6.col-lg.tarjeta--tabla.p-4.mb-lg-0.mb-4
        .row.justify-content-center
          .col-4
            img(src='@/assets/curso/temas/tema3/img31.svg' alt='Imagen decorativa')
        h4.text-center Productos de cadena de frío
        p.text-center.mb-0 Mantenidos entre 2 y 8 °C en refrigeradores certificados.

</template>

<script>
export default {
  name: 'Tema3',
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
