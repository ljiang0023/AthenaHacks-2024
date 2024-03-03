$(document).ready(function () {
    var taskNum = 1;
    const submitBTN = document.querySelector('#submit-button');
    var PasswordField = document.getElementById('password-input');
    var duckIcon = document.getElementById('duck-icon');

    submitBTN.addEventListener('click', function () {
        var UserIn = PasswordField.value;

        if (taskNum == 1) {
            if (UserIn == "Workshop Room") {
                document.getElementById('task-num').innerText = "Task #2";
                document.getElementById('task-desc').innerText = "This is Task 2";
                duckIcon.src = 'Images/Task1_Complete.png';//Changes Image
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Wrong Answer");
            }
        } else if (taskNum == 2) {
            if (UserIn == "Room") {
                document.getElementById('task-num').innerText = "Task #3";
                document.getElementById('task-desc').innerText = "This is Task 3";
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Wrong Answer");
            }
        } else if (taskNum == 3) {
            if (UserIn == "Sleep Room") {
                document.getElementById('task-num').innerText = "Task completed!";
                document.getElementById('task-desc').innerText = "Congratulations!";
                errorMessage.style.color = "black";
                taskNum++;
            } else {
                errorMessage.style.color = "red";
                alert("Wrong Answer");
            }
        }
    });
});
