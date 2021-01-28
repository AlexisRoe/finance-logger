//  interface

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

interface HasFormatter {
    format(): string;
}

// classes
class Invoice implements HasFormatter{
    // client: string;
    // details: string;
    // amount: number;

    // constructor (client: string, details: string, amount: number){
    //     this.client = client;
    //     this.details = details;
    //     this.amount = amount
    // }

    constructor (
        public client: string,
        public details: string,
        public amount: number
    ){}

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}

class Payment implements HasFormatter {
    constructor (
        public recipient: string,
        public details: string,
        public amount: number
    ){}

    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`
    }
}

let invoices: Invoice[] = []

// form elements
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount  = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber)
})