function calcular (){

    var nota1 = parseFloat(document.getElementById("cx1").value)
    var nota2 = parseFloat(document.getElementById("cx2").value)
    var nota3 = parseFloat(document.getElementById("cx3").value)

    media = (nota1 + nota2 + nota3)/3

    if (media >= 7){
        alert("você está aprovado, sua média foi: " + media)
    }

    else if(media >= 4 && media < 7){
        alert("você está de recuperação, sua média foi: " + media)
    }

    else{
        alert("você está reprovado, sua media foi: " + media)
    }
}