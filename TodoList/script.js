const Form = document.querySelector("form");
const Inputtext = document.getElementById("Input-Text");
const ItemList = document.getElementById("list");
const InputDate = document.getElementById("Input-date");
const dropDown = document.getElementById("selected");

const TodoItem = [];


Form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newItem = document.createElement("li");

    if (InputDate.value && Inputtext.value !== "") {


        const dlt = document.createElement('button');
        dlt.appendChild(document.createTextNode("Delete"));
        dlt.onclick = function () {
            ItemList.removeChild(newItem);

        }

        newItem.innerText = InputDate.value + Inputtext.value + dropDown.options[dropDown.selectedIndex].value;
        newItem.appendChild(dlt);
        let newItems = {
            date: InputDate.value,
            message: Inputtext.value,
            peority: dropDown.options[dropDown.selectedIndex].value
        }
        TodoItem.push(newItems);

        Inputtext.value = "";
        InputDate.value = "";
        ItemList.appendChild(newItem);


    } else {

        alert("enter the todo list");
    }
})
console.log(TodoItem);
