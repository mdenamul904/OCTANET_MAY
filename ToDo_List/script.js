$(document).ready(function() {
    $("#addTaskBtn").click(function() {
        addTask();
    });

    // Enter key press event for task input
    $("#taskInput").keypress(function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Complete Task button click event
    $(document).on("click", ".completeBtn", function() {
        var taskItem = $(this).parent();
        taskItem.find(".completeBtn, .deleteBtn").remove();
        taskItem.appendTo("#completedList");
        taskItem.addClass("completed");
    });

    // Delete Task button click event
    $(document).on("click", ".deleteBtn", function() {
        var taskItem = $(this).parent();
        taskItem.find(".completeBtn, .deleteBtn").remove();
        taskItem.append("<button class='undoBtn'>Done</button>");
        taskItem.appendTo("#deletedList");
        taskItem.addClass("deleted");
    });

    // Undo Task button click event
    $(document).on("click", ".undoBtn", function() {
        var taskItem = $(this).parent();
        taskItem.find(".undoBtn").remove();
        taskItem.appendTo("#completedList");
        taskItem.removeClass("completed deleted");
    });

    // Function to add a new task
    function addTask() {
        var taskName = $("#taskInput").val().trim();
        if (taskName !== "") {
            var taskItem = $("<li class='task-item'>" + taskName + "</li>");
            taskItem.append("<button class='completeBtn'>Complete</button>");
            taskItem.append("<button class='deleteBtn'>Delete</button>");
            $("#processList").append(taskItem);
            $("#taskInput").val("");
        } else {
            alert("Please enter a task name.");
        }
    }
});