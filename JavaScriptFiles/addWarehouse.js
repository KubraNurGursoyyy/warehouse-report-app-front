

function postWarehouses(){
    $("#warehouseForm").submit(function() {
        return false;
    });
    var _data = JSON.stringify($("#warehouseForm").formToJson())
    var response = postApi(api_warehouses_url,_data);
    response.then((response) =>{
        if(response === true){
            alert("Warehouse Added");
            $("#warehouseForm")[0].reset();
        }
    });}

