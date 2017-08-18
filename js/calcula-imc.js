var titulo = document.querySelector("h1");
titulo.textContent = "Lailson Henrique";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i<pacientes.length; i++){
  paciente = pacientes[i];
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var imc = paciente.querySelector(".info-imc");
  imc.textContent = calculaImc(peso,altura);
}

function calculaImc(peso,altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(){
  if(peso >= 0 && peso < 1000){
    return true;
  }else {
    return false;
  }

}
