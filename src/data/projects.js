// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "CountEverything Industry & Lab",
    description: "Sistema industrial de conteo de objetos mediante visión computacional. Optimizado para líneas de producción y entornos de laboratorio.",
    longDescription: "Desarrollo de algoritmos personalizados de visión computacional en Kotlin para procesar matrices de píxeles en tiempo real. Alto rendimiento logrado sin dependencias pesadas externas como OpenCV.",
    technicalDetails: [
      {
        title: "Arquitectura de Doble Capa (Hybrid Native Bridge)",
        description: "La aplicación se sostiene sobre una arquitectura desacoplada diseñada para maximizar la performance:",
        items: [
          "Capa de Orquestación (React Native/TypeScript): Maneja el estado global, la lógica de negocio, la interfaz de usuario reactiva y la navegación. Se comunica con la capa nativa mediante *JSI (JavaScript Interface)* a través de **Vision Camera**, permitiendo una comunicación de baja latencia.",
          "Capa de Ejecución Nucleica (Kotlin/Native): Aquí reside el 'motor de visión'. Implementado como un *Frame Processor Plugin*, procesa cada frame de video crudo proveniente del sensor de la cámara antes de que llegue a la pantalla."
        ]
      },
      {
        title: "El Desafío del Espacio de Color YUV",
        description: "Uno de los mayores desafíos técnicos fue el procesamiento de color. Las cámaras de Android no entregan imágenes en RGB (Red, Green, Blue), sino en YUV (Luma + Crominancia).",
        items: [
          "El problema: Convertir cada frame a RGB para analizar colores es computacionalmente carísimo y destruiría los FPS (cuadros por segundo).",
          "La solución: Desarrollamos un motor que trabaja directamente sobre los planos YUV. Esto permitió realizar filtrados de color comparando distancias euclidianas en el espacio de crominancia (U y V) sin la necesidad de transformar la imagen entera, ahorrando un 70% de tiempo de procesamiento por frame."
        ]
      },
      {
        title: "Algoritmia de Visión Computacional 'Desde Cero'",
        description: "A diferencia de usar modelos de IA pesados que requieren internet o consumen mucha batería, el proyecto implementa Visión Computacional Clásica:",
        items: [
          "Connected-Component Labeling (CCL): Implementamos un algoritmo de detección de manchas (Blobs) basado en una pila (stack) para evitar el StackOverflowError que causaría una recursión simple en imágenes de alta resolución.",
          "Operaciones Morfológicas: Se programaron manualmente filtros de Erosión y Dilatación. La erosión permite separar objetos que se tocan físicamente (píxeles adyacentes), mientras que la dilatación restaura el volumen del objeto tras la separación.",
          "Filtrado Booleano Multicapa: El motor permite al usuario definir una ecuación lógica de 'Target' (A o B o C) y 'Ignore' (NOT D), procesando estas condiciones bit a bit durante el escaneo del buffer de imagen."
        ]
      },
      {
        title: "Gestión de Performance y Concurrencia",
        description: "Mantener la fluidez de la UI a 60 FPS mientras se analizan millones de píxeles en segundo plano fue el desafío más complejo de sincronización:",
        items: [
          "Downscaling Dinámico: Implementamos un factor de reducción de escala (DOWNSCALE_FACTOR) para procesar una versión simplificada de la imagen en el motor de búsqueda, mientras la UI muestra la versión en alta definición.",
          "Race Conditions: Resolvemos conflictos de memoria donde el usuario 'borra' un color en la UI mientras el hilo de la cámara está intentando leerlo. Implementamos un sistema de 'Comandos de Frame' que garantiza que los cambios en los filtros se apliquen de forma atómica entre frames, eliminando el parpadeo (flickering) visual."
        ]
      },
      {
        title: "Optimización para el Sector Industrial y Lab",
        description: "El proyecto fue refinado para casos de uso de alta precisión:",
        items: [
          "Sustracción de Fondo (Background Subtraction): Permite ignorar ruidos visuales constantes como cintas transportadoras o el fondo de una placa de Petri, aislando únicamente los cambios de interés.",
          "Calibración Automática de Área: Al tocar un objeto, el sistema no solo captura el color, sino que estima el área del 'Blob' detectado para ajustar automáticamente el filtro de tamaño mínimo (minArea), facilitando el uso para operarios no técnicos."
        ]
      }                  
    ],
    tech: ["React Native", "Kotlin"],
    links: {
      playstore: ""
    },
    category: "Mobile & Algoritmos"
  },
  {
    id: 2,
    title: "SpaceRadar",
    description: "Sistema de rastreo en tiempo real de la Estación Espacial Internacional (ISS) y Objetos Próximos a la Tierra (NEOs).",
    longDescription: "Integración de APIs públicas de la NASA para monitorear trayectorias orbitales. Implementación de un sistema de notificaciones para eventos astronómicos basado en la geolocalización del usuario.",
    technicalDetails: [
      {
        title: "Backend (SpaceWatcher API):",
        description: "Construido bajo una arquitectura de microservicios, el backend actúa como una capa de abstracción y seguridad.",
        items: [
          "Consumo de Datos Externos: Implementa integraciones con la API NeoWs (Near Earth Object Web Service) de la NASA y sistemas de rastreo de la ISS.",
          "Capa de Autenticación (SSO): Se diseñó un flujo de autenticación mediante Google OAuth 2.0, validando tokens de identidad (ID Tokens) en el servidor para garantizar que solo usuarios legítimos accedan a los recursos.",
          "Persistencia Geográfica: Utiliza PostgreSQL para almacenar perfiles de observatorios (usuarios) y sus coordenadas, permitiendo cálculos de proximidad para eventos astronómicos.",
          "Procesamiento Asíncrono: Manejo de colas y tareas programadas para actualizar la base de datos de objetos cercanos a la Tierra (NEOs) sin bloquear el hilo principal de la API."
        ]
      },
      {
        title: "Frontend (SpaceRadar App):",
        description: "Una aplicación móvil desarrollada con React Native (Expo) que prioriza el rendimiento y la experiencia del usuario en condiciones de baja luminosidad (Dark Mode nativo).",
        items: [
          "Geolocalización al registrar usuario: Implementación de expo-location para obtener coordenadas precisas del 'observatorio' del usuario y realizar el cálculo de paso de la estación espacial.",
          "Gestión de Estado y Seguridad: Uso de SecureStore para el manejo de tokens JWT y contextos de React para la persistencia de la sesión."
        ]
      },
      {
        title: "Desafíos Técnicos y Soluciones",
        description: "",
        items: [
          "Seguridad de Datos y Privacidad: Se implementó una política de transparencia en la recolección de datos, declarando el uso de identificadores de publicidad (AD_ID) para AdMob y gestionando permisos de ubicación en primer plano, cumpliendo con los estándares de Data Safety de Android 13+.",
          "Optimización del Bundle: Se logró reducir el peso de la aplicación y mejorar el tiempo de carga mediante el uso de Android App Bundles (.aab), permitiendo que Google Play genere APKs optimizados para cada arquitectura de dispositivo específica."
        ]
      }
    ],
    tech: ["React Native", "Node.js", "PostgreSQL"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.mateoryhr.spaceradar"
    },
    category: "Backend & Mobile"
  }
];