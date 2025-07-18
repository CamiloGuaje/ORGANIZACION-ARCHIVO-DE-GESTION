// Datos de los 10 pasos para organizar archivos de gestión
const stepsData = [
  {
    numero: 1,
    titulo: "IDENTIFICAR",
    subtitulo: "Series y Subseries según TRD Municipal",
    descripcion: "Reconocer las series y subseries documentales según la Tabla de Retención Documental municipal para establecer el marco de organización.",
    detalles: [
      "TRD: Listado de series con sus tipos documentales y vigencia",
      "Serie: Conjunto de documentos de estructura y contenido homogéneos",
      "Subserie: Unidades documentales por contenido específico",
      "Identificación por funciones de cada dependencia municipal"
    ],
    ejemplos: [
      "Contratos: Obra pública, prestación de servicios, suministros",
      "Planes: POT, Plan de Desarrollo, Plan de Inversiones",
      "Historias Laborales: Funcionarios activos e inactivos",
      "Licencias: Construcción, funcionamiento, urbanismo"
    ]
  },
  {
    numero: 2,
    titulo: "CLASIFICAR",
    subtitulo: "Los documentos por series y subseries",
    descripcion: "Agrupar la documentación municipal por series, subseries y tipos documentales específicos según las funciones administrativas.",
    detalles: [
      "Agrupación por series documentales principales",
      "Separación por subseries según funciones específicas",
      "Identificación de tipos documentales por expediente",
      "Aplicación de criterios de clasificación institucional"
    ],
    ejemplos: [
      "Series documentales: Contratos, Actas, Resoluciones",
      "Subseries específicas según funciones de cada dependencia",
      "Tipos documentales que conforman cada expediente",
      "Clasificación por áreas: administrativa, técnica, financiera"
    ]
  },
  {
    numero: 3,
    titulo: "ORGANIZAR",
    subtitulo: "Cronológicamente el expediente",
    descripcion: "Ordenar los documentos de más antiguo a más reciente respetando el orden original del trámite administrativo municipal.",
    detalles: [
      "Orden cronológico: del más antiguo al más reciente",
      "Respeto del orden original del trámite",
      "Mantenimiento de la integridad documental",
      "Conservación de la secuencia administrativa natural"
    ],
    ejemplos: [
      "Respetar el orden original del trámite administrativo",
      "Mantener la integridad documental de cada expediente",
      "Seguir la secuencia natural de los procedimientos municipales",
      "Conservar la cronología de actuaciones administrativas"
    ]
  },
  {
    numero: 4,
    titulo: "DEPURAR",
    subtitulo: "Retirar documentos sin valor archivístico",
    descripcion: "Eliminar documentos que no tienen valor testimonial, jurídico o administrativo para la gestión municipal.",
    detalles: [
      "Identificación de documentos sin valor archivístico",
      "Eliminación de duplicados y copias innecesarias",
      "Retiro de material de apoyo sin relevancia",
      "Conservación únicamente de documentos con valor legal"
    ],
    ejemplos: [
      "Fotocopias de documentos cuyos originales se conservan",
      "Borradores y documentos sin firma autorizada",
      "Formatos en blanco sin diligenciar",
      "Material publicitario y circulares meramente informativas"
    ]
  },
  {
    numero: 5,
    titulo: "LIMPIAR",
    subtitulo: "Sacar el material abrasivo del expediente",
    descripcion: "Retirar elementos que puedan dañar los documentos o interferir con su adecuada conservación a largo plazo.",
    detalles: [
      "Eliminación de material metálico oxidable",
      "Retiro de adhesivos y elementos químicos",
      "Limpieza de elementos plásticos innecesarios",
      "Preparación para conservación a largo plazo"
    ],
    ejemplos: [
      "Retirar ganchos, clips y material metálico",
      "Eliminar cintas adhesivas y notas autoadhesivas",
      "Quitar elementos plásticos (protectores, separadores)",
      "Limpiar polvo y suciedad de los documentos"
    ]
  },
  {
    numero: 6,
    titulo: "FOLIAR",
    subtitulo: "Numerar las hojas en el orden correcto",
    descripcion: "Numerar consecutivamente las hojas del expediente siguiendo las normas archivísticas para facilitar su consulta.",
    detalles: [
      "Numeración consecutiva en orden cronológico",
      "Ubicación en extremo superior derecho",
      "Uso de lápiz de grafito para permanencia",
      "Máximo 200 folios por unidad de conservación"
    ],
    ejemplos: [
      "Foliar en el extremo superior derecho",
      "Usar lápiz de mina negra tipo HB o B",
      "Numerar solo la cara recta (anverso) del folio",
      "Respetar límite de 200 folios por carpeta"
    ]
  },
  {
    numero: 7,
    titulo: "MARCAR",
    subtitulo: "Unidades de conservación según formatos establecidos",
    descripcion: "Rotular las carpetas con la información requerida según las normas archivísticas municipales para su identificación.",
    detalles: [
      "Rotulación con código de serie según TRD",
      "Identificación de dependencia productora",
      "Registro de años extremos de documentación",
      "Numeración consecutiva de unidades"
    ],
    ejemplos: [
      "Código de la serie/subserie según TRD municipal",
      "Nombre de la dependencia productora",
      "Número de carpeta y años extremos",
      "Número de folios e información identificatoria"
    ]
  },
  {
    numero: 8,
    titulo: "ELABORAR",
    subtitulo: "Inventario según formato único FUID",
    descripcion: "Crear el inventario documental utilizando el Formato Único de Inventario Documental según normativa archivística.",
    detalles: [
      "Diligenciamiento del formato FUID",
      "Registro detallado de cada expediente",
      "Información de fechas extremas",
      "Especificación de número de folios"
    ],
    ejemplos: [
      "Entidad productora: Alcaldía Municipal de Cajamarca",
      "Oficina productora: Secretaría, Dirección o Dependencia",
      "Objeto: Transferencia primaria o secundaria",
      "Relación detallada de expedientes y documentos"
    ]
  },
  {
    numero: 9,
    titulo: "UBICAR",
    subtitulo: "Las unidades de conservación en el mobiliario disponible",
    descripcion: "Colocar las unidades de conservación en el mobiliario archivístico de manera ordenada y accesible.",
    detalles: [
      "Organización por series en estantería",
      "Mantenimiento del orden del inventario",
      "Identificación clara de cada sección",
      "Optimización del espacio disponible"
    ],
    ejemplos: [
      "Organizar por series en estantería apropiada",
      "Mantener el orden establecido en el inventario",
      "Identificar claramente cada sección del archivo",
      "Facilitar la consulta y recuperación de información"
    ]
  },
  {
    numero: 10,
    titulo: "VERIFICAR",
    subtitulo: "La organización de los archivos municipales",
    descripcion: "Controlar que la organización documental cumpla con la normativa archivística vigente y los estándares municipales.",
    detalles: [
      "Control de cumplimiento normativo",
      "Verificación de aplicación correcta de TRD",
      "Evaluación de calidad de organización",
      "Revisión de condiciones de conservación"
    ],
    ejemplos: [
      "Cumplimiento de la normativa archivística",
      "Aplicación correcta de las TRD municipales",
      "Calidad de la organización documental",
      "Condiciones de conservación adecuadas"
    ]
  }
];

