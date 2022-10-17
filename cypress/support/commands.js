// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// import addContext from 'mochawesome/addContext';

// Cypress.on('test:after:run', (test, runnable) => {
//   if (test.state === 'failed') {
//     cy.task('move', { message: 'Success' });

//     // const screenshot = `${Cypress.config('screenshotsFolder')}/${Cypress.config('testFolder')}/${Cypress.spec.name}/${runnable.parent.title}/${test.title} (failed).png`;
//     const screenshot = `${Cypress.config('testFolder')}/${
//       test.title
//     } (failed).png`;

//     addContext({ test }, screenshot);
//   }
// });

Cypress.Commands.add("move", (label) => {
    console.log(label)
    cy.exec('npm run move');
});