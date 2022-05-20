// api url
const api_url =
    "http://localhost:3000/api/report";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        `<tr>
		<th>Warehouse Name</th>
		<th>Total Range Of Products</th>
		<th>Total Product Quantity</th>
		<th>Total Product Value By Purchase Price</th>
		<th>Total Product Value By Sale Price</th>
		<th>Total Product Value By Purchase Price With VAT</th>
		<th>Total Product Value By Sale Price With VAT</th>
		</tr>`;

    // Loop to access all rows
    data.forEach(r => {
        tab += `<tr>
	<td>${r.warehouseName} </td>
	<td>${r.totalRangeOfProducts}</td>
	<td>${r.totalProductQuantity}</td>
	<td>${r.totalProductValueByPurchasePrice}</td>
	<td>${r.totalProductValueBySalePrice}</td>
	<td>${r.totalProductValueByPurchasePriceWithVAT}</td>
	<td>${r.totalProductValueBySalePriceWithVAT}</td>	
</tr>`;
    });

    
    // Setting innerHTML as tab variable
    document.getElementById("report").innerHTML = tab;
}

