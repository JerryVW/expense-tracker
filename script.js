window.onload = function() {
    const typeArray = JSON.parse(localStorage.getItem("tab_data1")) || [];
    const purchaseArray = JSON.parse(localStorage.getItem("tab_data2")) || [];
    const dateArray = JSON.parse(localStorage.getItem("tab_data3")) || [];
    const amountArray = JSON.parse(localStorage.getItem("tab_data4")) || [];
    document.getElementById("add-button").addEventListener("click", createDataRow);
    typeArray.forEach(function(item) {
        createDataRow(item);
    });

    purchaseArray.forEach(function(item) {
        createDataRow(item);
    });

    dateArray.forEach(function(item) {
        createDataRow(item);
    });

    amountArray.forEach(function(item) {
        createDataRow(item);
    });
}

let type;
let purchase;
let date;
let amount;

function createDataRow(e) {
    e.preventDefault();
        let expenseRow = document.getElementById("empty-row");
        const tr = document.createElement("tr");

        tr.appendChild(paymentType());
        tr.appendChild(purchaseType());
        tr.appendChild(dateOfPurchase());
        tr.appendChild(amountOfPurchase());
        expenseRow.appendChild(tr);
}

function paymentType() {
    type = document.getElementById("currency-type").value;
    const td1 = document.createElement("td");
    td1.className = "tab_data1";
    td1.textContent = type;
    const typeArray = JSON.parse(localStorage.getItem("tab_data1")) || [];
    typeArray.push(type);
    localStorage.setItem("tab_data1", JSON.stringify(typeArray));
    console.log(typeArray);

    return td1;
}

function purchaseType() {
    purchase = document.getElementById("purchased").value;
    const td2 = document.createElement("td");
    td2.className = "tab_data2";
    td2.textContent = purchase;
    const purchaseArray = JSON.parse(localStorage.getItem("tab_data2")) || [];
    purchaseArray.push(purchase);
    localStorage.setItem("tab_data2", JSON.stringify(purchaseArray));
    purchase = document.getElementById("purchased").value = "";
    console.log(purchaseArray);

    return td2;
}

function dateOfPurchase() {
    date = document.getElementById("date").value;
    const td3 = document.createElement("td");
    td3.className = "tab_data3";
    td3.textContent = date;
    const dateArray = JSON.parse(localStorage.getItem("tab_data3")) || [];
    dateArray.push(date);
    localStorage.setItem("tab_data3", JSON.stringify(dateArray));
    console.log(dateArray);

    return td3;
}

function amountOfPurchase() {
    amount = document.getElementById("amount").value;
    const td4 = document.createElement("td");
    td4.className = "tab_data4";
    td4.textContent = "$" + amount;
    const amountArray = JSON.parse(localStorage.getItem("tab_data4")) || [];
    amountArray.push(amount);
    localStorage.setItem("tab_data4", JSON.stringify(amountArray));
    amount = document.getElementById("amount").value = "";
    console.log(amountArray);

    return td4;
}



const listArray = JSON.parse(localStorage.getItem("list-item")) || [];
    listArray.push(newItem);
    localStorage.setItem("list-item", JSON.stringify(listArray));
    newItem = document.getElementById("item").value = "";