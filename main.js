function selectRows() {
    var table = document.getElementById("DataTables_Table_0");

    if (!table) {
        console.error("Table with id 'DataTables_Table_0' not found.");
        return;
    }

    var rows = table.querySelectorAll("tbody tr");
    if (!rows) { return; }

    var radioButtonFound = false;

    rows.forEach(function (row) {
        var firstOption = row.querySelector("input[type='radio']");
        if (firstOption) {
            firstOption.checked = true;
            radioButtonFound = true;
        }
    });

    if (radioButtonFound) {
        var submitButton = document.getElementById("cphPageContent_btnSaveFeedback");
        if (submitButton) {
            submitButton.click();
        } else {
            console.error("Submit button with id 'cphPageContent_btnSaveFeedback' not found.");
        }
    } else {
        // console.log("No radio buttons found in any rows. Doing nothing.");
    }
}

selectRows();
