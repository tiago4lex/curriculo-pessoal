var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var peso = parseFloat(tdPeso.textContent);
  var altura = parseFloat(tdAltura.textContent);

  var pesoValido = true;
  var alturaValida = true;

  if (peso <= 0 || peso > 600 || isNaN(peso)) {
    console.log("Peso inválido para o paciente " + (i + 1));
    pesoValido = false;
    paciente.classList.add("paciente-invalido"); // Adiciona classe para estilização
  }

  if (altura <= 0 || altura > 3.0 || isNaN(altura)) {
    console.log("Altura inválida para o paciente " + (i + 1));
    alturaValida = false;
    paciente.classList.add("paciente-invalido"); // Adiciona classe para estilização
  }

  var tdImc = paciente.querySelector(".info-imc");

  if (pesoValido && alturaValida) {
    var imc = calcularImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "IMC inválido";
  }

  function calcularImc(peso, altura) {
    if (peso <= 0 || altura <= 0) {
      return "Peso e/ou Altura inválidos!";
    }
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
}
