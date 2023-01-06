document.addEventListener("DOMContentLoaded", function (event) {
    const TODO_ITEMS = ["Walk the dog", "Walk the fox", "Walk the elephant", "Walk the  cat"];

    let input = prompt("What would you like to do?");

    while (input !== 'quit') {
        
        if(input === 'new') {
            TODO_ITEMS.push(prompt("Type the elements you want to add to the list"));
        }
        else if(input === 'list') {
            console.log("*************************************");
            for (let i = 0; i < TODO_ITEMS.length; i++) {
                console.log(
                    `${i}: ${TODO_ITEMS[i]}`
                );
            };
            console.log("*************************************");
        }
        else if(input === 'delete') {
            let index = parseInt(prompt("Enter the element you want to delete"));
            if(!Number.isNaN(index)){
                TODO_ITEMS.splice(index, 1); 
                console.log(`Deleted element with index ${index}`)
            }
            else{
                console.log("Unknown index")
            }   
        }
        input = prompt("What would you like to do?");
    }
    console.log("YOU QUITTED THE APP");
});

