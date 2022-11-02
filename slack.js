const { createReadStream } = require('fs');

const { WebClient } = require('@slack/web-api');

const token = 'xoxb-2181353489-4290430402514-zQ7Tt9VMuRIiWfviPu9vjubD';
const channelId = 'C048X221Z89';
const web = new WebClient(token);

const uploadFileToSlack = async () => {
  await web.files.upload({
    filename: 'testing',
    file: createReadStream('TestReport/cypress-tests-report.json'),
    channels: channelId,
  });
};

uploadFileToSlack();
