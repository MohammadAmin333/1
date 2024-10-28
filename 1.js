const addItemBtn = document.getElementById('addItemBtn');
const modal = document.getElementById('addItemModal');
const closeModal = document.getElementsByClassName('close')[0];
const submitItem = document.getElementById('submitItem');
const itemList = document.getElementById('itemList');

// Show the modal when the "Add Item" button is clicked  
addItemBtn.onclick = function () {
    modal.style.display = "block";
}

// Close the modal when the close button is clicked  
closeModal.onclick = function () {
    modal.style.display = "none";
}

// Close modal when clicking outside of the modal  
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Submit item to the list  
submitItem.onclick = function () {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemImage = document.getElementById('itemImage').value;

    if (itemName && itemPrice && itemImage) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        // Create HTML for each item  
        itemDiv.innerHTML = `  
            <h3>${itemName}</h3>  
            <p>Price: $${itemPrice}</p>  
            <img src="${itemImage}" alt="${itemName}">  
            <button onclick="alert('Item purchased!')">Buy</button>  
        `;

        // Append the new item to the item list  
        itemList.appendChild(itemDiv);
        modal.style.display = "none"; // Close the modal  

        // Clear the input fields  
        document.getElementById('itemName').value = '';
        document.getElementById('itemPrice').value = '';
        document.getElementById('itemImage').value = '';
    } else {
        alert("Please fill in all fields!");
    }
}  

