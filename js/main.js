document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addBtn = document.getElementById("add-btn");
    const clearBtn = document.getElementById("clear-btn");
    const taskList = document.getElementById("task-list");

    const taskCounter = document.createElement("div");
    taskCounter.id = "task-counter";
    document.querySelector("main").appendChild(taskCounter);

    // Function to update the task counter
    const updateTaskCounter = () => {
        const totalTasks = taskList.children.length;
        const completedTasks = taskList.querySelectorAll('.completed').length;
        taskCounter.textContent = `Total Tasks: ${totalTasks} | Finished Tasks: ${completedTasks}`;
    };

    // Function to add a task
    // const addTask = () => {
    //     const taskText = taskInput.value.trim();
    //     if (taskText === "") return;


    //     const listItem = document.createElement("li");
    //     listItem.textContent = taskText;
    //     taskList.appendChild(listItem);

    //     taskInput.value = "";
    //     taskInput.focus();
    //     updateTaskCounter();
    // };

    // Function to add a task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.className = "task-item";

        // Checkbox for marking task as completed
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";

        // checkbox.addEventListener("change", (e) => {
        //     listItem.classList.toggle("completed", checkbox.checked);
        //     updateTaskCounter();
        // });

        // Task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskSpan.className = "task-label";

        // Mark task as completed when clicking on the text
        // taskSpan.addEventListener("click", () => {
        //     const isCompleted = listItem.classList.toggle("completed");
        //     checkbox.checked = isCompleted;
        //     updateTaskCounter();
        // });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        // deleteBtn.addEventListener("click", () => {
        //     taskList.removeChild(listItem);
        //     updateTaskCounter();
        // });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        // Mark task as completed when clicking anywhere on the list item except the delete button
        listItem.addEventListener("click", (e) => {
            if (e.target !== deleteBtn) {
                const isCompleted = listItem.classList.toggle("completed");
                checkbox.checked = isCompleted;
                updateTaskCounter();
            }
        });

        // Remove task when clicking the delete button
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent the list item click event
            taskList.removeChild(listItem);
            updateTaskCounter();
        });

        taskInput.value = "";
        taskInput.focus();
        updateTaskCounter();
    };

    // Function to clear all tasks
    const clearTasks = () => {
        taskList.innerHTML = "";
        updateTaskCounter();
    };

    // Event listeners
    addBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });

    clearBtn.addEventListener("click", clearTasks);

    // Initial task counter update
    updateTaskCounter();
});
