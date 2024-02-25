## Node TODO Application
### Cloud Applied Project Generative AI Engineer (Batch 53 Quarter 1)

Main function that runs the command line todo app.

Initializes an empty array to store Todo objects.

Starts a loop that prompts the user for an action.

Provides options to:
- Add a new todo
- Mark a todo as completed
- Remove a todo
- View all todos
- Quit the app

Has a switch statement to handle each option:
- Add: Prompts for todo text, creates Todo object, adds to array
- Complete: Prompts for ID, marks matching Todo as completed
- Remove: Prompts for ID, filters array to remove matching Todo
- View: Prints the array of Todos
- Quit: Breaks out of the loop to exit

Uses Inquirer for prompting and Chalk for colored console output.
 