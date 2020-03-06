window.onload = function(newExpense) {
    document.getElementById("add-button").addEventListener("click", createExpensItem);
    let newExpenseArray = JSON.parse(localStorage.getItem("newExpense")) || [];
    for(let i = 0; i < newExpenseArray.length; i++) {
        createTableRow(newExpenseArray[i])
    }
}

function createExpensItem(e) {
    e.preventDefault();

    let type = document.getElementById("currency-type").value;
    let purchase = document.getElementById("purchased").value;
    let date = document.getElementById("date").value;
    let amount = document.getElementById("amount").value;

    let newExpense = {
        id: Date.now(),
        type,
        purchase,
        date,
        amount
    }

    let newExpenseArray = JSON.parse(localStorage.getItem("newExpense")) || []
    newExpenseArray.push(newExpense);
    localStorage.setItem("newExpense", JSON.stringify(newExpenseArray));
    createTableRow(newExpense);
}

function createTableRow(newExpense) {
    let tableBody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    tr.id = newExpense.id;
    tableBody.appendChild(tr);

    document.createElement("td");
    tr.appendChild(createTypeDataCell(newExpense.type));
    
    document.createElement("td");
    tr.appendChild(createPurchaseDataCell(newExpense.purchase));

    document.createElement("td");
    tr.appendChild(createDateDataCell(newExpense.date));

    document.createElement("td");
    tr.appendChild(createAmountDataCell(newExpense.amount));

    document.createElement("td");
    tr.appendChild(createDeleteButton());
    createDeleteButton();
}

function createTypeDataCell(type) {
    const td1 = document.createElement("td");
    td1.className = "tab_data1";
    td1.textContent = type;
    return td1;
}

function createPurchaseDataCell(purchase) {
    const td2 = document.createElement("td");
    td2.className = "tab_data1";
    td2.textContent = purchase;
    document.getElementById("purchased").value = "";
    return td2;
}

function createDateDataCell(date) {
    const td3 = document.createElement("td");
    td3.className = "tab_data1";
    td3.textContent = date.split("-").reverse().join("-");
    return td3;
}

function createAmountDataCell(amount) {
    const td4 = document.createElement("td");
    td4.className = "tab_data1";
    td4.textContent = "$" + amount;
    document.getElementById("amount").value = "";
    return td4;
}

function createDeleteButton() {
    const button = document.createElement("button");
    button.className = "to-delete";
    button.textContent = "X";
    button.addEventListener("click", function(e) {
    if(e.target.classList.contains("to-delete")){
        let expenseListItem = document.querySelector("tbody");
        const tr = e.target.parentElement;
        expenseListItem.removeChild(tr);

        let newExpenseArray = JSON.parse(localStorage.getItem("newExpense")) || [];
        const updatedArray = newExpenseArray.filter(expense => expense.id !== parseInt(tr.id))
        localStorage.setItem("newExpense", JSON.stringify(updatedArray));
        return updatedArray;
        }
    });
    return button;
}