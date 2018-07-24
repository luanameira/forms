let inputs = document.querySelectorAll("input");
let botao = document.querySelector("button");

botao.onclick = form;

function form(){
    if (inputs[0].value == "")
        alert ("Digite seu primeiro nome")
    else if (inputs[1].value == "")
    alert ("Digite seu sobrenome")
    else if (inputs[2].value == "")
    alert ("Digite seu email")
    else {
        alert ("Primeiro nome: "+ inputs[0].value + "\nSobrenome: " + inputs[1].value + "\nEmail: " + inputs[2].value)
    }
}