<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="../.github/logo.png" width="300px" />
</h1>

<h3 align="center">
  Challenge 2: FastFeet, the beginning
</h3>

<h3 align="center">
  :warning: Step 1/4 from the Final Challenge :warning:
</h3>

<p>This challenge is part of the Final Challenge, which is a complete application (Back-end, Front-end and Mobile), assessed to issue GoStack Bootcamp's Certificate. It must be done with much endeavor.</p>

<p align="center">“Do not wait to sow, be patient just to reap”!</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vsalbuq/gostack?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/vsalbuq/gostack/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/vsalbuq/gostack?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-the-challenge">The Challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-submission">Submission</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: The Challenge

Now we will begin the development of an app for a fictitious courier services' company, called FastFeet.

In this first challenge, we'll create some basic features we learnt along the lessons until now. This project will be developed step by step until the end of your journey, when you'll have a complete application, having back-end, front-end and mobile, which will be used for **the bootcamp's certification**, so let's code!

### **Some things about the tools**

You must create the application from scratch using [Express](https://expressjs.com/), and also set the following tools up:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (you can use PostgreSQL or MySQL);

### **Features**

The features you must add to your application are listed below.

### **1. Authentication**

A user must be allowed to sign into your app using an e-mail and a password.

Create an administrator credential using [Sequelize's seed feature](https://sequelize.org/master/manual/migrations.html#creating-first-seed), which allows us to create database entries automatically.

To create seeds, use this command:

    yarn sequelize seed:generate --name admin-user

In the file created at `src/database/seeds`, add the code for creating an admin credential:

```javascript
const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'FastFeet Courier Services',
          email: 'admin@fastfeet.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
```

Then run:

    yarn sequelize db:seed:all

Now you have a user in your database that can be used every time you sign in.

- It must be done using JWT.
- The data sent must be validated.

### 2. Recipient Management

Recipients must be registered/updated in the app, and they must have a **name** and address' fields: **street**, **number**, **complements**, **county**, **city** and **postal code**.

Create a new table at the database called `recipients` to store recipients' info.

Only authenticated administrators at the app can register recipients.

The recipient can't sign in to the system. This means he has no password.

## 📅 Submission

This challenge **does not need to be submitted** and will not be corrected. The source code of my implementation of this challenge is available in the repository of the whole application, **[here](fastfeetrepo)**.

You can find my own implementation

## :memo: License

This project is under MIT license. See the file [LICENSE](LICENSE.md) for detailed info.

---

Made with ♥ by Rocketseat :wave: [Come on our Discord channel!](https://discordapp.com/invite/gCRAFhc)

[fastfeetrepo]: https://github.com/vsalbuq/FastFeet#--
