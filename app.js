// Using node.js module file system by calling from app.js 
const fs = require('fs');

// Implementing generatepage method from source files
const generatePage = require('./src/page-template.js');

const inquirer = require('inquirer');

const profileDataArgs = process.argv.slice(2);

const [Name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(Name,github), err => {
    if(err) throw err;
    console.log('Portfolio complete! Check out index.html to see the output!');
  });

