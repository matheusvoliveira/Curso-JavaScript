/* Um programa que fala se uma pessoa vota ou não de acordo com a idade rodando no Node.js */
var idade = 15
console.log(`Você tem ${idade} anos!`)
if (idade < 16){
    console.log('Não vota')
} else if (idade >= 16 && idade < 18 || idade >= 60) {
    console.log('Voto opcional')
} else if (idade >= 18) {
    console.log('Voto obrigatorio')
}
