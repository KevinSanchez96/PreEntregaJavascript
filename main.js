let cantidadAComprar = 0;
let descuento = 200;
let totalAComprar = 0;

function totalDescuento(a){
    if(a>1000){
        a -= descuento;
        alert("Felicidades usted ha ganado un descuento !");
        alert(`Su nuevo total es de $${a}`);
    }else{
        alert("Para conseguir un descuento debe superar los $1000");
        alert(`Su total es de $${a}`);
    }
}

cantidadAComprar = parseInt(prompt('Cuantos productos desea comprar ?'));

if(cantidadAComprar!=0)
{
    for(let i=0 ; i<cantidadAComprar; i++)
    {
        totalAComprar +=parseInt(prompt("Ingrese el valor del producto :"));
    }
}else{
    alert("No desea comprar en este momento");
}
totalDescuento(totalAComprar);


