// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![license](https://img.shields.io/badge/License-MIT-green.svg)

  ## Table of Contents

    \n * [Description](#description)
    \n * [Installation](#installation)
    \n * [Usage](#usage)
    \n * [License](#license)
    \n * [Contributing](#contributing)
    \n * [Tests](#tests)
    \n * [Questions](#questions)

    ## Description \n${data.description}
    ## Installation \n${data.installation}
    ## Usage \n${data.usage}
    ## License \n${data.license}
    ## Contributing \n${data.contributing}
    ## Tests \n${data.tests}
    ## Questions
    \n* [Send me an email](mailto:${data.email}.com)
    \n* [Contact me via Github] (https://github.com/${data.github})

    ## License \n${data.license}
    `;
}

module.exports = generateMarkdown;
