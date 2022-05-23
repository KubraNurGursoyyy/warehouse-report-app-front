const api_post_url =
    "http://localhost:3000/api/warehouses/";

let _data;

async function postApi(url) {

    console.log("Data:" , _data);

    console.log("Body olacak şey:" , JSON.stringify(_data))
    let options = {
        method: "POST",
        body: _data,
        mode: 'no-cors',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }}
    console.log("options:", options);
    console.log("body:" , options.body);

    const response = await fetch(url,options)
    console.log("Response:", response )

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
    let formData = document.getElementById("warehouseForm")

    $("#warehouseForm").submit(function() {
        console.log("Submit", $(this).formToJson());
        return false;
    });

    console.log("Warehouse id", $("#warehouseForm"))

    _data = JSON.stringify($("#warehouseForm").formToJson())
    console.log("_data nın json hali ", JSON.stringify($("#warehouseForm").formToJson()))

    postApi(api_post_url);
}
/*
document.getElementById('submitWarehouses').addEventListener('click', async _ => {
    try {
        _data = document.getElementById("warehouseDiv")
        let name = _data;
        console.log('Naamr: ' + name)
        console.log('_DATA:' + _data)
        postApi(api_post_url);
    } catch(err) {
        console.error(`Error: ${err}`);
    }
});*/


