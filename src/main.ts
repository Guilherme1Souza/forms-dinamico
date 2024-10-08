const campoNome = document.getElementById("campoNome") as HTMLInputElement;
const campoEmail = document.getElementById("campoEmail") as HTMLInputElement;
const campoTelefone = document.getElementById("campoTelefone") as HTMLInputElement;
const campoCargo = document.getElementById("campoCargo") as HTMLInputElement;
       

if (campoNome) {
  campoNome.onblur = function () {
    if (!campoNome.value.trim()) {
      alert("O campo Nome não pode estar vazio!");
    } else {
      console.log(`Nome: ${campoNome.value}`);
    }
  };
}

if (campoEmail) {
  campoEmail.onblur = function () {
    const valorDigitado = campoEmail.value;

    if (!valorDigitado.includes("@")) {
      alert('E-mail incorreto! Deve conter "@"');
    } else {
      console.log(`E-mail: ${campoEmail.value}`);
    }
  };
}

if (campoTelefone) {
  campoTelefone.onblur = function () {
    const valorTelefone = campoTelefone.value;

    if (isNaN(Number(valorTelefone))) {
      alert("O telefone deve conter apenas números!");
    } else if (valorTelefone.length < 10) {
      alert("Telefone incorreto! Deve ter pelo menos 10 dígitos.");
    } else {
      console.log(`Telefone: ${valorTelefone}`);
    }
  };
}

if (campoCargo) {
  campoCargo.onblur = function () {
    if (!campoCargo.value.trim()) {
      alert("O campo Cargo não pode estar vazio!");
    } else {
      console.log(`Cargo: ${campoCargo.value}`);
    }
  };
}