// Estado actual de la aplicación
let currentStep = 0;
let isDetailView = false;

// Inicializar aplicación
function init() {
  console.log('Inicializando aplicación de archivos de gestión...');
  renderStepsOverview();
  updateNavigation();
  updateProgress();
  console.log('Aplicación inicializada correctamente');
}

// Renderizar vista general de pasos
function renderStepsOverview() {
  const stepsGrid = document.getElementById('stepsGrid');
  if (!stepsGrid) {
    console.error('No se encontró el elemento stepsGrid');
    return;
  }

  stepsGrid.innerHTML = '';
  
  stepsData.forEach((step, index) => {
    const stepCard = document.createElement('div');
    stepCard.className = 'step-card';
    stepCard.onclick = () => showStepDetail(index);
    
    stepCard.innerHTML = `
      <div class="step-card__number">${step.numero}</div>
      <div class="step-card__title">${step.titulo}</div>
      <div class="step-card__subtitle">${step.subtitulo}</div>
      <div class="step-card__description">${step.descripcion}</div>
    `;
    
    stepsGrid.appendChild(stepCard);
  });
}

// Mostrar detalle de un paso específico
function showStepDetail(stepIndex) {
  console.log(`Mostrando detalle del paso ${stepIndex + 1}`);
  
  currentStep = stepIndex;
  isDetailView = true;
  
  const step = stepsData[stepIndex];
  
  // Actualizar elementos del DOM
  updateElement('stepNumber', step.numero);
  updateElement('stepTitle', step.titulo);
  updateElement('stepSubtitle', step.subtitulo);
  updateElement('stepDescription', step.descripcion);
  
  // Actualizar lista de detalles
  const detailsList = document.getElementById('stepDetailsList');
  if (detailsList && step.detalles) {
    detailsList.innerHTML = '';
    step.detalles.forEach(detalle => {
      const li = document.createElement('li');
      li.textContent = detalle;
      detailsList.appendChild(li);
    });
  }
  
  // Actualizar lista de ejemplos
  const examplesList = document.getElementById('stepExamplesList');
  if (examplesList && step.ejemplos) {
    examplesList.innerHTML = '';
    step.ejemplos.forEach(ejemplo => {
      const li = document.createElement('li');
      li.textContent = ejemplo;
      examplesList.appendChild(li);
    });
  }
  
  // Mostrar/ocultar secciones
  showElement('stepDetail');
  hideElement('stepsOverview');
  
  updateNavigation();
  updateProgress();
}

