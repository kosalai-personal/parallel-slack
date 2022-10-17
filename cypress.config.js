const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
  projectId: "sorry-cypress-demo",
  watchForFileChanges: false,
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
    charts: true,
  },
  screenshotsFolder: 'TestReport',
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
      // on('after:screenshot', (details) => {
      //   console.log(details); // print all details to terminal

      //   const newPath = 'screenshots/1.png';

      //   return new Promise((resolve, reject) => {
      //     // fs.rename moves the file to the existing directory 'new/path/to'
      //     // and renames the image to 'screenshot.png'
      //     fs.rename(details.path, newPath, (err) => {
      //       if (err) return reject(err);

      //       // because we renamed and moved the image, resolve with the new path
      //       // so it is accurate in the test results
      //       resolve({ path: newPath });
      //     });
      //   });
      // });
    },
  },
});
