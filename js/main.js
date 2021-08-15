
alert("bem vindo");
function clique(elemento){
document.getElementById("trocar").innerHTML = "Obrigado por confirmar sua idade.";
    var idade = prompt("Digite sua idade.");
if (idade>=18){
    alert("Maior de idade, pode continuar utilizando nosso site.")
;} else{alert("Favor esperar até ter idade para acessar meu conteúdo.");}   
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado por vir confirmar";
}
function funcaoChange(elemento){
    console.log(elemento.value);
}