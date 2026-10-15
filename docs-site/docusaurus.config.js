// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Comunicación Asertiva',
  tagline: 'Documentación del Proyecto 2',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://mariajo26.github.io',
  baseUrl: '/proyecto-comunicacion-asertiva/',

  organizationName: 'mariajo26',
  projectName: 'proyecto-comunicacion-asertiva',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'Comunicación Asertiva',
      logo: {
        alt: 'Logo de Comunicación Asertiva',
        src: 'img/Usac_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: 'https://github.com/mariajo26/proyecto-comunicacion-asertiva',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Recolección de información',
              to: '/docs/recoleccion-informacion/preguntas',
            },
            {
              label: 'Análisis',
              to: '/docs/analisis/requisitos',
            },
            {
              label: 'Propuesta',
              to: '/docs/propuesta/elevator-pitch',
            },
          ],
        },
        {
          title: 'Proyecto',
          items: [
            {
              label: 'Repositorio en GitHub',
              href: 'https://github.com/mariajo26/proyecto-comunicacion-asertiva',
            },
          ],
        },
      ],
      copyright: `Proyecto de Comunicación Asertiva · ${new Date().getFullYear()}`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;