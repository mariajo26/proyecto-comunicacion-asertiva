// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '01. Recolección de información',
      items: [
        'recoleccion-informacion/preguntas',
        'recoleccion-informacion/evidencias',
        'recoleccion-informacion/justificacion',
      ],
    },
    {
      type: 'category',
      label: '02. Análisis',
      items: [
        'analisis/flujo-negocio',
        'analisis/requisitos',
      ],
    },
    {
      type: 'category',
      label: '03. Propuesta',
      items: [
        'propuesta/elevator-pitch',
        'propuesta/acuerdos-tradeoffs',
        'propuesta/flujo-solucion',
        'propuesta/junta-directiva',
      ],
    },
    {
      type: 'category',
      label: '04. Post-mortem',
      items: [
        'post-mortem/documentos-postmortem',
      ],
    },
    {
      type: 'category',
      label: '05. Issues simulados',
      items: [
        'issues-simulados/issues',
      ],
    },
    {
      type: 'category',
      label: '06. Participación',
      items: [
        'participacion/participacion',
      ],
    },
  ],
};

export default sidebars;