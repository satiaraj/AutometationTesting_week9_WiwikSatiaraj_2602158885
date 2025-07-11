// const { defineConfig } = require('cypress')
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
// const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
// const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')


// module.exports = defineConfig({
//   e2e: {
//     async setupNodeEvents(on, config) {
//       await addCucumberPreprocessorPlugin(on, config)

//       on('file:preprocessor', createBundler({
//         plugins: [createEsbuildPlugin.default(config)]
//       }))

//       return config
//     },
//     specPattern: 'cypress/e2e/features/**/*.feature',
//     supportFile: 'cypress/support/e2e.js',
//     stepDefinitions: ['cypress/step_definitions/**/*.{js,mjs,ts,tsx}'],
//   },
// })
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config); // cucumber
      mochawesome(on); // reporter

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        }),
      );

      return config;
    },

    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    stepDefinitions: ['cypress/step_definitions/**/*.{js,mjs,ts,tsx}'],

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});
