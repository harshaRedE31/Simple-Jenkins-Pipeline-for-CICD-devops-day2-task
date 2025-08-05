const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Simple-Jenkins-Pipeline-for-CICD-devops-day2-task                                         The goal is to create a basic Jenkins pipeline to automate building and deploying an application. You will use Jenkins and Docker for this.');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});