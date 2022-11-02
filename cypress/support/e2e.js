// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';

import addContext from 'mochawesome/addContext';
import 'cypress-mochawesome-reporter/register';
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    cy.move('Success');
    let parent = runnable.parent;
    let parentTitle = parent.title;
    while (parent.parent?.title) {
      parent = parent.parent;
      parentTitle = `${parent.title} -- ${parentTitle}`;
    }
    const screenshot = `${parentTitle} -- ${test.title} (failed).png`;
    addContext({ test }, screenshot);

    let videoName = Cypress.spec.name;
    videoName = videoName.replace('/.js.*', '.js');
    const videoUrl = 'videos/' + videoName + '.mp4';
    addContext({ test }, videoUrl);
  }
});

after(() => {
  if (Cypress.currentTest.state === 'failed') {
    cy.move('Success');
  }
});


./TestReport/cypress-tests-report.html

curl -F file=@TestReport/cypress-tests-report.html -F "initial_comment=Hello" -F channels=C03NKBG3QTF -H "Authorization: Bearer xoxb-2181353489-3901471769702-q3G0lkiDz3gUs1HII9ZWubYA" https://slack.com/api/files.upload
curl https://slack.com/api/files.upload -F token="xoxb-2181353489-3901471769702-q3G0lkiDz3gUs1HII9ZWubYA" -F channels="C03NKBG3QTF" -F title="html file" -F filename="cypress" -F file=@"test.txt"


xoxb-2181353489-3901471769702-q3G0lkiDz3gUs1HII9ZWubYA

curl -F file=@test.txt -F "initial_comment=Shakes the cat" -F channels=C03NKBG3QTF -H "Authorization: Bearer xoxb-2181353489-3901471769702-q3G0lkiDz3gUs1HII9ZWubYA" https://slack.com/api/files.upload

curl \
  -F token="xoxb-2181353489-4290430402514-zQ7Tt9VMuRIiWfviPu9vjubD" \
  -F file="@test.txt" \
  -F channel="C048X221Z89" \
  https://slack.com/api/files.upload


  curl -F file=@test.txt -F "initial_comment=Shakes the cat" -F channel=C048X221Z89 -H "Authorization: Bearer xoxb-2181353489-4290430402514-zQ7Tt9VMuRIiWfviPu9vjubD" https://slack.com/api/files.upload
