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

// listemplate

class ListTemplate {
    constructor (private container: HTMLUListElement){}

    render (item: HasFormatter, heading: string, position: "start" | "end"){
        const li = document.createElement("li");

        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);

        if (position === "start") {
            this.container.prepend(li);
        } else if (position === "end") {
            this.container.append(li);
        } else {
            console.error("Upps, something gone wrong.")
        }
    }
}

// list ul template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

// form elements
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount  = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    let doc: HasFormatter;

    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
        list.render(doc, type.value, "start")
    } else if (type.value === "payment") {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
        list.render(doc, type.value, "end")
    } else {
        console.log("Ups, something gone wrong 🤷‍♂️");
        return;
    }

})