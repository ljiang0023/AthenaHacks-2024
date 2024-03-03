$(document).ready(function () {
    var taskNum = 1;
    const submitBTN = document.querySelector('#submit-button');
    var PasswordField = document.getElementById('password-input');
    var duckIcon = document.getElementById('duck-icon'); 
    var taskIcon1 = document.getElementById('Task1');
    var taskIcon2 = document.getElementById('Task2');
    var taskIcon3 = document.getElementById('Task3');

    submitBTN.addEventListener('click', function () {
        var UserIn = PasswordField.value;

        if (taskNum == 1) {
            if (UserIn == "Workshop Room") {
                document.getElementById('task-num').innerText = "I still need cloth";
                document.getElementById('task-desc').innerText = "This is Task 2";
                taskIcon1.src = 'Images/Task1_icon.png'; //color icons
                duckIcon.src = 'Images/Task1_Complete.png';//Changes Image
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Wrong Answer");
            }
        } else if (taskNum == 2) {
            if (UserIn == "Room") {
                document.getElementById('task-num').innerText = "Don't forget Laptop";
                document.getElementById('task-desc').innerText = "This is Task 3";
                taskIcon2.src = 'Images/Task2_icon.png'; //color icons
                duckIcon.src = 'Images/Task2_Complete.png';//Changes Image
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Wrong Answer");
            }
        } else if (taskNum == 3) {
            if (UserIn == "Sleep Room") {
                document.getElementById('task-num').innerText = "Task completed!";
                document.getElementById('task-desc').innerText = "Congratulations!";
                taskIcon3.src = 'Images/Task3_icon.png'; //color icons
                duckIcon.src = 'Images/Task3_Complete.png';//Changes Image
                errorMessage.style.color = "black";
                taskNum++;
            } else {
                errorMessage.style.color = "red";
                alert("Wrong Answer");
            }
        }
    });
});
