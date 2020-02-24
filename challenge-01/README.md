<h1 align="center">
    <img alt="GoStack" src="../.github/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Challenge 1: NodeJS Concepts
</h3>

<p align="center">“Your only limit is you”!</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vsalbuq/gostack?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<p align="center">
  <a href="#rocket-the-challenge">The Challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-submission">Submission</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: The Challenge

Create an application from scratch to store projects and tasks using [Express](https://expressjs.com).

### Routes

- `POST /projects`: The route must receive `id` and `title` inside the body of the request and store a new project in an array with this shape: `{ id: "1", title: 'New project', tasks: [] }`; Make sure you've sent not only the ID, but also the title of the project, as a double-quoted string.

- `GET /projects`: Rout that lists all projects and their tasks;

- `PUT /projects/:id`: The route must update only the title of the project that has the `id` seen on the parameters of the route;

- `DELETE /projects/:id`: The route must delete the project that has the `id` seen on the parameters of the route;

- `POST /projects/:id/tasks`: The route must receive a field `title` and store a new task in the task array of a specific project, defined by the `id` seen on the parameters of the route;

### Example

If I call `POST /projects` passing `{ id: 1, title: 'New project' }` and the route `POST /projects/1/tasks` with `{ title: 'New task' }`, my project array must be like that:

```js
[
  {
    id: '1',
    title: 'New project',
    tasks: ['New task'],
  },
];
```

### Middlewares

- Create a middleware to be used in all routes that receives the ID of the project in the parameters of the URL to check if there is a project with that ID. If it don't exists, return an error. If it does, allow the request to continue;

- Create a global middleware called in all requests that prints (`console.log`) how many requests were made until now;

## 📅 Submission

This challenge **does not need to be submitted** and will not be corrected, but you can see the result of the [code of the challenge here](https://github.com/vsalbuq/gostack/blob/master/challenge-01/index.js). After finishing the challenge, adding this code to your Github is a good way of showing your knowledge for future opportunities.

## :memo: License

This project is under MIT license. See the file [LICENSE](LICENSE.md) for detailed info.

---

Made with ♥ by Rocketseat :wave: [Come on our Discord channel!](https://discordapp.com/invite/gCRAFhc)
