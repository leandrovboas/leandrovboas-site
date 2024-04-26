const withImages = require('next-images');

module.exports = withImages({
  pageExtensions: ['tsx'],
  esModule: true,
  compress: false,
  trailingSlash: true,
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'pt-BR'
  },
  beforeFiles: [
    {
      source: '/projetos',
      has: [
        {
          type: 'host',
          value: 'projetos.leandrovboas.com.br'
        }
      ],
      destination: '/projetos'
    }
  ]
});
