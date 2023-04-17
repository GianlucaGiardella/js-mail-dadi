const newMail = document.createElement("div");
document.querySelector(".form").appendChild(newMail);

function control() {
    const mail = document.querySelector("#mail_input").value;
    const mailList = [
        "aldo@gmail.com",
        "giovanni@gmail.com",
        "giacomo@gmail.com",
        "topolino@gmail.com",
        "pippo@gmail.com",
        "pluto@gmail.com",
        "paperino@gmail.com"
    ];

    if (mail != "") {
        let flag = false;
        for (let i = 0; i < mailList.length; i++) {
            if (mail === mailList[i]) {
                flag = true;
            }
        }
        if (flag) {
            newMail.className = "result green";
            newMail.innerHTML = "Accesso effettuato";
        } else {
            newMail.className = "result red";
            newMail.innerHTML = "Accesso negato";
        }
    }
}