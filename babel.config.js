
const preventFullImport = !(process.env.NODE_ENV === 'test')

module.exports = {
  "presets": [
    [
      "@vue/app",
      {
        "useBuiltIns": "entry"
      }
    ]
  ],
  "plugins": [
    [
      "transform-imports",
      {
        "vuetify": {
          "transform": "vuetify/es5/components/${member}", // eslint-disable-line no-template-curly-in-string
          "preventFullImport": preventFullImport
        }
      }
    ]
  ]
}