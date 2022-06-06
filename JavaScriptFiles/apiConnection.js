const api_make_report_url =
    "https://warehouse-report-app-backend.herokuapp.com/api/report";

const api_products_url =
    "https://warehouse-report-app-backend.herokuapp.com/api/products/";

const api_warehouses_url =
    "https://warehouse-report-app-backend.herokuapp.com/api/warehouses/";

const api_list_by_warehouse =
    "https://warehouse-report-app-backend.herokuapp.com/api/products/warehouse/";

const api_list_by_letters =
    "https://warehouse-report-app-backend.herokuapp.com/api/products/name/";

const api_list_by_price =
    "https://warehouse-report-app-backend.herokuapp.com/api/products/price/";


async function getApi(api_url) {
    const response = await fetch(api_url);
    var data = await response.json();
    return data;
}

async function postApi(url,data) {
    let options = {
        method: "POST",
        body: data,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": + url
        }};
    const response = await fetch(url,options)
    return response.ok;

}