const fetch = require('node-fetch');

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-ionic-component-api',
    async loadContent() {
      const classicPreset = context.siteConfig.presets.find((preset) => preset[0] === '@docusaurus/preset-classic');
      // 查找 @docusaurus/preset-classic 的插件选项
      const docsPluginOptions = classicPreset[1].docs;

      const data = [];
      const currentVersion = docsPluginOptions.versions.current;

      /**
       * 为指定版本的所有组件生成 Markdown 文件。
       * @param {*} version 版本号，例如：v6
       * @param {*} npmTag npm 标签，例如：6 或 next
       * @param {*} lang 语言，例如：en 或 ja
       * @param {*} isCurrentVersion 是否是文档的当前版本
       */
      const generateMarkdownForVersion = async (version, npmTag, lang, isCurrentVersion) => {
        let COMPONENT_LINK_REGEXP;
        const response =
          isCurrentVersion && lang === 'ja'
            ? await fetch(`https://raw.githubusercontent.com/ionic-jp/ionic-docs/main/scripts/data/translated-api.json`)
            : await fetch(`https://unpkg.com/@ionic/docs@${npmTag}/core.json`);
        const { components } = await response.json();

        const names = components.map((component) => component.tag.slice(4));
        // 匹配所有指向组件的相对 Markdown 链接，例如 (../button)
        COMPONENT_LINK_REGEXP = new RegExp(`\\(../(${names.join('|')})/?(#[^)]+)?\\)`, 'g');

        components.forEach((comp) => {
          const compTag = comp.tag.slice(4);
          const outDir = getDirectoryPath(compTag, version, isCurrentVersion);

          data.push({
            outDir,
            componentTag: compTag,
            version,
            props: renderProperties(comp),
            events: renderEvents(comp),
            methods: renderMethods(comp),
            parts: renderParts(comp),
            customProps: renderCustomProps(comp),
            slots: renderSlots(comp),
          });
        });
      };

      for (const version of options.versions) {
        const npmTag = version.slice(1);

        await generateMarkdownForVersion(version, npmTag, context.i18n.currentLocale, false);
      }

      let npmTag = 'latest';
      if (currentVersion.banner === 'unreleased') {
        npmTag = 'next';
      } else if (currentVersion.path !== undefined) {
        npmTag = currentVersion.path.slice(1);
      }
      // 最新版本
      await generateMarkdownForVersion(
        currentVersion.path || currentVersion.label,
        npmTag,
        context.i18n.currentLocale,
        true
      );

      return data;
    },
    async contentLoaded({ content, actions }) {
      const { createData } = actions;
      const promises = [];

      for (const data of content) {
        const basePath = `${data.version}/${data.componentTag}`;
        /**
         * createData 会在插件目录下的 ./docusaurus 生成目录中创建文件。
         */
        promises.push(
          createData(`${basePath}/props.md`, stripDocsPrefix(data.props)),
          createData(`${basePath}/events.md`, stripDocsPrefix(data.events)),
          createData(`${basePath}/methods.md`, stripDocsPrefix(data.methods)),
          createData(`${basePath}/parts.md`, stripDocsPrefix(data.parts)),
          createData(`${basePath}/custom-props.mdx`, stripDocsPrefix(data.customProps)),
          createData(`${basePath}/slots.md`, stripDocsPrefix(data.slots))
        );
      }

      await Promise.all(promises);
    },

    configureWebpack(config, isServer, utils) {
      /**
       * 添加自定义 import 别名到 webpack 配置，使 Markdown 文件
       * 可以通过 @ionic-internal/component-api/{version}/{componentTag} 导入自动生成的 Markdown 文件。
       */
      return {
        resolve: {
          alias: {
            '@ionic-internal/component-api': `${context.siteDir}/.docusaurus/docusaurus-plugin-ionic-component-api/default`,
          },
        },
      };
    },
  };
};

