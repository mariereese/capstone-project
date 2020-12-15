const path = require('path')

module.exports = {
  ignore: [
    '**/App.js',
    '**/*.test.js',
    '**/GlobalStyle.js',
    '**/**/Card.js',
    '**/**/PageWrapper.js',
  ],
  defaultExample: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  components: 'src/components/**/[A-Z]*.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/StyleWrapper'),
  },
}
