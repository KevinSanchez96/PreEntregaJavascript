// CLASE 2
// let numeroUno = parseInt(prompt("Ingresar un numero :"));
// let numeroDos = parseInt(prompt("Ingrese otro numero :"));
// let operacion = prompt("Ingrese una operacion :");
// let resultado;

// if (operacion === "multiplicacion") {
//     resultado = numeroUno * numeroDos;
//     alert(resultado);
// } else if (operacion === "suma")
// {
//     resultado = numeroUno + numeroDos;
//     alert(resultado);  
// }else if (operacion === "resta")
// {
//     resultado = numeroUno - numeroDos;
//     alert(resultado);
// }else if(operacion === "division")
// {
//     if(numeroDos!= 0){
//     resultado = numeroUno / numeroDos
//     alert(resultado);
//     }else{
//         alert("No se puede dividir por 0");
//     }
// }
//----------------------------------------------------------------------------------------------//
let numeroInicial = parseInt(prompt("Ingresar un numero :"));
let resultadoFinal = 0;
for(let i=0;i<=5;i++)
{
    let numeroSuma = parseInt(prompt("Ingresar un numero para sumar :"));
    if(i===0)
    {
        resultadoFinal = numeroInicial+numeroSuma;
        alert(resultadoFinal);
    }
    else{
        resultadoFinal += numeroSuma;
        alert(resultadoFinal);
    }
}