// Mostrar vista general de pasos
function showStepsOverview() {
  console.log('Mostrando vista general de pasos');
  
  isDetailView = false;
  currentStep = 0;
  
  showElement('stepsOverview');
  hideElement('stepDetail');
  
  updateNavigation();
  updateProgress();
}

// Ir al paso anterior
function goToPrevStep() {
  if (currentStep > 0) {
    showStepDetail(currentStep - 1);
  }
}

// Ir al paso siguiente
function goToNextStep() {
  if (currentStep < stepsData.length - 1) {
    showStepDetail(currentStep + 1);
  }
}

// Actualizar navegación
function updateNavigation() {
  const navigation = document.getElementById('navigation');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (!navigation || !prevBtn || !nextBtn) return;
  
  if (isDetailView) {
    navigation.style.display = 'flex';
    
    // Actualizar estado de botones
    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === stepsData.length - 1;
    
    // Actualizar estilos
    prevBtn.style.opacity = currentStep === 0 ? '0.5' : '1';
    nextBtn.style.opacity = currentStep === stepsData.length - 1 ? '0.5' : '1';
  } else {
    navigation.style.display = 'none';
  }
}

// Actualizar barra de progreso
function updateProgress() {
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  
  if (isDetailView && progressFill && progressText) {
    const progress = ((currentStep + 1) / stepsData.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Paso ${currentStep + 1}/10`;
  }
}

// Función para descargar PDF
function downloadPDF() {
  const btn = document.getElementById('downloadBtn');
  if (!btn) return;
  
  const originalText = btn.textContent;
  btn.textContent = 'Preparando PDF...';
  btn.disabled = true;
  
  // Simular descarga
  setTimeout(() => {
    btn.textContent = '✓ PDF Descargado';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 2000);
  }, 1500);
}

// Función para imprimir guía
function printGuide() {
  const btn = document.getElementById('printBtn');
  if (!btn) return;
  
  const originalText = btn.textContent;
  btn.textContent = 'Preparando...';
  btn.disabled = true;
  
  // Crear contenido para imprimir
  const printContent = `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
      <h1 style="color: #2E8B57; text-align: center;">ORGANIZACIÓN DE ARCHIVOS DE GESTIÓN</h1>
      <h2 style="color: #FFD700; text-align: center; background: #2E8B57; padding: 10px;">ALCALDÍA MUNICIPAL DE CAJAMARCA - TOLIMA</h2>
      
      ${stepsData.map(step => `
        <div style="margin-bottom: 30px; page-break-inside: avoid;">
          <h3 style="color: #2E8B57; border-bottom: 2px solid #FFD700; padding-bottom: 5px;">
            ${step.numero}. ${step.titulo}
          </h3>
          <h4 style="color: #5D6D7E; margin-bottom: 10px;">${step.subtitulo}</h4>
          <p style="margin-bottom: 15px;">${step.descripcion}</p>
          
          <div style="margin-left: 20px;">
            <h5 style="color: #2E8B57;">Detalles:</h5>
            <ul>
              ${step.detalles.map(detalle => `<li style="margin-bottom: 5px;">${detalle}</li>`).join('')}
            </ul>
            
            <h5 style="color: #2E8B57;">Ejemplos:</h5>
            <ul>
              ${step.ejemplos.map(ejemplo => `<li style="margin-bottom: 5px;">${ejemplo}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
      
      <div style="text-align: center; margin-top: 40px; padding: 20px; background: #F8FFF8;">
        <h3>MARCO NORMATIVO</h3>
        <p>• Ley 594 de 2000 - Ley General de Archivos</p>
        <p>• Decreto 1080 de 2015 - Decreto Único Reglamentario del Sector Cultura</p>
        <p>• Acuerdo AGN 001 de 2024 - Acuerdo Único de la Función Archivística</p>
      </div>
    </div>
  `;
  
  // Abrir ventana de impresión
  const printWindow = window.open('', '', 'width=800,height=600');
  printWindow.document.write(printContent);
  printWindow.document.close();
  printWindow.print();
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
  }, 1000);
}

// Funciones auxiliares
function updateElement(id, content) {
  const element = document.getElementById(id);
  if (element) element.textContent = content;
}

function showElement(id) {
  const element = document.getElementById(id);
  if (element) element.classList.remove('hidden');
}

function hideElement(id) {
  const element = document.getElementById(id);
  if (element) element.classList.add('hidden');
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', init);