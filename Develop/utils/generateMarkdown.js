// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {

  // Generate Table of Contents conditionally based on userResponses
  let makeTOC = `## Table of Contents`;

  if (userResponses.installation !== '') { makeTOC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { makeTOC += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { makeTOC += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { makeTOC += `
  * [Tests](#tests)` };


  // Generate markdown for the top required portions of the README
  let makeMarkdown = 
  `# ${userResponses.title}
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${userResponses.description}
  `

  // Add Table of Contents to markdown
  makeMarkdown += makeTOC;
 
  // Add License section since License is required to Table of Contents
  makeMarkdown += `
  * [License](#license)`;
  

  // Optional Installation section
  if (userResponses.installation !== '') {
  
  makeMarkdown +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userResponses.installation}`
  };
  

  // Optional Usage section
  if (userResponses.usage !== '') {
  
  makeMarkdown +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`
  };
  
  
  // Optional Contributing section
  if (userResponses.contributing !== '') {
  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${userResponses.contributing}`
  };
  

  // Optional Tests section
  if (userResponses.tests !== '') {
  
  makeMarkdown +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`
  };


  // License section is required
  makeMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;


  // Questions / About Developer section
  let makeDev = 
  `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
  
  makeDev +=
  `
  Email: ${userInfo.email}
  `};

  // Add developer section to markdown
  makeMarkdown += makeDev;

  // Return markdown
  return makeMarkdown;
  
}

module.exports = generateMarkdown;
