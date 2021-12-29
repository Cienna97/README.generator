
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return `![GitHub license](https://img.shields.io/github/license/<Github-Username>/<Repository>)`;
  }
  return'';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return'';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License
    
    To be licensed with the ${license}
    license.`;
  }
  return'';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Project Title

  ## Description

  ${data.description}

  ## Table of Contents

  *[Installation](#insallation)

  *[Usage](#usage)
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;