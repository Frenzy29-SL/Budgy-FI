document.addEventListener("DOMContentLoaded", function () {
    // Initialize budget input
    if (document.getElementById("budget")) {
        document.getElementById("budget-input").value = 7456;
    }
    
    // Add interactive background effect
    const interactive = document.querySelector(".interactive");
    document.addEventListener("mousemove", (e) => {
        interactive.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
});

function updateBudget() {
    const budgetInput = document.getElementById("budget-input").value;
    document.getElementById("budget").textContent = `$${budgetInput}`;
}

function addExpense() {
    const name = document.getElementById("expense-name").value;
    const amount = document.getElementById("expense-amount").value;
    
    if (!name || !amount) return;
    
    const li = document.createElement("li");
    li.innerHTML = `${name} - $${amount} <button class="delete-btn" onclick="this.parentElement.remove()">X</button>`;
    
    document.getElementById("expense-list").appendChild(li);
    
    // Clear inputs
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
}

function addReminder() {
    const name = document.getElementById("reminder-name").value;
    const date = document.getElementById("reminder-date").value;
    const amount = document.getElementById("reminder-amount").value;
    
    if (!name || !date || !amount) return;
    
    const li = document.createElement("li");
    li.innerHTML = `${name} - $${amount} (Due: ${date}) <button class="delete-btn" onclick="this.parentElement.remove()">X</button>`;
    
    document.getElementById("reminder-list").appendChild(li);
    
    // Clear inputs
    document.getElementById("reminder-name").value = "";
    document.getElementById("reminder-date").value = "";
    document.getElementById("reminder-amount").value = "";
}