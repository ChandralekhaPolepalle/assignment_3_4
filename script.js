const canadianInput = document.getElementById("canadian");
const usInput = document.getElementById("us");

// conversion rate
const rate = 1.37;

function convertCurrency() {

    const cad = parseFloat(canadianInput.value);
    const usd = parseFloat(usInput.value);

    if (((isNaN(cad) || cad < 0 ) && (isNaN(usd)) || usd<0 )) {
        alert("Please enter valid numeric values.");
        return;
    }

    if (!isNaN(cad)) {
        // Convert to USD
        const convertedUSD = cad * rate;
        // Display result in the USD input box
        usInput.value = convertedUSD.toFixed(3);
    } else if (!isNaN(usd)) {
        // Convert to CAD
        const convertedCAD = usd / rate;
        // Display result in the CAD input box
        canadianInput.value = convertedCAD.toFixed(3);
    }
}