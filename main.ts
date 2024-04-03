import inquirer from "inquirer";
 let todo :string[]= [];
 let condition= true;
console.log(`Welcome to Todo App!!`)
while(condition){
        let todos = await inquirer.prompt(
            [   {
                    name : "questionAsk2",
                    type: "list",
                    message:"Please select It ",
                    choices: ["Add", "Delete", "Read", "Update", "Quit"]

                },
            ]
        )
        if(todos.questionAsk2 === "Quit"){
            condition = false;
            console.log("Thanks for using Todo App")
        }
        else if(todos.questionAsk2 === "Add"){
            let addtask = await inquirer.prompt ({
                name:"additem",
                type:"input",
                message:"Please Enter Task"

            })
            console.log("Add Successfully")
                    todo.push(addtask.additem)
                    console.log(todo)
    }
    else if(todos.questionAsk2==="Delete"){
        if(todo.length===0){
            console.log("There is No Task to delete")
        }
        else {
            let deletetask =  await inquirer.prompt({
                name: "deleteitem",
                type:"list",
                message:"Select the task to delete:",
                choices:todo
            });
            let index = todo.indexOf(deletetask.deleteitem);
            if (index !==-1){
                todo.splice(index, 1);
                console.log("Task Delete Successfully!");
                console.log(todo);

            }
            else{
                console.log("Task not found in the list.");
            }

        }
    }
    else if(todos.questionAsk2 === "Read"){
        if (todo.length===0){
            console.log( "No tasks available.");
        }
        else {
            console.log("current Task")
            console.log(todo)
        }
    }
    else if(todos.questionAsk2 === "Update"){
        if(todo.length == 0){
            console.log("There are no Task to Update")
        }
        else {
            let updatetask = await inquirer.prompt({
                name :"update",
                type: "list",
                choices:todo,
                message:"Select the task to Update"
            });
            let index = todo.indexOf(updatetask.update);
            if(index !==-1) {
                let newtaskvalue = await inquirer.prompt({
                    name:"newtask",
                    type:"input",
                    message:"Enter the value of for the Task"
                });
                todo[index]=newtaskvalue.newtask
                console.log("The Task Update Successfully")
                console.log(todo)
            }
            else {
                console.log("Task not found in this list!")
            }
        }
    }

}