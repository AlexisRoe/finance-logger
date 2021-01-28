var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var ul = document.querySelector("ul");
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var toFrom = document.querySelector("#toFrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u20AC" + this.amount + " for " + this.details;
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
        return this.recipient + " is owed \u20AC" + this.amount + " for " + this.details;
    };
    return Payment;
}());
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
var list = new ListTemplate(ul);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var values = [toFrom.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value === "invoice") {
        doc = new (Invoice.bind.apply(Invoice, __spreadArrays([void 0], values)))();
        list.render(doc, type.value, "start");
    }
    else if (type.value === "payment") {
        doc = new (Payment.bind.apply(Payment, __spreadArrays([void 0], values)))();
        list.render(doc, type.value, "end");
    }
    else {
        console.log("Ups, something gone wrong 🤷‍♂️");
        return;
    }
    toFrom.value = "";
    details.value = "";
    amount.value = "";
});