/**
 * 计算存储自动生成的 Markdown 文件的目录路径。
 * @param {*} componentTag 组件标签名，例如：ion-button
 * @param {*} version 文件所属的 Ionic 版本，例如：v6
 * @param {*} isCurrentVersion 是否是文档的当前版本
 * @returns 存储自动生成的 Markdown 文件的目录路径
 */
function getDirectoryPath(componentTag, version, isCurrentVersion) {
  if (isCurrentVersion) {
    return `./docs/api/auto-generated/${componentTag}`;
  }
  return `./versioned_docs/version-${version}/api/auto-generated/${componentTag}`;
}

/**
 * 格式化多行字符串中的换行，以在表格中显示。
 * @param {*} str 要格式化的字符串
 * @returns 格式化后的字符串
 */
function formatMultiline(str) {
  return str.split('\n\n').join('<br /><br />').split('\n').join(' ');
}

function stripDocsPrefix(str) {
  return str.replace(/\]\(\/docs\//g, '](/');
}

/**
 * 为 API 标识符（camelCase 属性、方法名）生成 kebab-case 格式的 slug。
 */
function apiIdentifierSlug(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();
}

/**
 * Property 子标题的标题 id。
 * 使用 `prop-` 前缀，使其永远不会与同一文档页面上使用 "Shape"、"Fill" 或 "Size" 等标题的叙述性章节冲突。
 *
 * 锚点变为 `#prop-${slug}` 而非 `#${slug}`。
 */
function propertyHeadingId(propName) {
  return `prop-${apiIdentifierSlug(propName)}`;
}

/**
 * Methods 子标题的标题 id。
 * 使用 `method-` 前缀，使其永远不会与同一文档页面上使用 "Dismiss"、"Present" 或 "Close" 等标题的叙述性章节冲突。
 *
 * 锚点变为 `#method-${slug}` 而非 `#${slug}`。
 */
function methodHeadingId(methodName) {
  return `method-${apiIdentifierSlug(methodName)}`;
}

function formatType(attr, type) {
  if (attr === 'color') {
    /**
     * `color` 属性有一个额外类型，我们不想显示它。
     * 联合类型用于允许智能提示推荐颜色名称，同时仍然接受任何字符串值。
     */
    type = type.replace('string & Record<never, never>', 'string');
  }
  return type.replace(/\|/g, '\uff5c');
}

function renderProperties({ props: properties, docsTags }) {
  if (properties.length === 0) {
    return '该组件没有可用的属性。';
  }

  // 从组件级别的 docsTags 中提取虚拟属性名称
  const virtualPropNames = [];
  if (docsTags) {
    docsTags.forEach((tag) => {
      if (tag.name === 'virtualProp') {
        // 检查 virtualProp 标签文本中是否包含任何属性名称
        // 并将其添加到 virtualPropNames 数组中
        properties.forEach((prop) => {
          if (tag.text.includes(prop.name)) {
            virtualPropNames.push(prop.name);
          }
        });
      }
    });
  }

  // 注意：将 | 替换为 U+FF5C，因为 MDX 在表格中渲染 \| 不正确
  return `
${properties
  .map((prop) => {
    const isDeprecated = prop.deprecation !== undefined;
    const isVirtual = virtualPropNames.includes(prop.name);

    let docs = prop.docs;
    if (isVirtual) {
      docs = `${docs}\n\n这是一个[虚拟属性](/core-concepts/fundamentals#虚拟属性)，在初始化时设置一次，之后更改其值不会更新组件。`;
    }
    if (isDeprecated) {
      docs = `${docs}\n\n**_已弃用_** — ${prop.deprecation}`;
    }

    return `
### ${prop.name} ${isDeprecated ? '(已弃用)' : ''} {#${propertyHeadingId(prop.name)}}

| | |
| --- | --- |
| **说明** | ${formatMultiline(docs)} |
| **属性** | \`${prop.attr}\` |
| **类型** | \`${formatType(prop.attr, prop.type)}\` |
| **默认值** | \`${prop.default}\` |

`;
  })
  .join('\n')}`;
}

function renderEvents({ events }) {
  if (events.length === 0) {
    return '该组件没有可用的事件。';
  }

  return `
