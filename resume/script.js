const PROJECTS_API = 'https://raw.githubusercontent.com/arihara-sudhan/arihara-sudhan.github.io/refs/heads/main/resume/meta/projects.json';

async function createProjects() {
  try {
    const response = await fetch(PROJECTS_API);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const projects = await response.json();
    const projectsContainer = document.querySelector('.projects');
    let htmlContent = '';
    projects.forEach(project => {
      htmlContent += `
        <div class="project">
          <div class="primary">
            <div class="secondary">
              <img src="${project.imageUrl}" alt="${project.title}">
              <h2>${project.title}</h2>
            </div>
            <h2 class="dept">${project.dept}</h2>
          </div>
          <div class="description">
            <span>${project.description}</span>
          </div>
        </div>
      `;
    });
    projectsContainer.innerHTML = htmlContent;
  } catch (error) {
    console.log(error, "ERROR CREATING PROJECTS ARI! 🥴");
  }
}


const LANGUAGES_API = 'https://raw.githubusercontent.com/arihara-sudhan/arihara-sudhan.github.io/refs/heads/main/resume/meta/languages.json';

async function createLanguages() {
  try {
    const response = await fetch(LANGUAGES_API);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const languages = await response.json();
    const languagesContainer = document.querySelector('.languages');
    let htmlContent = '';
    languages.forEach(language => {
      htmlContent += `
        <div class="lang">
          <img src="${language.image.src}" alt="${language.image.alt}">
          <h2>${language.name}</h2>
        </div>
      `;
    });
    languagesContainer.innerHTML = htmlContent;
  } catch (error) {
    console.log(error, "ERROR CREATING LANGUAGES ARI! 🥴");
  }
}

createLanguages();
createProjects();