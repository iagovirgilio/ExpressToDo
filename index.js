const express = require('express');
const server = express();
const port = 3000;

server.use(express.json());

const projects = [
  {
    id: "1",
    title: 'Novo projeto',
    tasks: [
      'Tarefa 01',
    ]
  }
];

server.post('projects/', (req, res) => {
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

server.listen(port, () => console.log(`Serviço rodando na porta ${port}`));