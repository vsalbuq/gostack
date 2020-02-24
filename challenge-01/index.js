const express = require('express');

const app = express();

let projects = [];

let reqCount = 0;
const howManyReqs = (req, res, next) => {
  reqCount++;
  console.log(req.method, req.path);
  console.log(reqCount);
  return next();
};

const projectExists = (req, res, next) => {
  const { id } = req.params;

  if (id && !projects.some(p => p.id === id))
    return res.status(404).json({ error: 'There is no project with that id.' });

  return next();
};

app.use(express.json());
app.use(howManyReqs);

app.post('/projects', (req, res) => {
  /**
   * { id: "1", title: 'New project', tasks: [] }
   */

  const { id, title } = req.body;

  if (!(id && title))
    return res
      .status(400)
      .json({ error: 'Please send both the id and the title of the task.' });

  if (projects.find(p => p.id === id))
    return res
      .status(400)
      .json({ error: 'There is already a project with that id.' });

  projects.push({
    id,
    title,
    tasks: [],
  });

  return res.json(projects);
});

app.get('/projects', (req, res) => res.json(projects));

app.put('/projects/:id', projectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  let project = projects.find(p => p.id === id);

  if (!project)
    return res
      .status(404)
      .json({ error: 'There is no project registered with that ID.' });

  project.title = title;

  return res.json(project);
});

app.delete('/projects/:id', projectExists, (req, res) => {
  const { id } = req.params;

  if (!projects.some(p => p.id === id))
    return res.status(404).json({ error: 'There is no project with that id.' });

  projects = projects.filter(p => p.id != id);

  return res.json(projects);
});

app.post('/projects/:id/tasks', projectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!projects.some(p => p.id === id))
    return res.status(404).json({ error: 'There is no project with that id.' });

  let project = projects.find(p => p.id === id);

  project.tasks.push(title);

  return res.json(project);
});

app.listen(3333);
