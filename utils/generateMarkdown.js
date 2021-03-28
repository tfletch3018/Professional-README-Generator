// TODO: Create a function that returns a license badge based on which license is passed in

const licenses = require("./licenses")

// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${licenses[data.license.toLowerCase()]}\n${
  data.title ? `# ${data.title}` : ""
  }\n$  

  ## Badge

  ${licenses[data.license.toLowerCase() + "Badge"]}\n${
    data.title ? `# ${data.title}` : ""
  }\n$

  ## Contributors

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Username

  ${data.username}

  ## Repo
  
  ${data.repo}
`;
}

module.exports = generateMarkdown;
