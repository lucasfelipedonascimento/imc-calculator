
const calcular = document.getElementById('calcular');

// O ponto serve para acessar elementos dentro do objeto
// nome.value = 'Lucas Felipe'


// função do imc
function imc() {

   // pegando os inputs do HTML com POO
   const nome = document.getElementById('nome').value;
   const altura = document.getElementById('altura').value;
   const peso = document.getElementById('peso').value;
   const resultado = document.getElementById('resultado')

   // condição para verificar se os campos estão preenchidos
   if (nome !== '' && altura !== '' && peso !== '') {
      
      // cálculo do imc
      const valorIMC = (peso / (altura**2)).toFixed(2);


      // variável para armazenar o resultado do programa
      let classificacao = '';

      // condições do resultado do programa
      if (valorIMC < 18.5) {
         classificacao = "Abaixo do peso";
      } else if (valorIMC < 25) {
        classificacao = 'com peso ideal. Ótimo';
      } else if (valorIMC < 30) {
        classificacao = 'levemente acima do peso';
      } else if (valorIMC < 35) {
        classificacao = 'com obesidade grau 1';
      } else if (valorIMC < 40) {
        classificacao = 'com obesidade grau 2';
      } else {
        classificacao = 'com obesidade grau 3. ATENÇÃO';
      }
  
      // resposta do programa
      resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}!`;

   } else {
    resultado.textContent = 'Preencha todos os campos!!!'
   }
}

// evento que aguarda o usuário clicar no botão
calcular.addEventListener('click', imc)