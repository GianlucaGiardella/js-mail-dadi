const mail = prompt("inserisci la tua mail");
const mailList = [
    "aldo@gmail.com",
    "giovanni@gmail.com",
    "giacomo@gmail.com",
    "topolino@gmail.com",
    "pippo@gmail.com",
    "pluto@gmail.com",
    "paperino@gmail.com"
];
let flag = false;

console.log(mail)

for (let i = 0; i < mailList.length; i++) {
    if (mail === mailList[i]) {
        console.log("Accesso effettuato")
    }
}



