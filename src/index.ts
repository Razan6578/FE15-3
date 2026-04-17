import company from './data.json'; 
//import promptSync from 'prompt-sync';

//const prompt = promptSync();

type AircraftModel = {
  id: number;
  name: string;
  productionStart: number;
  engines: number;
  totalProduced: number;
}

type AircraftManufacturer = {
  id:number;
  name:string;
  country: string;
  founded: number;
  dissolved: number | null;
  models: AircraftModel[];
}


//const allowedPayments = ["card", "paypal", "cash"];
//const phoneRegex = /^\+\d{10,13}$/;

//const errors: string[] = [];

/*type Order = {
    name: string;
    phoneNumber: string;
    postInd: string;
    paymentMethod: string;
}*/

//funk 

/*function validateString(str:string, minLength:number = 6, maxLength:number = 100) : boolean {
    str = str.trim();
    return str.length >= minLength && str !== "" && str.length <= maxLength;
}

function addOrder(name: string, phoneNumber: string, postInd: string, paymentMethod: string) : Order {
    return  {
        name,
        phoneNumber,
        postInd,
        paymentMethod
    };
}*/
//1
/*let value: string = "";
const orders: Order[] = [];

while (value != "n") {
    errors.length = 0;
    let userName: string = prompt("Введіть своє ім'я: ") || "";
    let userPhoneNumber: string = prompt('Введіть свій номер телефону: ') || "";
    let userPostInd: string = prompt("Введіть поштовий індекс: ") || "";
    let userPaymentMethod: string = prompt("Введіть спосіб оплати (card/paypal/cash): ") || "";

    if (!validateString(userName, 2, 50)) {
        errors.push("Ім'я має бути мінімум 2 символіа і не більше 50");
    }
    if (!phoneRegex.test(userPhoneNumber)) {
        errors.push("Номер телефону має починатися з + та містити 10–13 цифр");
    }
    if (!validateString(userPostInd, 5, 5)) {
        errors.push("Поштовий індекс має бути п'ять символів");
    }
    if (!allowedPayments.includes(userPaymentMethod.toLowerCase())) {
        errors.push("Спосіб оплати має бути: card, paypal або cash");
    }
    if (errors.length > 0) {
        console.log("Помилки:");
        errors.forEach(er => console.log(er));
    } else {
        const order: Order = addOrder(userName, userPhoneNumber, userPostInd, userPaymentMethod);

        console.log("Замовлення створено успішно:");
        orders.push(order);
    }
    value = prompt("Введіть чи ви хочете створити ще одне замовлення (y або n): ") || "";
}

orders.forEach(or => console.log(or));*/

//2

const companies: AircraftManufacturer[] = company;
//const compName: string[] = companies.map(c => c.name);
//
//console.log(compName)
//3
//const result = companies.map(c => ({
//    name: c.name,
//    founded: c.founded,
//    modelsCount: c.models.length
//}));
//
//console.log(result);

//4
//const disComp = companies.filter(c => c.dissolved !== null);

//console.log(disComp);

//5
//const inUSA = companies.filter(c => c.country == "США")
//console.log(inUSA)
//6
//const compIsA = companies.filter(c => c.name.toLowerCase().startsWith("a"))
//console.log(compIsA)
//7
/*const currentYear = new Date().getFullYear();
const compIs30 = companies.filter(c => {
    const endYear = c.dissolved ?? currentYear;
    return endYear - c.founded > 30;
})
console.log(compIs30)*/
//8
//const totalModels = companies.reduce((acc, comp) => {
//    return acc + comp.models.length;
//}, 0);
//console.log(totalModels);
//9
//const allModel = companies.flatMap(c => c.models);
//console.log(allModel);
//10
/*const res = companies.map(c => ({
    name: c.name,
    total: c.models.reduce((acc, model) => acc + model.totalProduced, 0)
}));
console.log(res);*/
//11
//const engi = companies.flatMap(c => c.models).filter(en => en.engines > 2);
//console.log(engi);
//12
//const closeComp = companies.filter(c => c.dissolved !== null).flatMap(c => c.models);
//console.log(closeComp);
//13
//const engi1 = companies.flatMap(c => c.models).filter(m => m.engines === 1).reduce((acc, model) => acc + model.totalProduced, 0);
//console.log(engi1);
//14
//const from1990 = companies.flatMap(c => c.models).filter(m => m.productionStart >= 1990).reduce((acc, m) => acc + m.totalProduced, 0);
//console.log(from1990);
//15
/*const res = companies.flatMap(c => c.models).map(m => ({
    name: m.name,
    engines: m.engines
}));
console.log(res);*/
//16
/*const tEngines = companies.flatMap(c => c.models).reduce((acc, m) => {
    return acc + (m.engines * m.totalProduced);
}, 0);

console.log(tEngines);*/

