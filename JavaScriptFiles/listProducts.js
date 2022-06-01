let products;

const api_list_by_warehouse =
    "https://warehouse-report-app-backend.herokuapp.com/api/products/warehouse/";

const api_list_by_letters =
    "https://warehouse-report-app-backend.herokuapp.com/api/products/name/";

const api_list_by_price =
    "https://warehouse-report-app-backend.herokuapp.com/api/products/price/";


async function getProductsApi() {
    const response = await fetch(api_post_products_url);
    var data = await response.json();
    products = data;
    renderProducts(data);
}

function renderProducts(data) {
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

async function getOptWarehouses() {

    const response = await fetch(api_post_url);
    var wfdata = await response.json();
    console.log("Wdata : ", wfdata);
    renderFW(wfdata);
}

function renderFW(wfdata) {
    let tab =``;
    for(let r = 0; r < wfdata.length; r++){
        if(r === 0)
            tab += `<option value="${wfdata[r].id}" selected>${wfdata[r].name}</option>`;
        else
            tab += `<option value="${wfdata[r].id}">${wfdata[r].name}</option>`;

    }
    document.getElementById("warehousename").innerHTML = tab;
}


async function getFilterByWarehouse(warehouseID) {
    console.log(api_list_by_warehouse+warehouseID)
    const response = await fetch(api_list_by_warehouse+warehouseID);
    var filtereddata = await response.json();
    console.log("filtereddata : ", filtereddata);
    renderProducts(filtereddata);

}

function filterByWarehouse() {
    var selectedWarehouseID = document.getElementById('warehousename').value;
    getFilterByWarehouse(selectedWarehouseID);
}

async function getFilterByPrice(pricetype, startprice,endprice) {
    var url = api_list_by_price +pricetype+ "/" +startprice+ "/" + endprice;
    console.log("Url " , url);
    const response = await fetch(url);
    var filteredbypricedata = await response.json();
    console.log("filteredbypricedata : ", filteredbypricedata);
    renderProducts(filteredbypricedata);

}

function filterByPrice(){
    var selectedPriceType = document.getElementById("pricetype").value;
    var startPrice = document.getElementById("startPrice").value;
    var endPrice = document.getElementById("endPrice").value;

    if(endPrice > startPrice){
        getFilterByPrice(selectedPriceType,startPrice,endPrice);
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
    var response = await fetch(api_list_by_letters+value);
    console.log(api_list_by_letters+value);
    var filtereddatabyletters = await response.json();
    renderProducts(filtereddatabyletters);

}

function filterByLetters(value){
    console.log(value);
    getFilterByLetters(value);
}
