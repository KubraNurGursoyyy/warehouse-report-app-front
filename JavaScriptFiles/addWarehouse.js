const api_post_url =
    "https://warehouse-report-app-backend.herokuapp.com/api/warehouses/";

let _data;

async function postWarehousesApi(url) {

    let options = {
        method: "POST",
        body: _data,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "https://warehouse-report-app-backend.herokuapp.com/api/warehouses/"
        }}
    console.log("options:", options);
    console.log("body:" , options.body);

    const response = await fetch(url,options)

    alert("Warehouse Added")
    $("#warehouseForm")[0].reset();

}
function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};
    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });
    return indexed_array;
}

function postWarehouses(){
    $("#warehouseForm").submit(function() {
        console.log("Submit", $(this).formToJson());
        return false;
    });

    console.log("Warehouse id", $("#warehouseForm"))

    _data = JSON.stringify($("#warehouseForm").formToJson())
    console.log("_data nın json hali ", JSON.stringify($("#warehouseForm").formToJson()))

    postWarehousesApi(api_post_url);
}

