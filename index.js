function calcularDescuento() {
    
    const producto1 = parseFloat(document.getElementById("producto1").value);
    const producto2 = parseFloat(document.getElementById("producto2").value);
    const producto3 = parseFloat(document.getElementById("producto3").value);
    const producto4 = parseFloat(document.getElementById("producto4").value);
    const producto5 = parseFloat(document.getElementById("producto5").value);
   

 
    const subtotal = producto1+producto2+producto3+producto4+producto5;

    
    let descuentoPorcentaje;
    if (subtotal >= 0 && subtotal < 1000) {
        descuentoPorcentaje = 0;
    } else if (subtotal >= 1000 && subtotal < 5000) {
        descuentoPorcentaje = 10;
    } else if (subtotal >= 5000 && subtotal < 9000) {
        descuentoPorcentaje = 20;
    } else if (subtotal >= 9000 && subtotal < 13000) {
        descuentoPorcentaje = 30;
    } else {
        descuentoPorcentaje = 40;
    }

   
    const descuentoValor = (subtotal * descuentoPorcentaje) / 100;


    const total = subtotal - descuentoValor;

    
    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("descuento").value = `Descuento ${descuentoPorcentaje}%`;
    document.getElementById("total").value = total.toFixed(2);
}

function limpiarCampos() {

        
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`producto${i}`).value = "";
        }
    
       
        document.getElementById("subtotal").value = "";
        document.getElementById("descuento").value = "Descuento 0%";
        document.getElementById("total").value = "";
    }
    
    

   

