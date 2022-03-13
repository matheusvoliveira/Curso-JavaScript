function calcular(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || fim.value == 0 || passo.value == 0){
        alert('[ERRO], verifique os dados e tente novamente')
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        // repetição for orientando os elementos no html
        for(var c = 1; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}   