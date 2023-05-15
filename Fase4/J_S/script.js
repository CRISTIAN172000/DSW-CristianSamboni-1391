function ProcesarRespuestas() {
    let total = 6
    let puntos = 0

    let myForm = document.forms["formulario"];
    let RespuestasCorrectas = ["c", "a", "b", "a", "b", "c"];

    for (let i =1; i <= total; i++) {
        if (myForm["r" + i].value == null ||
        myForm["r" + i].value == "") {
            alert("Por favor responder todas las preguntas");
            return false;
        } else {
            if (myForm["r" + i].value === RespuestasCorrectas[i - 1])
            puntos++;
        }
    }
    let resultado = document.getElementById('resultado')
    resultado.innerHTML='Obtuviste ' +puntos+' puntos de '+total+ ' posibles';
    return false;
    
}
