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
function generateMarkdown(response) {
  return `# ${response.projectTitle}
  ## Description of project
  ${response.projectDesc}
  ## Table of Contents
  [Install Guide](#install-guide)
  [Test](#test)
  [Usage](#Usage)
  [Licensing](#Licensing)
  [Contributors](#Contributors)
  [Contact](#Contact)
  ## Install Guide
  You can install the required dependencies with this command in the command line: ${response.install}
  ## Test
  Run tests in the command line with this command: ${response.test}.
  ## Usage
  ${response.usage}
  ## Liscensing
  ${response.license}
  ## Contributors
  ${response.contributors}.
  ## Contact
  You can contact me at ${response.email} or on GitHub at ${response.username}.
`;
}

module.exports = generateMarkdown;
