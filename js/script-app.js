import Helper from '../js-steg-17';
import countries from '../countries.json';


function app() {

    Helper.onClick('eShowExchangeRates', showExchangeRates);
    Helper.onClick('eDoExchangeRates', doExchangeRates);
    Helper.onClick('eProcessExchange', processExchange);
    Helper.onClick('eShowExchangeRatesBack', showExchangeRatesBack);
    Helper.onClick('eDoExchangeRateBack', doExchangeRatesBack);
    setCountries();

}



function setCountries() {
    fetch('countries.json')
        .then(response => response.json())
        .then(function(data) {
            Countries = data;
            setValuta();
        })
        .catch(error => alert(error))
}

function setValuta() {
    fetch('https://v6.exchangerate-api.com/v6/547f5391104d30d830f55442/latest/SEK')
        .then(response => response.json())
        .then(function(data) {
            loadCountries(data);
        })
        .catch(error => alert(error))
}

function loadCountries(valutor) {

    for (let i = 0; i < Countries.length; i++) {
        Countries[i].exchangeRate = valutor.conversion_rates[Countries[0].currency] / valutor.conversion_rates[Countries[i].currency];
    }
    // -- Countries = JSON.parse(data);

    let htmlSelect = '';
    for (let i = 0; i < Countries.length; i++) {
        htmlSelect += '<option value="' + i + '">' + Countries[i].name + ' (' + Countries[i].currency + ')</option>';
    }

    Helper.setHtml('exchange-from', htmlSelect);
    Helper.setHtml('exchange-to', htmlSelect);
}

function showExchangeRates() {
    Helper.hide('main-container');
    let html = '<table style="width: 400px">';
    html += '<tr><td>Land</td><td>Valuta</td><td>Kurs</td></tr>';
    for (let i = 0; i < Countries.length; i++) {
        html += '<tr>';
        html += '<td>' + Countries[i].name + '</td>';
        html += '<td>' + Countries[i].currency + '</td>';
        html += '<td>' + Number(Countries[i].exchangeRate).toFixed(2) + '</td>';
        // html += '<td><button class="eGetValue" index="' + i +  ' ">Väj</button>';
        html += '</tr>';
    }
    html += '</table>';
    Helper.setHtml('country-list', html);
    Helper.show('country-list-container');
}



function doExchangeRates() {
    Helper.hide('main-container');
    Helper.show('exchange-container');
}

function processExchange() {
    let indexFrom = document.getElementById("exchange-from").value;
    let indexTo = document.getElementById("exchange-to").value;
    let amount = Helper.getValue('amount');
    let newAmount = Number(amount) * Number(Countries[indexFrom].exchangeRate) / Number(Countries[indexTo].exchangeRate);
    newAmount = newAmount.toFixed(2);
    Helper.setHtml('new-amount', newAmount);
}

function showExchangeRatesBack() {
    Helper.hide('country-list-container');
    Helper.show('main-container');
}

function doExchangeRatesBack() {
    Helper.hide('exchange-container');
    Helper.show('main-container');
}