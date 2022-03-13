function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno =  document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.lenght == 0 || fAno.value > ano){
        window.alert('[ERRO], verifique os dados e tente novamente! ')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade < 10) {
                //criança
                img.setAttribute('src', 'bbmenino.jpg')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else if (idade > 50){
                //idoso
                img.setAttribute('src', 'homemvel.jpg')
            }
            
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade < 10) {
                //criança
                img.setAttribute('src', 'bbmenina.jpg')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else if (idade > 50){
                //idoso
                img.setAttribute('src', 'mulhervel.jpg')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Verificamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    } 
}  