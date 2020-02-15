const express = require('express');
const server = express();
const port = 3000;

server.use(express.json());

const projects = [];

// Middleware que dá log no número de requisições

server.use((req, res, next) =>{
  console.count("Número de requisições");

  next();
});

// Middleware que checa se o projeto existe

function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
}

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  }
  projects.push(project);

  return res.json(projects);
});

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.find(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
})

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projectTask = projects.find(p => p.id == id);

  projectTask.tasks.push(title);

  return res.json(projectTask);
})

server.listen(port, () => console.log(`Serviço rodando na porta ${port}`));