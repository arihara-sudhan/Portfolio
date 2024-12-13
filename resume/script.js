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

createProjects();