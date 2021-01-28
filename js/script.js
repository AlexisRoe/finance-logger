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
// listemplate
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, position) {
        var li = document.createElement("li");
        var h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        if (position === "start") {
            this.container.prepend(li);
        }
        else if (position === "end") {
            this.container.append(li);
        }
        else {
            console.error("Upps, something gone wrong.");
        }
    };
    return ListTemplate;
}());
// list ul template instance
var ul = document.querySelector("ul");
var list = new ListTemplate(ul);
// form elements
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var toFrom = document.querySelector("#toFrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        list.render(doc, type.value, "start");
    }
    else if (type.value === "payment") {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        list.render(doc, type.value, "end");
    }
    else {
        console.log("Ups, something gone wrong 🤷‍♂️");
        return;
    }
});
