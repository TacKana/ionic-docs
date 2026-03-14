const path = require('path');
const prismic = require('@prismicio/client');
const fetch = require('node-fetch');

const VERSIONS_JSON = require('./versions.json');

/**
 * Ionic 文档的旧版本会被归档，
 * 这样我们就不需要在每次部署时重新构建它们。
 * 一次性构建大量文档站点可能会导致内存不足问题，
 * 因此归档旧文档站点可以让我们保持较低的内存使用率和构建时间。
 *
 * 注意：此文件仅适用于使用 Docusaurus 构建的 Ionic 文档版本。
 * Ionic v3 和 v4 文档是使用其他工具构建的，因此这些版本不包含在此处。
 *
 * 注意：此文件中指定的 URL 不应有尾部斜杠，
 * 否则用户在文档网站加载之前会短暂遇到 404 页面未找到错误。
 */
const ARCHIVED_VERSIONS_JSON = require('./versionsArchived.json');

/**
 * 此函数返回一个数组，其中每个条目是一个数组，
 * 索引 0 处为版本名称，索引 1 处为归档 URL。
 */
const ArchivedVersionsDropdownItems = Object.entries(ARCHIVED_VERSIONS_JSON).splice(0, 5);

const BASE_URL = '';

module.exports = {
  title: 'Ionic 官方中文文档',
  tagline:
    'Ionic 是面向Web开发者的应用平台。借助一个共享代码库和开放的Web标准，构建出色的移动应用和Web应用。',
  url: 'https://ionic.xuxo.top',
  baseUrl: `${BASE_URL}/`,
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
      'zh-Hans': { label: '简体中文' },
      en: { label: 'English' },
      ja: { label: '日本語' },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta/favicon-96x96.png',
  organizationName: 'ionic-team',
  projectName: 'ionic-docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        // 将传递给 @docusaurus/plugin-content-docs（设为 false 以禁用）。
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ versionDocsDirPath, docPath }) => {
            let match;
            if ((match = docPath.match(/api\/(.*)\.md/)) != null) {
              return `https://github.com/TacKana/ionic-docs/tree/main/docs/api/${match[1]}.md`;
            }
            if ((match = docPath.match(/cli\/commands\/(.*)\.md/)) != null) {
              return `https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/${match[1].replace(
                '-',
                '/'
              )}.ts`;
            }
            if ((match = docPath.match(/native\/(.*)\.md/)) != null) {
              return `https://github.com/ionic-team/capacitor-plugins/edit/main/${match[1]}/README.md`;
            }
            return `https://github.com/TacKana/ionic-docs/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          exclude: ['README.md'],
          lastVersion: 'current',
          /** @type {import('@docusaurus/plugin-content-docs').VersionOptions} */
          versions: {
            current: {
              label: 'v8',
            },
          },
        },
        // 将传递给 @docusaurus/plugin-google-tag-manager。
        googleTagManager: {
          containerId: 'GTM-TKMGCBC',
        },
        // 将传递给 @docusaurus/theme-classic。
        theme: {
          customCss: [
            require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
            require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
            require.resolve('./src/styles/custom.scss'),
          ],
        },
      },
    ],
  ],
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    announcementBar: {
      id: 'announcement-bar',
      content:
        '<a href="https://www.outsystems.com/?utm_source=ionic&utm_medium=referral&utm_campaign=ionic-referral&utm_term=none&utm_content=other&utm_campaignteam=digital-mktg&utm_partner=none" target="_blank" rel="noopener"><span>An <strong>OutSystems</strong> Company →</span></a>',
      isCloseable: false,
    },
    metadata: [
      { name: 'og:image', content: 'https://ionicframework.com/docs/img/meta/open-graph.png' },
      { name: 'twitter:image', content: 'https://ionicframework.com/docs/img/meta/open-graph.png' },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:domain',
        content: 'ionicframework.com',
      },
      {
        name: 'twitter:site',
        content: '@ionicframework',
      },
      {
        name: 'twitter:creator',
        content: 'ionicframework',
      },
      {
        name: 'fb:page_id',
        content: '1321836767955949',
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:site_name',
        content: 'Ionic Framework Docs',
      },
    ],
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: '站点徽标',
        src: `/logos/ionic-text-docs-dark.svg`,
        srcDark: `/logos/ionic-text-docs-light.svg`,
        href: '/',
        target: '_self',
        width: 139,
        height: 28,
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          label: '指南',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'components',
          label: '组件',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'cli',
          label: 'CLI',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'native',
          label: '原生',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'updating/8-0',
          label: 'Ionic v8.0.0 升级指南',
          position: 'left',
          className: 'cta',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [
            ...ArchivedVersionsDropdownItems.map(([versionName, versionUrl]) => ({
              label: versionName,
              /**
               * 使用 "to" 而不是 "href"，这样外部 URL 图标就不会显示。
               */
              to: versionUrl,
              /**
               * 就像本项目中的版本文档一样，
               * 我们希望归档版本也在同一个标签页中打开。
               */
              target: '_self',
            })),
            { to: 'https://ionicframework.com/docs/v4/components', label: 'v4', target: '_blank' },
            { to: 'https://ionicframework.com/docs/v3/', label: 'v3', target: '_blank' },
          ],
          // dropdownItemsAfter: [{to: '/versions', label: '所有版本'}],
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          label: '社区',
          position: 'right',
          items: [
            {
              href: 'https://ionicframework.com/community',
              label: '社区中心',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://forum.ionicframework.com/',
              label: '论坛',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://www.meetup.com/topics/ionic-framework/',
              label: '聚会',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://blog.ionicframework.com/',
              label: '博客',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://twitter.com/ionicframework',
              label: 'Twitter',
              target: '_blank',
              rel: null,
            },
          ],
          className: 'navbar__link--community',
        },
        {
          label: '支持',
          position: 'right',
          items: [
            {
              href: 'https://ionicframework.com/support',
              label: '帮助中心',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://ionic.zendesk.com/',
              label: '客户支持',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://ionicframework.com/advisory',
              label: '企业咨询',
              target: '_blank',
              rel: null,
            },
          ],
          className: 'navbar__link--support',
        },
        {
          type: 'html',
          position: 'right',
          value: '<div class="separator" aria-hidden></div>',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsBefore: [],
          dropdownItemsAfter: [
            {
              href: 'https://ionicframework.com/translate',
              label: '翻译',
              target: '_blank',
              rel: null,
            },
          ],
          className: 'icon-link language navbar__item',
        },
        {
          href: 'https://twitter.com/Ionicframework',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-twitter',
          'aria-label': 'Twitter',
          target: '_blank',
        },
        {
          href: 'https://ionic.link/discord',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-discord',
          'aria-label': 'Discord',
          target: '_blank',
        },
        {
          href: 'https://github.com/ionic-team/ionic-framework',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-github',
          'aria-label': 'GitHub 仓库',
          target: '_blank',
        },
      ],
    },
    prism: {
      theme: { plain: {}, styles: [] },
      // Prism 提供了[默认语言列表](https://github.com/FormidableLabs/prism-react-renderer/blob/e1c83a468b05df7f452b3ad7e4ae5ab874574d4e/packages/generate-prism-languages/index.ts#L9-L26)。
      // 在其网站上可以找到支持的[其他语言列表](https://prismjs.com/#supported-languages)。
      additionalLanguages: ['shell-session', 'http', 'diff', 'json'],
    },
    algolia: {
      appId: 'O9QSL985BS',
      apiKey: 'ceb5366064b8fbf70959827cf9f69227',
      indexName: 'ionicframework',
      contextualSearch: true,
    },
  },
  plugins: [
    // 允许在 CSS 预处理器中使用 Sass/SCSS。
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    function (context, options) {
      return {
        name: 'ionic-docs-ads',
        async loadContent() {
          const repoName = 'ionicframeworkcom';
          const endpoint = prismic.getEndpoint(repoName);
          const client = prismic.createClient(endpoint, {
            fetch,
          });

          return await client.getByType('docs_ad');
        },
        async contentLoaded({ content, actions: { setGlobalData, addRoute } }) {
          return setGlobalData({ prismicAds: content.results });
        },
      };
    },
    [
      path.resolve(__dirname, 'plugins', 'docusaurus-plugin-ionic-component-api'),
      {
        versions: VERSIONS_JSON,
      },
    ],
  ],
  customFields: {},
  themes: [],
};