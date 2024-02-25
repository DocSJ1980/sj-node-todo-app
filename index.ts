/* 
Todo List
Simple Command Line Todo App
Develop a simple command line Todo app using TypeScipt, Node.js and Inquirer.

Create a GitHub repository for the project and submit its URL in the project submission form. 
*/

import inquirer from "inquirer";
import chalk from "chalk";

// Interface for Todo

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let todos: Todo[] = [];
let nextId = 1;
async function askTodoId() {
  // code to ask user for ID
  const id = await inquirer.prompt([
    {
      name: "id",
      message: "Enter the todo ID:",
    },
  ]);
  return id;
}
// Main function
async function main() {
  while (true) {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "Add a new todo",
          "Mark todo as completed",
          "Remove a todo",
          "View all todos",
          "Quit",
        ],
      },
    ]);

    switch (answers.choice) {
      case "Add a new todo":
        const newTodo = await inquirer.prompt([
          {
            name: "text",
            message: "Enter the todo text:",
          },
        ]);
        todos.push({
          id: nextId++,
          text: newTodo.text,
          completed: false,
        });
        break;

      case "Mark todo as completed":
        if (todos.length === 0) {
          console.log(chalk.red.bold("No todos to mark as completed"));
          break;
        }
        const { id } = await askTodoId();
        const todo = todos.find((t) => t.id === parseInt(id));
        if (todo) {
          todo.completed = true;
        }
        break;

      case "Remove a todo":
        if (todos.length === 0) {
          console.log(chalk.red.bold("No todos to remove"));
          break;
        }
        const idToRemove = await askTodoId();
        todos = todos.filter((t) => t.id !== parseInt(idToRemove.id));
        break;

      case "View all todos":
        if (todos.length === 0) {
          console.log(chalk.red.bold("No todos to display"));
          break;
        }
        console.table(todos);
        break;

      case "Quit":
        return;
    }
  }
}

main();
