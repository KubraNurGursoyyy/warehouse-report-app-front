const api_url =
    "http://localhost:3000/api/report";

async function getapi(url) {

    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    show(data);
}
getapi(api_url);

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

    document.getElementById("report").innerHTML = tab;
}

