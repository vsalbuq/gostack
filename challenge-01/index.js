const express = require('express');

const app = express();

app.use(express.json());

app.post('/projects', (req, res) => {
  /**
   * { id: "1", title: 'New project', tasks: [] }
   */

  const { id, title, tasks } = req.body;
});

app.listen(3333);
