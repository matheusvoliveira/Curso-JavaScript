/* Um programa que consulta a hora e imprimi bom dia/tarde ou noite de acordo comm a hora atual  */
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia!')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde!')
} else if (hora > 18){
    console.log('Boa noite')
}