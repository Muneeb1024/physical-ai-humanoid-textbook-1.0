// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical  AI & Robotic Book',
  tagline: 'An educational resource for robotics learning with AI integration',
  favicon: 'img/robotics-favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Muneeb1024/physical-ai-humanoid-textbook-1.0',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Muneeb1024', // Usually your GitHub org/user name.
  projectName: 'physical-ai-humanoid-textbook-1.0', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'], // Support English only for now
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Muneeb1024/physical-ai-humanoid-textbook-1.0/tree/main/physical-ai-book/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Muneeb1024/physical-ai-humanoid-textbook-1.0/tree/main/physical-ai-book',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/physical-ai-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      // Modern technology-themed color scheme: tech blues, robot grays, AI purples, accent greens/oranges
      navbar: {
        title: 'Physical  AI & Robotic Book',
        logo: {
          alt: 'Physical  AI & Robotic Book',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'Book',
            position: 'left',
          },
          {
            label: 'Modules',
            position: 'left',
            items: [
              {
                label: 'Module 1: ROS 2',
                to: '/docs/module-1-ros2/intro',
              },
              {
                label: 'Module 2: Gazebo',
                to: '/docs/module-2-gazebo/intro',
              },
              {
                label: 'Module 3: NVIDIA Isaac™',
                to: '/docs/module-3-nvidia-isaac/intro',
              },
              {
                label: 'Module 4: VLA',
                to: '/docs/module-4-vla/intro',
              },
            ],
          },
          {
            to: '/docs/ai-assistant',
            label: 'Chat',
            position: 'left',
          },
          {
            href: 'https://github.com/Muneeb1024/physical-ai-humanoid-textbook-1.0',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Textbook',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Module 1: ROS 2',
                to: '/docs/module-1-ros2/intro',
              },
              {
                label: 'Module 2: Gazebo & Unity',
                to: '/docs/module-2-gazebo/intro',
              },
              {
                label: 'Module 3: NVIDIA Isaac™',
                to: '/docs/module-3-nvidia-isaac/intro',
              },
              {
                label: 'Module 4: VLA',
                to: '/docs/module-4-vla/intro',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'AI Assistant',
                to: '/docs/ai-assistant',
              },
              {
                label: 'Interactive Simulators',
                to: '/docs/simulators',
              },
              {
                label: 'Code Examples',
                to: '/docs/code-examples',
              },
              {
                label: 'Assessments',
                to: '/docs/assessments',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/physical-ai',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/Muneeb1024/physical-ai-humanoid-textbook-1.0/discussions',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/physical-ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Humanoid & Robotic Book. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
