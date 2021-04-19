var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0){

  var chute = parseInt(prompt("Digite um número entre 0 a 10!"))

  if (numeroSecreto == chute){
    alert('acertou')
    break
  } else if (chute > numeroSecreto){
    alert('Quase o número secreto é menor')
    tentativas = tentativas - 1
     } else if (chute < numeroSecreto) {
       alert('Quase o númeor secreto é maior')
       tentativas = tentativas - 1
     } 
 }
alert('Errou, o número secreto era ' + numeroSecreto)