| Name | 说明 | 冒泡 |
| --- | --- | --- |
${events
  .map((event) => {
    const isDeprecated = event.deprecation !== undefined;
    const docs = isDeprecated ? `${event.docs}\n\n**_已弃用_** — ${event.deprecation}` : event.docs;
    return `| \`${event.event}\` ${isDeprecated ? '**(已弃用)**' : ''} | ${formatMultiline(docs)} | \`${
      event.bubbles
    }\` |`;
  })
  .join('\n')}`;
}

/**
 * 格式化方法参数，用于每个方法表的可选 Parameters 行
 * @param {*} paramsArr 方法参数数组
 * @returns 格式化后的方法表格参数
 */
function renderParameters(paramsArr) {
  if (!paramsArr.some((param) => param.docs)) {
    return '';
  }

  const documentedParams = paramsArr.filter((param) => param.docs);
  const formattedParams = documentedParams
    .map((param) => {
      return `**${param.name}**: ${formatMultiline(param.docs)}`;
    })
    .join('<br/>');
  return `| **参数** | ${formattedParams} |`;
}

function renderMethods({ methods }) {
  if (methods.length === 0) {
    return '该组件没有可用的公共方法。';
  }

  // 注意：将 | 替换为 U+FF5C，因为 MDX 在表格中渲染 \| 不正确
  return `
${methods
  .map(
    (method) => `
### ${method.name} {#${methodHeadingId(method.name)}}

| | |
| --- | --- |
| **\u8bf4\u660e** | ${formatMultiline(method.docs)} |
| **\u7b7e\u540d** | \`${method.signature.replace(/\|/g, '\uff5c')}\` |
${method.parameters.length !== 0 ? renderParameters(method.parameters) : ''}
`
  )
  .join('\n')}

`;
}

function renderParts({ parts }) {
  if (parts.length === 0) {
    return '该组件没有可用的 CSS 阴影部分。';
  }

  return `
| Name | 说明 |
| --- | --- |
${parts.map((prop) => `| \`${prop.name}\` | ${formatMultiline(prop.docs)} |`).join('\n')}

`;
}

function renderCustomProps({ styles: customProps }) {
  const iosProps = customProps.filter((prop) => prop.mode === 'ios');
  const mdProps = customProps.filter((prop) => prop.mode === 'md');

  const renderTable = (props) => {
    if (props.length === 0) {
      return '该组件没有可用的 CSS 自定义属性。';
    }

    return `
    | Name | 说明 |
  | --- | --- |
  ${props.map((prop) => `| \`${prop.name}\` | ${formatMultiline(prop.docs)} |`).join('\n')}
  `;
  };

  if (iosProps.length > 0 || mdProps.length > 0) {
    // 如果组件有特定模式的自定义属性，则为 iOS 和 MD 渲染标签页
    return `
import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

\`\`\`\`mdx-code-block
<Tabs
  groupId="mode"
  defaultValue="ios"
  values={[
    { value: 'ios', label: 'iOS' },
    { value: 'md', label: 'MD' },
  ]
}>
<TabItem value="ios">

${renderTable(iosProps)}

</TabItem>

<TabItem value="md">

${renderTable(mdProps)}

</TabItem>
</Tabs>

\`\`\`\`

`;
  }
  // 否则直接渲染自定义属性，不显示 iOS/MD 标签页
  return renderTable(customProps);
}

function renderSlots({ slots }) {
  if (slots.length === 0) {
    return '该组件没有可用的插槽。';
  }

  return `
| Name | 说明 |
| --- | --- |
${slots
  .map((slot) => {
    const slotName = slot.name?.trim();
    const displayedSlotName = slotName ? `\`${slotName}\`` : '';
    return `| ${displayedSlotName} | ${formatMultiline(slot.docs)} |`;
  })
  .join('\n')}
`;
}
