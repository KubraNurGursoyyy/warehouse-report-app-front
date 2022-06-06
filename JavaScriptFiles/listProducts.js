let products;


function getProducts(){
    products = getApi(api_products_url);
    renderProducts(products);
}
function renderProductsWithArray(data) {
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

function renderProducts(data) {
    data.then((data) => {
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
    });
}

async function getOptWarehouses() {
    var wfdata = getApi(api_warehouses_url);
    renderFW(wfdata);
}

function renderFW(wfdata) {
    wfdata.then((wfdata) => {
        let tab =``;
        for(let r = 0; r < wfdata.length; r++){
            if(r === 0)
                tab += `<option value="${wfdata[r].id}" selected>${wfdata[r].name}</option>`;
            else
                tab += `<option value="${wfdata[r].id}">${wfdata[r].name}</option>`;
        }
        document.getElementById("warehousename").innerHTML = tab;
    });
}

function filterByWarehouse() {
    var selectedWarehouseID = document.getElementById('warehousename').value;
    var filtereddata = getApi(api_list_by_warehouse + selectedWarehouseID);
    renderProducts(filtereddata);

}

function filterByPrice(){
    var selectedPriceType = document.getElementById("pricetype").value;
    var startPrice = document.getElementById("startPrice").value;
    var endPrice = document.getElementById("endPrice").value;

    if(parseInt(endPrice) > parseInt(startPrice)){
        var url = api_list_by_price +selectedPriceType+ "/" +startPrice+ "/" + endPrice;
        renderProducts(getApi(url));

        document.getElementById("pricetype").value = 1;
        document.getElementById("startPrice").value = "";
        document.getElementById("endPrice").value = "";
    }
    else{
        alert("Please enter a value less than start price for end price")
    }

}


function conditionsForEndPrice(){
    var startPriceVal = document.getElementById("startPrice").value;
    var endPriceInput = document.getElementById("endPrice");
    endPriceInput.style.background = 'rgba(227,227,227)';
    endPriceInput.value = startPriceVal;
}

async function getFilterByLetters(value){

    var filtereddatabyletters = [];
    products.then((products) => {
    console.log("Length ",products.length);
    for(var i = 0; i < products.length;i++){
        console.log(products[i].products);
        if((products[i].products.toLowerCase().indexOf(value.toLowerCase()) !== -1)){
            filtereddatabyletters.push(products[i]);
        }
    }
    renderProductsWithArray(filtereddatabyletters);
    });

}

function filterByLetters(value){
    console.log(value);
    getFilterByLetters(value);
}
