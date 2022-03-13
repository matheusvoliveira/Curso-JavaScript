function calcular(){
    var tab = document.getElementById('tabuada')
    var res = document.getElementById('res')
    res.innerHTML = ''
    if (tab.value.length == 0 || tab.value >= 11 && tab.value >= -10) {
        alert('Escolha um numero entre -10 e 10')
    } else{
        var t = Number(tab.value)
       for(var c = 1; c <= 10; c += 1){
          
           res.innerHTML += `${t} x ${c} = ${t*c} \u{1F449}`
           res.innerHTML += `\n`

        }
    res.innerHTML += `\u{1F3C1}`
   }
}