const products_api_url =
    "https://warehouse-report-app-backend.herokuapp.com/api/products/";

let _wdata;
let warehouses;
async function getWarehousesApi() {

    const response = await fetch(warehouses_api_url);
    var data = await response.json();
    warehouses = data;

    console.log("Warehouses", warehouses);
    renderOptions(data);
}

function renderOptions(data) {
    console.log("Data: " ,data);
    let tab =``;
    for(let r = 0; r < data.length; r++){
        if(r === 0)
            tab += `<option value="${data[r].id}" selected>${data[r].name}</option>`;
        else
            tab += `<option value="${data[r].id}">${data[r].name}</option>`;

    }
    console.log(tab)
    document.getElementById("warehouseId").innerHTML = tab;
}


async function postProductsApi(url) {
    let options = {
        method: "POST",
        body: _wdata,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "https://warehouse-report-app-backend.herokuapp.com/api/products/"
        }};
    console.log("options:", options);
    console.log("body:" , options.body);
    const response = await fetch(url,options)
    alert("Product Added")

}


function postProducts(){
    console.log("Form:", $("#productForm"));

    $("#productForm").submit(function() {
        console.log("Submit", $(this).formToJson());
        return false;
    });

    _wdata = JSON.stringify($("#productForm").formToJson())
    console.log("_data nın json hali ", JSON.stringify($("#productForm").formToJson()))

    postProductsApi(products_api_url);
}

