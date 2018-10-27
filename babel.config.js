module.exports = {
  "presets": [
    ["env", { "modules": false }],
    [
      "@vue/app",
      {
        "useBuiltIns": "entry"
      }
    ]
  ],
  "env": {
    "test": {
      "presets": [
        ["env", { "targets": { "node": "current" }}]
      ]
    }
  },
  "plugins": [
    
    [
      "transform-imports",
      {
        "vuetify": {
          "transform": "vuetify/es5/components/${member}", // eslint-disable-line no-template-curly-in-string
          "preventFullImport": true
        }
      }
    ]
  ]
}