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
  [Questions](#Questions)
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
  ## Questions
  You can contact me at ${response.email} or on GitHub at https://github.com/${response.username}.
`;
}

module.exports = generateMarkdown;
