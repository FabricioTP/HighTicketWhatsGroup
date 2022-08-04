const mailInput = document.querySelector("#mailInput")
const cellInput = document.querySelector("#cellInput")
const sendWhatsMessageBtn = document.querySelector("#sendWhatsMessageBtn")
const mailMsg = document.querySelector("#MailMsg")
const cellMsg = document.querySelector("#CellMsg")
let validEmail = false
let validCell = false;

function validaEmail(){
    let emailPessoa = mailInput.value;
    const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailPessoa.match(regexMail)){
        mailMsg.style.color="rgb(16, 173, 81)";
        mailMsg.style.opacity=1;
        mailMsg.textContent="Email válido.";
        validEmail = true
    }else{
        mailMsg.style.color="red";
        mailMsg.style.opacity=1;
        mailMsg.textContent="Por favor, digite um email válido.";
        validEmail = false
    }
}
function validaCell(){
    let cellPessoa = cellInput.value;
    const regexCell = /^[0-9]+$/;

    if(cellPessoa.match(regexCell) && cellPessoa.length == 12){
        cellMsg.style.color="rgb(16, 173, 81)";
        cellMsg.style.opacity=1;
        cellMsg.textContent="Telefone válido";
        validCell = true
    }else{
        cellMsg.style.color="red";
        cellMsg.style.opacity=1;
        cellMsg.textContent="Por favor, digite um telefone válido.";
        validCell = false
    }
}

sendWhatsMessageBtn.addEventListener("click", ()=>{
    validaCell();
    validaEmail();
})
sendWhatsMessageBtn.addEventListener("click", ()=>{
    let emailPessoa = mailInput.value;
    let cellPessoa = cellInput.value;

    const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexCell = /^[0-9]+$/;

    switch (true) {
        case emailPessoa == "" && cellPessoa == "":
            mailMsg.style.color="red";
            mailMsg.style.opacity=1
            mailMsg.textContent="Por favor, digite seu email."
            cellMsg.style.color="red";
            cellMsg.style.opacity=1
            cellMsg.textContent="Por favor, digite seu telefone."
            break;
        case cellPessoa == "":
            cellMsg.style.color="red";
            cellMsg.style.opacity=1
            cellMsg.textContent="Por favor, digite seu telefone."
            break;
        case emailPessoa == "":
            mailMsg.style.color="red";
            mailMsg.style.opacity=1
            mailMsg.textContent="Por favor, digite seu email."
            break;
        case validEmail == true && validCell == true:
            window.location.href=`https://api.whatsapp.com/send?phone=558494602717&text=Ol%C3%A1%2C%20quero%20fazer%20parte%20do%20grupo.%20Meu%20email%20%C3%A9%3A%20${emailPessoa}%2C%20e%20meu%20celular%20%C3%A9%3A%20${cellPessoa}`;
        }
    }
)
/*

*/