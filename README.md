# nutricao-js

alert("Olá Mundo");
console.log();
console.log(document);
var titulo = document.querySelect("h1"); // -> Busca pelo h1
var titulo = document.querySelector("h1").textContent; //Conteúdo do H1
titulo.textContent = "Lailson Nutrição"

//Buscando um elemento dentro de outro.
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso =  paciente.querySelector(".info-peso");

//Seletor
# -> ID
. -> classe
sem nada -> tag

//obs: A função querySelector retorna apenas um elemnto.
// Se quiser pegar mais elementos [array], deve ser utilizado a
//função querySelectorAll

//Manipular o estilo CSS pelo JS
paciente.style.color = "red";
paciente.style.backgroundColor = "red" // Quando tiver uma propriedade com
// o nome separado por - então deve utilizaro padrão Camel Case
// em vez de paciente.style.background-color = "red"
// ficaria paciente.style.backgroundColor = "red"

//adicionando classe. ClassList retorna uma lista de classes e métodos
paciente.classList.add("paciente-invalido");

//Eventos do Browser
titulo.addEventListener("click", mostraMensagem); ou
titulo.addEventListener("click", function(){
  console.log("funcao anonima");
});

//Função
function mostraMensagem(){
  console.log("Ola mundo")
}

//Botão de um form
//O comportamento padrão é enviar os dados do form para outra página
//e limpa os campos do form.
//mas é possível alterar esse comportamento padrão.
event.preventDefault(); -> Previne o comportamento padrão do botao
Exemplo completo:
    var botao = document.querySelector("#adicionar-paciente")
    botao.addEventListener("click", function(event){
      event.preventDefault();
      console.log("oiiii");
    })

//Pegar valores do form
console.log(form.altura.value)

//Criando elemento html
var pacienteTr = document.creatElement("tr");

//Apagar campos do form
form.reset();

//Controla o conteudo do html de um elemento
ul.innerHTML = "" Apagando o conteúdo do elemnto ul.

//Apagar objeto selecionado
t.remove() -> Apaga o elemento t do HTML
//Exemplo completo
var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(paciente){
  paciente.addEventListner("dblclick", function(){
    console.log("fui clicado duplo click");
    this.remove();
    });
});


//Event Bublle
//Bolhamento de evento -> O evento pai tambem escuta o evento
var table = document.querySelector("table");
tabela.addEventListner("dblclick", function(event){
  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode;

  paiDoAlvo.remove();
})
