const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
  watchForFileChanges: false,
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
    charts: true,
  },
  screenshotsFolder: 'Screenshots',
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        dynamicFiledownload: (downloadspath) => {
          return fs.readdirSync(downloadspath);
        },
      });
      on('before:run', (details) => {
        if (details.specs && details.browser) {
          // details.specs and details.browser will be undefined in interactive mode
          console.log(details.specs);
        }
      });
    },
  },
});
