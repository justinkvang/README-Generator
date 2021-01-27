
  <h1 align="center">README Generator</h1>
  
  ![badge](https://img.shields.io/badge/license-MIT-blue)<br />

  ## Description
  Every good project needs a quality README with information about the appplication. Therefore I created a command-line application that generates a README file from a user's input using the Inquirer package. 

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#questions)

  ## Installation
  To generate your own README, first run `npm i` in order to install the npm package `inquirer` dependency. The application itself can be invoked with `node index.js`.

  ## Usage
  When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your project and GitHub information.

  The application then takes your response and will generate markdowns for the README file. The README will also include a badge for your license. 

  Once this is done, the `fs.writeFile` is used to generate your README file!

  ## License
  [MIT License](https://choosealicense.com/licenses/mit/)

  ## Contributing
  Please message with me any errors or improvements you may have. See the [Questions](#questions) section to contact me.

  ## Test
  

  ## Questions
  - My GitHub profile: [justinkvang](http://github.com/justinkvang)
  - My GitHub repository: [justinkvang](http://github.com/justinkvang?tab=repositories)
  - Email me with any questions: justinvang07@gmail.com
