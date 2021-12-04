// function calcular() {
//     const operacao = Number(prompt("Escolha a sua operação\n 1-Adição(+)\n 2-Subtração(-)\n 3-Multiplicação\n 4-Divisão real\n 5-Divisão Inteira(%)\n 6-Potencição(**)"))

//     if (!operacao || operacao >= 7) {
//         alert('Entre com a operação valida')
//         calcular();
//     } else {
//         let n1 = Number(prompt("Entre com o primeiro valor"));
//         let n2 = Number(prompt("Entre com o segundo valor"));
//         let resultado;

//       if(!n1 || !n2){
//           alert('Entre os valores corretos')
//           calcular();
//       }else {
//         function soma() {
//             resultado = n1 + n2;
//             alert(`A soma de ${n1} + ${n2} é =${resultado}`)
//             novaOperacao();
//         }

//         function subitracao() {
//             resultado = n1 - n2;
//             alert(`A subtração de ${n1} - ${n2} é = ${resultado}`)
//             novaOperacao();
//         }

//         function multiplicacao() {
//             resultado = n1 * n2;
//             alert(`O resultado de ${n1} * ${n2} é = ${resultado}`)
//             novaOperacao();
//         }

//         function divisaoReal() {
//             resultado = n1 / n2;
//             alert(`O resultado de ${n1} / ${n2} é =${resultado}`)
//             novaOperacao();
//         }

//         function divisaoInteira() {
//             resultado = n1 % n2;
//             alert(`O resto do resultado ${n1} % ${n2} é= ${resultado}`)
//             novaOperacao();
//         }

//         function potenciacao() {
//             resultado = n1 ** n2;
//             alert(`A potencia de ${n1} elevado a ${n2} é=${resultado}`)
//             novaOperacao();
//         }

//         function novaOperacao() {
//             let opcao = prompt("Deseja fazer uma nova operação \n 1- sim \n 2- Não")

//             if (opcao == 1) {
//                 calcular();
//             } else if (opcao == 2) {
//                 alert('Até logo')
//             } else {
//                 alert('Digite uma opeção valida')
//                 novaOperacao();
//             }
//         }
//       }



//         if (operacao == 1) {
//             soma();
//         } else if (operacao == 2) {
//             subitracao();
//         } else if (operacao == 3) {
//             multiplicacao();
//         } else if (operacao == 4) {
//             divisaoReal();
//         } else if (operacao == 5) {
//             divisaoInteira();
//         } else if (operacao == 6) {
//             potenciacao();
//         }

//     }


// }

// calcular();

// function calcular() {
//     const operacao = Number(prompt('Escolha uma operação\n 1-soma(+)\n 2-subtração(-)\n 3-miltiplicação(*)\n 4-divisão real\n 5-divisão inteira(%)'))



//     if (!operacao || operacao >= 7) {
//         alert('Digite uma opção valida')
//         calcular();
//     } else {
//         let n1 = Number(prompt('Digite o primeiro valor'));
//         let n2 = Number(prompt('Digite o segundo valor'));
//         let resultado;

//         if (!n1 || !n2) {
//             alert('Digite valores Validos')
//             calcular();
//         } else {

//             function soma() {
//                 resultado = n1 + n2;
//                 alert(`O resultado de ${n1} + ${n2} é igual= ${resultado}`)
//                 novaoperacao();
//             }

//             function subitracao() {
//                 resultado = n1 - n2;
//                 alert(`O resultado de ${n1} - ${n2} é = ${resultado}`)
//                 novaoperacao();
//             }

//             function multiplicacao() {
//                 resultado = n1 * n2;
//                 alert(`O resultado de ${n1} * ${n2} é = ${resultado}`)
//                 novaoperacao();
//             }

//             function divisaoReal() {
//                 resultado = n1 / n2;
//                 alert(`O resultado de ${n1} / ${n2} é = ${resultado}`)
//                 novaoperacao();
//             }

//             function divisaoInteira() {
//                 resultado = n1 % n2;
//                 alert(`O resultado de ${n1} % ${n2} é = ${resultado}`)
//                 novaoperacao();
//             }

//             function novaoperacao(){
//                let opcao= prompt('Deseja fazer uma nova opção\n 1- Sim\n 2-Não')

//                if(opcao == 1){
//                    calcular();
//                }else if (opcao==2){
//                    alert('Ate logo')
//                }else{
//                    alert('Escolha uma opção valida')
//                    calcular();
//                }
//             }
//         }

//     }



//     if (operacao == 1) {
//         soma();
//     } else if (operacao == 2) {
//         subitracao();
//     } else if (operacao == 3) {
//         multiplicacao();
//     } else if (operacao == 4) {
//         divisaoReal();
//     } else if (operacao == 5) {
//         divisaoInteira();
//     }

// }
// calcular();