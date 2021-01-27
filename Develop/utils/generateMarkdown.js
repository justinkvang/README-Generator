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
function generateMarkdown(userResponse) {
  return `
  <h1 align="center">${userResponse.title}</h1>

  ![badge](https://img.shields.io/badge/license-${userResponse.license}-blue)<br />

  ## Description
  ${userResponse.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#questions)

  ## Installation
  ${userResponse.installation}

  ## Usage
  ${userResponse.usage}

  ## License
  ${userResponse.license}
  ![badge](https://img.shields.io/badge/license-${userResponse.license}-blue)

  ## Contributing
  ${userResponse.contributing}

  ## Test
  ${userResponse.test}

  ## Questions
  - Find me on GitHub: [${userResponse.username}](http://github.com/${userResponse.username})
  - Email me with any questions: ${userResponse.email}
`;
}

module.exports = generateMarkdown;
