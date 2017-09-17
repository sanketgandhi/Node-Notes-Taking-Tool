# Note taking tool using NodeJS CLI

> This application is useful to take notes using NodeJS CLI. All the notes are stored in json format.

## How to use
* We can Use following command
    
    `node app.js <command> --title=<titleName> --body=<body>`

command - 
+ add: To add the notes
+ list: To listout all the notes
+ remove: To remove particular note using title
+ read: To read the note using title

## Examples
> `node app.js add --title="ToDo List" --body="Buy groceries"`
> `node app.js list`  
> `node app.js read --title="ToDo List"`    
> `node app.js remove --title="ToDo List"`
