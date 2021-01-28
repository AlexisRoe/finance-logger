//  interface
// classes
var Invoice = /** @class */ (function () {
    // client: string;
    // details: string;
    // amount: number;
    // constructor (client: string, details: string, amount: number){
    //     this.client = client;
    //     this.details = details;
    //     this.amount = amount
    // }
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var Payment = /** @class */ (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return this.recipient + " is owed \u00A3" + this.amount + " for " + this.details;
    };
    return Payment;
}());
var invoices = [];
// form elements
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var toFrom = document.querySelector("#toFrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
