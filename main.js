function selectRows(option1, option2) {
    var table = document.getElementById("DataTables_Table_0");

    if (!table) {
        console.error("Table with id 'DataTables_Table_0' not found.");
        return;
    }

    var rows = table.querySelectorAll("tbody tr");
    if (!rows) { return; }

    var radioButtonFound = false;

    rows.forEach(function (row) {
        var allOptions = row.querySelectorAll("input[type='radio']");
        if (allOptions && allOptions.length == 2) {
            allOptions[option2 - 1].checked = true;
            radioButtonFound = true;
        }
        else if (allOptions && allOptions.length == 5) {
            allOptions[option1 - 1].checked = true;
            radioButtonFound = true;
        }
    });

    if (radioButtonFound) {
        var submitButton = document.getElementById("cphPageContent_btnSaveFeedback");
        if (submitButton) {
            submitButton.click();
            // console.log("clicked");
        } else {
            console.error("Submit button with id 'cphPageContent_btnSaveFeedback' not found.");
        }
    } else {
        // console.log("No radio buttons found in any rows. Doing nothing.");
    }
}


if (!(localStorage.option1 && localStorage.option2)) {
    let option1 = -1;
    let option2 = -1;
    while (!(option1 >= 1 && option1 <= 5)) {
        option1 = Number(prompt("Enter value for feedback 1 to 5 1-Strongly Agree and 5-Strongly Disagree"));
    }

    while (!(option2 >= 1 && option2 <= 2)) {
        option2 = Number(prompt("Enter value 1 for Yes and 2 for No"));
    }
    localStorage.setItem("option1", option1);
    localStorage.setItem("option2", option2);

}

if (localStorage.option1 >= 1 && localStorage.option1 <= 5 && localStorage.option2 >= 1 && localStorage.option2 <= 2) {

    selectRows(localStorage.option1, localStorage.option2);
}
else {
    localStorage.removeItem("option1");
    localStorage.removeItem("option2");
}
