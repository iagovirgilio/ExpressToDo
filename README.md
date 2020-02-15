<h1 align="center">
    <br>
    ExpressToDo
</h1>

<h4 align="center">
API that stores related projects and tasks in a list. They can be consulted, deleted or edited.
</h4>

This project was developed with the following technologies:

-  [Node](https://nodejs.org/en/)
-  [Express](https://expressjs.com/pt-br/)
-  [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/iagovirgilio/ExpressToDo.git

# Go into the repository
$ cd ExpressToDo

# Install dependencies
$ yarn install

# Start run command.
$ yarn dev
```
---
## ROUTS

#### Add project
To add a project, use the id and title parameter in the request body. Method `POST`

```
http://localhost:3000/projects
```
```js
{
  id: "1",
  title: "New project",
}
```
---
#### Edit project
To edit a project, pass id as a parameter in the URL and the title in the request body. Method `PUT`
```
http://localhost:3000/projects/id
```
```js
{
	"title": "Título Novo"
}
```
---
#### List projects
GET the URL. Methog `GET`
```
http://localhost:3000/projects
```
---
#### Delete project
Pass the id in URL. Method `DELETE`
```
http://localhost:3000/projects/1
```
---
#### Add tasks in the projects.
Pass the title task. Method `POST`
```
http://localhost:3000/projects/1/tasks
```
```js
{
	"title": "New Task"
}
```

---

This project is under the MIT license. See the [LICENSE](https://github.com/iagovirgilio/ExpressToDo/blob/master/LICENSE) for more information.

---

Made with by Iago Virgílio :wave: [Get in touch!](https://www.linkedin.com/in/iagovirgilio/)
