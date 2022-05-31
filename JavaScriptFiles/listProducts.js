let products;
async function getProductsApi() {

    const response = await fetch(api_post_products_url);
    var data = await response.json();
    products = data;

    console.log("Products", products);
    renderProducts(data);
}

function renderProducts(data) {
    console.log("Data: " ,data);
    let tab =
        `<tr>
		<th>Product Name</th>
		<th>Quantity</th>
		<th>Purchase Price</th>
		<th>Sale Price</th>
		
		<th>Vat Rate For Product</th>

		
		<th>Purchase Price With VAT</th>
		<th>Sale Price With VAT</th>
		</tr>`;
    data.forEach(r => {
        var vatrate = findVatRate(r.purchasePrice, r.purchasePriceWithVat);
        vatrate = parseInt(vatrate);
        console.log("Vatrate in products:" , vatrate)
        tab += `<tr>
       <td>${r.products} </td>
       <td>${r.quantity}</td>
       <td>${r.purchasePrice}</td>
       <td>${r.salePrice}</td>
       
       
       <td>${vatrate}</td>	

       
       <td>${r.purchasePriceWithVat}</td>
       <td>${r.salePriceWithVat}</td>
   </tr>`;
    });
    document.getElementById("productsTable").innerHTML = tab;
}