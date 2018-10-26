module.exports =   {
  "presets": [
    ["@babel/preset-env", { "modules": false }],
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
        ["@babel/preset-env", { "targets": { "node": "current" }}]
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

