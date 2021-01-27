// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === null) {
    return '';
  }
  return `![badge](https://img.shields.io/badge/license-${license}-blue)<br />`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `[MIT License](https://choosealicense.com/licenses/mit/)`;
    case 'Apache':
      return  `[Apache License](https://www.apache.org/licenses/)`;
    case null:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title}</h1>
  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions
  - My GitHub profile: [${data.username}](http://github.com/${data.username})
  - My GitHub repository: [${data.repo}](http://github.com/${data.repo}?tab=repositories)
  - Email me with any questions: ${data.email}
`;
}

module.exports = generateMarkdown;
