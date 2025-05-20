# Todo-HW-NestJs
Простой TODO-API на NestJS с хранением в SQLite

## SETUP INSTRUCTIONS
### 1.Prerequisite
- *Git* https://github.com/LIS-One/Todo-HW-NestJs.git
- *Node.js* 22.15.1 https://nodejs.org/en/blog/release/v22.15.1
- *npm* together with node.js
- *Docker*
### 2.Clone repository
```bash
git clone  https://github.com/LIS-One/Todo-HW-NestJs.git
cd your-repo
```
### 3.npm install

### 4.Run with Docker
docker build -t my-nestjs-app .
docker run -p 3000:3000 my-nestjs-app


###### API DESCRIPTION
This api is used to create, monitor and keep track of your tasks, with ToDo task can with certain *title* 
can be in two states(enum) 'in progress' by default when creating a new task, and 'completed', also they can be removed
if you find them not useful
##### API ENDPOINT
*POST*
/todos
 - creates new ToDo, must provide ToDoDto with neccesarily field in Json Body;
 - {
   "title": "New task",
   }
*PATCH*
/todos/{id}
 - updates current status of Todo witch matching id
 - { "status": "completed" }
*DELETE*
/todos/{id}
 - removing completely Todo from repository forever
*GET*
/todos?status=in progress || /todos?status=completed
 - returning array of tasks with specified status: in progress or completed

