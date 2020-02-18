window.onload = function() {
    document.getElementById("add-button").addEventListener("click", createDataRow);
}

let type;
let purchase;
let date;
let amount;

const typeArray = JSON.parse(localStorage.getItem("")) || [];
const purchaseArray = JSON.parse(localStorage.getItem("")) || [];
const dateArray = JSON.parse(localStorage.getItem("")) || [];
const amountArray = JSON.parse(localStorage.getItem("")) || [];

function createDataRow(e) {
    e.preventDefault();
        let expenseRow = document.getElementById("empty-row");
        const td = document.createElement("td");

        td.appendChild(paymentType());
        td.appendChild(purchaseType());
        expenseRow.appendChild(td);
}

function paymentType() {
    type = document.getElementById("currency-type").value;
    const td1 = document.createElement("td");
    td1.className = "tab_data";
    td1.textContent = type;
    console.log(type);

    return td1;
}

function purchaseType() {
    purchase = document.getElementById("purchased").value;
    const td2 = document.createElement("td");
    td2.className = "tab_data";
    td2.textContent = purchase;
    console.log(purchase);

    return td2;
}



function createListItem(newItem) {
    let itemList = document.getElementById("items");
    const li = document.createElement("li");

    li.appendChild(createCheckBox());
    li.appendChild(createTextDiv(newItem));
    li.appendChild(createDeleteButton());
    itemList.appendChild(li);
} 