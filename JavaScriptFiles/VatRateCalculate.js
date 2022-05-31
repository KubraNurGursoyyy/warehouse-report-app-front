let vatRate;

function getVatRate(){
    console.log("VatRate:", $("#vatRate")[0].value);
    vatRate = $("#vatRate")[0].value;
    console.log("Vat Rate Value" , vatRate)
    console.log("Formdaki inputlar?", document.getElementById('productForm').getElementsByTagName('input'));
    var inputs = document.getElementById('productForm').getElementsByTagName('input');
    console.log("Inputs:", inputs);
    for(let i = 0; i <= 6; i++){
        console.log("Inputs i :", inputs[i], inputs[i].id, i);

        if(inputs[i].style.background.includes("rgb(227, 227, 227) none repeat scroll 0% 0%")){

            console.log("Inputs i :", inputs[i], inputs[i].id, i);

            if(inputs[i].id.includes("WithVat")){
                var inputPrice = inputs[i - 1].value;
                document.getElementById(inputs[i].id).value = findPriceWithVatRateFromPrice(inputPrice);
            }
            else{
                var vatPrice = inputs[i + 1].value;
                document.getElementById(inputs[i].id).value = findPriceFromPriceWithVatRate(vatPrice);

            }
        }

    }
}

function changeInPrice(event){
    var price = document.getElementById(event).value;
    console.log(event+"WithVat");
    document.getElementById(event).style.background = 'rgb(255, 255, 255)';
    document.getElementById(event+"WithVat").style.background = 'rgba(227,227,227)';
    document.getElementById(event+"WithVat").value = findPriceWithVatRateFromPrice(price);

}

function findVatRate(price,priceWithVat){
    var FindingVat = ((priceWithVat - price) * 100) / price;
    console.log("Finding Vat Rate: " , FindingVat);
    return FindingVat;
}

function findPriceWithVatRateFromPrice(parameterPrice){
    var FindingPriceWithRate = 0;
    FindingPriceWithRate = +parameterPrice + ((parameterPrice /100) * vatRate);
    console.log("Calculated Finding PriceWithRate: ", FindingPriceWithRate);
    return FindingPriceWithRate;
}


function changeInPriceWithVatRate(event){
    var priceWithVat = document.getElementById(event).value;
    console.log(event.length);
    var newevent = event.split("WithVat")[0];
    console.log("new id" ,newevent)
    document.getElementById(event).style.background = 'rgb(255, 255, 255)';
    document.getElementById(newevent).style.background = 'rgba(227,227,227,255)';
    document.getElementById(newevent).value = findPriceFromPriceWithVatRate(priceWithVat);

}

function findPriceFromPriceWithVatRate(parameterPriceWithVatRate){
    var FindingPrice = 0;
    FindingPrice = (+parameterPriceWithVatRate * +100)/ (100 + +vatRate) ;
    console.log("Calculating Finding Price" , FindingPrice);
    return FindingPrice

}