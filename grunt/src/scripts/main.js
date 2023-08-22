document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('form-calculadora').addEventListener('submit',function(evento){
        evento.preventDefault();
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var operador = document.getElementById("operador").value;

            var resultado;

            if (operador === "+") {
                resultado = num1 + num2;
            } else if (operador === "-") {
                resultado = num1 - num2;
            } else if (operador === "*") {
                resultado = num1 * num2;
            } else if (operador === "/") {
                resultado = num1 / num2;
            }

        document.getElementById('resultado-valor').innerHTML = resultado;
        document.querySelector('.resultado').style.display = 'block';
    })
})