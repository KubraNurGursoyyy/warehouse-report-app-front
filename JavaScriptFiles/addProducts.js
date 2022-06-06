
function getWarehouses(){
    renderWarehouses(getApi(api_warehouses_url));
}

function renderWarehouses(data) {
    data.then((data) => {
        let tab =``;
        for(let r = 0; r < data.length; r++){
            if(r === 0)
                tab += `<option value="${data[r].id}" selected>${data[r].name}</option>`;
            else
                tab += `<option value="${data[r].id}">${data[r].name}</option>`;
        }
        document.getElementById("warehouseId").innerHTML = tab;
    });
}

function postProducts(){
    $("#productForm").submit(function() {
        return false;
    });
    var _pdata = JSON.stringify($("#productForm").formToJson())
    var response = postApi(api_products_url,_pdata);
    response.then((response) =>{
        if(response === true){
            alert("Product Added");
            $("#productForm")[0].reset();
        }
    });


}

