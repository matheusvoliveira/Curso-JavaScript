function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas`
    if (horas >= 0 && horas < 12){
        img.src ='manha.jpg'
    } else if (horas >= 12 && horas <= 18){
        img.src = 'tarde.jpg'
        document.body.style.background = 'lightyellow'
    } else{
        img.src = 'noite.jpg'
        document.body.style.background = 'darkblue'
    }
}