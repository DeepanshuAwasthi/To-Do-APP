let taskinput = document.querySelector(".taskinput");
let addbtn = document.querySelector(".addbtn");

addbtn.addEventListener("click", addTask);

function addTask() {
    let taskText = taskinput.value;

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerText = taskText;

    // mark complete
    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });

    // delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "X";

    delBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(delBtn);

    document.querySelector(".tasklist").appendChild(li);

    taskinput.value = "";
}