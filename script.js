window.onload = function(newExpense) {
    document.getElementById("add-button").addEventListener("click", createDataRow);

    let newExpenseArray = JSON.parse(localStorage.getItem("newExpense")) || [];
    for(let i = 0; i < newExpenseArray.length; i++) {
        createDataTable(newExpenseArray[i])
    }
}


function createDataRow(e) {
    e.preventDefault();
    let type = document.getElementById("currency-type").value;
    let purchase = document.getElementById("purchased").value;
    let date = document.getElementById("date").value;
    let amount = document.getElementById("amount").value;

    let newExpense = {
        id: Date.now(),
        types: type,
        purchases: purchase,
        dates: date,
        amounts: amount
    }
    let newExpenseArray = JSON.parse(localStorage.getItem("newExpense")) || []
    newExpenseArray.push(newExpense);
    localStorage.setItem("newExpense", JSON.stringify(newExpenseArray));
    console.log(newExpenseArray);
    createDataTable(newExpense);
}

function createDataTable(newExpense) {
    let tableBody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    tr.id = newExpense.id;
    tableBody.appendChild(tr);

    document.createElement("td");
    tr.appendChild(getPaymentType(newExpense.types));
    
    document.createElement("td");
    tr.appendChild(getPurchaseType(newExpense.purchases));

    document.createElement("td");
    tr.appendChild(getDateOfPurchase(newExpense.dates));

    document.createElement("td");
    tr.appendChild(getAmountOfPurchase(newExpense.amounts));

    document.createElement("td");
    tr.appendChild(createDeleteButton());
    createDeleteButton();
}

function getPaymentType(type) {
    const td1 = document.createElement("td");
    td1.className = "tab_data1";
    td1.textContent = type;
    return td1;
}

function getPurchaseType(purchase) {
    const td2 = document.createElement("td");
    td2.className = "tab_data1";
    td2.textContent = purchase;
    purchase = document.getElementById("purchased").value = "";
    return td2;
}

function getDateOfPurchase(date) {
    const td3 = document.createElement("td");
    td3.className = "tab_data1";
    td3.textContent = date.split("-").reverse().join("-");
    return td3;
}

function getAmountOfPurchase(amount) {
    const td4 = document.createElement("td");
    td4.className = "tab_data1";
    td4.textContent = "$" + amount;
    amount = document.getElementById("amount").value = "";
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
        const updatedArray = newExpenseArray.filter(function(expense){
            if(expense.id !== parseInt(tr.id)) {
                return true;
            } else {
                return false;
            }
        });
        localStorage.setItem("newExpense", JSON.stringify(updatedArray));
        return updatedArray;
        }
    });
    return button;
}