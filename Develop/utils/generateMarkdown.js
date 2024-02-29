const index = require('../index');
const badge = require('badge-maker');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license) {
      const encodedLicense = encodeURIComponent(license);
      const end = `![License: ${encodedLicense}](https://img.shields.io/badge/License-${encodedLicense}-brightgreen.svg)`;
      console.log(end);
      return end
  }   else {
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
      // Define the license link based on the license type
      let licenseLink = '';

      switch (license) {
          case 'MIT':
              licenseLink = `https://opensource.org/licenses/MIT`;
              break;
         case 'GNU GPLv3': 
              licenseLink = `https://www.gnu.org/licenses/gpl.html`;
              break;
          case 'GNU AGPLv3':
              licenseLink = `https://www.gnu.org/licenses/agpl.html`;
              break;
          case 'GNU LGPLv3':
              licenseLink = `https://www.gnu.org/licenses/lgpl.html`;
              break;
          case 'Unlicense':
              licenseLink =  `https://unlicense.org`;
              break;
          default:
              break;
      }
      console.log(licenseLink);
      return licenseLink;
  } else {
      return ''; // Return an empty string if no license is provided
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
      return `## license
      This project is licensed under ${license}`
   }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  ${renderLicenseLink(data.license)}
  
  ${renderLicenseSection(data.license)}
  

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions, please contact [${data.username}](https://github.com/${data.username}) on GitHub or email at ${data.email}.
  `;
}

module.exports = generateMarkdown;
