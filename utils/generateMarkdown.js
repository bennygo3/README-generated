// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';

    case 'GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    case 'AGPLv3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';

    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';

    case 'GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';

    case 'AGPLv3':
      return 'https://www.gnu.org/licenses/agpl-3.0';

    default: 
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case 'MIT':
      return `## License: 
      
      ${license}`;

    case 'Apache 2.0':
      return `## License: 
      
      ${license}`;

    case 'ISC':
      return `## License:
      
      ${license}`;

    case 'GPLv3':
      return `## License:
      
      ${license}`;

    case 'AGPLv3':
      return `## License:
      
      ${license}`;
    
    default:
      return '## License:'
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**

  ### :point_right: ${renderLicenseBadge(data.license)}
       You can find more licensing information at the bottom of the page           
  
  ### **Description:** 
  
  ${data.desc}

  ## **Table of contents:**
   -[Installation Instructions](#Instructions:)
   -[Test Instructions](#Test:)
   -[Usage](#Usage:)
   -[Contribute](#Contribute:)
   -[Contact Info](#Contact:)
   -[License](#License:)
  ##

  ### **Instructions:**

  These are the packages to install:

  ${data.install}

  ### **Test:**
  
  To test the application:

  ${data.test}

  ### **Usage:**


  ${data.usage}

  ### **Contribute:**

  Here is how you can contribute:
  
  ${data.contribute}

  ### **Contact:**

  You can locate my work by my GitHub name:
  
  ${data.github}

  Or reach at to me by my email:
  
  ${data.email}

  ## **License:**

  ${renderLicenseSection(data.license)}
 
  Link to the license:

  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;