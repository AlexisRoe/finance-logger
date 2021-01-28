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
