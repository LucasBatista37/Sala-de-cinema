function register() {
    var nome = document.getElementById("novonome").value;
    localStorage.setItem("nome", nome);
    window.location.href = "compradelugar.html";
}
// Variáveis para armazenar as informações dos quadrados
var quadrado1 = {
  nome: "",
  preco: 10.00
};

var quadrado2 = {
  nome: "",
  preco: 12.00
};

var quadrado3 = {
  nome: "",
  preco: 16.00
};

var quadrado4 = {
  nome: "",
  preco: 20.00
};

var quadradop = {
  nome: "",
  preco: 25.00
};

// Função chamada ao clicar em um quadrado
function comprarQuadrado(quadrado) {
  switch (quadrado) {
    case 1:
      abrirCadastro(quadrado1);
      break;
    case 2:
      abrirCadastro(quadrado2);
      break;
    case 3:
      abrirCadastro(quadrado3);
      break;
    case 4:
      abrirCadastro(quadrado4);
      break;
    case 5:
      abrirCadastro(quadradop);
      break;
    default:
      alert("Quadrado inválido");
  }
}

// Função para abrir a tela de cadastro
function abrirCadastro(quadrado) {
  var nome = prompt("Digite seu nome:");
  if (nome) {
    quadrado.nome = nome;
    var mensagem = "Nome: " + quadrado.nome + "\nPreço: R$" + quadrado.preco.toFixed(2);
    alert(mensagem);
    abrirTelaCompra();
  }
}

// Função para abrir a tela de compra
function abrirTelaCompra() {
  var confirmacao = confirm("Deseja comprar o quadrado?");
  if (confirmacao) {
    // Aqui você pode implementar a lógica para finalizar a compra
    // e atualizar o valor total gasto pelo usuário
    alert("Compra realizada com sucesso!");
  } else {
    var escolha = confirm("Deseja comprar outro quadrado?");
    if (escolha) {
      // Aqui você pode redirecionar o usuário novamente para a página de seleção de quadrados
    } else {
      // Aqui você pode redirecionar o usuário para onde desejar ao cancelar a compra
    }
  }
}

